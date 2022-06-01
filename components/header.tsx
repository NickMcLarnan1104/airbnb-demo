import Image from 'next/image';
// Import many icons
import { SearchIcon,
         MenuIcon,
         UserCircleIcon,
         GlobeAltIcon,
         UsersIcon,   
        } from '@heroicons/react/solid'
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({ placeholder }) {

    // const searchInput = '';
    // useState is a function, so we have parenthesis
    // connect with our input\
    // empty string is our default value
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const router = useRouter()
    

    // create function to handle the date selection process. (used later in code)
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    };
    
    // all i did was reset the searchInput variable to an empty string. which deactivates 
    // create a function to reset search input
    const resetInput = () => {
        setSearchInput('');
    }

    // create function that goes to search page
    const search = () => {
        router.push({
            // this pathname will always be search along with changing variables below.(depending on users)
            pathname: '/search',
            query: {
                // pushes our location to our router(aka: http://localhost:3000/)
                location: searchInput,
                // pushes our start date to our router(aka: http://localhost:3000/)
                startDate: startDate.toISOString(),
                // pushes our end date to our router(aka: http://localhost:3000/)
                endDate: endDate.toISOString(),
                // pushes our num of guests to our router(aka: http://localhost:3000/)
                numberOfGuests
            }
        })
     }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        // we pass this key above
        key: 'selection'
    };

    return (
        <header className = 'sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

            {/* left - logo */}
            {/* the onClick property will push the page onto our 'history' */}
            <div onClick={() => router.push('/')} /* Were basically saying 'go to home screen' */
                 className = 'relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
                    // without layout - it would be compressed and it would give an error.
                       layout = 'fill' 
                       objectFit = 'contain' // this will make the image not stretch
                       objectPosition = {'left'}
                       />
            </div>

            {/* middle - search */}
            <div className = 'flex items-center rounded-full py-2 md:shadow-sm md:border-2'>
                {/* Enter a input element with a placeholder. Call 'SearchIcon' module installed earlier */}
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type='text' placeholder = {placeholder || 'Start your search'} className = 'pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' 
            
                 />
                <SearchIcon className = 'hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' /> 
            </div>

            {/* right */}
            <div className = 'flex space-x-4 items-center justify-end text-gray-500'>
                <p className = 'text-center hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className = 'h-6 cursor-pointer' />
                <div className = 'flex items-center border-2 rounded-full cursor-pointer space-x-2 p-1'>
                    <MenuIcon className = 'h-6 cursor-pointer' />
                    <UserCircleIcon className = 'h-6 cursor-pointer'  />
                </div>
            </div>

            {/* if searchInput(truthy) has a value, display this h1 tag. */}
            {searchInput && /* use parenthesis since it is on more than 1 line. */ (
                <>
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker ranges={[selectionRange]}
                        // set minDate as new Date(), which is current running time. 
                        minDate={new Date()}
                        // rangeColors is a way to change the color scheme of the calender
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect} />
                    {/* remember: container is flex-col so this div will go right below the daterangepicker */}
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of guests</h2>

                        <UsersIcon className='h-5' />
                        <input value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} 
                        type="number" className='w-12 pl-2 text-lg outline-none text-red-400' min={1}
                        />
                    </div>
                    {/* two buttons */}
                    <div className='flex'>
                        {/* flex-grow evenly spaces them within the container. fully spaces(grows) them */}
                        {/* you can also use justify-around */}
                        {/* This function clears our searchInput field */}
                        <button onClick={resetInput} 
                                className='flex-grow text-gray-500'>Cancel</button>
                        
                        {/* Add onClick so when we click search we will go to another  */}
                        <button onClick={search} className='flex-grow text-red-400'>Search</button>
                    </div>
                </div>
                
                
                </>
            )}

        </header>
    )
}

export default Header