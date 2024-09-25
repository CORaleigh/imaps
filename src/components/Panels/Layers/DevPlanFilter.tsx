import { CalciteSlider } from '@esri/calcite-components-react';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './Layers.css';
interface Props {
  datefield: string;
  layer: __esri.FeatureLayer;
}
export const DevPlanFilter = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loaded = useRef(false);
  const [maxYear, setMaxYear] = useState<number>(0);
  const [minYear, setMinYear] = useState<number>(0);

  const getMinMax = async (layer: __esri.FeatureLayer, datefield: string) => {
    const stats = await (props.layer as __esri.FeatureLayer).queryFeatures({
      where: `EXTRACT(YEAR,${datefield}) >= 2010`,
      returnGeometry: false,
      outStatistics: [
        {
          statisticType: 'max',
          onStatisticField: datefield,
          outStatisticFieldName: 'MAX_DATE',
        },
        {
          statisticType: 'min',
          onStatisticField: datefield,
          outStatisticFieldName: 'MIN_DATE',
        },
      ],
      outFields: ['MAX_DATE', 'MIN_DATE'],
    });

    if (stats?.features.length) {
      const max = new Date(
        stats.features[0].getAttribute('MAX_DATE'),
      ).getFullYear();
      const min = new Date(
        stats.features[0].getAttribute('MIN_DATE'),
      ).getFullYear();
      layer.definitionExpression = `EXTRACT(YEAR FROM ${props.datefield}) >= ${min}
            AND EXTRACT(YEAR FROM ${props.datefield}) <= ${max}
            `;
      layer.refresh();
      setMaxYear(max);
      setMinYear(min);
    }
  };
  useEffect(() => {
    if (props.layer && props.datefield && !loaded.current) {
      loaded.current = true;
      getMinMax(props.layer, props.datefield);
    }
  }, []); // only after first render

  return (
    <div>
      <CalciteSlider
        labelHandles
        labelTicks
        min={minYear}
        max={maxYear}
        maxValue={maxYear}
        minValue={maxYear - 1}
        minLabel={minYear.toString()}
        maxLabel={maxYear.toString()}
        onCalciteSliderChange={(e) => {
          props.layer.definitionExpression = `EXTRACT(YEAR FROM ${props.datefield}) >= ${e.target.minValue}
            AND EXTRACT(YEAR FROM ${props.datefield}) <= ${e.target.maxValue}
            `;
          props.layer.refresh();
        }}
      ></CalciteSlider>
    </div>
  );
};
export default DevPlanFilter;
