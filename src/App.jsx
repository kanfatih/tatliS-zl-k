import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import HomePage from "./pages/home";
import PostPage from "./pages/post";
import RegisterPage from "./pages/auth/register";
import NotificationsPage from "./pages/notifications";
import CategoriesPage from "./pages/categories/detail/index.jsx";
import CategoriDetailPage from "./pages/categories/detail/index.jsx";
import SettingsPage from "./pages/settings/index.jsx";

import { ProtectedLayout } from "./components/layout/ProtectedLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/giris" element={<LoginPage />} />
      <Route path="/kayit" element={<RegisterPage />} />

      <Route element={<ProtectedLayout />}>
        <Route path="/gonderi" element={<PostPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/bildirimler" element={<NotificationsPage />} />

        <Route path="/kategoriler" element={<CategoriesPage />} />
        <Route path="/kategori/:id" element={<CategoriDetailPage />} />
        <Route path="/ayarlar" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
