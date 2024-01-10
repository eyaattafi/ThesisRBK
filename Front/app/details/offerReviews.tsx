const OfferReviews = () => {
    return ( 
    <div className="flex flex-col gap-10">
        <h1 className="font-bold text-xl">7 reviews</h1>
        <div className="flex flex-row gap-[150px]">
            <div className="w-[480px]">
                <div className="flex flex-row items-center gap-5">
                    <img className="w-16 h-16 border rounded-[200px]" src="https://i.pinimg.com/564x/aa/06/d7/aa06d77cd048b867f5d0b40362e62a76.jpg" alt="" />
                    <div>
                        <h1>user name</h1>
                        <span className="text-gray-500">date</span>
                    </div>
                </div>
                <div><p className="mt-[10px]">qsdqsdqsdqsdqsldknqsldqsldnqsldnlsqjdshflmqshfqlskdjqlmdhqlsdhqsl</p></div>
            </div>
            <div className="w-[480px]">
                <div className="flex flex-row items-center gap-5">
                    <img className="w-16 h-16 border rounded-[200px]" src="https://i.pinimg.com/564x/aa/06/d7/aa06d77cd048b867f5d0b40362e62a76.jpg" alt="" />
                    <div>
                        <h1>user name</h1>
                        <span className="text-gray-500">date</span>
                    </div>
                </div>
                <div><p className="mt-[10px]">qsdqsdqsdqsdqsldknqsldqsldnqsldnlsqjdshflmqshfqlskdjqlmdhqlsdhqsl</p></div>
            </div>
        </div>
        <hr className="w-[1160px] border-t border-gray-300 my-4" />
    </div> 
    );
}
 
export default OfferReviews;