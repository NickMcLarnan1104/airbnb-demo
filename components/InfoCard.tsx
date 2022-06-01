import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        // container flex puts the text to the right of the images
        <div className='flex py-7 px-2 pr-4 border-b cursor-pointer 
            hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>

            {/* first div */}
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
                 <Image src={img} layout='fill' objectFit='cover' className='rounded-2xl' />
                
            </div>

            {/* second div - container */}
            <div className='flex flex-col flex-grow pl-5'>
                {/* flex to get them next to each other and justify-between to space it out */}
                <div className='flex justify-between'>
                    {/* insert location from server */}
                    <p>{location}</p>
                    {/* insert heart icon */}
                    <HeartIcon className='h-7 cursor-pointer' />
                </div>

                <h4 className='text-xl'>{title}</h4>
                {/* this adds a nice border under the title. it is self closing */}
                <div className='border-b w-10 pt-2' />

                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

                <div className='flex justify-between items-end pt-5'>
                    <p className='flex items-center'>
                        {/* the reason it is at the bottom is because flex grow above. 
                            it gives that p text space so the star goes to the bottom  */}
                        <StarIcon className='h-5 text-red-400' />
                        {star}
                    </p>

                    <div className=''>
                        <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
                        <p className='text-right font-extralight'>{total}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoCard;