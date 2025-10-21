import { useState, useEffect } from "react";
import {
  Shield,
  Scale,
  Gavel,
  Users,
  FileText,
  HeartHandshake,
  Quote,
  Clock,
  MapPin,
  Phone,
  Book,
  Home as HomeIcon,
} from "lucide-react";

export default function Home() {
  const servicios = [
    { icon: <Users size={40} />, title: "Derecho Laboral", text: "Defensa y asesoría en conflictos laborales." },
    { icon: <HeartHandshake size={40} />, title: "Derecho de Familia", text: "Mediación y representación en casos familiares." },
    { icon: <Gavel size={40} />, title: "Derecho Penal", text: "Defensa en juicios penales." },
    { icon: <Scale size={40} />, title: "Derecho Civil", text: "Contratos, responsabilidad civil y sucesiones." },
    { icon: <FileText size={40} />, title: "Contratos", text: "Redacción y revisión de contratos." },
    { icon: <Shield size={40} />, title: "Comercial", text: "Asesoría en operaciones y negocios comerciales." },
    { icon: <HomeIcon size={40} />, title: "Inmobiliario", text: "Compra, venta y alquiler de propiedades." },
    { icon: <Book size={40} />, title: "Propiedad Intelectual", text: "Protección de marcas y patentes." },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % servicios.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [servicios.length]);

  return (
    <div>
      {/* HERO */}
      <header className="hero-section text-white text-center d-flex align-items-center">
        <img src="/oficina1.jpg" alt="Hero" className="hero-bg" />
        <div className="overlay"></div>
        <div className="container hero-content">
          <h1 className="display-3 fw-bold mb-3">
            Estudio Jurídico Gomez & Begueri
          </h1>
          <p className="lead mb-4">
            Defendemos sus derechos con excelencia, ética y compromiso.
          </p>
          <a href="/consulta" className="btn btn-outline-light btn-lg px-4">
            Solicitar consulta
          </a>
        </div>
      </header>

      {/* SERVICIOS DESTACADOS */}
<section className="py-6 bg-light position-relative">
  <div className="container text-center">
    <h2 className="mb-5 fw-bold">Principales areas</h2>

    <div className="carousel-wrapper">
      <div className="carousel-track" id="carousel-track">
        {[
          { icon: <Users size={32} />, title: "Derecho Laboral", text: "Defensa y asesoría en conflictos laborales." },
          { icon: <Gavel size={32} />, title: "Derecho Penal", text: "Defensa en juicios penales." },
          { icon: <Scale size={32} />, title: "Derecho Civil", text: "Contratos, responsabilidad civil y sucesiones." },
          { icon: <FileText size={32} />, title: "Contratos", text: "Redacción y revisión de contratos." },
          { icon: <Shield size={32} />, title: "Comercial", text: "Asesoría en operaciones y negocios comerciales." },
          { icon: <HomeIcon size={32} />, title: "Inmobiliario", text: "Compra, venta y alquiler de propiedades." },
          { icon: <Shield size={32} />, title: "Seguros", text: "Reclamos y asesoramiento en seguros." },
          { icon: <FileText size={32} />, title: "Herencias", text: "Gestión de sucesiones y testamentos." },
          { icon: <Gavel size={32} />, title: "Contravencional", text: "Asesoría en infracciones y sanciones." },
          { icon: <Scale size={32} />, title: "Consumidores", text: "Protección de derechos del consumidor." },
          { icon: <Book size={32} />, title: "Propiedad Intelectual", text: "Protección de marcas y patentes." },
        ].map((s, i) => (
          <div key={i} className="card service-card border-0 shadow-sm text-center">
            <div className="icon-circle mx-auto">{s.icon}</div>
            <h5 className="fw-bold mt-3">{s.title}</h5>
            <p className="text-muted small">{s.text}</p>
            <a href="/servicios" className="text-primary fw-semibold text-decoration-none">
              Ver más →
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
  </section>

      {/* NOSOTROS */}
      <section className="py-6">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <h2 className="fw-bold mb-4 texto-blanco">Sobre Nosotros</h2>
              <p className="mb-4 texto-blanco">
                Con más de dos décadas de experiencia, nuestro equipo está
                compuesto por especialistas en diversas ramas del derecho.
                Brindamos un acompañamiento cercano, buscando siempre la mejor
                estrategia para cada caso.
              </p>
              <blockquote className="blockquote">
                <Quote size={30} className="text-light mb-2 text-primary " />
                <p className="mb-0 texto-blanco">
                  “Creemos en la justicia como pilar fundamental para construir
                  confianza y progreso social.”
                </p>
              </blockquote>
            </div>
            <div className="col-md-6">
              <img
                src="/oficina.jpg"
                alt="Sobre nosotros"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-6 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Nuestros Valores</h2>
          <div className="row text-center g-4">
            <div className="col-md-4">
              <Shield size={40} className="text-primary mb-3" />
              <h5>Confianza</h5>
              <p className="text-muted">
                Relaciones sólidas y transparentes con cada cliente.
              </p>
            </div>
            <div className="col-md-4">
              <Users size={40} className="text-primary mb-3" />
              <h5>Compromiso</h5>
              <p className="text-muted">
                Defendemos los intereses de nuestros clientes como propios.
              </p>
            </div>
            <div className="col-md-4">
              <HeartHandshake size={40} className="text-primary mb-3" />
              <h5>Ética</h5>
              <p className="text-muted">
                Actuamos siempre con integridad profesional y transparencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="py-6 text-center">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h2 className="fw-bold text-primary">20+</h2>
              <p className="texto-blanco">Años de experiencia</p>
            </div>
            <div className="col-md-4">
              <h2 className="fw-bold text-primary">500+</h2>
              <p className="texto-blanco">Casos resueltos</p>
            </div>
            <div className="col-md-4">
              <h2 className="fw-bold text-primary">95%</h2>
              <p className="texto-blanco">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-6 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Lo que dicen nuestros clientes</h2>
          <div className="row g-4 shadow-sm">
            {[
              {
                name: "María G.",
                text: "Un equipo serio y comprometido. Resolví mi caso con tranquilidad.",
              },
              {
                name: "Carlos R.",
                text: "Excelente asesoría preventiva, nos ayudaron a evitar conflictos legales.",
              },
              {
                name: "Laura M.",
                text: "Profesionales claros, honestos y muy eficientes.",
              },
            ].map((t, i) => (
              <div className="col-md-4" key={i}>
                <div className="card shadow-sm p-4 h-100 border-0">
                  <Quote size={24} className="text-primary mb-3" />
                  <p className="mb-3">{t.text}</p>
                  <h6 className="fw-bold">{t.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO RÁPIDO */}
      <section className="py-6 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4 texto-blanco">Contáctenos</h2>
          <div className="row justify-content-center g-4">
            <div className="col-md-3">
              <Clock size={28} className="text-primary mb-2" />
              <p className="fw-semibold texto-blanco">Lunes - Viernes</p>
              <p className="texto-blanco">9:00 - 18:00</p>
            </div>
            <div className="col-md-3">
              <MapPin size={28} className="text-primary mb-2" />
              <p className="fw-semibold texto-blanco">Dirección</p>
              <p className="texto-blanco">Av. Colon 1180 3A, Córdoba</p>
            </div>
            <div className="col-md-3">
              <Phone size={28} className="text-primary mb-2" />
              <p className="fw-semibold texto-blanco">Teléfono</p>
              <p className="texto-blanco">+54 11 5555-5555</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-6 text-center bg-primary text-white">
        <div className="container">
          <h2 className="mb-4 fw-bold">¿Necesita asesoramiento legal?</h2>
          <a href="/consulta" className="btn btn-light btn-lg px-4">
            Solicitar consulta
          </a>
        </div>
      </section>

      {/* ESTILOS */}
      <style>{`
        .py-6 { padding: 5rem 0; }
        .hero-section { height: 100vh; position: relative; }
        .hero-bg {
          width: 100%; height: 100%;
          object-fit: cover; position: absolute;
          top: 0; left: 0; z-index: -2;
        }
        .overlay {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3));
          z-index: -1;
        }
        .hero-content { max-width: 800px; margin-top: -50px; }

        .carousel-wrapper {
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .carousel-track {
      display: flex;
      gap: 1.5rem;
      transition: transform 0.8s ease-in-out;
    }

    .service-card {
      flex: 0 0 calc(33.333% - 1rem);
      background-color: #fff;
      padding: 2rem 1.5rem;
      border-radius: 1rem;
      min-width: 300px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }

    .icon-circle {
      background: #f0f4ff;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0d6efd;
    }

    @media (max-width: 992px) {
      .service-card {
        flex: 0 0 80%;
      }
    }
      `
      }</style>
      <script>{`
    let currentSlide = 0;
    const track = document.getElementById("carousel-track");
    const cards = track?.children?.length || 0;
    const visible = 3;
    setInterval(() => {
      if (!track) return;
      currentSlide = (currentSlide + 1) % cards;
      const move = currentSlide * (track.children[0].offsetWidth + 24);
      if (move > track.scrollWidth - track.offsetWidth) currentSlide = 0;
      track.style.transform = \`translateX(-\${move}px)\`;
    }, 3000);
  `}</script>
    </div>
    
  );
}




