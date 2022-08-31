import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}>
    </Routes>
  );
};
export default RoutesMain;