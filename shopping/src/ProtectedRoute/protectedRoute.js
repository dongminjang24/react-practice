import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/userContext";
export default function ProtectedRoute({ children, requireAdmin }) {
  const { userData } = useAuthContext();
  console.log(userData);
  if (!userData || (requireAdmin && !userData.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
