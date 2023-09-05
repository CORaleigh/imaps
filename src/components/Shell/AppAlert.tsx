import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { CalciteAlert, CalciteLink } from '@esri/calcite-components-react';
import { Alert } from './utils/alert';

interface Props {
  alert: Alert | undefined;
}
function AppAlert(props: Props) {
  const [alert, setAlert] = useState<Alert>();
  useEffect(() => {
    if (localStorage.getItem('imaps_alert_read')) {
      if (props.alert?.optOut && JSON.parse(localStorage.getItem('imaps_alert_read') as string).title === props?.alert?.title) {
        props.alert.show = false;
      }
    }

    setAlert(props.alert);
  }, [props.alert]);
  return (
    <CalciteAlert
      open={alert?.show}
      onCalciteAlertClose={() => {
        if (alert) {
          alert.show = false;
          if (alert.optOut) {
            localStorage.setItem('imaps_alert_read', JSON.stringify(alert));
          }
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
        <CalciteLink slot="link" href={alert?.link.url} target="_blank">
          {alert?.link.text}
        </CalciteLink>
      )}
    </CalciteAlert>
  );
}
export default React.memo(AppAlert);
