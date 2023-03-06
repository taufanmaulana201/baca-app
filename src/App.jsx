import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Example from "./components/Example";
import DataSiswa from "./pages/DataSiswa";
import SectionBaca from "./pages/SectionBaca";
import Welcome from "./pages/Welcome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/data-siswa" element={<DataSiswa />} />
          <Route path="/section-baca" element={<SectionBaca />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
