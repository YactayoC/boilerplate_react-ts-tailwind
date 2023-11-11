import { Routes, Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactNode;
  path: string;
  needAuth: boolean; // El needAuth se puede cambiar por un token o la informacion del usuario
}

const PrivateRoute = ({ element, ...props }: PrivateRouteProps) => {
  const isAuthenticated = props.needAuth;

  if (isAuthenticated) {
    return <Route {...props} element={element} />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export const PrivateRouter = () => {
  return (
    <Routes>
      <PrivateRoute
        needAuth={true}
        path="dashboard"
        element={<h1>Dashboard</h1>}
      />
      <PrivateRoute
        needAuth={true}
        path="chat"
        element={<h1>Chat Gestion</h1>}
      />

      <Route path="*" element={<Navigate to="/admin/dashboard" />} />
    </Routes>
  );
};
