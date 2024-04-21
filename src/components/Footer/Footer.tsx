import Facebook from '../../../public/facebook.svg';
import Linkedin from '../../../public/linkedin.svg';
import Twitter from '../../../public/twitter.svg';
import Youtube from '../../../public/youtube.svg';
import Insta from '../../../public/insta.svg';
import Logo from '../../../public/logo.svg';
import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full min-h-[40dvh] bg-[#F4F4F4]">
            <div className="w-[90dvw] min-h-[30dvh] p-5 flex flex-col lg:flex-row lg:items-center lg:flex-wrap mx-auto gap-5 justify-between">
                <div className="flex flex-col gap-5 h-full justify-center">
                    <Image src={Logo} alt={""} width={100} height={100} />
                    <span className='text-sm text-[#1C1C1C] w-96'>Sri Lanka's first & largest platform designed to create an online marketplace exclusively for RENT</span>
                    <div className='flex flex-row gap-3'>
                        <button className='bg-[#E93740] w-10 justify-center items-center flex h-10 rounded-full'>
                            <Image src={Insta} alt={''} width={25} height={25} />
                        </button>
                        <button className='bg-[#E93740] w-10 justify-center items-center flex h-10 rounded-full'>
                            <Image src={Twitter} alt={''} width={25} height={25} />
                        </button>
                        <button className='bg-[#E93740] w-10 justify-center items-center flex h-10 rounded-full'>
                            <Image src={Youtube} alt={''} width={25} height={25} />
                        </button>
                        <button className='bg-[#E93740] w-10 justify-center items-center flex h-10 rounded-full'>
                            <Image src={Facebook} alt={''} width={15} height={15} />
                        </button>
                        <button className='bg-[#E93740] w-10 justify-center items-center flex h-10 rounded-full'>
                            <Image src={Linkedin} alt={''} width={25} height={25} />
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <Link href="" className='text-[#E93740] font-bold text-sm' >Navigation</Link>
                    <Link href="" className='text-[#1C1C1C] text-sm'>About Us</Link>
                    <Link href="" className='text-[#1C1C1C] text-sm'>Blog</Link>
                    <Link href="" className='text-[#1C1C1C] text-sm'>Terms of Use</Link>
                    <Link href="" className='text-[#1C1C1C] text-sm'>Privacy Policy</Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <Link href="" className='text-[#E93740] font-bold text-sm' >Featured Locations</Link>
                    <Link href="" className='text-[#1C1C1C] text-sm'>Kandy</Link>
                    <Link href="" className='text-[#1C1C1C] text-sm'>Anuradhapura</Link>
                    <Link href="" className='text-[#1C1C1C] text-sm'>Badulla</Link>
                    <Link href="" className='text-[#1C1C1C] text-sm'>Colombo</Link>
                    <Link href="" className='text-[#1C1C1C] text-sm'>Kaluthara</Link>
                </div>
                <div className='flex flex-col gap-2 h-[21dvh]'>
                    <Link href="" className='text-[#E93740] font-bold text-sm' >Help</Link>
                    <Link href="" className='text-[#1C1C1C] text-sm'>FAQ</Link>
                    <Link href="" className='text-[#1C1C1C] text-sm'>Contact Us</Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <Link href="" className='text-[#E93740] font-bold text-sm' >Subscribe to Our Newsletter</Link>
                    <span className='text-[#1C1C1C] text-sm'>Stay updated with the latest listings and rental tips.</span>
                    <input type="text" placeholder="Email address" className='w-48 h-8 rounded-full border p-2 border-[#1C1C1C] text-[#1C1C1C] text-sm' />
                    <button className='bg-[#E93740] w-48 h-8 rounded-full text-sm text-white'>Subscribe</button>
                </div>
            </div>
        </footer>
    )
}