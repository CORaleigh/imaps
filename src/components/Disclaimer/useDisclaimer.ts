import { useEffect, useRef, useState, type RefObject } from "react";

export interface UseDisclaimerProps {
  open: boolean;
  checkbox: RefObject<HTMLCalciteCheckboxElement | null>;
  handleDialogClose: () => void;
  handleDialogOpen: () => void; // Add this
}

export const useDisclaimer = (): UseDisclaimerProps => {
  const checkbox = useRef<HTMLCalciteCheckboxElement>(null);

  const [open, setOpen] = useState<boolean>(() => {
    const stored = localStorage.getItem("imaps_hide_disclaimer");
    
    return stored !== "true" || !stored;
  });

  const handleDialogClose = () => {
    const isChecked = checkbox.current?.checked ?? false;
    setOpen(false);
    if (isChecked) {
      localStorage.setItem("imaps_hide_disclaimer", "true");
    } else {
      localStorage.removeItem("imaps_hide_disclaimer");
    }
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (open && checkbox.current) {
      const stored = localStorage.getItem("imaps_hide_disclaimer");
      checkbox.current.checked = stored === "true";
    }
  }, [open]);

  return {
    open,
    checkbox,
    handleDialogClose,
    handleDialogOpen,
  };
};
