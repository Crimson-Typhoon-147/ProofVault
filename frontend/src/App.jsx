import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";

// Dashboard Components
import Layout from "./components/Layout";
import Upload from "./pages/Upload";
import Verify from "./pages/Verify";
import Records from "./pages/Records";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Landing />} />

        {/* Dashboard (dark mode) */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Upload />} />
          <Route path="verify" element={<Verify />} />
          <Route path="records" element={<Records />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
