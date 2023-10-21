import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function MainLayout() {
  const user = useSelector((state) => state.user.data);

  if (!user) return <Navigate to="signup" />;

  return (
    <>
      <Outlet />
    </>
  );
}
