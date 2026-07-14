import "@arcgis/map-components/components/arcgis-map";
import "./App.css";
import MapProvider from "./context/MapProvider";
import Shell from "./components/Shell";
import AppAlert from "./components/AppAlert";

function App() {
  return (
    <MapProvider>
      <>
        <Shell></Shell>
        <AppAlert></AppAlert>
      </>
    </MapProvider>
  );
}

export default App;
