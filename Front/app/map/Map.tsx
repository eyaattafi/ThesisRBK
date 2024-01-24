"use client"
import { LatLngTuple } from 'leaflet'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet"
import AllOffersMap from './AllOffersMap'
import OneOfferTraget from './OneOfferTraget'
import { DataContext } from "../context";
import { useContext, useState } from 'react'

const DefaultIcon = new L.Icon({
    iconUrl:"/home.png",
    iconSize: [30, 30],
    color:"red",
    iconAnchor:[10,41],
    popupAnchor:[10,-40]
  });
  


const Map = ()=>{
    const context=useContext(DataContext)
    const oneOffer:any=context?.oneHouse
    const position:LatLngTuple  = [Number(oneOffer.latitude),Number( oneOffer.longitude)]
    return (
        <MapContainer center={position} zoom={9} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <h1 src="/logo.png">Rentavilla Map</h1> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       <OneOfferTraget/>
      {/*  <AllOffersMap/> */}
      </MapContainer>
    )
}

L.Marker.prototype.options.icon=DefaultIcon

export default Map 