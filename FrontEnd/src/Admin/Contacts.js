import React, { useState, useEffect } from 'react';
import {
  Container,
  Table,
  Card,
  Badge,
  Button,
  Spinner,
  Alert,
  Modal,
  Form,
  Row,
  Col,
  Pagination,
  InputGroup,
  FormControl,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import {
  FaEye,
  FaTrash,
  FaCheck,
  FaReply,
  FaSearch,
  FaFilter,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaCalendar,
  FaTimes,
  FaCheckCircle,
  FaClock,
  FaTrashAlt,
  FaSync
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Contacts.css';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [actionSuccess, setActionSuccess] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5190/api';

  // Fetch contacts
  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/contacts`);
      const data = await response.json();
      
      if (data.success) {
        setContacts(data.data);
      } else {
        setError('Failed to fetch contacts');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Filter and search contacts
  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone?.includes(searchTerm) ||
      contact.message?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || contact.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContacts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

  // Update status
  const updateStatus = async (id, status) => {
    try {
      setUpdating(true);
      const response = await fetch(`${API_URL}/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setContacts(contacts.map(contact => 
          contact._id === id ? { ...contact, status } : contact
        ));
        setActionSuccess(`Status updated to ${status}`);
        setTimeout(() => setActionSuccess(null), 3000);
      } else {
        setError('Failed to update status');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Error updating status:', err);
    } finally {
      setUpdating(false);
    }
  };

  // Delete single contact
  const deleteContact = async (id) => {
    try {
      setDeleting(true);
      const response = await fetch(`${API_URL}/contacts/${id}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      
      if (data.success) {
        setContacts(contacts.filter(contact => contact._id !== id));
        setShowDeleteModal(false);
        setActionSuccess('Contact deleted successfully');
        setTimeout(() => setActionSuccess(null), 3000);
      } else {
        setError('Failed to delete contact');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Error deleting contact:', err);
    } finally {
      setDeleting(false);
    }
  };

  // Delete all contacts
  const deleteAllContacts = async () => {
    if (!window.confirm('Are you sure you want to delete ALL contacts? This action cannot be undone!')) {
      return;
    }
    
    try {
      setDeleting(true);
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      
      if (data.success) {
        setContacts([]);
        setActionSuccess('All contacts deleted successfully');
        setTimeout(() => setActionSuccess(null), 3000);
      } else {
        setError('Failed to delete all contacts');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Error deleting all contacts:', err);
    } finally {
      setDeleting(false);
    }
  };

  // View contact details
  const viewContact = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
    // Mark as read if pending
    if (contact.status === 'pending') {
      updateStatus(contact._id, 'read');
    }
  };

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get status badge
  const getStatusBadge = (status) => {
    const variants = {
      pending: { color: 'warning', icon: <FaClock />, text: 'Pending' },
      read: { color: 'info', icon: <FaEye />, text: 'Read' },
      replied: { color: 'success', icon: <FaCheckCircle />, text: 'Replied' }
    };
    const variant = variants[status] || variants.pending;
    return (
      <Badge bg={variant.color} className="px-3 py-2">
        {variant.icon} {variant.text}
      </Badge>
    );
  };

  // Export to CSV
  const exportToCSV = () => {
    if (contacts.length === 0) {
      alert('No contacts to export');
      return;
    }
    
    const headers = ['Name', 'Email', 'Phone', 'Subject', 'Message', 'Status', 'Date'];
    const csvData = contacts.map(contact => [
      contact.name || 'N/A',
      contact.email,
      contact.phone,
      contact.subject || 'N/A',
      contact.message.replace(/,/g, ';'),
      contact.status,
      new Date(contact.createdAt).toLocaleString()
    ]);
    
    const csvContent = [headers, ...csvData].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Stats
  const stats = {
    total: contacts.length,
    pending: contacts.filter(c => c.status === 'pending').length,
    read: contacts.filter(c => c.status === 'read').length,
    replied: contacts.filter(c => c.status === 'replied').length,
  };

  return (
    <div className="admin-contacts-page">
      <Container fluid className="py-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="d-flex justify-content-between align-items-center mb-4 flex-wrap"
        >
          <div>
            <h1 className="mb-1">Contact Messages</h1>
            <p className="text-muted">Manage and respond to customer inquiries</p>
          </div>
          <div className="d-flex gap-2">
            <Button 
              variant="outline-success" 
              onClick={exportToCSV}
              disabled={contacts.length === 0}
            >
              <FaDownload className="me-2" />
              Export CSV
            </Button>
            <Button 
              variant="outline-danger" 
              onClick={deleteAllContacts}
              disabled={contacts.length === 0 || deleting}
            >
              <FaTrashAlt className="me-2" />
              Delete All
            </Button>
            <Button 
              variant="outline-primary" 
              onClick={fetchContacts}
              disabled={loading}
            >
              <FaSync className={`me-2 ${loading ? 'spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Row className="g-3 mb-4">
            <Col md={3} xs={6}>
              <Card className="stats-card total">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted mb-1">Total Messages</h6>
                      <h2 className="mb-0">{stats.total}</h2>
                    </div>
                    <div className="stats-icon">
                      <FaEnvelope />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} xs={6}>
              <Card className="stats-card pending">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted mb-1">Pending</h6>
                      <h2 className="mb-0">{stats.pending}</h2>
                    </div>
                    <div className="stats-icon">
                      <FaClock />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} xs={6}>
              <Card className="stats-card read">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted mb-1">Read</h6>
                      <h2 className="mb-0">{stats.read}</h2>
                    </div>
                    <div className="stats-icon">
                      <FaEye />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} xs={6}>
              <Card className="stats-card replied">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted mb-1">Replied</h6>
                      <h2 className="mb-0">{stats.replied}</h2>
                    </div>
                    <div className="stats-icon">
                      <FaCheckCircle />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>

        {/* Success/Error Messages */}
        {actionSuccess && (
          <Alert variant="success" onClose={() => setActionSuccess(null)} dismissible>
            {actionSuccess}
          </Alert>
        )}
        {error && (
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            {error}
          </Alert>
        )}

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="mb-4">
            <Card.Body>
              <Row className="g-3">
                <Col md={6}>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaSearch />
                    </InputGroup.Text>
                    <FormControl
                      placeholder="Search by name, email, phone or message..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                      <Button 
                        variant="outline-secondary" 
                        onClick={() => setSearchTerm('')}
                      >
                        <FaTimes />
                      </Button>
                    )}
                  </InputGroup>
                </Col>
                <Col md={3}>
                  <Form.Select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </Form.Select>
                </Col>
                <Col md={3} className="text-end">
                  <Button variant="outline-secondary" disabled>
                    <FaFilter className="me-2" />
                    Filters
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>

        {/* Contacts Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <Card.Body className="p-0">
              {loading ? (
                <div className="text-center py-5">
                  <Spinner animation="border" variant="primary" />
                  <p className="mt-2 text-muted">Loading contacts...</p>
                </div>
              ) : filteredContacts.length === 0 ? (
                <div className="text-center py-5">
                  <FaEnvelope className="text-muted mb-3" size={50} />
                  <h5>No contacts found</h5>
                  <p className="text-muted">
                    {contacts.length === 0 
                      ? 'No messages received yet.' 
                      : 'Try adjusting your search or filters.'}
                  </p>
                </div>
              ) : (
                <div className="table-responsive">
                  <Table hover className="mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((contact, index) => (
                        <motion.tr
                          key={contact._id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={contact.status === 'pending' ? 'table-warning' : ''}
                        >
                          <td>{indexOfFirstItem + index + 1}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <FaUser className="me-2 text-muted" />
                              <strong>{contact.name || 'N/A'}</strong>
                            </div>
                          </td>
                          <td>
                            <a href={`mailto:${contact.email}`} className="text-decoration-none">
                              {contact.email}
                            </a>
                          </td>
                          <td>
                            <a href={`tel:${contact.phone}`} className="text-decoration-none">
                              {contact.phone}
                            </a>
                          </td>
                          <td>
                            <Badge bg="secondary" className="px-2">
                              {contact.subject || 'General'}
                            </Badge>
                          </td>
                          <td>{getStatusBadge(contact.status)}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <FaCalendar className="me-2 text-muted" size={12} />
                              <small>{formatDate(contact.createdAt)}</small>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center gap-2">
                              <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>View Details</Tooltip>}
                              >
                                <Button
                                  variant="outline-primary"
                                  size="sm"
                                  onClick={() => viewContact(contact)}
                                >
                                  <FaEye />
                                </Button>
                              </OverlayTrigger>

                              <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Mark as Replied</Tooltip>}
                              >
                                <Button
                                  variant="outline-success"
                                  size="sm"
                                  onClick={() => updateStatus(contact._id, 'replied')}
                                  disabled={updating || contact.status === 'replied'}
                                >
                                  <FaCheck />
                                </Button>
                              </OverlayTrigger>

                              <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Delete</Tooltip>}
                              >
                                <Button
                                  variant="outline-danger"
                                  size="sm"
                                  onClick={() => {
                                    setDeleteId(contact._id);
                                    setShowDeleteModal(true);
                                  }}
                                  disabled={deleting}
                                >
                                  <FaTrash />
                                </Button>
                              </OverlayTrigger>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}

              {/* Pagination */}
              {filteredContacts.length > itemsPerPage && (
                <div className="d-flex justify-content-between align-items-center p-3 border-top">
                  <div className="text-muted">
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredContacts.length)} of {filteredContacts.length} entries
                  </div>
                  <Pagination>
                    <Pagination.Prev 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    />
                    {[...Array(totalPages)].map((_, i) => (
                      <Pagination.Item
                        key={i + 1}
                        active={i + 1 === currentPage}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    />
                  </Pagination>
                </div>
              )}
            </Card.Body>
          </Card>
        </motion.div>
      </Container>

      {/* View Contact Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>
            <FaUser className="me-2" />
            Contact Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedContact && (
            <div>
              <Row className="mb-3">
                <Col md={6}>
                  <h6 className="text-muted">Name</h6>
                  <p className="h5">{selectedContact.name || 'N/A'}</p>
                </Col>
                <Col md={6}>
                  <h6 className="text-muted">Status</h6>
                  {getStatusBadge(selectedContact.status)}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <h6 className="text-muted">Email</h6>
                  <p>
                    <a href={`mailto:${selectedContact.email}`}>
                      <FaEnvelope className="me-2" />
                      {selectedContact.email}
                    </a>
                  </p>
                </Col>
                <Col md={6}>
                  <h6 className="text-muted">Phone</h6>
                  <p>
                    <a href={`tel:${selectedContact.phone}`}>
                      <FaPhone className="me-2" />
                      {selectedContact.phone}
                    </a>
                  </p>
                </Col>
              </Row>
              {selectedContact.subject && (
                <div className="mb-3">
                  <h6 className="text-muted">Subject</h6>
                  <p><strong>{selectedContact.subject}</strong></p>
                </div>
              )}
              <div className="mb-3">
                <h6 className="text-muted">Message</h6>
                <div className="p-3 bg-light rounded">
                  {selectedContact.message}
                </div>
              </div>
              <div>
                <h6 className="text-muted">Received</h6>
                <p>
                  <FaCalendar className="me-2" />
                  {formatDate(selectedContact.createdAt)}
                </p>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          {selectedContact && selectedContact.status !== 'replied' && (
            <Button 
              variant="success" 
              onClick={() => {
                updateStatus(selectedContact._id, 'replied');
                setShowModal(false);
              }}
            >
              <FaCheck className="me-2" />
              Mark as Replied
            </Button>
          )}
          <Button 
            variant="primary"
            href={`mailto:${selectedContact?.email}`}
            target="_blank"
          >
            <FaReply className="me-2" />
            Reply via Email
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this contact message?</p>
          <p className="text-muted">This action cannot be undone.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="danger" 
            onClick={() => deleteContact(deleteId)}
            disabled={deleting}
          >
            {deleting ? (
              <>
                <Spinner as="span" animation="border" size="sm" className="me-2" />
                Deleting...
              </>
            ) : (
              'Delete'
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contacts;