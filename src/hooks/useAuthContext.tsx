import { AuthContext } from "@/context/userAuthContext";
import { useContext } from "react";

function useAuthContext() {
  return useContext(AuthContext);
}

export default useAuthContext;
