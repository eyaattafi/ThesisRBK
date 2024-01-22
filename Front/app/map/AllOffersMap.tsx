"use client"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import { useContext, useEffect } from "react"
import L from "leaflet";
import { useMap } from "react-leaflet";
import { DataContext } from "../context";

export default function AllOffersMap(){

const context=useContext(DataContext)

const map=useMap()
    useEffect(()=>{
         L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e) {
                
             const lat_lng=e.geocode.center
            // console.log(typeof(lat_lng.lat))
             L.marker(lat_lng).addTo(map).bindPopup(e.geocode.name).openPopup();
             map.fitBounds(e.geocode.bbox);
         //    console.log(e.geocode.bbox)
            })
            .addTo(map);
            },[])

    return null

}