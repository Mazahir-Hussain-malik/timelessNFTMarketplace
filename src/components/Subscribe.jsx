import SubscribeImage from "./../assets/subscribe_img.png"
const Subscribe = () => {
    return (
        <div className="py-12 " >
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6">
                <div className="w-full md:w-1/2 bg-transparent shadow-none text-white">
                    <div className="">
                        <h3 className="md:text-4xl text-2xl font-bold mb-4 ">Never miss a drop!</h3>
                    </div>
                    <div>
                        <p className=" mb-6">
                            Subscribe to our super-exclusive drop list and be the first to know about upcoming drops.
                            
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">01</span>
                                Get more discount
                            </li>
                            <li className="flex items-center">
                                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded mr-2">02</span>
                                Get premium magazines
                            </li>
                        </ul>
                        <div className="flex">
                            <input type="email" placeholder="Enter your email" className="rounded-full rounded-r-none" />
                            <button type="submit" className="rounded-l-none bg-green-600 px-2 py-2 rounded-full">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <img
                        src={SubscribeImage}
                        alt="People reading books"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Subscribe;