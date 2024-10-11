import { RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/userAuthContext";
import router from "./routes";

function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
