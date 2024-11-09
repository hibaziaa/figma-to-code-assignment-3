import Image from "next/image";
import logo from "@/app/assets/Logo.png";
import { Inter } from 'next/font/google'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
  }) 

const Navbar = () => {
	return (
		<>
			<div className={`w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center ${inter.className}`}>
				<div className='w-[191px] h-[34px]'>
					<Image src={logo} alt='logo' />
				</div>
				<div className='w-[737.5px] h-[60px] flex justify-between items-center'>
					<div className='w-[549px] h-[23px] '>
						<div className='flex flex-row justify-between text-white'>
							<a href='#' className="hover:text-[#FFD36B]">Products</a>
							<a href='#' className="hover:text-[#FFD36B]">Solutions</a>
							<a href='#' className="hover:text-[#FFD36B]">Resources</a>
							<a href='#' className="hover:text-[#FFD36B]">Pricing</a>
						</div>
					</div>
					<div className='w-[126px] h-[60px]'>
						<button className='px-10 py-4 rounded-lg bg-[#FFE492] text-[#043873] hover:bg-[#FFD36B]'>
							Login
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;