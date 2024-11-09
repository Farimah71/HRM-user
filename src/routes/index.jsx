import React, { Suspense } from "react";
import { lazily } from "react-lazily";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./private";

// ---------- Layouts ----------
const { MainLayout } = lazily(() => import("../layout/_main"));
const { PanelLayout } = lazily(() => import("../layout/_panel"));

// ---------- Authentication Pages ----------
const { Login } = lazily(() => import("../pages/auth/login/index"));
const { Signup } = lazily(() => import("../pages/auth/signup/index"));

// ---------- Dashboard Page ----------
const { Dashboard } = lazily(() => import("../pages/panel/dashboard/index"));

const { JobSearch } = lazily(() => import("../pages/job-search/index"));

const { JobDetail } = lazily(() => import("../pages/job-detail/index"));

const Index = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" exact element={<JobSearch />} />
        </Route>
        <Route element={<PanelLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/job-detail" element={<JobDetail />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Index;
