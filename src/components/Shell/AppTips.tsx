import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { CalciteTip, CalciteTipGroup, CalciteTipManager } from '@esri/calcite-components-react';
interface AppTip {
  title: string;
  text: string;
}
interface AppTipGroup {
  title: string;
  tips: AppTip[];
}
interface Props {
  tips: AppTipGroup;
}
function AppTips(props: Props) {
  const manager = useRef<HTMLCalciteTipManagerElement>(null);
  const [tips, setTips] = useState<AppTipGroup>();
  useEffect(() => {
    setTips(props.tips);
    setTimeout(() => {
      if (manager.current) {
        console.log(props.tips?.title);
        if (manager.current.shadowRoot) {
          const heading = manager.current.shadowRoot.querySelector('.heading');
          if (heading) {
            heading.innerHTML = props.tips?.title;
          }
        }
      }
    }, 100);
  }, [props.tips]);
  return (
    <CalciteTipManager ref={manager} closed={tips === undefined ? true : undefined} onCalciteTipManagerClose={() => setTips(undefined)}>
      <CalciteTipGroup>
        {props.tips?.tips.map((tip: any) => {
          return (
            <CalciteTip heading={tip.title} key={tip.title}>
              {tip.text}
            </CalciteTip>
          );
        })}
      </CalciteTipGroup>
    </CalciteTipManager>
  );
}
export default AppTips;
