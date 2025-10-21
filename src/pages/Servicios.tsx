// Servicios.tsx
import { Link } from "react-router-dom";
import {
  Briefcase,
  Users,
  FileText,
  Scale,
  Gavel,
  Shield,
  Book,
  Handshake,
  Home,
} from "lucide-react";

export default function Servicios() {
  const servicios = [
    { title: "Derecho Laboral", desc: "Defensa y asesoría en conflictos laborales.", icon: <Users size={32} /> },
    { title: "Derecho de Familia", desc: "Mediación y representación en casos familiares.", icon: <Handshake size={32} /> },
    { title: "Derecho Penal", desc: "Defensa en juicios penales.", icon: <Gavel size={32} /> },
    { title: "Derecho Civil", desc: "Contratos, responsabilidad civil y sucesiones.", icon: <Scale size={32} /> },
    { title: "Contratos", desc: "Redacción y revisión de contratos.", icon: <FileText size={32} /> },
    { title: "Comercial", desc: "Asesoría en operaciones y negocios comerciales.", icon: <Briefcase size={32} /> },
    { title: "Inmobiliario", desc: "Compra, venta y alquiler de propiedades.", icon: <Home size={32} /> },
    { title: "Seguros", desc: "Reclamos y asesoramiento en seguros.", icon: <Shield size={32} /> },
    { title: "Herencias", desc: "Gestión de sucesiones y testamentos.", icon: <FileText size={32} /> },
    { title: "Contravencional", desc: "Asesoría en infracciones y sanciones.", icon: <Gavel size={32} /> },
    { title: "Consumidores", desc: "Protección de derechos del consumidor.", icon: <Scale size={32} /> },
    { title: "Propiedad Intelectual", desc: "Protección de marcas y patentes.", icon: <Book size={32} /> },
  ];

  // Generamos slug automático para cada servicio
  const serviciosConSlug = servicios.map((s) => ({
    ...s,
    slug: s.title.toLowerCase().replace(/\s+/g, "-"),
  }));

  return (
    <section className="servicios-section py-6 p-4">
      <div className="container text-center">
        <h2 className="mb-3 hero-title">Nuestros Servicios</h2>
        <p className="small-muted mb-5">Tipos de casos que atiende el estudio.</p>

        <div className="row g-4">
          {serviciosConSlug.map((s, i) => (
            <div className="col-md-4 col-lg-3" key={i}>
              {/* 🔗 Hacemos que toda la card sea un link */}
              <Link to={`/servicios/${s.slug}`} className="text-decoration-none text-dark">
                <div className="service-card bg-beige h-100 border-0 shadow p-4 text-center fade-in-up">
                  <div className="icon-circle mx-auto mb-3">{s.icon}</div>
                  <h5 className="fw-bold">{s.title}</h5>
                  <p className="text-muted">{s.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ESTILOS */}
      <style>{`
        .servicios-section {
          background: #f9f9f9;
          padding-bottom: 80px; /* Espacio extra antes del footer */
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 700;
        }
        .small-muted {
          color: #6c757d;
        }
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          border: 1.5px solid rgba(0, 0, 0, 0.15);
          color: #111;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
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
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
