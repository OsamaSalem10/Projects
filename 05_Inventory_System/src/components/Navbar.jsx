import { Link } from "react-router-dom";

export const Navbar = ({ main, toggleTheme, theme }) => {
  return (
    <nav className="navbar md:navbar-expand bg-1 fg-2">
      <div className="md:container">
        <button
          className="btn-icon navbar-toggler"
          type="button"
          data-bs-toggle="drawer"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" aria-hidden="true"></span>
        </button>

        <dialog
          className="drawer drawer-end"
          tabIndex="-1"
          id="navbarTogglerDemo01"
          aria-labelledby="navbarTogglerDemo01Label"
        >
          <div className="drawer-header">
            <h5 className="drawer-title" id="navbarTogglerDemo01Label">
              System
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="drawer"
              aria-label="Close"
            ></button>
          </div>

          <div className="drawer-body">
            <Link className="navbar-brand" to="/">
              System
            </Link>

            <ul className="navbar-nav me-auto mb-2 md:mb-0">
              {main?.categories?.length > 0 ? (
                main.categories.map((category) => (
                  <li key={category._id} className="nav-item">
                    <Link className="nav-link" to={`/${category._id}`}>
                      {category.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="nav-item">
                  <span className="nav-link text-muted">
                    No categories found
                  </span>
                </li>
              )}
            </ul>

            <div className="d-flex">
              <button className="btn btn-outline-primary" onClick={toggleTheme}>
                <i
                  className={`bi ${
                    theme === "dark" ? "bi-sun-fill" : "bi-moon-stars-fill"
                  } me-2`}
                />

                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </nav>
  );
};
