// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5190;

// Middleware
app.use(cors({
  origin: ['https://crescentworld.com', 'http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/contact_db')
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.log('❌ MongoDB Error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  name: { type: String, default: '' },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  subject: { type: String, default: '' },
  option: { type: String, default: '' },
  status: { 
    type: String, 
    enum: ['pending', 'read', 'replied'], 
    default: 'pending' 
  },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Email Configuration - Gmail
let transporter;

try {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS  // Your Gmail App Password
    }
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error('❌ Email configuration error:', error.message);
      console.log('⚠️ Please check your Gmail credentials and App Password');
    } else {
      console.log('✅ Email server is ready (Gmail)');
    }
  });
} catch (error) {
  console.error('❌ Email setup error:', error.message);
}

// ============ ROUTES ============

// Test route
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Contact Backend is running!',
    time: new Date().toISOString(),
    emailConfigured: !!transporter,
    emailUser: process.env.EMAIL_USER || 'Not configured'
  });
});

// Get all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: contacts,
      total: contacts.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single contact
app.get('/api/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new contact - For both contact forms
app.post('/api/contacts', async (req, res) => {
  try {
    console.log('📝 New contact message received:', req.body);
    
    const { firstName, lastName, name, email, phone, message, subject, option } = req.body;
    
    // Validate - at least email, phone, message required
    if (!email || !phone || !message) {
      return res.status(400).json({ 
        error: 'Email, phone and message are required' 
      });
    }

    // Determine full name
    let fullName = name || '';
    if (firstName || lastName) {
      fullName = `${firstName || ''} ${lastName || ''}`.trim();
    }
    if (!fullName) fullName = 'User';

    // Save to database
    const contact = new Contact({
      firstName: firstName || '',
      lastName: lastName || '',
      name: fullName,
      email,
      phone,
      message,
      subject: subject || option || '',
      option: option || subject || ''
    });
    await contact.save();

    // Send email notifications
    if (transporter) {
      try {
        // Send admin notification
        await sendAdminNotification(contact);
        // Send confirmation to user
        await sendConfirmationEmail(contact);
      } catch (emailError) {
        console.error('Email sending error:', emailError.message);
      }
    } else {
      console.log('⚠️ Email not sent - transporter not configured');
    }

    res.status(201).json({
      success: true,
      data: contact,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(400).json({ error: error.message });
  }
});

// Update contact status
app.put('/api/contacts/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json({
      success: true,
      data: contact,
      message: 'Status updated successfully'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete contact
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json({ 
      success: true, 
      message: 'Contact deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete all contacts
app.delete('/api/contacts', async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ 
      success: true, 
      message: 'All contacts deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ EMAIL FUNCTIONS ============

// Send admin notification
async function sendAdminNotification(contact) {
  const mailOptions = {
    from: ` <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
    subject: `📧 New Contact Message - ${contact.name || contact.email}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 10px;">
        <div style="text-align: center; padding: 20px; background: #063f2d; border-radius: 10px 10px 0 0;">
          <h2 style="color: #fff; margin: 0;">📧 New Contact Message</h2>
        </div>
        <div style="padding: 20px; background: #fff; border-radius: 0 0 10px 10px;">
          <h3 style="color: #063f2d;">Contact Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${contact.name || 'N/A'}</td>
            </tr>
            ${contact.firstName ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>First Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${contact.firstName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Last Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${contact.lastName}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${contact.email}">${contact.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${contact.phone}">${contact.phone}</a></td>
            </tr>
            ${contact.subject ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${contact.subject}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px; vertical-align: top;"><strong>Message:</strong></td>
              <td style="padding: 10px; background: #f8f9fa; border-radius: 5px;">${contact.message}</td>
            </tr>
            <tr>
              <td style="padding: 10px; vertical-align: top;"><strong>Received:</strong></td>
              <td style="padding: 10px;">${new Date(contact.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; text-align: center; padding-top: 20px; border-top: 2px solid #eee;">
            <a href="${process.env.FRONTEND_URL || 'https://crescentworld.com'}/contacts" 
               style="background: #063f2d; color: #fff; padding: 10px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
              View in Admin Panel
            </a>
          </div>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Admin notification sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Admin email failed:', error.message);
    throw error;
  }
}

// Send confirmation to user
async function sendConfirmationEmail(contact) {
  const mailOptions = {
    from: ` <${process.env.EMAIL_USER}>`,
    to: contact.email,
    subject: `✅ We've Received Your Message `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 10px;">
        <div style="text-align: center; padding: 20px; background: #063f2d; border-radius: 10px 10px 0 0;">
          <h2 style="color: #fff; margin: 0;">✅ We've Received Your Message!</h2>
        </div>
        <div style="padding: 20px; background: #fff; border-radius: 0 0 10px 10px;">
          <p>Dear <strong>${contact.name || 'User'}</strong>,</p>
          <p>Thank you for contacting <strong>Crescent World</strong>! We have received your message and our team will get back to you shortly.</p>
          
          <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #063f2d;">📋 Your Message Summary</h4>
            <p><strong>Name:</strong> ${contact.name || 'N/A'}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>Phone:</strong> ${contact.phone}</p>
            ${contact.subject ? `<p><strong>Subject:</strong> ${contact.subject}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 10px; border-radius: 5px;">${contact.message}</p>
            <p><strong>Received:</strong> ${new Date(contact.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
          
          <p>We typically respond within <strong>24-48 business hours</strong>.</p>
          
          <p>For urgent inquiries, you can also reach us at:</p>
          <ul>
            <li>📞 <a href="tel:+919824018555">+91 98240 18555</a></li>
            <li>📧 <a href="mailto:${process.env.ADMIN_EMAIL || 'info@crescentworld.com'}">${process.env.ADMIN_EMAIL || 'info@crescentworld.com'}</a></li>
          </ul>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; text-align: center; color: #777;">
            <p style="font-size: 16px; font-weight: bold; color: #063f2d;">Crescent World</p>
            <p style="font-size: 14px;">Premium Marketplace for Homegrown Brands</p>
            <p style="font-size: 11px; color: #999; margin-top: 10px;">
              This is an automated email. Please do not reply to this email.
            </p>
          </div>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Confirmation sent to user:', info.messageId);
    console.log('📧 Sent to:', contact.email);
    return info;
  } catch (error) {
    console.error('❌ Confirmation email failed:', error.message);
    throw error;
  }
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Contact Backend running on http://localhost:${PORT}`);
  console.log(`📧 Email configured with Gmail: ${process.env.EMAIL_USER || 'Not set'}`);
  console.log(`📧 Admin email: ${process.env.ADMIN_EMAIL || 'Not set'}`);
});