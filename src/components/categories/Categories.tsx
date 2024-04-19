import More from '../../../public/more-horizontal.svg';
import Line from '../../../public/lineDecoration.svg';
import ThumbsUp from '../../../public/thumbs-up.svg';
import Dollar from '../../../public/dollar-sign.svg';
import Compass from '../../../public/compass.svg';
import Home from '../../../public/home.svg';
import Image from 'next/image';

export default function Categories() {
    return (
        <section>
            <div className="flex flex-col gap-3 items-center justify-center w-full h-16">
                <h1 className='text-3xl pt-20'>Browse From Top Categories</h1>
                <Image src={Line} alt={''} />
                <div className='flex flex-row justify-around gap-5 w-[80dvw] mx-auto flex-wrap'>
                    <div className='flex flex-row gap-2 items-center rounded-full border border-[#E8E8E8] p-2'>
                        <Image src={ThumbsUp} alt={''} className='bg-[#FDEBEC] p-2 w-10 h-10 rounded-full' />
                        <h1 className='text-sm text-[#1C1C1C] font-medium'>Holiday Rentals</h1>
                    </div>
                    <div className='flex flex-row gap-2 items-center rounded-full border border-[#E8E8E8] p-2'>
                        <Image src={Home} alt={''} className='bg-[#F1F8ED] p-2 w-10 h-10 rounded-full' />
                        <h1 className='text-sm text-[#1C1C1C] font-medium'>Residential Spaces</h1>
                    </div>
                    <div className='flex flex-row gap-2 items-center rounded-full border border-[#E8E8E8] p-2'>
                        <Image src={Compass} alt={''} className='bg-[#F6EDF4] p-2 w-10 h-10 rounded-full' />
                        <h1 className='text-sm text-[#1C1C1C] font-medium'>Event Spaces</h1>
                    </div>
                    <div className='flex flex-row gap-2 items-center rounded-full border border-[#E8E8E8] p-2'>
                        <Image src={Dollar} alt={''} className='bg-[#EAF2F9] p-2 w-10 h-10 rounded-full' />
                        <h1 className='text-sm text-[#1C1C1C] font-medium'>Commercial Properties</h1>
                    </div>
                    <div className='flex flex-row gap-2 items-center rounded-full border border-[#E8E8E8] p-2'>
                        <Image src={More} alt={''} className='bg-[#FEF3EB] p-2 w-10 h-10 rounded-full' />
                        <h1 className='text-sm text-[#1C1C1C] font-medium'>More</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}