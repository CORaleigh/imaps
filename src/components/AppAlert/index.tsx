import "@esri/calcite-components/components/calcite-alert";

import { useMap } from "../../context/useMap";

const AppAlert = () => {
  const { alert } = useMap();

  return (
    <calcite-alert
      key={alert.id}
      icon={alert.icon}
      kind={alert.kind}
      open={alert.show}
      label={alert.title}
      autoCloseDuration={alert.autoCloseDuration}
      autoClose={alert.autoClose}
    >
      <div slot="title">{alert.title}</div>
      <div slot="message">{alert.message}</div>
    </calcite-alert>
  );
};

export default AppAlert;
