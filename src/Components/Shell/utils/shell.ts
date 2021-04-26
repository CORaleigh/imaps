/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
const panelDismissedChange = (e: Event) => {
  const shellPanel = (e.target as HTMLElement)?.parentElement;
  (shellPanel as HTMLCalciteShellPanelElement).collapsed = (e.target as HTMLCalcitePanelElement)?.dismissed;
};

export const initialized = (): void => {
  const panels = document.querySelectorAll('calcite-panel');
  panels.forEach((panel) => {
    panel?.addEventListener('calcitePanelDismissedChange', panelDismissedChange);
  });
};

export const deactivate = (): void => {
  const panels = document.querySelectorAll('calcite-panel');
  panels.forEach((panel) => {
    panel?.removeEventListener('calcitePanelDismissedChange', panelDismissedChange);
  });
};
const deactivateActions = (actions: any[], isTool: boolean): void => {
  if (innerWidth < 1000) {
    actions.forEach((a) => {
      a.isActive = false;
    });
  } else {
    if (isTool) {
      actions.forEach((a) => {
        a.isActive = a.isActive && !a.isTool;
      });
    } else {
      actions.forEach((a) => {
        a.isActive = a.isActive && a.isTool;
      });
    }
  }
};
export const actionClicked = (e: any, action: any, actions: any[]): any[] => {
  deactivateActions(actions, action.isTool);
  action.isActive = true;
  const shellPanel = (e.target as HTMLElement)?.parentElement?.parentElement;
  if (!action.isActive) {
    shellPanel?.setAttribute('collapsed', '');
  } else {
    shellPanel?.removeAttribute('collapsed');
  }
  return actions;
};

export const updateTheme = (theme: string, setTheme: React.Dispatch<string>) => {
  if (theme) {
    if (theme === 'dark') {
      setTheme('dark');
    }
    if (theme === 'light') {
      setTheme('light');
    }
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
      setTheme('dark');
    } else {
      theme = 'light';
      setTheme('light');
    }
  }
  document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
  document.body.classList.add(theme === 'light' ? 'light' : 'dark');

  const link = Array.from(document.head.querySelectorAll('link')).find((link: HTMLLinkElement) => {
    return link.href.includes(`${theme}/main.css`);
  });
  if (link) {
    document.head.appendChild(link);
  }

  if (window.matchMedia != undefined) {
    window.matchMedia('(prefers-color-scheme: dark)')?.addEventListener('change', (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      window.localStorage.setItem('imaps_theme', newTheme);
      document.body.classList.remove(newTheme === 'light' ? 'dark' : 'light');
      document.body.classList.add(newTheme === 'light' ? 'light' : 'dark');
      const link = Array.from(document.head.querySelectorAll('link')).find((link: HTMLLinkElement) => {
        return link.href.includes(`${newTheme}/main.css`);
      });
      if (link) {
        document.head.appendChild(link);
      }
    });
  }
};

export const windowResize = (
  actions: any[],
  width: number,
  setWidth: React.Dispatch<number>,
  setActions: React.Dispatch<any[]>,
) => {
  const activeActions = document.querySelectorAll('calcite-action[active]');
  activeActions.forEach((button) => {
    const action = actions.find((action) => {
      return action.title === button.getAttribute('text');
    });
    if (window.innerWidth >= 1000 && action?.isActive && width < 1000) {
      if (action.isTool) {
        (document.querySelector('calcite-shell-panel[slot=contextual-panel]') as HTMLElement)?.setAttribute(
          'collapsed',
          '',
        );
        action.isActive = false;
      }
    }
    if (window.innerWidth < 1000 && action?.isActive && width >= 1000) {
      if (action.isTool) {
        (document.querySelector('calcite-shell-panel[slot=primary-panel]') as HTMLElement)?.removeAttribute(
          'collapsed',
        );
        action.isActive = false;
      } else {
        (document.querySelector('calcite-shell-panel[slot=contextual-panel]') as HTMLElement)?.removeAttribute(
          'collapsed',
        );
      }
    }
  });
  setWidth(window.innerWidth);

  setActions([...actions]);
};
