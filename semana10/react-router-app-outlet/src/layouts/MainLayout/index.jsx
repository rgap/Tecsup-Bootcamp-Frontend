import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      {/* Header content, which can include site logo, navigation links, etc. */}
      <header>
        <h1>Website Name (HEADER)</h1>
        {/* Navigation links to switch between pages */}
        <nav>
          <ul>
            {/* Link to the Home page */}
            <li>
              <Link to="/">Home</Link>
            </li>

            {/* Link to the About page */}
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content area. The matched child route will render here. */}
      <main>
        <Outlet />
      </main>

      {/* Footer content */}
      <footer>
        <p>Copyright © 2023 (FOOTER)</p>
        {/* Other footer content */}
      </footer>
    </div>
  );
}
