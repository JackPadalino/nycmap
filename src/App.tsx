import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Markers from "./Markers";
import { locations } from "./types";

function App() {
  return (
    <>
      <h1>This is the map app</h1>
      <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
        <Map
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <Markers locations={locations} />
        </Map>
      </APIProvider>
    </>
  );
}

export default App;
