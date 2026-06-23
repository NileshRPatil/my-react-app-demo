import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <header>
        <h1>Admin panel</h1>
        <nav>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/products">Products</Link>
        </nav>
      </header>

      <aside>Sidebar</aside>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
}
export default AdminLayout;
