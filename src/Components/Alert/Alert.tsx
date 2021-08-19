/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext } from 'react';
import { alert } from '../../config/config';
import ThemeContext from '../ThemeContext';

export const Alert = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {alert.show && (
        <calcite-alert
          active
          auto-dismiss={alert.autoDismiss}
          auto-dismiss-duration="slow"
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
