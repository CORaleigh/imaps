/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useEffect, useState } from 'react';
//import { alert } from '../../config/config';

import ThemeContext from '../ThemeContext';

export const Alert = () => {
  const { theme } = useContext(ThemeContext);
  const [alert, setAlert] = useState<any>();
  useEffect(() => {
    fetch('./config.json').then((response) => {
      response.json().then((config) => {
        setAlert(config.alert);
      });
    });
  }, []);

  return (
    <div>
      {alert && alert.show && (
        <calcite-alert
          active
          auto-dismiss={alert.autoDismiss}
          auto-dismiss-duration={alert.duration}
          color={alert.color}
          icon={alert.icon}
          class={`calcite-theme-${theme}`}
        >
          <div slot="title">{alert.title}</div>
          <div slot="message">{alert.message}</div>
        </calcite-alert>
      )}
    </div>
  );
};
export default Alert;
