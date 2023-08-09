import { BrowserRouter, Routes, Route } from "react-router-dom";
import Medication from "./components/Medication";
import Layout from "./components/Layout";
import Calendar from "./components/Calendar";
import TicTacToes from "./components/Tictactoe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="calendar" element={<Calendar />} />
          <Route path="medication" element={<Medication />} />
          <Route path="tictactoe" element={<TicTacToes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
