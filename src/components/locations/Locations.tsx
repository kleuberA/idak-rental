import Anuradhapura from '../../../public/Anuradhapura.svg';
import Line from '../../../public/lineDecoration.svg';
import Gampaha from '../../../public/Gampaha.svg';
import Badulla from '../../../public/Badulla.svg';
import Colombo from '../../../public/Colombo.svg';
import Jaffna from '../../../public/Jaffna.svg';
import Kandy from '../../../public/kandy.svg';
import Image from "next/image";

export default function Locations() {
    return (
        <section className="w-full min-h-screen flex flex-col gap-5 items-center justify-center">
            <div className='flex flex-col gap-5 justify-center items-center'>
                <h1 className="text-xl lg:text-4xl text-[#030303] font-bold">Featured Locations</h1>
                <Image src={Line} alt={""} />
            </div>
            <div className='w-full flex-1 flex flex-row flex-wrap gap-5 justify-center items-center'>
                <div className='relative'>
                    <Image src={Kandy} alt={''} width={300} height={300} />
                    <span className='text-white text-xs bottom-2 font-bold left-3 absolute'>Kandy</span>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col justify-center items-center lg:flex-row gap-5'>
                        <div className='relative'>
                            <Image src={Anuradhapura} alt={''} width={300} height={300} />
                            <span className='text-white text-xs bottom-2 font-bold left-3 absolute'>Anuradhapura</span>
                        </div>
                        <div className='relative'>
                            <Image src={Badulla} alt={''} width={300} height={300} />
                            <span className='text-white text-xs bottom-2 font-bold left-3 absolute'>Badulla</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center lg:flex-row gap-5'>
                        <div className='relative'>
                            <Image src={Gampaha} alt={''} width={300} height={300} />
                            <span className='text-white text-xs bottom-2 font-bold left-3 absolute'>Gampaha</span>
                        </div>
                        <div className="relative">
                            <Image src={Jaffna} alt={''} width={300} height={300} />
                            <span className='text-white text-xs bottom-2 font-bold left-3 absolute'>Jaffna</span>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src={Colombo} alt={''} width={300} height={300} />
                    <span className='text-white text-xs bottom-2 font-bold left-3 absolute'>Colombo</span>
                </div>
            </div>
        </section>
    )
}
