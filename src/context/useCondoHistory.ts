/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { getTableByTitle } from "../utils/layerHelper";
import type Graphic from "@arcgis/core/Graphic";

interface UseCondoHistoryProps {
  selectedCondo: Graphic | null;
  setSelectedCondo: (c: Graphic | null) => void;
  setCondos: (c: Graphic[]) => void;
  mapElementRef: React.RefObject<HTMLArcgisMapElement>;
  searchCondos: (
    where: string,
    mapEl: HTMLArcgisMapElement
  ) => Promise<Graphic[]>;
  searchReady: boolean;
}

export function useCondoHistory({
  selectedCondo,
  setSelectedCondo,
  setCondos,
  mapElementRef,
  searchCondos,
  searchReady
}: UseCondoHistoryProps) {
  const restoringFromHistoryRef = useRef(false);

  useEffect(() => {
    if (!searchReady) return; // wait until layers are loaded

    const params = new URLSearchParams(window.location.search);
    const pin = params.get("pin");
    if (!pin) return;

    (async () => {
      const mapEl = mapElementRef.current;
      if (!mapEl) return;

      const condosTable = getTableByTitle(mapEl, "Condos");
      if (!condosTable) return;

      const results = await searchCondos(`PIN_NUM = '${pin}'`, mapEl);
      setCondos(results);
      setSelectedCondo(results[0] || null);
    })();
  }, [searchReady]);
  
  // Push new state when a condo is selected
  useEffect(() => {
    if (!selectedCondo) return;

    if (restoringFromHistoryRef.current) {
      restoringFromHistoryRef.current = false;
      return;
    }

    const pin = selectedCondo.getAttribute("PIN_NUM");

    if (pin) {
      const url = new URL(window.location.href);

      url.searchParams.set("pin", pin);

      window.history.pushState({ pin }, "", url);
    }
  }, [selectedCondo]);

  // Handle back/forward
  useEffect(() => {
    const onPopState = async (event: PopStateEvent) => {
      restoringFromHistoryRef.current = true;

      const pin = event.state?.pin ?? null;

      if (!pin) {
        setSelectedCondo(null);
        setCondos([]);
        return;
      }

      const condosTable = getTableByTitle(mapElementRef.current, "Condos");
      if (!condosTable) return;

      const results = await searchCondos(
        `PIN_NUM = '${pin}'`,
        mapElementRef.current
      );
      setCondos(results);
      setSelectedCondo(results[0] || null);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [mapElementRef, searchCondos, setCondos]);
}
