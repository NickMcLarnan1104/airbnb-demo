import Image from "next/image";
// Import many icons
import { SearchIcon,
         MenuIcon,
         UserCircleIcon,
         GlobeAltIcon,
         UsersIcon,   
        } from '@heroicons/react/solid'

function Header() {
    return (
        <header className = 'sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

            {/* left - logo */}
            <div className = "relative flex items-center h-10 cursor-pointer my-auto">
                <Image src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
                    // without layout - it would be compressed and it would give an error.
                       layout = 'fill' 
                       objectFit = "contain" // this will make thw image not stretch
                       objectPosition = {'left'}
                       />
            </div>

            {/* middle - search */}
            <div className = "flex items-center rounded-full py-2 md:shadow-sm md:border-2">
                {/* Enter a input element with a placeholder. Call 'SearchIcon' module installed earlier */}
                <input type="text" placeholder = "Start your search" className = 'pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' 
            
                 />
                <SearchIcon className = "hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md: mx-2" /> 
            </div>

            {/* right */}
            <div className = "flex space-x-4 items-center justify-end text-gray-500">
                <p className = 'text-center hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className = "h-6 cursor-pointer" />
                <div className = "flex items-center border-2 rounded-full cursor-pointer space-x-2 p-1">
                    <MenuIcon className = "h-6 cursor-pointer" />
                    <UserCircleIcon className = "h-6 cursor-pointer"  />
                </div>
                

            </div>

        </header>
    )
}

export default Header