// ServicioDetalle.tsx
import { useParams, useNavigate } from "react-router-dom";

export default function ServicioDetalle() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // 📜 Detalles con fundamentos constitucionales y explicaciones resumidas
  const servicios: Record<
  string,
  { title: string; content: JSX.Element; articulo: string }
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
  contratos: {
    title: "Contratos",
    content: (
      <>
        <p>
          Los <strong>contratos</strong> son acuerdos entre dos o más partes para
          crear obligaciones y derechos recíprocos. Se basan en la{" "}
          <em>autonomía de la voluntad</em> y la <em>buena fe contractual</em>.
        </p>
        <ul>
          <li>Libertad para pactar dentro del marco legal.</li>
          <li>Obligación de cumplir lo acordado.</li>
          <li>Protección contra cláusulas abusivas.</li>
        </ul>
        <blockquote className="blockquote">
          “La propiedad es inviolable...” — <em>Art. 17 CN</em>
        </blockquote>
        <p>
          Este derecho asegura que las promesas y compromisos libremente asumidos
          tengan fuerza legal, fomentando la confianza y la seguridad en las
          relaciones económicas.
        </p>
      </>
    ),
    articulo: "Artículo 17 — Constitución Nacional Argentina",
  },
  comercial: {
    title: "Derecho Comercial",
    content: (
      <>
        <p>
          El <strong>Derecho Comercial</strong> regula la actividad económica, las
          empresas y los actos de comercio. Promueve la libertad de industria y
          comercio bajo reglas de transparencia y lealtad.
        </p>
        <ul>
          <li>Constitución y funcionamiento de sociedades.</li>
          <li>Contratos mercantiles y títulos de crédito.</li>
          <li>Competencia leal y control de monopolios.</li>
        </ul>
        <blockquote className="blockquote">
          “Todos los habitantes de la Nación gozan del derecho de trabajar y
          ejercer toda industria lícita.” — <em>Art. 14 CN</em>
        </blockquote>
      </>
    ),
    articulo: "Artículo 14 — Constitución Nacional Argentina",
  },
  inmobiliario: {
    title: "Derecho Inmobiliario",
    content: (
      <>
        <p>
          El <strong>Derecho Inmobiliario</strong> regula la adquisición, uso y
          transmisión de bienes inmuebles, garantizando la seguridad jurídica en
          las operaciones de propiedad.
        </p>
        <ul>
          <li>Compraventa, alquiler y hipoteca.</li>
          <li>Propiedad horizontal y urbanismo.</li>
          <li>Derecho a la vivienda y función social de la propiedad.</li>
        </ul>
        <blockquote className="blockquote">
          “La propiedad es inviolable…” — <em>Art. 17 CN</em>
        </blockquote>
      </>
    ),
    articulo: "Artículo 17 — Constitución Nacional Argentina",
  },
  seguros: {
    title: "Derecho de Seguros",
    content: (
      <>
        <p>
          El <strong>Derecho de Seguros</strong> regula la relación entre
          asegurado y asegurador, garantizando el cumplimiento de los contratos y
          la protección del patrimonio frente a imprevistos.
        </p>
        <ul>
          <li>Principio de buena fe y transparencia.</li>
          <li>Protección del asegurado frente a incumplimientos.</li>
          <li>Control estatal sobre las entidades aseguradoras.</li>
        </ul>
        <blockquote className="blockquote">
          “La propiedad es inviolable…” — <em>Art. 17 CN</em>
        </blockquote>
      </>
    ),
    articulo: "Artículo 17 — Constitución Nacional Argentina",
  },
  herencias: {
    title: "Derecho Sucesorio",
    content: (
      <>
        <p>
          El <strong>Derecho Sucesorio</strong> regula cómo se transmiten los
          bienes de una persona fallecida a sus herederos, respetando su
          voluntad y la ley.
        </p>
        <ul>
          <li>Herencia legítima y testamentaria.</li>
          <li>Protección de los herederos forzosos.</li>
          <li>Garantía del derecho de propiedad y continuidad familiar.</li>
        </ul>
        <blockquote className="blockquote">
          “La propiedad es inviolable…” — <em>Art. 17 CN</em>
        </blockquote>
      </>
    ),
    articulo: "Artículo 17 — Constitución Nacional Argentina",
  },
  contravencional: {
    title: "Derecho Contravencional",
    content: (
      <>
        <p>
          El <strong>Derecho Contravencional</strong> sanciona faltas menores que
          afectan la convivencia, como desórdenes o ruidos molestos. Busca
          prevenir antes que castigar.
        </p>
        <ul>
          <li>Principio de legalidad y derecho a defensa.</li>
          <li>Respeto al debido proceso.</li>
          <li>Proporcionalidad en las sanciones.</li>
        </ul>
        <blockquote className="blockquote">
          “Nadie puede ser penado sin juicio previo fundado en ley anterior al
          hecho del proceso.” — <em>Art. 18 CN</em>
        </blockquote>
      </>
    ),
    articulo: "Artículo 18 — Constitución Nacional Argentina",
  },
  consumidores: {
    title: "Derecho del Consumidor",
    content: (
      <>
        <p>
          El <strong>Derecho del Consumidor</strong> protege a los usuarios de
          bienes y servicios, garantizando información veraz, trato digno y
          productos seguros.
        </p>
        <ul>
          <li>Derecho a información clara y publicidad no engañosa.</li>
          <li>Protección frente a prácticas abusivas.</li>
          <li>Control estatal de la calidad y seguridad.</li>
        </ul>
        <blockquote className="blockquote">
          “Los consumidores y usuarios tienen derecho, en la relación de consumo,
          a la protección de su salud, seguridad e intereses económicos.” —
          <em>Art. 42 CN</em>
        </blockquote>
      </>
    ),
    articulo: "Artículo 42 — Constitución Nacional Argentina",
  },
  "propiedad-intelectual": {
    title: "Propiedad Intelectual",
    content: (
      <>
        <p>
          La <strong>Propiedad Intelectual</strong> protege las creaciones del
          intelecto humano, como obras artísticas, científicas, literarias e
          invenciones.
        </p>
        <ul>
          <li>Derecho moral y patrimonial del autor.</li>
          <li>Reconocimiento y retribución justa.</li>
          <li>Equilibrio entre innovación y acceso público.</li>
        </ul>
        <blockquote className="blockquote">
          “Todo autor o inventor es propietario exclusivo de su obra o
          invento.” — <em>Art. 17 CN</em>
        </blockquote>
      </>
    ),
    articulo: "Artículo 17 — Constitución Nacional Argentina",
  },
};

  const servicio = servicios[slug || ""] || {
    title: "Servicio no encontrado",
    content: "El servicio solicitado no existe o aún no tiene detalles cargados.",
    articulo: "",
  };

  return (
    <div className="container py-5">
      <div className="p-4 rounded border border-dark bg-beige shadow-sm">
        <h2 className="mb-3 fw-bold">{servicio.title}</h2>
        <p className="lead">{servicio.content}</p>
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


