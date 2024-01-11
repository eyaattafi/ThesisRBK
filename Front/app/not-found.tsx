



export default function NotFound(){

    return (
        <div className="bg-white text-orange-950 font-sans">

            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-9xl font-bold mb-4">404</h1>
                    <p className="text-lg mb-4">Oops! The page you're looking for could not be found.</p>
                    <a href="/" className="bg-orange-950 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Go Home</a>
                </div>
            </div>

        </div>
    )
}