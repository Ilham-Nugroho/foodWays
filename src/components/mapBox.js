import React, { useRef, useEffect, useState } from "react";

import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoiaWxoYW1udWdyb2hvIiwiYSI6ImNrbWF0cnc4dzF2ZTIycW42d3Z1OGRlaWMifQ.L3eC6H2YnCccMaOGuYBMtA";

const Map = () => {
  const mapContainer = useRef();
  const [lng, setLng] = useState(119.40052796610973);
  const [lat, setLat] = useState(-5.143995636239279);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    return () => map.remove();
  }, []);

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
};

export default Map;
