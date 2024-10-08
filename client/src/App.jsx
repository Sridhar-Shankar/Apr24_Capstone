import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register/RegisterPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import GenrePage from "./pages/Genre/GenrePage";
import CarouselPage from "./pages/Carousel/CarouselPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import MoviePage from "./pages/Movie/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<RegisterPage />} />
        <Route path="/genres" element={<GenrePage />} />
        <Route path="/carousel" element={<CarouselPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
