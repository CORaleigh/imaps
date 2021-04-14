/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
    const panel = shellPanel?.querySelector('calcite-panel');
    debugger;
    if (!action.isActive) {
        shellPanel?.setAttribute('collapsed', '');
        panel?.setAttribute('dismissed', '');
    } else {
        shellPanel?.removeAttribute('collapsed');
        panel?.removeAttribute('dismissed');
    }

    return actions;
};
