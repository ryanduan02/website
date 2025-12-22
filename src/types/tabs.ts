import type React from "react";

export type TabId = "home" | "writing"; // extend later: | "projects" | ...

export type TabConfig = {
  id: TabId;
  label: string;
  render: () => React.ReactNode;
};
