import { useEffect, useState } from "react";

import { tips, type Tips } from "./tips";

export interface UseTipsProps {
  panelTips: Tips | undefined;
}

export const useTips = (name: string): UseTipsProps => {
  const [panelTips, setPanelTips] = useState<Tips | undefined>(undefined);
  useEffect(() => {
    setPanelTips(tips.find((tips) => tips.panel === name));
  }, [name]);
  return { panelTips };
};
