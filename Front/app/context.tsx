"use client"
import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import Offers from '../types/offer'
import Bids from '../types/bid'
import Reviwes from '../types/review'
import Reservations from '../types/reservations'
import Inbox from '../types/inbox'
import Users from '../types/user'
import Whishlist from '../types/wishlist'
import Notifications from '../types/notification';
import Satisfactions from '../types/satisfaction'
import Categories from '../types/categories';


interface DataContextValue {
    allOffers: Offers[]; 
    setOffers:React.Dispatch<React.SetStateAction<Offers[]>>;
    oneHouse:Offers[];
    setOneHouse:React.Dispatch<React.SetStateAction<Offers[]>>;
    bids:Bids[];
    setBids:React.Dispatch<React.SetStateAction<Bids[]>>;
    reviews:Reviwes[];
    setReviews:React.Dispatch<React.SetStateAction<Reviwes[]>>;
    reservations:Reservations[];
    setReservations:React.Dispatch<React.SetStateAction<Reservations[]>>;
    inbox:Inbox[];
    setInbox:React.Dispatch<React.SetStateAction<Inbox[]>>;
    categories:Categories[];
    setCategories:React.Dispatch<React.SetStateAction<Categories[]>>;
    users:Users[];
    setUsers:React.Dispatch<React.SetStateAction<Users[]>>;
    notifications:Notifications[];
    setNotifications:React.Dispatch<React.SetStateAction<Notifications[]>>;
    satisfactions:Satisfactions[];
    setSatisfactions:React.Dispatch<React.SetStateAction<Satisfactions[]>>;
    setOne:(id: number) => void
    loggedUser:Users[]  
  }
  interface DataProviderProps {
    children: ReactNode;  
  }
const DataContext = createContext<DataContextValue | undefined>(undefined);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {

const [allOffers,setOffers]=useState<Offers[]>([])
const [oneHouse,setOneHouse]=useState<Offers[]>([])
const [bids,setBids]=useState<Bids[]>([])
const [reviews,setReviews]=useState<Reviwes[]>([])
const [reservations,setReservations]=useState<Reservations[]>([])
const [inbox,setInbox]=useState<Inbox[]>([])
const [categories,setCategories]=useState<Categories[]>([])
const [users,setUsers]=useState<Users[]>([])
const [notifications,setNotifications]=useState<Notifications[]>([])
const [satisfactions,setSatisfactions]=useState<Satisfactions[]>([])
const [loggedUser,setLogged]=useState<Users[]>([])

const userId = localStorage.getItem('userId');

  useEffect(()=>{

    axios.get('http://localhost:3000/api/getcategorie/feature').then((res)=>setCategories(res.data))
    .catch((err)=>console.log(err))

    axios.get('http://localhost:3000/api/getAllReservations').then((res)=>setReservations(res.data))
    .catch((err)=>console.log(err))

    axios.get('http://localhost:3000/api/getAllOffers').then((res)=>setOffers(res.data))
    .catch((err)=>console.log(err))
    axios.get(`http://localhost:3000/api/oneUser/${userId&&userId}`).then((res)=>setLogged(res.data)).catch((err)=>console.log(err)
    )
    axios.get(`http://localhost:3000/api/getreviews/${oneHouse.idoffer}`).then((res)=>setReviews(res.data)).catch((err)=>console.log(err))
    
    },[oneHouse])
    
    const setOne=(id:number)=>{
      axios.get(`http://localhost:3000/api/getAllOffer/${id}`).then((res)=>setOneHouse(res.data)).catch((err)=>console.log(err)
      )
    }
    console.log("alloffers",allOffers)
    const value: DataContextValue = {
        allOffers,
        setOffers,
        oneHouse,
        setOneHouse,
        bids,
        setBids,
        reviews,
        setReviews,
        reservations,
        setReservations,
        inbox,
        setInbox,
        categories,
        setCategories,
        users,
        setUsers,
        notifications,
        setNotifications,
        satisfactions,
        setSatisfactions,
        setOne,
        loggedUser
      };


    return (
        <DataContext.Provider value={value}>
          {children}
        </DataContext.Provider>
      );
}
export { DataProvider, DataContext };










