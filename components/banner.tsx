import Image from "next/image";

function Banner() {
    return (
        <div className = "relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[700px]">
            <Image 
                src = 'https://images.unsplash.com/photo-1559767949-0faa5c7e9992?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
                layout = "fill"
                objectFit = "cover"
                />
            {/* parent must be relative for absolute positioning to work effectively */}
            <div className = "absolute top-1/2 w-full text-toppl-5 text-white sm:pt-[5rem] md:pt-17 lg:pt-[10rem] pl-5">
                <p className =" text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button className = "text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I am flexible</button>
            </div>
        </div>
    )
}

export default Banner