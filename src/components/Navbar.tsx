import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'


export default function Navbar(){
return (
<nav className="navbar navbar-expand-lg navbar-dark sticky-top">
<div className="container navbar-logo">
<Link className="navbar-brand" to="/">Estudio Jurídico</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
<Menu />
</button>
<div className="collapse navbar-collapse" id="navmenu">
<ul className="navbar-nav ms-auto align-items-center">
<li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/consulta">Consulta</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/nosotros">Nosotros</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/servicios">Servicios</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/legal">Legal</NavLink></li>
</ul>
</div>
</div>
</nav>
)
}