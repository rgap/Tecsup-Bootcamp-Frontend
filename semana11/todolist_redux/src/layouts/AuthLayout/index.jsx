import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const user = useSelector((state) => state.user.data);

  if (user) return <Navigate to="/" />;

  return (
    <>
      <Outlet />
    </>
  );
}
