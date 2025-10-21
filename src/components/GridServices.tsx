// GridServices.tsx
import { Link } from "react-router-dom";

interface GridServicesProps {
  items: { title: string; desc: string; slug: string }[];
  cols?: number;
}

export default function GridServices({ items, cols = 4 }: GridServicesProps) {
  return (
    <div className="row g-4">
      {items.map((item, i) => (
        <div className={`col-md-${12 / cols}`} key={i}>
          <Link to={`/servicios/${item.slug}`} className="text-decoration-none text-dark">
            <div className="card h-100 shadow-sm border-0 p-3 text-center service-card">
              <h5 className="fw-bold">{item.title}</h5>
              <p className="text-muted">{item.desc}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

