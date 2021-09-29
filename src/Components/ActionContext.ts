/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Actions } from '../config/config';
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
if (window.innerWidth <= 500) {
  const active = Actions.find((action) => {
    return action.isActive;
  });
  if (active) {
    active.isActive = false;
  }
}
export const AppContext = React.createContext({
  actions: Actions,
  setActions: (actions: any[]) => {
    actions = Actions;
    console.log(actions);
  },
});
export default AppContext;
