import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcom";
import Connection from "./pages/Connection";
import Form from "./pages/Form";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/connection" element={<Connection />} />
      <Route path="/form" element={<Form />} />
      
    </Routes>
  );
}