import { AlertDuration } from "@esri/calcite-components/dist/types/components/alert/interfaces";

export interface Alert {
    show: boolean;
    kind: "brand" | "danger" | "info" | "success" | "warning" | undefined;
    autoDismiss: boolean | undefined;
    duration: AlertDuration | undefined;
    title: string;
    message: string;
    link?: link;
}

interface link {
    show: boolean;
    url: string;
    text: string;
}

