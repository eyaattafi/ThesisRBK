import { PiHouseLine } from "react-icons/pi";
import { BsDoorOpen } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";


const HouseDescription = () => {
    return ( 
    <div>
        <div className="flex flex-row justify-between w-[680px] h-[80px] border-b border-gray-300">
            <div className="flex flex-col">
                <h1 className="font-bold text-xl">entire rental home hosted by user</h1>
                <h2>2 guests . 1 bedroom . 1 bed . 1 bathroom </h2>
            </div>
            <div className=""><img 
            src="https://th.bing.com/th/id/R.5d2640166fb9248ee7ae20cbc19a9141?rik=QcfC8%2ft8rnv%2foQ&pid=ImgRaw&r=0" 
            alt="" 
            className="w-16 h-16 rounded-[300px]"
            /></div>
        </div>
        <div className="mt-[30px] flex flex-col gap-8">
            <div className="flex flex-row items-center"><PiHouseLine size={32} />
                <div className="ml-[15px]">
                    <h1 className="font-bold">enitre home</h1>
                    <h1 className="text-gray-500">you'll have the apartment to yourself</h1>
                </div>
            </div> 
            <div className="flex flex-row items-center"><BsDoorOpen size={32}/>
                <div className="ml-[15px]">
                    <h1 className="font-bold">self check-in</h1>
                    <h1 className="text-gray-500">check yourself in with the keypad</h1>
                </div>
            </div> 
            <div className="flex flex-row items-center"><SlCalender size={32}/>
                <div className="ml-[15px]">
                    <h1 className="font-bold">free cancelation</h1>
                </div>
            </div>
            <hr className="w-[680px] border-t border-gray-300 my-4" />
            <div className="w-[680px]"><p>Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available...</p>
            <button className="underline mt-[30px]">show more </button>
            </div>
            <hr className="w-[680px] border-t border-gray-300 my-4" />
        </div>
    </div> );
}
 
export default HouseDescription;
