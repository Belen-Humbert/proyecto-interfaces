import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "emailjs-com";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "../components/card";
import { Link } from "react-router-dom";
import styles from "../Styles/Home.module.css";
import logoIes from "../assets/imagenes/logoies.jpeg";
import logoLila from "../assets/imagenes/logoLila.png";
import logoInterluz from "../assets/imagenes/LOGOinterluz.jpeg";
import imagenAl from "../assets/imagenes/alejo.jpeg";
import imagenBel from "../assets/imagenes/belen.jpg";
import Tarjeta from "../components/tarjeta";
//const response = await fetch('http://localhost:5000/register');


function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefono: "",
    message: "",
  });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_p1itew8", // Service ID
        "template_kh9dvav", // Template ID
        {
          nombre: formData.name,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: formData.message,
        },
        "MMqTd0iWg8ACYzgdK" // User ID
      )
      .then((response) => {
        console.log("Mensaje enviado con éxito!", response.status, response.text);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Hubo un error al enviar el mensaje:", error);
      });
  };

  const [registerData, setRegisterData] = useState({
    name: "",
    lastName: "",
    email: "",
    city: "",
  });

  const [openModalRegister, setOpenModalRegister] = useState(false);

  const handleOpenModalRegister = () => setOpenModalRegister(true);
  const handleCloseModalRegister = () => setOpenModalRegister(false);

  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
  
    // Validar campos
    if (!registerData.name || !registerData.lastName || !registerData.email || !registerData.city) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: registerData.name,
          lastName: registerData.lastName,
          email: registerData.email,
          city: registerData.city,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Error en el registro');
      }
  
      const data = await response.json();
      console.log(data.message); // Muestra el mensaje de éxito en la consola
      alert("Registro exitoso!"); // Mensaje al usuario
      handleCloseModalRegister(); // Cierra el modal tras un registro exitoso
    } catch (error) {
      console.error('Error en el registro:', error.message);
      //alert("Registro exitoso");
      handleCloseModalRegister();
    }
  };
  

  return (
    <>
      <div className={styles.homeContainer}>
        <title>AuditaWeb Solutions</title>

        {/* Navigation */}
        <nav className={styles.navbar}>
          <ul className={styles.navbarMenu}>
            <li className={styles.navbarItem}>
              <a href="#portfolio" className={styles.navbarLink}>
                Auditorías Realizadas
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#team" className={styles.navbarLink}>
                Nuestro Equipo
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#footer" className={styles.navbarLink}>
                Contáctanos
              </a>
            </li>
          </ul>
          <button 
            className={styles.registerButton} 
            onClick={handleOpenModalRegister}
          >
            Regístrate
          </button>
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
              <div className={styles.lead}>
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
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Grid Section */}
        <section id="portfolio" className={styles.contentSectionA}>
          <div>
            <h2 className={styles.sectionHeading}>Auditorías Realizadas</h2>
          </div>
          <div className={styles.cardAlign}>
            <Link to="/lila" className={styles.card}>
              <Tarjeta
                empresa={{
                  name: "Lila Software Studio",
                  imagen: logoLila,
                }}
              />
            </Link>
            <Link to="/interluz" className={styles.card}>
              <Tarjeta
                empresa={{
                  name: "Interluz",
                  imagen: logoInterluz,
                }}
              />
            </Link>
            <Link to="/ies" className={styles.card}>
              <Tarjeta
                empresa={{
                  name: "Instituto de Educación Superior 9-024",
                  imagen: logoIes,
                }}
              />
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
          <div className={styles.cardAlign}>
            <Card
              person={{
                name: "Alejo Montuori",
                description: `¡Hola! Soy Alejo Montuori, un profesional con experiencia en gestión de productos, desarrollo Full Stack y auditoría. Como Product Owner, me aseguro de que los productos digitales cumplan con las necesidades del cliente y los objetivos del negocio. Como Full Stack Developer, diseño aplicaciones robustas y escalables. Además, mi experiencia como Auditor me permite optimizar procesos y asegurar la calidad. Me apasiona crear soluciones tecnológicas que agreguen valor y mejoren la experiencia del usuario.`,
                imagen: imagenAl,
                alt: "Foto de Alejo",
              }}
            />
            <Card
              person={{
                name: "Belén Humbert",
                description: `¡Hola! Soy Belén Humbert, profesional en auditoría, QA, diseño UX/UI y metodologías ágiles como Scrum. Me especializo en garantizar la calidad de productos digitales, aplicando principios de usabilidad y diseño centrado en el usuario. Como Auditora y QA, aseguro el cumplimiento de estándares y la detección de problemas. En diseño UX/UI, creo interfaces que mejoran la experiencia del usuario. Como Scrum Master, lidero equipos ágiles para alcanzar objetivos con eficiencia. Estoy comprometida con la excelencia y la calidad en cada proyecto.`,
                imagen: imagenBel,
                alt: "Foto de Belen",
              }}
            />
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
        <li>
          <a href="#about" className={styles.footerLink}>
            Sobre Nosotros
          </a>
        </li>
        <li onClick={handleOpenModal} style={{ cursor: "pointer" }}>
          Contacto
        </li>
        <li>
          <a href="#portfolio" className={styles.footerLink}>
            Auditorías
          </a>
        </li>
      </ul>
      <p>© 2024 AWS</p>
    </div>
    <div className={styles.footerRight}>
      <ul className={styles.footerSocials}>
        <li>
          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>


        {/* Modal de Contacto */}
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
          className={styles.modalContact}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "#282a2e",
              borderRadius: 2,
              boxShadow:
                "0 20px 40px rgba(0, 0, 0, 0.8), 0 30px 60px rgba(0, 0, 0, 0.8)",
              p: 4,
              color: "#fff",
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: "absolute", top: 8, right: 8, color: "#f45027" }}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="modal-title" variant="h6" component="h2" sx={{ color: "#f45027"}}>
              Contáctanos
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Nombre"
                name="name"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
                required
                sx={{
                  input: { color: "#aba7a6" },
                  "& .MuiInputLabel-root": { color: "#aba7a6" },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f45027",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#f45027",
                    },
                }}
              />
              <TextField
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
                required
                sx={{
                  input: { color: "#aba7a6" },
                  "& .MuiInputLabel-root": { color: "#aba7a6" },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f45027",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#f45027",
                    },
                }}
              />
              <TextField
                label="Teléfono"
                name="telefono"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
                required
                sx={{
                  input: { color: "#aba7a6" },
                  "& .MuiInputLabel-root": { color: "#aba7a6" },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f45027",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#f45027",
                    },
                }}
              />
              <TextField
                label="Mensaje"
                name="message"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                onChange={handleInputChange}
                required
                sx={{
                  input: { color: "#aba7a6" },
                  "& .MuiInputLabel-root": { color: "#aba7a6" },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f45027",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#f45027",
                    },
                }}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Enviar
              </Button>
            </form>
          </Box>
        </Modal>

        {/* Modal de Registro */}
        <Modal open={openModalRegister} onClose={handleCloseModalRegister}>
          <Box
           className={styles.modalRegister}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "#282a2e",
              borderRadius: 2,
              boxShadow:
                "0 20px 40px rgba(0, 0, 0, 0.8), 0 30px 60px rgba(0, 0, 0, 0.8)",
              p: 4,
              color: "#fff",
            }}
          >
            <IconButton
              onClick={handleCloseModalRegister}
              sx={{ position: "absolute", top: 8, right: 8, color: "#f45027"}}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="modal-title" variant="h6" component="h2" sx={{ color: "#f45027" }}>
              Regístrate para recibir novedades
            </Typography>
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                label="Nombre"
                name="name"
                fullWidth
                margin="normal"
                onChange={handleRegisterInputChange}
                requireds
                sx={{
                  input: { color: "#aba7a6" },
                  "& .MuiInputLabel-root": { color: "#aba7a6" },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f45027",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#f45027",
                    },
                }}
              />
              <TextField
                label="Apellido"
                name="lastName"
                fullWidth
                margin="normal"
                onChange={handleRegisterInputChange}
                required
                sx={{
                  input: { color: "#aba7a6" },
                  "& .MuiInputLabel-root": { color: "#aba7a6" },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f45027",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#f45027",
                    },
                }}
              />
              <TextField
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                onChange={handleRegisterInputChange}
                required
                sx={{
                  input: { color: "#aba7a6" },
                  "& .MuiInputLabel-root": { color: "#aba7a6" },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f45027",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#f45027",
                    },
                }}
              />
              <TextField
                label="Ciudad de Residencia"
                name="city"
                fullWidth
                margin="normal"
                onChange={handleRegisterInputChange}
                required
                sx={{
                  input: { color: "#aba7a6" },
                  "& .MuiInputLabel-root": { color: "#aba7a6" },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f45027",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#f45027",
                    },
                }}
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
