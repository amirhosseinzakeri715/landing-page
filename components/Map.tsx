"use client"

import "leaflet/dist/leaflet.css"
import dynamic from "next/dynamic"
import { LatLngExpression } from "leaflet"

const MapContainer= dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer= dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
)

export default function Map() {
  const position: LatLngExpression= [48.2082, 16.3738]

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    </MapContainer>
  )
}