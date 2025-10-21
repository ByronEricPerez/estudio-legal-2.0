import React from "react";
import { Shield, Users, HeartHandshake, Quote } from "lucide-react";

export default function Nosotros() {
  return (
    <section className="nosotros-section py-6 p-4">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* TEXTO */}
          <div className="col-lg-6">
            <h2 className="mb-3 hero-title">Sobre el Estudio</h2>
            <blockquote className="blockquote ps-3 border-start border-3 border-primary mb-4">
              <Quote size={28} className="text-primary me-2" />
              <span className="fst-italic text-muted">
                “La justicia no es un servicio, es un compromiso con la verdad y la confianza.”
              </span>
            </blockquote>

            <p className="small-muted mb-3 hero-subtext">
              Fundado hace más de 20 años, nuestro estudio jurídico se especializa en brindar
              soluciones legales integrales, combinando experiencia judicial con asesoramiento
              preventivo. Nuestra filosofía se basa en la excelencia, la ética profesional y la
              atención personalizada.
            </p>
            <p className="small-muted mb-4 hero-subtext">
              Desde la representación en juicios hasta la consultoría empresarial, cada caso se
              aborda con minuciosidad y compromiso, asegurando que los derechos de nuestros
              clientes estén siempre protegidos.
            </p>

            {/* VALORES */}
            <div className="row g-3 mt-4">
              {[
                {
                  icon: <Shield size={32} className="text-primary mt-1" />,
                  title: "Confianza",
                  desc: "Transparencia y seguridad en cada acción.",
                },
                {
                  icon: <HeartHandshake size={32} className="text-primary mt-1" />,
                  title: "Ética",
                  desc: "Actuamos siempre con integridad profesional.",
                },
                {
                  icon: <Users size={32} className="text-primary mt-1" />,
                  title: "Compromiso",
                  desc: "Defendemos los intereses de nuestros clientes como propios.",
                },
              ].map((v, i) => (
                <div className="col-12" key={i}>
                  <div className="valor-card d-flex gap-3 align-items-start p-3 rounded shadow-sm bg-white">
                    {v.icon}
                    <div>
                      <h6 className="fw-bold mb-1">{v.title}</h6>
                      <p className="small-muted mb-0">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IMÁGENES */}
          <div className="col-lg-6">
            <div className="image-collage">
              <div className="img-frame large">
                <img src="/oficinaNosotros.jpg" alt="Oficina" />
              </div>
              
              <div className="img-frame wide">
                <img src="/reunion.jpg" alt="Reunión con clientes" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <h5 className="fw-bold mb-3">
            ¿Quiere conocer más sobre nuestra trayectoria?
          </h5>
          <a href="/consulta" className="btn btn-outline-primary px-4">
            Contáctenos
          </a>
        </div>
      </div>

      {/* ESTILOS */}
      <style>{`
        .nosotros-section {
          background: linear-gradient(135deg, #fdf7f0 0%, #fffdfb 100%);
          padding-bottom: 80px;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          animation: fadeInUp 1s ease forwards;
        }
        .hero-subtext {
          font-size: 1rem;
          line-height: 1.6;
        }
        .small-muted { color: #6c757d; }

        /* Valores */
        .valor-card {
          transition: all 0.3s ease;
        }
        .valor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        /* Imágenes */
        .image-collage {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: masonry;
          gap: 1rem;
        }
        .img-frame {
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .img-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .img-frame:hover img { transform: scale(1.05); }
        .img-frame.large { grid-column: span 2; }
        .img-frame.small { grid-row: span 1; }
        .img-frame.wide { grid-column: span 2; }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}



