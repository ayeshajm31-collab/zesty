import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../LIB/supabaseClient";

function AdminProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log("USER:", user);

      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("admins")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();

      console.log("ADMIN:", data);
      console.log("ERROR:", error);

      if (data) {
        setIsAdmin(true);
      }

      setLoading(false);
    };

    checkAdmin();
  }, []);

  if (loading) {
    return <div>Checking admin access...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export default AdminProtectedRoute;