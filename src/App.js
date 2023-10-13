import { Routes,  Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div>
    <h1 className="text-center text-3xl font-bold">
      Firebase Auth and Context
    </h1>
    <AuthContextProvider>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
    </Routes>
    </AuthContextProvider>
    </div>
  )
}