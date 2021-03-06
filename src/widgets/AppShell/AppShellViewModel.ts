/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import { Action } from '../Action';
import Widget from '@arcgis/core/widgets/Widget';

@subclass('app.widgets.AppShell.AppShellViewModel')
export default class AppShellViewModel extends Widget {
	@property() view!: esri.MapView | esri.SceneView;
	@property() map!: esri.Map | esri.WebMap;
	@property() leftActions!: Action[];
	@property() rightActions!: Action[];
	@property()
	selectedAction!: Action;
	@property()
	title!: string;
	@property()
	container!: string;
	constructor(params?: any) {
		super(params);
	}
	viewCreated = (): void => {
		whenDefinedOnce(this, 'view', this.init.bind(this));
		whenDefinedOnce(this, 'rightActions', this.rightActionsInit.bind(this));
	};

	actionClicked = (event: Event) => {
		let action = this.rightActions.find((action: Action) => {
			return action.container === (event.currentTarget as any).value;
		}) as Action;

		if (!action) {
			action = this.leftActions.find((action: Action) => {
				return action.container === (event.currentTarget as any).value;
			}) as Action;
		}
		action.widget.container = action.container;
		document
			.getElementById(action.container)
			?.closest('.panel')
			?.querySelectorAll('calcite-panel')
			.forEach((panel) => {
				panel.setAttribute('dismissed', '');
			});

		if ((event.target as HTMLElement).classList.contains('active')) {
			(event.target as HTMLElement).classList.remove('active');
			document.getElementById(action.container)?.closest('calcite-panel')?.setAttribute('dismissed', '');
		} else {
			action.widget.container
				.closest('.panel')
				?.querySelector(`calcite-action.active`)
				?.classList.remove('active');
			(event.target as HTMLElement).classList.add('active');

			document.getElementById(action.container)?.closest('calcite-panel')?.removeAttribute('dismissed');
		}
	};

	actionCreated = (element: Element): void => {
		// const observer: MutationObserver = new MutationObserver((mutations) => {
		// 	mutations.forEach((mutation) => {
		// 		(mutation.addedNodes[0] as HTMLElement)
		// 			?.querySelector('calcite-icon')
		// 			?.setAttribute('part', 'actionicon');
		// 	});
		// 	observer.disconnect();
		// });
		setTimeout(() => {
			element.shadowRoot?.querySelector('calcite-icon')?.setAttribute('part', 'actionicon');
			//observer.observe(element.shadowRoot as Node, { childList: true });
		}, 1000);
	};

	actionPanelCreated = (element: Element) => {
		element.addEventListener('calcitePanelDismissedChange', () => {
			element.closest('calcite-shell-panel')?.setAttribute('collapsed', '');
		});
		const observer: MutationObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				(mutation.addedNodes[0] as HTMLElement)
					.querySelector('.content-container')
					?.setAttribute('style', 'height: 100%');
			});
			observer.disconnect();
		});
		setTimeout(() => {
			observer.observe(element?.shadowRoot as Node, { childList: true });

			this.resize();
		}, 1000);
	};

	init(view: esri.MapView | esri.SceneView) {
		view.container = document.querySelector('#viewDiv') as HTMLDivElement;
	}
	rightActionsInit() {
		this.emit('ui-loaded', null);
		setTimeout(() => {
			debugger;
			const action = document.querySelector('calcite-action[text="Property Search"]');
			if (!action?.classList.contains('active')) {
				action?.closest('calcite-action.active')?.classList.remove('active');
				action?.classList.add('active');
				const panel = action?.closest('.panel')?.querySelector('calcite-panel[dismissed]');
				action
					?.closest('.panel')
					?.querySelector('calcite-panel:not([dismissed])')
					?.setAttribute('dismissed', '');
				panel?.removeAttribute('dismissed');
			}
		}, 1000);
	}

	resize = () => {
		if (window.innerWidth >= 1000) {
			const actionbar = document?.querySelector('calcite-action-bar:first-child');
			document
				?.querySelector('calcite-action-bar:last-child')
				?.querySelectorAll('.tool-action')
				?.forEach((action) => {
					actionbar?.append(action);
				});
			const panel = document?.querySelector('.panel:first-child');
			document?.querySelectorAll('calcite-panel.tool-container')?.forEach((container) => {
				panel?.append(container);
			});
		} else {
			const actionbar = document?.querySelector('calcite-action-bar:last-child');
			document
				?.querySelector('calcite-action-bar:first-child')
				?.querySelectorAll('.tool-action')
				?.forEach((action) => {
					actionbar?.append(action);
					action.addEventListener('click', this.actionClicked);
				});
			const panel = document?.querySelector('.panel:last-child');
			document?.querySelectorAll('calcite-panel.tool-container')?.forEach((container) => {
				panel?.insertBefore(container, panel.querySelector('calcite-action-bar'));
			});
		}
	};
}
