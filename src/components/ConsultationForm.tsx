import React, { useState } from "react";
import { Mail, Phone, User, FileText } from "lucide-react";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    dni: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const servicios = [
    { title: "Derecho Laboral" },
    { title: "Derecho de Familia" },
    { title: "Derecho Penal" },
    { title: "Derecho Civil" },
    { title: "Contratos" },
    { title: "Comercial" },
    { title: "Inmobiliario" },
    { title: "Seguros" },
    { title: "Herencias" },
    { title: "Contravencional" },
    { title: "Consumidores" },
    { title: "Propiedad Intelectual" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Evitar caracteres no numéricos en DNI
    if (name === "dni") {
      const onlyNumbers = value.replace(/\D/g, ""); // elimina letras o símbolos
      if (onlyNumbers.length <= 8) {
        setForm({ ...form, [name]: onlyNumbers });
      }
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const isFormComplete =
    form.name &&
    form.lastname &&
    form.dni &&
    form.email &&
    form.phone &&
    form.type &&
    form.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormComplete) return;
    alert("Consulta simulada enviada — integra el backend para producción");
  };

  return (
    <form onSubmit={handleSubmit} className="form-card-beige p-4">
      <div className="row g-4">
        {/* NOMBRE */}
        <div className="col-md-6">
          <label className="form-label texto-negro fw-semibold">
            <User className="me-2" size={18} />
            Nombre
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control input-elegante-claro"
            placeholder="Ej: Juan"
            required
          />
        </div>

        {/* APELLIDO */}
        <div className="col-md-6">
          <label className="form-label texto-negro fw-semibold">
            <User className="me-2" size={18} />
            Apellido
          </label>
          <input
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            className="form-control input-elegante-claro"
            placeholder="Ej: Pérez"
            required
          />
        </div>

        {/* DNI */}
        <div className="col-md-12">
          <label className="form-label texto-negro fw-semibold">
            <FileText className="me-2" size={18} />
            DNI
          </label>
          <input
            type="text"
            name="dni"
            value={form.dni}
            onChange={handleChange}
            className="form-control input-elegante-claro"
            placeholder="Ej: 40123456"
            inputMode="numeric"
            pattern="[0-9]*"
            required
          />
        </div>

        {/* EMAIL */}
        <div className="col-md-6">
          <label className="form-label texto-negro fw-semibold">
            <Mail className="me-2" size={18} />
            Email
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control input-elegante-claro"
            placeholder="Ej: ejemplo@email.com"
            required
          />
        </div>

        {/* TELÉFONO */}
        <div className="col-md-6">
          <label className="form-label texto-negro fw-semibold">
            <Phone className="me-2" size={18} />
            Teléfono
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="form-control input-elegante-claro"
            placeholder="+54 ..."
            required
          />
        </div>

        {/* TIPO DE CONSULTA */}
        <div className="col-md-6">
          <label className="form-label texto-negro fw-semibold">
            <FileText className="me-2" size={18} />
            Tipo de consulta
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="form-select input-elegante-claro"
            required
          >
            <option value="">Seleccione...</option>
            {servicios.map((s, i) => (
              <option key={i} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        {/* DETALLE */}
        <div className="col-12">
          <label className="form-label texto-negro fw-semibold">Detalle</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="form-control input-elegante-claro"
            rows={5}
            placeholder="Describa brevemente su caso o consulta..."
            required
          ></textarea>
        </div>
      </div>

      {/* BOTÓN */}
      <div className="text-center mt-5">
        <button
          className={`btn-enviar ${
            !isFormComplete ? "btn-disabled" : "btn-brillo"
          }`}
          type="submit"
          disabled={!isFormComplete}
        >
          Enviar Consulta
        </button>
      </div>
    </form>
  );
}





