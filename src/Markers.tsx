import React from "react";
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { Location } from "./types";

const Markers = (props: { locations: Location[] }) => {
  return (
    <>
      {props.locations.map((location: Location) => (
        <AdvancedMarker key={location.key} position={location.location}>
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default Markers;
