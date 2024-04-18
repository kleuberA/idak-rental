import SearchButton from '../../../public/button-search.svg';
import Background from '../../../public/background.svg';
import Search from '../../../public/search.svg';
import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full h-[calc(100vh_-_4rem)] relative">
            <Image src={Background} alt={""} className='w-full h-[100dvh] lg:h-full absolute z-0' />
            <div className='z-10 relative w-full h-full flex items-center lg:items-center lg:justify-center p-10 lg:p-0'>
                <div className='flex flex-col gap-2 lg:gap-5 items-center'>
                    <h1 className='text-2xl lg:text-4xl text-center font-bold w-52 lg:w-auto text-[#1C1C1C]'>Discover Your <span className='text-[#E93740]'>Perfect Rental</span></h1>
                    <span className='text-[#1C1C1C] text-lg text-center font-medium'>Rent Cars, Houses, and Items in Just a Few Clicks</span>
                    <div className='flex flex-row gap-5 justify-center'>
                        <button className='bg-[#E93740] rounded-full px-2 py-1 w-20 text-sm text-white'>Places</button>
                        <button className='bg-white rounded-full px-2 py-1 w-20 text-sm'>Rides</button>
                        <button className='bg-white rounded-full px-2 py-1 w-20 text-sm'>Things</button>
                    </div>
                    <div className='lg:bg-white flex flex-col gap-2 lg:gap-0 lg:flex-row h-14 lg:rounded-full'>
                        <div className='relative lg:pl-2 lg:border-r border-r-zinc-300 w-80 lg:w-auto'>
                            <input type='text' placeholder='Search for cars, houses, and more..' className='w-full h-14 lg:h-full pl-7 p-2 rounded-full lg:rounded-l-full outline-none' />
                            <Image src={Search} alt={''} width={20} height={20} className='absolute top-4 left-2 lg:left-3' />
                        </div>
                        <div className='flex flex-col lg:flex-row gap-2 items-center lg:pl-5 w-80 lg:w-auto lg:pr-2'>
                            <select name="location" id="location" className='lg:w-40 w-full h-14 rounded-full lg:rounded-none p-2 lg:h-full outline-none text-[#979797]'>
                                <option value="location" className='text-[#979797]'>
                                    Select Location
                                </option>
                                <option value="brasil">Brasil</option>
                            </select>
                            <button className='bg-[#E93740] rounded-full p-2 w-80 h-14 lg:h-10 lg:w-10 flex gap-2 flex-row items-center justify-center'>
                                <Image src={SearchButton} alt={''} width={20} height={20} />
                                <span className='text-white lg:hidden'>Search Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}