import React from "react";
import { Shield, FileText, Scale } from "lucide-react";

export default function Legal() {
  return (
    <div className="container py-5">
      <h2
        className="text-center mb-4 fw-bold texto-blanco"
        style={{ fontFamily: "Playfair Display" }}
      >
        Aviso Legal
      </h2>
      <p className="text-center texto-blanco mb-5">
        Lea atentamente nuestros términos y condiciones, políticas de
        privacidad y aviso legal. El uso de este sitio implica la aceptación de
        los mismos.
      </p>

      <div className="row g-4">
        {/* Aviso Legal */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 p-4 text-center">
            <Shield size={40} className="text-primary mb-3" />
            <h5 className="fw-bold mb-3">Aviso Legal</h5>
            <p className="text-muted small">
              Este sitio web es propiedad del Estudio Jurídico Pérez &
              Asociados. Toda la información contenida tiene fines meramente
              informativos y no constituye asesoramiento legal directo.
            </p>
          </div>
        </div>

        {/* Política de Privacidad */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 p-4 text-center">
            <FileText size={40} className="text-primary mb-3" />
            <h5 className="fw-bold mb-3">Política de Privacidad</h5>
            <p className="text-muted small">
              Los datos personales recopilados a través de formularios serán
              tratados con absoluta confidencialidad, conforme a la legislación
              vigente en protección de datos. Nunca compartiremos su información
              sin su consentimiento.
            </p>
          </div>
        </div>

        {/* Condiciones de Uso */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 p-4 text-center">
            <Scale size={40} className="text-primary mb-3" />
            <h5 className="fw-bold mb-3">Condiciones de Uso</h5>
            <p className="text-muted small">
              Al utilizar este sitio, usted se compromete a hacer un uso
              responsable de la información disponible y a respetar la
              normativa legal vigente. El incumplimiento puede derivar en
              acciones legales.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-5">
        <h4 className="fw-bold mb-3 texto-blanco">
          ¿Tiene dudas sobre nuestras políticas legales?
        </h4>
        <a href="/consulta" className="btn btn-primary btn-lg px-4">
          Contáctenos
        </a>
      </div>
    </div>
  );
}
