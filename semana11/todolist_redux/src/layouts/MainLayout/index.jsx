import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectorUser } from "../../selectors/userSelector";

export default function MainLayout() {
  // const user = useSelector((state) => state.user.data);
  const user = useSelector(selectorUser);

  if (!user) return <Navigate to="signup" />;

  return (
    <>
      <Outlet />
    </>
  );
}
