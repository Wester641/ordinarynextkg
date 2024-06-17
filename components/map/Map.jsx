"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 42.886507,
  lng: 74.634774,
};

function MyMapComponent() {
  return (
    <div className="m-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-center text-3xl ">Местоположение компании</h1>
        <p className="text-sm text-start my-3">
          г. Бишкек, ул. Мусы Жалиля 223
        </p>
      </div>
      <LoadScript googleMapsApiKey="AIzaSyDMUn92YClkwFuvQJ1STWCKez-P0tq8UGM">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={10}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(MyMapComponent);
