import AllOffers from "./allOffers";
import AllRegions from "./allRegions";
import Help from "./help";
import HostManage from "./hostManageComp";
import Weofferhelp from "./weofferhelp";
import YourOffers from "./yourOffers";

const page = () => {
    return ( 
        <div>
    <div className="mt-[30px] ml-[170px]">
        <HostManage/>
    </div>
    <div className="mt-[70px] ml-[10px]"><YourOffers/></div>
    <div className="mt-[70px] ml-[100px]"><AllRegions/></div>
    <div className="mt-[70px] ml-[10px]"><AllOffers/></div>
    <div className="mt-[70px] ml-[100px]"><Weofferhelp/></div>
    </div>
     );
}
 
export default page;