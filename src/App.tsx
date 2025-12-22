import "./App.css";
import React from "react";

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

  const [activeId, setActiveId] = React.useState<TabId>("home");

  return (
    <div className="appRoot">
      <Tabs
        tabs={tabs}
        activeId={activeId}
        onChange={setActiveId}
        ariaLabel="Site sections"
      />
    </div>
  );
}
