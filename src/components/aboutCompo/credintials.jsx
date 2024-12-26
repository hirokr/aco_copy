import { SlSocialGoogle } from "react-icons/sl";
import {
  IoTvOutline,
  IoTrophyOutline,
  IoGlobeOutline,
  IoMedalOutline,
} from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";

const data = [
  {
    title: "Google",
    icon: <SlSocialGoogle />,
    description:
      "We are a Google Certified Partner Agency and Bing ads Accredited professional company",
  },
  {
    title: "techonology",
    icon: <IoTvOutline />,
    description: "We use cutting-edge technologies & follow Agile methodology",
  },
  {
    title: "trophy",
    icon: <IoTrophyOutline />,
    description:
      "Multiple International Award winning Agency for thepast 6 years",
  },
  {
    title: "UX",
    icon: <FaRegPenToSquare />,
    description: "We have a dedicated UX team and follow a proven UX process",
  },
  {
    title: "world",
    icon: <IoGlobeOutline />,
    description:
      "1000+ successfully completed projects for various clients from 70+ countries",
  },
  {
    title: "meadle",
    icon: <IoMedalOutline />,
    description:
      "Listed as Top Web Design Agency in India by various rating websites",
  },
];

const Credintials = () => {
  return (
    <section className='py-10 bg-white/70  px-5 sm:px-14 lg:px-20 xl:px-44 '>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-4xl mb-5 font-thin '>Our Creditials</h1>
        <p className='text-center text-md leading-7 xl:text-lg'>
          Acodez was launched in the year 2011. Within this short span of time,
          we have mastered the craft of web development and digital marketing,
          ensuring that the client businesses flourish and create a unique brand
          experience for their dear customers. Our expertise with the latest
          tools and techniques, and the experience of our professional experts
          has helped us to provide 100% satisfying results to our customers. We
          have worked miracles across various sectors of web design and
          development along with digital marketing, flaunting our creativity and
          skills, which has bagged us a lot of accolades and awards
        </p>
      </div>
      <div
        className='my-5 grid grid-cols-1 gap-5
      sm:grid-cols-3'
      >
        {data.map((item) => (
          <div
            key={item.title}
            className='flex justify-center items-center flex-col w-full h-52  transition-all duration-300 hover:drop-shadow-2xl
          bg-white p-2
          '
          >
            <div className='text-6xl font-thin mb-5'>{item.icon}</div>
            <h2 className='text-center xl:w-[70%] xl:text-lg'>
              {item.description}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Credintials;
