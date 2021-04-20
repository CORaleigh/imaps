/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
export const Panel = (props: any) => {
  const [action, setAction] = useState<any>();
  const widget = useRef<HTMLDivElement>(null);
  const showTips = () => {
    // const action = action.find((action: any) => {
    //   return action.isActive;
    // });
    return action?.tips?.length ? (
      <calcite-action
        text="Action"
        label="Action"
        slot="header-actions-end"
        icon="lightbulb"
        appearance="solid"
        scale="m"
        calcite-hydrated=""
        onClick={() => {
          props.showTip(action.tips);
          // setTips([...tips, ...action.tips]);
          // setTipsTitle(action.title);
        }}
      ></calcite-action>
    ) : (
      ''
    );
  };
  useEffect(() => {
    setAction({ ...action, ...props.action });
    props.panelCreated(props.action);
    return () => {
      console.log('clean up');
    };
  }, []); // only after initial render

  return (
    <div className="action-panel">
      <div className="panel-header">
        <div className="panel-title">{action?.title}</div>
        <div className="header-actions">
          {showTips()}
          <calcite-action
            aria-label="Close"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
            icon="x"
            onClick={(e: Event) => {
              (e.target as HTMLElement).parentElement?.parentElement?.parentElement?.toggleAttribute('hidden');
              (e.target as HTMLElement).parentElement?.parentElement?.parentElement?.parentElement?.toggleAttribute(
                'collapsed',
              );
            }}
          ></calcite-action>
        </div>
      </div>
      <div ref={widget} className="panel-content">
        {props.content}
      </div>
    </div>
  );
};
export default Panel;
