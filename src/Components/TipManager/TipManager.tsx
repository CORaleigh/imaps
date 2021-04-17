/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useEffect, useRef, useState } from 'react';
import ThemeContext from '../ThemeContext';
import './TipManager.scss';
export const TipManager = (props: any) => {
  const ref = useRef<HTMLElement>();
  const [title, setTitle] = useState();
  const [tips, setTips] = useState<any[]>([]);
  const [closed, setClosed] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const tipManagerToggled = (event: any) => {
      if (event.target.closed) {
        props.tipsDismissed();
      }
    };
    ref.current?.addEventListener('calciteTipManagerToggle', tipManagerToggled);
    return () => {
      ref.current?.removeEventListener('calciteTipManagerToggle', tipManagerToggled);
    };
  }, [props.tipsDimissed]);
  useEffect(() => {
    setTitle(props.title);
    setTips(props.tips);

    setClosed(!props.tips.length);
  }, [props.tips]); // only after initial render
  return (
    <calcite-tip-manager
      ref={ref}
      theme={theme}
      dir="ltr"
      intl-close="Close"
      intl-default-title={title}
      intl-pagination-label="Tip"
      intl-next="Next"
      intl-previous="Previous"
      closed={closed ? '' : null}
    >
      {tips?.map((tip, i) => {
        return (
          <calcite-tip heading={tip.title} key={tip.title + i}>
            {tip.text}
          </calcite-tip>
        );
      })}
    </calcite-tip-manager>
  );
};
export default TipManager;
