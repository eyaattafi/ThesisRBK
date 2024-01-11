import BidCard from "./bidCard";
import HouseDescription from "./housedescription";
import OfferMap from "./offerMap";
import OfferReviews from "./offerReviews";
import PlaceFeatures from "./placeFeatures";
import RelatedOffers from "./relatedOffers";
import ReservationCard from "./reservationCard";
import TitleNimg from "./titleAndimg";

const page = () => {
    return ( 
    <div className="flex flex-col relative">
       <div className="ml-[20px]"> <TitleNimg/> </div> 
       <div className="flex flex-row justify-between mt-[50px] ml-[135px]">
            <HouseDescription/>
            <BidCard/>
       </div>
       <div className="mt-[30px] ml-[135px]"><RelatedOffers/></div>
       <div className="mt-[30px] ml-[135px]"><PlaceFeatures/></div>
       <div className="mt-[30px] ml-[135px]"><OfferReviews/></div>
       <div className="mt-[30px] ml-[135px]"><OfferMap/></div>
    </div>
     );
}
 
export default page;
