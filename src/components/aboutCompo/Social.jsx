import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
const Social = () => {
  return (
    <div className=" w-full flex  flex-col justify-center items-center h-40 lg:mb-40">
      <h1 className='text-compo/50 text-2xl lg:text-4xl font-mono mb-4 font-bold'>Find Us On Social Media</h1>
      <div className=' flex justify-start items-center gap-3'>
        <Link href='https://www.facebook.com'>
          <FaFacebook className='w-10 h-10 lg:h-14 lg:w-14 bg-blue-800 hover:-translate-y-2 transition-all duration-300  hover:bg-gray-400 p-2 text-primary rounded-full ' />
        </Link>

        <Link href='https://www.facebook.com'>
          <FaGoogle className='w-10 h-10 lg:h-14 lg:w-14 bg-red-700 hover:-translate-y-2 transition-all duration-300  hover:bg-gray-400 p-2 text-primary rounded-full ' />
        </Link>
        <Link href='https://www.facebook.com'>
          <FaTwitter className='w-10 h-10 lg:h-14 lg:w-14 bg-blue-500 hover:-translate-y-2 transition-all duration-300  hover:bg-gray-400 p-2 text-primary rounded-full ' />
        </Link>
        <Link href='https://www.facebook.com'>
          <FaLinkedin className='w-10 h-10 lg:h-14 lg:w-14 bg-blue-900 hover:-translate-y-2 transition-all duration-300  hover:bg-gray-400 p-2 text-primary rounded-full ' />
        </Link>
      </div>
    </div>
  );
};

export default Social;
