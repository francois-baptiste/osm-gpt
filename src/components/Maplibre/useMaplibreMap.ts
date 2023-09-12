import { useEffect, useRef, useState } from "react";
import mapgl from "maplibre-gl";

function useMapboxMap(options: any) {
  const [map, setMap] = useState<any | null>(null);
  const [maploaded, setMaploaded] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!options?.renderMap || !!map) return;

    const mapInstance = new mapgl.Map(
      {
        container: mapRef.current!,
        preserveDrawingBuffer: true,
        style: 'https://www.zeroimmo.com/out/style.json',
        center: [0, 0],
        zoom: 1
      }
    );
    // mapInstance.addControl(
    //   new mapgl.NavigationControl(),
    //   'top-left'
    // );

    mapInstance.on("load", () => {
      setMaploaded(true);
    });

    setMap(mapInstance);
  }, [options]);

  return { map, mapRef, maploaded };
}

export default useMapboxMap;
