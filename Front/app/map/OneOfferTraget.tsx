import { use, useEffect, useState } from "react"
import L from 'leaflet'
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import { useMap } from "react-leaflet"
import { DataContext } from "../context";
import { useContext } from 'react'

export default function OneOfferTraget(){
    const map=useMap()
    const context=useContext(DataContext)
    const oneOffer:any=context?.oneHouse

    useEffect(()=>{
  
        var marker1 = L.marker([Number(oneOffer.latitude),Number( oneOffer.longitude)]).addTo(map);
        map.on('click',(e)=>{
            
            L.Routing.control({
                waypoints: [
                
                  L.latLng(Number(oneOffer.latitude),Number( oneOffer.longitude)),
                  L.latLng(e.latlng.lat,e.latlng.lng)
                ],
                lineOptions:{
                    styles:[{color:"brown"}]
                },
                routeWhileDragging:false,
                geocoder: L.Control.Geocoder.nominatim(),
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: true,
                showAlternatives: true,
              }).addTo(map);

        })
       

    },[])
    return null
}