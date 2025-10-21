import React from "react";
import { FileText, ShieldCheck, Clock, Users, CheckCircle } from "lucide-react";
import ConsultationForm from "../components/ConsultationForm";

export default function Consulta() {
  return (
    <section className="consulta-section py-5 bg-light">
      <div className="container">
        <div className="row gy-5 align-items-stretch">
          {/* Texto lateral */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="d-flex align-items-center mb-4">
              <FileText size={36} className="text-dark me-2" />
              <h2
                className="fw-bold m-0"
                style={{ fontFamily: "Playfair Display", fontSize: "2rem" }}
              >
                Consulta Online
              </h2>
            </div>

            <p className="text-muted mb-3 lh-lg">
              Nuestro estudio jurídico ofrece un servicio de{" "}
              <strong>consulta online personalizada</strong> para brindarle
              asesoramiento claro, rápido y confidencial. Usted puede realizar su
              consulta desde la comodidad de su hogar, sin necesidad de acudir al
              estudio.
            </p>

            <p className="text-muted mb-3 lh-lg">
              Cada caso es evaluado por un profesional especializado en el área
              correspondiente 
              garantizando una respuesta adaptada a su situación particular.
            </p>

            <p className="text-muted mb-4 lh-lg">
              Al enviar su consulta, acepta nuestra{" "}
              <a
                href="/privacidad"
                className="text-decoration-none fw-semibold"
                style={{ color: "var(--dorado)" }}
              >
                política de privacidad
              </a>
              , asegurando el tratamiento confidencial de toda la información
              compartida.
            </p>

            {/* Beneficios */}
            <div className="mt-4">
              <div className="d-flex align-items-start gap-2 mb-2">
                <ShieldCheck className="text-success" size={20} />
                <span className="small text-muted">
                  Confidencialidad absoluta en cada consulta.
                </span>
              </div>
              <div className="d-flex align-items-start gap-2 mb-2">
                <Clock className="text-primary" size={20} />
                <span className="small text-muted">
                  Respuestas en menos de 24 horas hábiles.
                </span>
              </div>
              <div className="d-flex align-items-start gap-2 mb-2">
                <Users className="text-warning" size={20} />
                <span className="small text-muted">
                  Equipo interdisciplinario de abogados especializados.
                </span>
              </div>
              <div className="d-flex align-items-start gap-2">
                <CheckCircle className="text-success" size={20} />
                <span className="small text-muted">
                  Atención personalizada y seguimiento continuo del caso.
                </span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="col-md-6">
            <div className="form-container-beige rounded shadow-lg p-4">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
