import ImageListings from '../../../public/imagelistings.svg';
import ChevronRight from '../../../public/chevron-right.svg';
import Avatar from '../../../public/avatar.svg';
import Heart from '../../../public/heart.svg';
import Image from "next/image";

export default function Listings() {
    return (
        <section className="w-full min-h-screen">
            <div className="flex flex-col gap-7 lg:pt-10">
                <h1 className="text-4xl font-bold text-[#1C1C1C] text-center">Featured Listings</h1>
                <div className="flex flex-row flex-wrap gap-2 justify-evenly">
                    <span className="bg-[#E93740] rounded-full p-2 text-white text-sm">All Items (5125)</span>
                    <span className="bg-[#E8E8E8] rounded-full p-2 text-[#494949] text-sm">Residential Spaces (64)</span>
                    <span className="bg-[#E8E8E8] rounded-full p-2 text-[#494949] text-sm">Sports Venues</span>
                    <span className="bg-[#E8E8E8] rounded-full p-2 text-[#494949] text-sm">Meeting Spaces</span>
                    <span className="bg-[#E8E8E8] rounded-full p-2 text-[#494949] text-sm">Vans & Buses</span>
                    <span className="bg-[#E8E8E8] rounded-full p-2 text-[#494949] text-sm">Cars & SUVs</span>
                    <span className="bg-[#E8E8E8] rounded-full p-2 text-[#494949] text-sm">Lorries & Industrial Vehicles</span>
                    <span className="bg-[#E8E8E8] rounded-full p-2 text-[#494949] text-sm">
                        <Image src={ChevronRight} alt={""} />
                    </span>
                </div>
                <div className='flex flex-row gap-5 justify-start w-[90dvw] mx-auto flex-wrap pb-10'>
                    {Array(10).fill(0).map((_, index) => (
                        <div key={index} className='flex flex-col border border-[#E8E8E8] w-80'>
                            <div className='relative'>
                                <Image src={ImageListings} alt={""} className='rounded-t-md w-full' />
                                <span className='absolute top-2 right-2 bg-[#77B747] text-xs p-2 text-white rounded-full'>For Rent</span>
                            </div>
                            <div className='p-2 flex flex-col'>
                                <div className=''>
                                    <span className='text-[#E93740] text-sm'>85,000 LKR <span className='text-xs text-[#1C1C1C]'>/Month</span> </span>
                                </div>
                                <div>
                                    <span className='text-[#1C1C1C] font-bold'>Luxury villa in Rego Park</span>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <span className='text-[#030303] text-xs'>3 Bedrooms</span>
                                    <span className='text-[#030303]'>|</span>
                                    <span className='text-[#030303] text-xs'>2 Bathrooms</span>
                                    <span className='text-[#030303]'>|</span>
                                    <span className='text-[#030303] text-xs'>2500 Square FT</span>
                                </div>
                            </div>
                            <div className='p-2 border-t border-t-[#E8E8E86]'>
                                <div className='flex flex-row justify-between items-center gap-2'>
                                    <div className='flex flex-row gap-2'>
                                        <Image src={Avatar} alt={''} width={40} height={40} />
                                        <div className='flex flex-col gap-1'>
                                            <span className='text-[#1C1C1C] text-sm'>Anne Liza</span>
                                            <span className='text-[#030303] text-xs'>Property Seller</span>
                                        </div></div>
                                    <div className='p-2 bg-[#F4F4F4]'>
                                        <Image src={Heart} alt={''} width={20} height={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center pb-5'>
                    <button className='bg-[#E93740] p-2 rounded-full text-sm text-white'>Load More</button>
                </div>
            </div>
        </section>
    )
}