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
  if (action.isActive) {
    action.isActive = false;
  } else {
    deactivateActions(actions, action.isTool);
    action.isActive = true;
  }
  const shellPanel = e.target.closest('calcite-shell-panel');

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
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    if (media.addEventListener != undefined) {
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

    document.querySelectorAll('calcite-action-bar').forEach((bar) => {
      if (bar) {
        bar.expandDisabled = window.innerWidth <= 500;
      }
    });
  });
  console.log(width, window.innerWidth);
  setWidth(window.innerWidth);
  setActions([...actions]);
};

export const maximizePropertySearch = (action: HTMLCalciteActionElement) => {
  let offset = 0;
  const primary: HTMLCalciteShellPanelElement = document.querySelector(
    'calcite-shell-panel[slot=primary-panel]',
  ) as HTMLCalciteShellPanelElement;
  if (!primary?.collapsed) {
    offset += primary.clientWidth;
  }
  const primaryBar = primary.querySelector('calcite-action-bar');
  if (primaryBar) {
    offset += primaryBar?.clientWidth;
  }
  const context: HTMLCalciteShellPanelElement = document.querySelector(
    'calcite-shell-panel[slot=contextual-panel]',
  ) as HTMLCalciteShellPanelElement;
  const contextBar = context.querySelector('calcite-action-bar');
  if (contextBar) {
    offset += contextBar?.clientWidth;
  }
  let width = `calc(90vw - ${offset}px)`;

  if (action.icon === 'right-edge') {
    action.icon = 'left-edge';
    width = '350px';
  } else {
    action.icon = 'right-edge';
  }
  const panel = action.closest('calcite-shell-panel');
  panel?.shadowRoot
    ?.querySelector('.content')
    ?.setAttribute(
      'style',
      `max-width: ${width}; width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;`,
    );
  const tabnav = panel?.querySelector('calcite-tab-nav');
  panel?.querySelectorAll('calcite-tab').forEach((tab: HTMLCalciteTabElement) => {
    tab?.setAttribute('style', `max-width: ${width}`);
  });
  tabnav?.setAttribute('style', `max-width: ${width}`);

  const tabTitle = document.querySelector('calcite-tab-title[active]') as HTMLCalciteTabTitleElement;
  const inactiveTabTitle = document.querySelector('calcite-tab-title:not([active])') as HTMLCalciteTabTitleElement;
  if (tabTitle) {
    setTimeout(() => {
      const ev = new KeyboardEvent('keydown', {
        altKey: false,
        bubbles: true,
        cancelable: true,
        charCode: 0,
        code: 'Enter',
        composed: true,
        ctrlKey: false,
        detail: 0,
        isComposing: false,
        key: 'Enter',
        keyCode: 13,
        location: 0,
        metaKey: false,
        repeat: false,
        shiftKey: false,
      });
      inactiveTabTitle?.dispatchEvent(ev);
      tabTitle?.dispatchEvent(ev);
    }, 250);
  }
};

//activate PropertySearch on load and on geometry updates
export const activatePropertySearch = (actions: any[]): HTMLElement => {
  const active = actions.find((action) => {
    return action.isActive; // && window.innerWidth <= 1000;
  });
  if (active) {
    //&& window.innerWidth < 1000) {
    active.isActive = false;
  }
  const search = actions.find((action) => {
    return action.title === 'Property Search';
  });

  if (search) {
    search.isActive = true;
  }
  const container = document.getElementById(search?.container as string);
  if (container) {
    const panel: HTMLDivElement = container?.closest('.action-panel') as HTMLDivElement;
    panel.hidden = false;
    const shell = container?.closest('calcite-shell-panel');
    shell?.removeAttribute('collapsed');
  }
  return container as HTMLElement;
};

export const formatShellPanelContent = () => {
  document.querySelectorAll('calcite-shell-panel').forEach((panel) => {
    const observer: MutationObserver = new MutationObserver((mutations) => {
      if (mutations.length) {
        let width = '350px';
        if (window.innerWidth <= 500) {
          width = 'calc(90vw - 50px)';
        }
        panel?.shadowRoot
          ?.querySelector('.content')
          ?.setAttribute(
            'style',
            `max-width: ${width}; width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;`,
          );
        document.querySelectorAll('calcite-action-bar').forEach((bar) => {
          if (bar) {
            bar.expandDisabled = window.innerWidth <= 500;
          }
        });
        observer.disconnect();
      } else {
        observer.disconnect();
      }
    });
    observer.observe(panel?.shadowRoot as Node, { childList: true });
  });
};
