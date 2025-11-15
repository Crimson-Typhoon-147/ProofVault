import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Upload from "./pages/Upload";
import Verify from "./pages/Verify";
import Records from "./pages/Records";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Upload />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/records" element={<Records />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
