import "./App.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Tabs } from "./components/Tabs";
import { HomePage } from "./pages/HomePage";
import { WritingPage } from "./pages/WritingPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { FavoriteImagesPage } from "./pages/FavoriteImagesPage";
import type { TabConfig, TabId } from "./types/tabs";

export default function App() {
  const tabs: TabConfig[] = React.useMemo(
    () => [
      { id: "home", label: "Home", render: () => <HomePage /> },
      { id: "writing", label: "Writing", render: () => <WritingPage /> },
      { id: "projects", label: "Projects", render: () => <ProjectsPage /> },
      { id: "favorite-images", label: "Favorite Images", render: () => <FavoriteImagesPage /> },
    ],
    []
  );

  const location = useLocation();
  const navigate = useNavigate();

  const activeId: TabId = React.useMemo(() => {
    const pathname = location.pathname || "/";

    // Treat any nested writing path as "writing" (e.g., /writing/foo).
    if (pathname === "/writing" || pathname.startsWith("/writing/")) return "writing";
    
    // Treat any nested projects path as "projects".
    if (pathname === "/projects" || pathname.startsWith("/projects/")) return "projects";
    
    // Treat any nested favorite-images path as "favorite-images".
    if (pathname === "/favorite-images" || pathname.startsWith("/favorite-images/")) return "favorite-images";

    // Default to home for / and any unknown paths (Phase 3 will add a real 404 route).
    return "home";
  }, [location.pathname]);

  const onTabChange = React.useCallback(
    (id: TabId) => {
      const pathMap: Record<TabId, string> = {
        home: "/",
        writing: "/writing",
        projects: "/projects",
        "favorite-images": "/favorite-images",
      };
      navigate(pathMap[id]);
    },
    [navigate]
  );

  return (
    <div className="appRoot">
      <Tabs tabs={tabs} activeId={activeId} onChange={onTabChange} ariaLabel="Site sections" />
    </div>
  );
}
