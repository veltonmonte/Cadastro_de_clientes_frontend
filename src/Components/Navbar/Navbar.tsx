import "./Navbar.css";

export function Navbar() {
  return (
    <>
      {/* LOGO / TÍTULO */}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span className="fs-4">Renovadora</span>
      </a>

      <hr />

      {/* MENU */}
      <ul className="nav nav-pills flex-column mb-auto">
        {/* HOME */}
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>

        {/* PENDENTES */}
        <li className="nav-item">
          <a href="#" className="nav-link link-dark">
            Pendentes
          </a>
        </li>

        {/* CONCLUÍDOS */}
        <li className="nav-item">
          <a href="#" className="nav-link link-dark">
            Concluídos
          </a>
        </li>
      </ul>

      <hr />

      {/* USUÁRIO */}
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            alt="user"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Administrador</strong>
        </a>

        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
        >
          <li>
            <a className="dropdown-item" href="#">
              Perfil
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Configurações
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sair
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
