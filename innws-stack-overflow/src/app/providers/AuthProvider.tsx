import { useState, ReactNode, useEffect } from "react";

import { authUser } from "../../features/auth/api/authAPI";
import { AuthContext } from "../../shared/hooks/useAuth";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUser();
      setIsAuth(!!user);
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};