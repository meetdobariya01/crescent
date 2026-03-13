import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./software.css";

/* ── Animation Variants ─────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

/* ── Section Data ───────────────────────────── */
const sections = [
  {
    id: "microsoft",
    icon: "🚀",
    title: "Microsoft 365",
    tagline: "Empower productivity, collaboration, and business growth with Microsoft 365.",
    desc1:
      "Microsoft 365 brings together industry-leading productivity tools including Word, Excel, PowerPoint, Outlook, Teams, and secure cloud storage into one powerful subscription. Designed for modern workflows, it enables teams to collaborate in real time, communicate effortlessly, and work securely from anywhere.",
    desc2:
      "With advanced security, automatic updates, and seamless integration across devices, Microsoft 365 helps businesses streamline operations while keeping data protected. Whether you're managing daily tasks or scaling enterprise operations, Microsoft 365 delivers a reliable and professional digital workspace built for efficiency.",
    image: "./images/software/microsoft.png",
    badges: ["Word", "Excel", "PowerPoint", "Teams", "Outlook", "OneDrive"],
  },
  {
    id: "aws",
    icon: "☁️",
    title: "AWS",
    tagline: "Build, scale, and innovate with the world's leading cloud platform.",
    desc1:
      "AWS provides enterprise-grade cloud infrastructure designed for performance, reliability, and flexibility. From hosting websites and applications to managing databases, AI solutions, and storage, AWS enables businesses to operate without the limitations of physical servers.",
    desc2:
      "Its pay-as-you-go model allows organizations to scale resources instantly while optimizing costs. Trusted by startups and global enterprises alike, AWS delivers secure, high-performance cloud solutions that support innovation and long-term growth.",
    image: "./images/software/aws.png",
    badges: ["EC2", "S3", "Lambda", "RDS", "CloudFront", "AI/ML"],
  },
  {
    id: "adobe",
    icon: "🎨",
    title: "Adobe",
    tagline: "Create without limits using Adobe's professional creative ecosystem.",
    desc1:
      "Adobe's industry-standard tools empower designers, creators, and businesses to produce stunning visual content, professional videos, marketing materials, and digital experiences. With powerful applications like Photoshop, Illustrator, Premiere Pro, and Acrobat, Adobe enables creativity at the highest level.",
    desc2:
      "Creative Cloud integration allows seamless collaboration, cloud storage, and continuous access to the latest features. Whether you're building a brand, editing media, or designing digital campaigns, Adobe helps bring ideas to life with precision and impact.",
    image: "./images/software/adobe.png",
    badges: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Acrobat"],
  },
  {
    id: "parallels",
    icon: "💻",
    title: "Parallels Desktop for Mac",
    tagline: "Run Windows on Mac — seamlessly and effortlessly.",
    desc1:
      "Parallels Desktop for Mac allows users to run Windows and other operating systems alongside macOS without restarting their device. Designed for speed and convenience, it enables smooth access to Windows applications while maintaining the native Mac experience.",
    desc2:
      "Ideal for professionals, developers, and students, Parallels offers powerful performance, easy file sharing, and full compatibility with thousands of Windows programs. It's the perfect solution for users who need flexibility without compromise.",
    image: "./images/software/parallels.jpg",
    badges: ["Windows on Mac", "Virtual Machines", "Cross-Platform", "Fast Performance"],
  },
  {
    id: "autodesk",
    icon: "🏗️",
    title: "Autodesk",
    tagline: "Design, engineer, and create with industry-leading precision.",
    desc1:
      "Autodesk software powers the world's most advanced architecture, engineering, construction, and manufacturing projects. From AutoCAD and Revit to Fusion 360 and Maya, Autodesk provides professionals with powerful tools for drafting, 3D modeling, simulation, and visualization.",
    desc2:
      "Built for collaboration and innovation, Autodesk solutions help teams streamline workflows, reduce errors, and transform ideas into real-world results. Whether you're designing buildings, products, or visual effects, Autodesk delivers unmatched professional capability.",
    image: "./images/software/autodesk.jpg",
    badges: ["AutoCAD", "Revit", "Fusion 360", "Maya", "3ds Max"],
  },
  {
    id: "sketchup",
    icon: "🧱",
    title: "SketchUp",
    tagline: "Fast, intuitive 3D modeling for designers and creators.",
    desc1:
      "SketchUp makes professional 3D design simple and efficient, allowing users to quickly transform ideas into detailed visual models. Popular among architects, interior designers, and construction professionals, SketchUp combines ease of use with powerful visualization tools.",
    desc2:
      "With an extensive library of ready-made models and flexible design features, SketchUp helps professionals communicate concepts clearly and bring projects to life faster. It's the perfect balance between simplicity and professional results.",
    image: "./images/software/sketchup.jpg",
    badges: ["3D Modeling", "Architecture", "Interior Design", "Visualization"],
  },
  {
    id: "chaos",
    icon: "🌪️",
    title: "Chaos",
    tagline: "Photorealistic rendering trusted by professionals worldwide.",
    desc1:
      "Chaos provides advanced rendering solutions like V-Ray and Corona that deliver stunning realism for architecture, product design, and visual effects. Known for high-quality lighting, materials, and rendering speed, Chaos tools help artists and designers create visuals that stand out.",
    desc2:
      "Seamless integration with major 3D platforms makes it easy to incorporate Chaos into existing workflows. Whether you're presenting architectural concepts or producing cinematic visuals, Chaos turns imagination into breathtaking reality.",
    image: "./images/software/chaos.png",
    badges: ["V-Ray", "Corona", "Photorealism", "Ray Tracing", "3D Rendering"],
  },
  {
    id: "unity",
    icon: "🎮",
    title: "Unity",
    tagline: "Build immersive experiences with real-time 3D technology.",
    desc1:
      "Unity is a powerful development platform used to create games, simulations, AR/VR experiences, and interactive applications across multiple devices. With its flexible engine and extensive development tools, Unity enables creators to build high-performance experiences quickly and efficiently.",
    desc2:
      "Beyond gaming, Unity is trusted across industries such as automotive, education, architecture, and training, making it one of the most versatile real-time platforms available. From concept to deployment, Unity helps turn ideas into interactive reality.",
    image: "./images/software/unity.png",
    badges: ["Game Dev", "AR/VR", "Simulations", "Cross-Platform", "Real-Time 3D"],
  },
];

/* ── Wave SVG Component ─────────────────────── */
const WaveDivider = ({ fill = "#0a1628" }) => (
  <div className="wave-divider">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
        fill={fill}
      />
    </svg>
  </div>
);

/* ── Product Section Component ──────────────── */
const ProductSection = ({ data, index }) => {
  const isEven = index % 2 === 1;

  return (
    <section className={`software-section section-${data.id}`}>
      <span className={`section-number ${isEven ? "right" : "left"}`}>
        0{index + 1}
      </span>

      <Container>
        <Row
          className={`align-items-center g-5 ${isEven ? "flex-row-reverse reverse-mobile" : ""}`}
        >
          {/* Image Column */}
          <Col lg={6}>
            <motion.div
              className="glass-card"
              variants={isEven ? fadeRight : fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="card-img-wrapper">
                <img src={data.image} alt={data.title} loading="lazy" />
              </div>
            </motion.div>
          </Col>

          {/* Text Column */}
          <Col lg={6}>
            <motion.div
              className="section-content"
              variants={isEven ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="section-icon">{data.icon}</div>
              <h2 className={`section-title title-${data.id}`}>{data.title}</h2>
              <p className="section-tagline">{data.tagline}</p>
              <p className="section-description">{data.desc1}</p>
              <p className="section-description">{data.desc2}</p>

              <motion.div
                className="feature-badges"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {data.badges.map((badge, i) => (
                  <motion.span
                    key={i}
                    className={`feature-badge badge-${data.id}`}
                    variants={badgeVariant}
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

/* ── Main Software Component ────────────────── */
const Software = () => {
  const waveFills = [
    "#0a1628", "#121212", "#1a0a1e", "#0d1117",
    "#0f1923", "#101810", "#1a1410", "#0f0c29",
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="software-hero">
        <div className="hero-particles">
          {[...Array(6)].map((_, i) => (
            <div className="particle" key={i} />
          ))}
        </div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>Enterprise Software Solutions</h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Empower your business with industry-leading software platforms.
            From productivity and cloud computing to creative design and
            immersive 3D experiences.
          </motion.p>
        </motion.div>
      </section>

      {/* Product Sections with Wave Dividers */}
      {sections.map((section, index) => (
        <React.Fragment key={section.id}>
          {index < sections.length && <WaveDivider fill={waveFills[index]} />}
          <ProductSection data={section} index={index} />
        </React.Fragment>
      ))}

      {/* CTA Section */}
      <WaveDivider fill="#24243e" />
      <section className="software-cta">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Ready to Transform Your Workflow?</h2>
            <p className="cta-subtitle">
              Explore our complete range of enterprise software solutions and
              find the perfect tools to elevate your business.
            </p>
            <a href="/contact" className="cta-btn">
              Get in Touch
            </a>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Software;
