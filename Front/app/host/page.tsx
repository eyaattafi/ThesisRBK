import AllOffers from "./allOffers";
import AllRegions from "./allRegions";
import Help from "./help";
import HostManage from "./hostManageComp";
import Weofferhelp from "./weofferhelp";
import YourOffers from "./yourOffers";
import Satisfaction from './Satisfaction'
import DropDown from "../Notification/DropDown";

const page = () => {
    return ( 
        <div>
             <DropDown/>
    <div className="mt-[30px] ml-[190px]">
        <HostManage/>
    </div>
    <div className="mt-[70px] ml-[10px]"><YourOffers/></div>
    <div className="mt-[70px] ml-[100px]"><AllRegions/></div>
    <div className="mt-[70px] ml-[10px]"><AllOffers/></div>
    <div className="mt-[70px] ml-[100px] mb-6"><Weofferhelp/></div>
    <Satisfaction/>
    </div>
     );
}
 
export default page;