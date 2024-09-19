export interface Alert {
  show: boolean;
  kind: 'brand' | 'danger' | 'info' | 'success' | 'warning' | undefined;
  icon: string;
  autoClose: boolean | undefined;
  duration: 'fast' | 'medium' | 'slow' | undefined;
  title: string;
  message: string;
  link?: link;
  optOut?: boolean;
}

interface link {
  show: boolean;
  url: string;
  text: string;
}
