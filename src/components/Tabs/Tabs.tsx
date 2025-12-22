import React from "react";
import type { TabConfig, TabId } from "../../types/tabs";

export function Tabs({
  tabs,
  activeId,
  onChange,
  ariaLabel,
}: {
  tabs: TabConfig[];
  activeId: TabId;
  onChange: (id: TabId) => void;
  ariaLabel: string;
}) {
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = Math.max(
    0,
    tabs.findIndex((t) => t.id === activeId)
  );

  function focusTab(index: number) {
    const clamped = (index + tabs.length) % tabs.length;
    tabRefs.current[clamped]?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    // Roving focus + selection like typical tabs
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        focusTab(activeIndex + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        focusTab(activeIndex - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(tabs.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        onChange(tabs[activeIndex].id);
        break;
      default:
        break;
    }
  }

  return (
    <div className="tabShell">
      <div
        className="tabList"
        role="tablist"
        aria-label={ariaLabel}
        onKeyDown={onKeyDown}
      >
        {tabs.map((tab, idx) => {
          const selected = tab.id === activeId;
          const tabId = `tab-${tab.id}`;
          const panelId = `panel-${tab.id}`;

          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              id={tabId}
              role="tab"
              type="button"
              className={`tab ${selected ? "tabActive" : ""}`}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => {
        const selected = tab.id === activeId;
        const tabId = `tab-${tab.id}`;
        const panelId = `panel-${tab.id}`;

        return (
          <div
            key={tab.id}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!selected}
            className="tabPanel"
          >
            {selected ? tab.render() : null}
          </div>
        );
      })}
    </div>
  );
}
