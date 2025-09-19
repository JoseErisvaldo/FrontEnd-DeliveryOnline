import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/page';

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
