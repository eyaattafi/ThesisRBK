import Map from "../map/Map";
const OfferMap = () => {
    return ( 
    <div className="flex flex-col gap-5 mb-12">
        <h1 className="font-bold text-xl">Where you'll be</h1>
        <div className="ml-[100px] w-[1000px] h-[500px] bg-green-300 border rounded-[10px]">
            <Map/>
        </div>
    </div>
     );
}
 
export default OfferMap;