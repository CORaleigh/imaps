import { useState, useEffect, useRef, useCallback } from 'react';
import MapView from '@arcgis/core/views/MapView';
import {
  clearAddressPoints,
  getPropertyByGeometry,
  clearSelectionGraphics,
  checkMaximumRecordCount,
} from '../utils/property';
import { tips } from './tips';
import { PropertyProps } from './PropertyProps';
import { Alert } from '../../../Shell/utils/alert';

const useProperty = (props: PropertyProps) => {
  const [condos, setCondos] = useState<__esri.Graphic[]>([]);
  const condoRef = useRef<__esri.Graphic[]>();
  const [feature, setFeature] = useState<__esri.Graphic>();
  const loaded = useRef(false);
  const [infoDisabled, setInfoDisabled] = useState(true);
  const [searching, setSearching] = useState(false);
  const [activeTab, setActiveTab] = useState('list');
  const [isActive, setIsActive] = useState(false);
  const [featureTable, setFeatureTable] = useState<__esri.FeatureTable>();
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      setTimeout(() => {
        document
          .querySelector('.property calcite-tab-nav')
          ?.shadowRoot?.querySelector('.tab-nav')
          ?.setAttribute('style', 'overflow: hidden');
      }, 100);
    }
  }, [props.view]);

  useEffect(() => {
    if (props.geometry && props.view) {
      getPropertyByGeometry(props.geometry, props.view as MapView).then(
        (result: __esri.FeatureSet | undefined) => {
          if (result) {
            setCondos(result.features);
            condoRef.current = result.features;
            if (result.features.length === 1) {
              setInfoDisabled(false);
              setActiveTab('info');
              setFeature(result.features[0]);
              props.selected(result.features[0], result.features);
            } else {
              setInfoDisabled(true);
              setActiveTab('list');
              setFeature(undefined);
              props.selected(undefined, result.features);
            }
            if (props.alertSet) {
              checkMaximumRecordCount(result.features, props.alertSet);
            }
          }
        },
      );
    } else {
      setInfoDisabled(true);
      setActiveTab('list');
      setFeature(undefined);
      props.selected(undefined, []);
      setCondos([]);
    }
  }, [props.geometry]);
  const condosSelected = useCallback(
    (selectedCondos: __esri.Graphic[]) => {
      setCondos(selectedCondos);
      condoRef.current = selectedCondos;
      if (selectedCondos.length === 1) {
        setInfoDisabled(false);
        setActiveTab('info');
        setFeature(selectedCondos[0]);
        props.selected(selectedCondos[0], selectedCondos);
      } else {
        setInfoDisabled(true);
        setActiveTab('list');
        setFeature(undefined);
        props.selected(undefined, selectedCondos);
      }
      if (props.alertSet) {
        checkMaximumRecordCount(selectedCondos, props.alertSet);
      }
    },
    [condoRef.current, condos, props.selected],
  );

  const featureSelected = useCallback(
    (selectedFeature: __esri.Graphic) => {
      setFeature(selectedFeature);
      props.selected(selectedFeature, condoRef.current);
      setActiveTab('info');
      setInfoDisabled(false);
      clearAddressPoints(props.view);
      clearSelectionGraphics(props.view);
    },
    [props.selected, feature],
  );
  const featureChanged = useCallback(
    (feature: __esri.Graphic) => {
      setFeature(feature);
    },
    [feature],
  );
  const clearSearch = useCallback((view: __esri.MapView) => {
    setFeature(undefined);
    setCondos([]);
    setActiveTab('list');
    setInfoDisabled(true);
    props.selected(undefined, []);
    clearAddressPoints(view);
    clearSelectionGraphics(view);
  }, []);

  useEffect(() => {
    setIsActive(props.isActive);
  }, [props.isActive]);
  const panelDismissed = useCallback(() => {
    props.panelDismissed();
  }, []);
  const tipsClicked = useCallback(() => {
    props.showTips(tips);
  }, []);

  return {
    condos,
    feature,
    infoDisabled,
    searching,
    setSearching,
    activeTab,
    isActive,
    condosSelected,
    featureSelected,
    panelDismissed,
    clearSearch,
    tipsClicked,
    featureChanged,
    featureTable,
    setFeatureTable,
  };
};

export default useProperty;
