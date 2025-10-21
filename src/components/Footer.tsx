import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-light py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Columna 1 */}
          <div className="col-md-4">
            <h5 className="fw-bold">Estudio Jurídico</h5>
            <p className="small">
              Defensa y asesoría legal integral. Su confianza es nuestra mayor
              responsabilidad.
            </p>
          </div>

          {/* Columna 2 */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Contacto</h6>
            <p className="small mb-2 d-flex align-items-center gap-2">
              <MapPin size={16} /> Av. Colon 1185 3A
            </p>
            <p className="small mb-2 d-flex align-items-center gap-2">
              <Phone size={16} /> (011) 1234-5678
            </p>
            <p className="small d-flex align-items-center gap-2">
              <Mail size={16} /> contacto@estudio.com
            </p>
          </div>

          {/* Columna 3 */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Redes Sociales</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-light" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-light" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-4" />
        <p className="small text-center mb-0">
          © {new Date().getFullYear()} Estudio Jurídico. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
