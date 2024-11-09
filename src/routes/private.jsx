import { Navigate, Outlet } from "react-router-dom";
import { getDataFromJwtToken } from "../helpers/get-data-from-jwt";

const Index = () => {
  const token = localStorage.token;
  const tenantId = getDataFromJwtToken("TenantId");

  // ---------- render jsx ----------
  return token && tenantId ? <Outlet /> : <Navigate to="/login" />;
};

export default Index;
