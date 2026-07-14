import "@esri/calcite-components/components/calcite-dialog";
import type { RefObject } from "react";
import "@esri/calcite-components/components/calcite-dialog";

interface DisclaimerProps {
  open: boolean;
  checkbox: RefObject<HTMLCalciteCheckboxElement | null>;
  onClose: () => void;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ open, checkbox, onClose }) => {
  return (
    <calcite-dialog open={open} heading="Disclaimer" width="s" closeDisabled>
      iMAPS makes every effort to produce and publish the most current and
      accurate information possible. However, the maps are productions for
      information purposes, and are NOT surveys. No warranties, expressed or
      implied, are provided for the data therein, its use, or its
      interpretation. Register of Deeds documents accessed through this site are
      unofficial. The official records are maintained at the Wake County
      Register of Deeds office. The Wake County Register of Deeds assumes no
      responsibility or liability associated with the use or misuse of this
      data.
      <calcite-button slot="footer-end" onClick={onClose}>Agree</calcite-button>
      <calcite-label slot="footer-start" layout="inline" scale="m">
        <calcite-checkbox scale="m" ref={checkbox}></calcite-checkbox>
        Don't show again
      </calcite-label>
    </calcite-dialog>
  );
};

export default Disclaimer;