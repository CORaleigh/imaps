import React from "react";
import "@esri/calcite-components/components/calcite-carousel";
import "@esri/calcite-components/components/calcite-carousel-item";
import "@esri/calcite-components/components/calcite-popover";
import "@esri/calcite-components/components/calcite-action";
import "@esri/calcite-components/components/calcite-card";

import styles from "./TipManager.module.css";
import { useTips } from "./useTips";
interface TipManagerProps {
  name: string;
  scale?: "s" | "m" | "l"
}

const TipManager: React.FC<TipManagerProps> = ({ name, scale }) => {
  const { panelTips } = useTips(name);
  return (
    <>
      {panelTips && (
        <>
          <calcite-action
            id={`tip-action-${panelTips.panel}`}
            slot="header-actions-end"
            text="Tips"
            icon="lightbulb"
            scale={scale ? scale : "m"}
          ></calcite-action>

          <calcite-popover
            // heading={panelTips.title}
            // closable
            label="tips"
            referenceElement={`tip-action-${panelTips.panel}`}
            overlayPositioning="fixed"
            autoClose
            placement="bottom-end"
          >
            <calcite-carousel label="tips">
              {panelTips.tips.map((tip, i) => (
                <calcite-carousel-item key={`tip-${i}`} label="tip">
                  <calcite-card className={styles.tipContent}>
                    <span slot="heading">{tip.title}</span>
                    <span slot="description">{tip.text}</span>
                  </calcite-card>
                </calcite-carousel-item>
              ))}
            </calcite-carousel>
          </calcite-popover>
        </>
      )}
    </>
  );
};

export default TipManager;
