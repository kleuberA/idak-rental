"use client"
import MenuIcon from '../../../public/menu.svg';
import User from '../../../public/user.svg';
import Logo from '../../../public/logo.svg';
import Plus from '../../../public/plus.svg';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Menu() {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="w-full h-16">
            <div className="w-[90dvw] mx-auto h-full flex justify-between flex-row items-center">
                <div>
                    <Link href="/">
                        <Image src={Logo} alt={""} width={100} height={100} />
                    </Link>
                </div>
                <div className="lg:flex flex-row gap-5 text-sm font-medium tracking-wider font-mono hidden">
                    <Link href="">Home</Link>
                    <Link href="">Rentals</Link>
                    <Link href="">Categories</Link>
                    <Link href="">About Us</Link>
                    <Link href="">Contact</Link>
                    <Link href="">Blog</Link>
                </div>
                <div className="flex flex-row gap-3 lg:gap-5 items-center h-full">
                    <button className="text-[#E93740] text-sm lg:flex flex-row gap-1 hidden">
                        <Image src={User} alt={""} width={20} height={20} />
                        <span>Sign In</span>
                    </button>
                    <button className='flex lg:hidden' onClick={() => setOpenMenu(!openMenu)}>
                        <Image src={MenuIcon} alt={""} width={20} height={20} />
                    </button>
                    <button className='bg-[#E93740] rounded-full p-2 w-32 text-white text-sm flex flex-row gap-2'>
                        <Image src={Plus} alt={""} width={20} height={20} />
                        Post Listing
                    </button>
                </div>
            </div>
            {openMenu && (
                <div className="bg-[#E93740]/85 absolute top-0 w-full h-screen flex flex-col justify-center items-center text-white gap-5 text-xl font-mono font-medium tracking-wider">
                    <div className='absolute top-5 right-5 text-3xl' onClick={() => setOpenMenu(false)}>X</div>
                    <Link href="">Home</Link>
                    <Link href="">Rentals</Link>
                    <Link href="">Categories</Link>
                    <Link href="">About Us</Link>
                    <Link href="">Contact</Link>
                    <Link href="">Blog</Link>
                </div>
            )}
        </nav>
    )
}