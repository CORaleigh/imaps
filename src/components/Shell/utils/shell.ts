import MapView from "@arcgis/core/views/MapView";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";

export const toolSelected = (
  tool: string,
  activeTool: string,
  setActiveTool: Function,
  setActivePanel: Function,
  activePanelChanged: Function,
  activeToolChanged: Function
) => {
  const panel = document.getElementById(
    `${tool}-panel`
  ) as HTMLCalcitePanelElement;
  if (panel) {
    const action = panel.querySelector("calcite-action");
    if (action) {
      action.icon = "chevron-up";
    }
    panel?.shadowRoot
      ?.querySelector(".content-container")
      ?.setAttribute("style", "display:flex");
  }
  activeTool === tool ? setActiveTool("") : setActiveTool(tool);
  activeToolChanged(activeTool === tool ? "" : tool);

  if (window.innerWidth < 735) {
    setActivePanel("");
    activePanelChanged("");
  }
}

export const panelSelected = (
  panel: string,
  activePanel: string,
  setActiveTool: Function,
  setActivePanel: Function,
  activePanelChanged: Function,
  activeToolChanged: Function
) => {
  activePanel === panel ? setActivePanel("") : setActivePanel(panel);

  activePanelChanged(activePanel === panel ? "" : panel);
  // if (window.innerWidth < 735) {
  //   setActiveTool("");
  //   activeToolChanged("");
  // }
}

const collapse = (
  panel: HTMLCalcitePanelElement,
  action: HTMLCalciteActionElement
) => {
  if (action.icon === "chevron-up") {
    panel?.shadowRoot
      ?.querySelector(".content-container")
      ?.setAttribute("style", "display:none");
    action.icon = "chevron-down";
  } else if (action.icon === "chevron-down") {
    panel?.shadowRoot
      ?.querySelector(".content-container")
      ?.setAttribute("style", "display:flex");
    action.icon = "chevron-up";
  }
}
export const  collapsePanel = (e: any) => {
  collapse(e.target.parentElement, e.target);
}

export const mapViewSet = (
  view: MapView,
  setView: Function,
  setLoading: Function,
  setAlert: Function
) => {
  const start = Date.now();

  const topright = document.querySelector(".esri-ui-top-right");
  const tools = document.querySelector(".tools");
  topright?.append(tools as any);
  view.when(async () => {
    setView(view);
    

    checkForPropertyService(view, setLoading, start, setAlert);
    const url = new URL(window.location as any);
    if (url.searchParams.get('config')) {
      const config = url.searchParams.get('config');
      if (config === 'puma') {
        const vpn: boolean = await checkVpn();
        if (!vpn) {
          sendAlert("To view utility layers, you must be connected to the city network or connected through VPN. You will be redirected to the public iMAPS.","Not on City Network or VPN.",setAlert, setLoading);
          setTimeout(() => {
            window.location.href = 'https://coraleigh.github.io/imaps';
          }, 10000);
    
        }
      }
    }


  });
  return view;
}

const checkForPropertyService = async (
  view: MapView,
  setLoading: Function,
  start: number,
  setAlert: Function
) => {

  const propertyLayer = view.map.allLayers.find((layer) => {
    return layer.title.includes("Property") && layer.type !== 'group';
  });
  const tables = view.map.allTables.filter((table) => {
    return (
      table.title.includes("Condo") ||
      table.title.includes("Address") ||
      table.title.includes("Photo")
    );
  });
  if (!tables.length || !propertyLayer) {
    sendAlert("The property layer did not load, please report this issue to the iMAPS Helpdesk.","Property Layer Did Not Load",setAlert, setLoading);
  } else {
    try {
      const layerView = await view.whenLayerView(propertyLayer);
      await reactiveUtils.whenOnce(() => !layerView.updating);
      setLoading(false);
      console.log(Date.now() - start);
    } catch (error) {
      console.log(error);
      sendAlert("The property layer did not load, please report this issue to the iMAPS Helpdesk.","Property Layer Did Not Load",setAlert, setLoading);
    }
  }
}

const checkVpn = async () => {

      try {
        await fetch('https://gis.raleighnc.gov/arcgis/rest?f=json', {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            "Content-Type": 'application/json'
          }
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }

}

const sendAlert = (
  message: string,
  title: string,
  setAlert: Function,
  setLoading: Function
) => {
  const alert = {
    show: true,
    autoClose: false,
    duration: "long",
    kind: "danger",
    icon: "error",
    title: title,
    message:
      message,
    link: {
      text: "",
      url: "",
      show: false,
    },
  };
  setAlert(alert);
  setLoading(false);
}

export const widgetActivated = (view: MapView, setActiveTool: Function) => {
  (view as any).activeTool = null;
  setActiveTool("");
}

export const getDistinctProperties = (
  feature: __esri.Graphic,
  condos: __esri.Graphic[]
) => {
  const pins: string[] = [];
  const properties = condos.filter((condo) => {
    if (pins.includes(condo.getAttribute("PIN_NUM"))) return false;
    if (feature) {
      if (condo.getAttribute("PIN_NUM") === feature.getAttribute("PIN_NUM")) {
        condo.setAttribute("selected", 1);
      } else {
        condo.setAttribute("selected", 2);
      }
    } else {
      condo.setAttribute("selected", 2);
    }
    pins.push(condo.getAttribute("PIN_NUM"));
    return true;
  });
  return properties;
};
