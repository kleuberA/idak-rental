import SearchButton from '../../../public/button-search.svg';
import Background from '../../../public/background.svg';
import Search from '../../../public/search.svg';
import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full h-[calc(100vh_-_4rem)] relative">
            <Image src={Background} alt={""} className='w-full h-full absolute z-0' />
            <div className='z-10 relative w-full h-full flex items-center justify-center'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-4xl font-bold text-[#1C1C1C]'>Discover Your <span className='text-[#E93740]'>Perfect Rental</span></h1>
                    <span className='text-[#1C1C1C] text-lg text-center font-medium'>Rent Cars, Houses, and Items in Just a Few Clicks</span>
                    <div className='flex flex-row gap-5 justify-center'>
                        <button className='bg-[#E93740] rounded-full px-2 py-1 w-20 text-sm text-white'>Places</button>
                        <button className='bg-white rounded-full px-2 py-1 w-20 text-sm'>Rides</button>
                        <button className='bg-white rounded-full px-2 py-1 w-20 text-sm'>Things</button>
                    </div>
                    <div className='bg-white flex flex-row h-14 rounded-full'>
                        <div className='relative pl-2 border-r border-r-zinc-300'>
                            <input type='text' placeholder='Search for cars, houses, and more..' className='w-full h-full pl-7 p-2 rounded-l-full outline-none' />
                            <Image src={Search} alt={''} width={20} height={20} className='absolute top-4' />
                        </div>
                        <div className='flex flex-row gap-2 items-center pl-5'>
                            <select name="location" id="location" className='w-40 h-full outline-none text-[#979797]'>
                                <option value="location" className='text-[#979797]'>
                                    Select Location
                                </option>
                                <option value="brasil">Brasil</option>
                            </select>
                            <button className='bg-[#E93740] rounded-full p-2'>
                                <Image src={SearchButton} alt={''} width={20} height={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}