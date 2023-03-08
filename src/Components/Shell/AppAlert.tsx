import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { CalciteAlert } from '@esri/calcite-components-react';
import { Alert } from './utils/alert';

interface Props {
  alert: Alert | undefined;
}
function AppAlert(props: Props) {
  const [alert, setAlert] = useState<Alert>();
  useEffect(() => {
    setAlert(props.alert);
  }, [props.alert]);
  return (
    <CalciteAlert
      open={alert?.show}
      onCalciteAlertClose={() => {
        if (alert) {
          alert.show = false;
        }
      }}
      kind={alert?.kind}
      autoClose={alert?.autoClose ? true : undefined}
      autoCloseDuration={alert?.duration}
      label={''}
    >
      <div slot="title">{alert?.title}</div>
      <div slot="message">{alert?.message}</div>
      {alert?.link?.show && (
        <a slot="link" href={alert?.link.url}>
          {alert?.link.text}
        </a>
      )}
    </CalciteAlert>
  );
}
export default React.memo(AppAlert);
