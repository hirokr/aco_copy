'use client'
import Image from "next/image";

const Award = () => {
  return (
    <div className='min-h-[100vh] px-5 sm:px-14 lg:px-20 xl:px-44 py-10 flex flex-col gap-5 xl:gap-[60px] sm:flex-row pb-10'>
      <div
        className='flex flex-col justify-start items-start gap-2 w-full sm:w-[40%] xl:w-1/2
        '
      >
        <h1 className='text-3xl '>
          <span className='relative before:top-full before:w-1/2 before:h-[3px] before:rounded-full before:bg-accent before:inset-1 before:absolute before:left-0 pr-3'>
            We&apos;ve
          </span>
          won..
        </h1>
        <p className='text-sm sm:text-lg tracking-wider mt-5'>
          Multiple international awards, every year, since 2012! Apart from the
          16 international awards that we&apos;ve won, we&apos;re also a Google
          Certified Partner and Bing Ads Accredited Professional Company.
          We&apos;ve also been featured and mentioned in many leading tech
          magazines and portals for our various contributions. <br />
          <button className='btn mt-3'>view more</button>
        </p>
        <div className='w-full h-40 lg:w-72 lg:h-72 xl:h-96 xl:w-[30vw] relative '>
          <Image
            src='/gifs/awards-gif.gif'
            fill
            alt='mascot'
            unoptimized
            className='object-contain'
          />
        </div>
      </div>
      <div className='w-full sm:w-[60%] xl:w-1/2 sm:mt-16 relative flex flex-col items-end'>
        <div className='w-full max-w-96 h-96 drop-shadow-lg bg-white p-8 flex flex-col gap-5'>
          <h1 className='text-2xl'>
            <span className='font-semibold'>16</span> Awards
          </h1>
          <div className='flex gap-5 justify-start items-center '>
            <div className='relative h-14 w-14'>
              <Image
                src='/gifs/awardLogo.svg'
                alt='award'
                fill
                className='object-contain'
              />
            </div>
            <div>
              <h1 className='font-semibold tracking-wide'>Global Trends</h1>
              <h2>Triumph Winner</h2>
              <h2>1018, USA</h2>
            </div>
          </div>
          <div className='flex gap-5 justify-start items-center '>
            <div className='relative h-14 w-14'>
              <Image
                src='/gifs/awardLogo.svg'
                alt='award'
                fill
                className='object-contain'
              />
            </div>
            <div>
              <h1 className='font-semibold tracking-wide'>Global Trends</h1>
              <h2>Triumph Winner</h2>
              <h2>1018, USA</h2>
            </div>
          </div>
          <div className='flex gap-5 justify-start items-center '>
            <div className='relative h-14 w-14'>
              <Image
                src='/gifs/awardLogo.svg'
                alt='award'
                fill
                className='object-contain'
              />
            </div>
            <div>
              <h1 className='font-semibold tracking-wide'>Global Trends</h1>
              <h2>Triumph Winner</h2>
              <h2>1018, USA</h2>
            </div>
          </div>
        </div>
        <div>
          <div className='hidden sm:block absolute -top-24 right-14 drop-shadow-lg hover:drop-shadow-xl hover:z-30 hover:scale-110 transition-all duration-300 '>
            <Image src='/awards/0.png' alt='award' width={125} height={125} />
          </div>
          <div className='hidden sm:block absolute top-3 -right-5 drop-shadow-lg hover:drop-shadow-xl hover:z-30 hover:scale-110 transition-all duration-300 '>
            <Image src='/awards/1.png' alt='award' width={120} height={120} />
          </div>
          <div className='hidden sm:block absolute top-32 right-6 drop-shadow-lg hover:drop-shadow-xl hover:z-30 hover:scale-110 transition-all duration-300 '>
            <Image src='/awards/2.png' alt='award' width={100} height={100} />
          </div>
          <div className='hidden sm:block absolute top-52 -right-10 drop-shadow-lg hover:drop-shadow-xl hover:z-30 hover:scale-110 transition-all duration-300 '>
            <Image src='/awards/3.png' alt='award' width={100} height={100} />
          </div>
          <div className='hidden sm:block absolute top-72 right-8 drop-shadow-lg hover:drop-shadow-xl hover:z-30 hover:scale-110 transition-all duration-300 '>
            <Image src='/awards/4.png' alt='award' width={110} height={110} />
          </div>
          <div className='hidden sm:block absolute top-90 -right-14 drop-shadow-lg hover:drop-shadow-xl hover:z-30 hover:scale-110 transition-all duration-300 '>
            <Image src='/awards/5.png' alt='award' width={120} height={120} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
