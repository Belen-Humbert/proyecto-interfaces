import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from 'emailjs-com';
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tarjeta from "../components/tarjeta";
import { Link } from "react-router-dom";
import styles from "../Styles/Home.module.css";
import logoIes from "../assets/imagenes/logoies.jpeg";
import logoLila from "../assets/imagenes/logoLila.png";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", telefono: "", message: "" });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_p1itew8',        // Service ID
      'template_kh9dvav',       // Template ID
      {
        nombre: formData.name,
        email: formData.email,
        telefono: formData.telefono,
        mensaje: formData.message
      },
      'MMqTd0iWg8ACYzgdK'       // User ID (Clave pública)
    ).then((response) => {
      console.log("Mensaje enviado con éxito!", response.status, response.text);
      handleCloseModal();
    }).catch((error) => {
      console.error("Hubo un error al enviar el mensaje:", error);
    });
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <title>AuditaWeb Solutions</title>

        {/* Navigation */}
        <nav className={styles.navbar}>
          <ul className={styles.navbarMenu}>
            <li className={`${styles.navbarItem} ${styles.active}`}>
              <Link to="/home" className={styles.navbarLink}>Home</Link>
            </li>
            <li className={styles.navbarItem}>
              <Link to="/products" className={styles.navbarLink}>Products</Link>
            </li>
            <li className={styles.navbarItem}>
              <Link to="/blog" className={styles.navbarLink}>Blog</Link>
            </li>
            <li className={styles.navbarItem}>
              <Link to="/about" className={styles.navbarLink}>About</Link>
            </li>
          </ul>
        </nav>

        {/* Header */}
        <div id="home">
          <div className={styles.bgOverlay}>
            <div>
              <div className={styles.row}>
                <div className={styles.introMessage}>
                  <h1>AuditaWeb Solutions</h1>
                  <h3>Potenciamos tu negocio, aseguramos tu futuro</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div id="about" className={styles.contentSectionA}>
          <div>
            <div>
              <h2 className={styles.sectionHeading}>Sobre Nosotros</h2>
              <br />
              <p className={styles.lead}>
                En AuditaWeb Solutions, somos especialistas en brindar
                soluciones integrales a empresas que buscan optimizar su
                funcionamiento y expandir su presencia en el mundo digital.
                Ofrecemos servicios de auditoría externa para garantizar la
                eficiencia y el cumplimiento de las normativas en todos los
                procesos de tu organización. Además, diseñamos y desarrollamos
                páginas web personalizadas que reflejan la identidad de tu marca
                y te conectan con tus clientes de manera efectiva. Con nuestro
                enfoque multidisciplinario, ayudamos a las empresas a crecer de
                manera segura y confiable, asegurando su éxito en el mercado.
              </p>
            </div>
          </div>
        </div>

                {/* Portfolio Grid Section */}
                <section className={styles.contentSectionA}> 
          <div>
            <h2 className={styles.sectionHeading}>Auditorías Realizadas</h2>
          </div>
          <div className={styles.cardAlign}>
            <Link to="/lila" className={styles.card}>
              <img src={logoLila} alt="Lila Software Studio" />
              <div className={styles.cardTitle}>Lila Software Studio</div>
            </Link>
            <Link to="/ies" className={styles.card}>
              <img src={logoIes} alt="IES Lavalle" />
              <div className={styles.cardTitle}>Instituto de Educación Superior N°9-024 de Lavalle</div>
            </Link>
            <Link to="/lila" className={styles.card}>
              <img src={logoLila} alt="Lila Software Studio" />
              <div className={styles.cardTitle}>Lila Software Studio</div>
            </Link>
          </div>
        </section>

        {/* Team Section */}
        <div id="team" className={styles.contentSectionA}>
          <div>
            <h2 className={styles.sectionHeading}>Nuestro Equipo</h2>
            <h3 className={styles.sectionSubheading}>
              Conoce a los expertos detrás de AuditaWeb Solutions
            </h3>
          </div>
        </div>

        {/* Footer */}
        <footer id="footer" className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footerLeft}>
              <h2>AuditaWeb Solutions</h2>
            </div>
            <div className={styles.footerCenter}>
              <ul className={styles.footerMenu}>
                <li>About</li>
                <li>Inicio</li>
                <li onClick={handleOpenModal} style={{ cursor: "pointer" }}>
                  Contacto
                </li>
                <li>Auditorías</li>
              </ul>
              <p>© 2024 AWS. All rights reserved.</p>
            </div>
            <div className={styles.footerRight}>
              <ul className={styles.footerSocials}>
                <li>
                  <a href="https://www.facebook.com/sebastian.montuori.1">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/">
                    <XIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/bel%C3%A9n-humbert/">
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        {/* Modal de Contacto */}
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4
          }}>
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" component="h2">
              Contáctanos
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Nombre"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
                required
              />
              <TextField
                name="email"
                label="Correo Electrónico"
                type="email"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
                required
              />
              <TextField
                name="telefono"
                label="Teléfono"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
                required
              />
              <TextField
                name="message"
                label="Mensaje"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                onChange={handleInputChange}
                required
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Enviar
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Home;
