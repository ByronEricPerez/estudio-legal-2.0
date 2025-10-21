import { useState } from "react";
import { Mail, Phone, User, FileText } from "lucide-react";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    dni: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Solo permitir números en dni y phone
    if ((name === "dni" || name === "phone") && /\D/.test(value)) return;

    setForm({ ...form, [name]: value });
  };

  const isFormComplete =
    form.name &&
    form.lastName &&
    form.dni &&
    form.email &&
    form.phone &&
    form.type &&
    form.message;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormComplete) return;
    alert("Consulta simulada enviada — integra el backend para producción");
  };

  return (
    <form onSubmit={handleSubmit} className="form-card-beige p-4">
      <div className="row g-4">
        {/* Nombre y Apellido */}
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

        <div className="col-md-6">
          <label className="form-label texto-negro fw-semibold">
            <User className="me-2" size={18} />
            Apellido
          </label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="form-control input-elegante-claro"
            placeholder="Ej: Pérez"
            required
          />
        </div>

        {/* DNI */}
        <div className="col-md-6">
          <label className="form-label texto-negro fw-semibold">
            DNI
          </label>
          <input
            name="dni"
            value={form.dni}
            onChange={handleChange}
            className="form-control input-elegante-claro"
            placeholder="Ej: 12345678"
            required
          />
        </div>

        {/* Email */}
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

        {/* Teléfono */}
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

        {/* Tipo de consulta */}
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
            <option>Derecho Laboral</option>
            <option>Derecho de Familia</option>
            <option>Derecho Penal</option>
            <option>Derecho Civil</option>
            <option>Contratos</option>
            <option>Comercial</option>
            <option>Inmobiliario</option>
            <option>Seguros</option>
            <option>Herencias</option>
            <option>Contravencional</option>
            <option>Consumidores</option>
            <option>Propiedad Intelectual</option>
            <option>Otros</option>
          </select>
        </div>

        {/* Detalle */}
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







