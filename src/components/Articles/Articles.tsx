import Banner from '../../../public/bannerarticles.svg';
import Managing from '../../../public/managing.svg';
import Maximizing from '../../../public/maximizing.svg';
import Navigating from '../../../public/navigating.svg';
import CarRental from '../../../public/carrental.svg';
import Line from '../../../public/lineDecoration.svg';
import Image from "next/image";


export default function Articles() {
    return (
        <section className="w-full min-h-screen p-5">
            <div className="flex flex-col justify-center items-center w-full gap-10 h-full">
                <h1 className="text-[#030303] text-xl lg:text-4xl font-bold">Important Articles</h1>
                <Image src={Line} alt={""} />
                <div className='w-[90dvw] mx-auto h-full flex flex-col lg:flex-row gap-5'>
                    <div className='flex flex-col gap-3'>
                        <Image src={Banner} alt={''} width={600} height={600} />
                        <span className='text-xs text-[#E93740]'>February 4, 2023</span>
                        <h1 className='text-base lg:text-xl text-[#030303] font-bold'>Top Tips for Finding the Perfect Rental</h1>
                        <span className='text-xs text-[#8B8B8B]'>Discover expert advice on how to find the ideal rental property that meets your needs and budget.</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col lg:flex-row gap-3'>
                            <Image src={CarRental} alt={''} />
                            <div className='flex flex-col gap-3'>
                                <span className='text-xs text-[#E93740] font-bold'>May 7, 2023</span>
                                <h1 className='text-base lg:text-xl text-[#030303] font-bold'>Car Rental Hacks for a Smooth Journey</h1>
                                <span className='text-xs text-[#8B8B8B]'>Learn insider tips for getting the best deals and making the most of your rental car experience.</span>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-3'>
                            <Image src={Managing} alt={''} />
                            <div className='flex flex-col gap-3'>
                                <span className='text-xs text-[#E93740] font-bold'>April 25, 2023</span>
                                <h1 className='text-base lg:text-xl text-[#030303] font-bold'>Managing Your Rental Items: A Comprehensive Guide</h1>
                                <span className='text-xs text-[#8B8B8B]'>Get valuable insights on how to effectively manage and maintain your rented items.</span>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-3'>
                            <Image src={Navigating} alt={''} />
                            <div className='flex flex-col gap-3'>
                                <span className='text-xs text-[#E93740] font-bold'>January 2, 2023</span>
                                <h1 className='text-base lg:text-xl text-[#030303] font-bold'>Navigating the Rental Market: Insights for New Renters</h1>
                                <span className='text-xs text-[#8B8B8B]'>Explore key considerations and useful tips for individuals new to the rental market.</span>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-3'>
                            <Image src={Maximizing} alt={''} />
                            <div className='flex flex-col gap-3'>
                                <span className='text-xs text-[#E93740] font-bold'>April 7, 2023</span>
                                <h1 className='text-base lg:text-xl text-[#030303] font-bold'>Maximizing Returns: Strategies for Rental Property Owners</h1>
                                <span className='text-xs text-[#8B8B8B]'>Learn strategies to optimize the return on investment for your rental property.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}