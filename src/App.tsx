import "./App.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Tabs } from "./components/Tabs";
import { HomePage } from "./pages/HomePage";
import { WritingPage } from "./pages/WritingPage";
import type { TabConfig, TabId } from "./types/tabs";

export default function App() {
  const tabs: TabConfig[] = React.useMemo(
    () => [
      { id: "home", label: "Home", render: () => <HomePage /> },
      { id: "writing", label: "Writing", render: () => <WritingPage /> },
      // Later:
      // { id: "projects", label: "Projects", render: () => <ProjectsPage /> },
    ],
    []
  );

  const location = useLocation();
  const navigate = useNavigate();

  const activeId: TabId = React.useMemo(() => {
    const pathname = location.pathname || "/";

    // Treat any nested writing path as "writing" (e.g., /writing/foo).
    if (pathname === "/writing" || pathname.startsWith("/writing/")) return "writing";

    // Default to home for / and any unknown paths (Phase 3 will add a real 404 route).
    return "home";
  }, [location.pathname]);

  const onTabChange = React.useCallback(
    (id: TabId) => {
      const path = id === "writing" ? "/writing" : "/";
      navigate(path);
    },
    [navigate]
  );

  return (
    <div className="appRoot">
      <Tabs tabs={tabs} activeId={activeId} onChange={onTabChange} ariaLabel="Site sections" />
    </div>
  );
}
