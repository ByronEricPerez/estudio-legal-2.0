// ServicioDetalle.tsx
import { useParams, useNavigate } from "react-router-dom";

export default function ServicioDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // 📜 Detalles con fundamentos constitucionales y explicaciones resumidas
  const servicios: Record<
    string,
    { title: string; content: React.ReactNode; articulo: string }
  > = {
    "derecho-laboral": {
      title: "Derecho Laboral",
      content: (
        <>
          <p>
            El <strong>Derecho Laboral</strong> protege las relaciones entre
            trabajadores y empleadores, garantizando condiciones dignas y
            equitativas de labor.
          </p>
          <ul>
            <li>Salario mínimo vital y móvil.</li>
            <li>Jornada limitada y descanso semanal.</li>
            <li>Vacaciones pagas y protección frente al despido.</li>
            <li>Derecho a la sindicalización y huelga.</li>
          </ul>
          <blockquote className="blockquote mt-3">
            “El trabajo en sus diversas formas gozará de la protección de las
            leyes, las que asegurarán al trabajador condiciones dignas y equitativas
            de labor…” — <em>Art. 14 bis, CN</em>
          </blockquote>
          <p>
            Este derecho busca equilibrar las partes en la relación laboral,
            reconociendo al trabajador como sujeto de protección prioritaria en el
            marco de la justicia social.
          </p>
        </>
      ),
      articulo: "Artículo 14 bis — Constitución Nacional Argentina",
    },
    "derecho-de-familia": {
      title: "Derecho de Familia",
      content: (
        <>
          <p>
            El <strong>Derecho de Familia</strong> regula las relaciones personales
            y patrimoniales dentro del grupo familiar, protegiendo la dignidad y la
            igualdad entre sus miembros.
          </p>
          <ul>
            <li>Matrimonio y uniones convivenciales.</li>
            <li>Divorcio, adopción y filiación.</li>
            <li>Responsabilidad parental y deber alimentario.</li>
          </ul>
          <p>
            La <em>Constitución Nacional</em> garantiza la protección integral de la
            familia, la igualdad ante la ley y el respeto a los derechos humanos
            reconocidos en tratados internacionales (Arts. 14, 16 y 75 inc. 22).
          </p>
          <blockquote className="blockquote">
            “La familia es el elemento natural y fundamental de la sociedad y tiene
            derecho a la protección de la sociedad y del Estado.” — <em>Art. 17,
            DUDH</em>
          </blockquote>
        </>
      ),
      articulo: "Artículos 14, 16 y 75 inc. 22 — Constitución Nacional Argentina",
    },
    "derecho-penal": {
      title: "Derecho Penal",
      content: (
        <>
          <p>
            El <strong>Derecho Penal</strong> establece qué conductas constituyen
            delitos y cuáles son las sanciones aplicables. Su finalidad es proteger
            a la sociedad y al mismo tiempo garantizar los derechos fundamentales de
            las personas.
          </p>
          <ul>
            <li>Principio de legalidad: “No hay pena sin ley previa”.</li>
            <li>Presunción de inocencia.</li>
            <li>Derecho a la defensa y al debido proceso.</li>
            <li>Prohibición de torturas o penas crueles.</li>
          </ul>
          <blockquote className="blockquote">
            “Nadie puede ser penado sin juicio previo fundado en ley anterior al
            hecho del proceso.” — <em>Art. 18 CN</em>
          </blockquote>
          <p>
            Este derecho también protege la <strong>intimidad</strong> y las
            <strong> acciones privadas</strong> de las personas (Art. 19 CN),
            evitando la intervención estatal cuando no se afecta el orden público ni
            los derechos de terceros.
          </p>
        </>
      ),
      articulo: "Artículos 18 y 19 — Constitución Nacional Argentina",
    },
    "derecho-civil": {
      title: "Derecho Civil",
      content: (
        <>
          <p>
            El <strong>Derecho Civil</strong> regula las relaciones entre las
            personas, tanto físicas como jurídicas, garantizando igualdad,
            libertad y responsabilidad.
          </p>
          <ul>
            <li>Propiedad y contratos.</li>
            <li>Responsabilidad civil y daños.</li>
            <li>Derechos de familia y sucesiones.</li>
          </ul>
          <blockquote className="blockquote">
            “La propiedad es inviolable, y ningún habitante de la Nación puede ser
            privado de ella sino en virtud de sentencia fundada en ley.” —
            <em>Art. 17 CN</em>
          </blockquote>
          <p>
            Es la base de la convivencia jurídica en la vida cotidiana, y garantiza
            que las personas puedan ejercer sus derechos dentro del marco de la ley
            y con respeto mutuo.
          </p>
        </>
      ),
      articulo: "Artículos 16 y 17 — Constitución Nacional Argentina",
    },
    // ... resto de los servicios igual
  };

  const servicio = servicios[slug || ""] || {
    title: "Servicio no encontrado",
    content: (
      <p>El servicio solicitado no existe o aún no tiene detalles cargados.</p>
    ),
    articulo: "",
  };

  return (
    <div className="container py-5">
      <div className="p-4 rounded border border-dark bg-beige shadow-sm">
        <h2 className="mb-3 fw-bold">{servicio.title}</h2>
        <div className="lead">{servicio.content}</div>
        {servicio.articulo && (
          <p className="small text-muted fst-italic mt-3">
            📜 {servicio.articulo}
          </p>
        )}
      </div>

      <div className="text-center mt-4">
        <button
          className="btn-enviar btn-brillo"
          onClick={() => navigate("/servicios")}
        >
          ← Volver a Servicios
        </button>
      </div>
    </div>
  );
}



