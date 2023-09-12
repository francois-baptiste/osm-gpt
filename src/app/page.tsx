/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import SplashWindow from "@/components/SplashWindow";
import { motion as m } from "framer-motion";
import HomeMap from "@/components/Home/Map";
//import Sidebar from "@/components/Home/Sidebar";
import useMapboxMap from "@/components/Maplibre/useMaplibreMap";
//import { useIsLarge } from "@/hooks/useMediaQuery";
import { ChevronLeftSquare, ChevronRightSquare, Play } from "lucide-react";


export type dynamicgeojson = {
  [key: string]: any;
};

export interface layer {
  name: string;
  geojson: dynamicgeojson;
  color: string;
  id: string;
  containingGeometries: {
    visibleOnMap: boolean;
    type: string;
  }[];
  bbox: number[];
}

export type ContainingGeometries = layer["containingGeometries"];

const mapopts = {
  center: [85.3652949, 27.7420354],
  zoom: 12,
  pitch: 0,
  maxzoom: 25,
};

export default function Home() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const timerInstance = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timerInstance);
  }, []);

  const { map, mapRef, maploaded } = useMapboxMap({
    ...mapopts,
    renderMap: !showSplash,
  });

  const [layers, setLayers] = useState<layer[]>([]);
  if (showSplash) return <SplashWindow />;

  return (
    <div className="w-screen h-screen flex relative">
      <>
        <m.div
          // initial={{ width: "0%" }}
          // animate={{ width: "75%" }}
          // transition={{ duration: 0.3 }}
          className={`map w-full = w-full lg:w h-screen overflow-hidden`}
        >
          <HomeMap
            map={map}
            mapRef={mapRef}
            maploaded={maploaded}
            layers={layers}
            setLayers={setLayers}
          />
        </m.div>
      </>
    </div>
  );
}
