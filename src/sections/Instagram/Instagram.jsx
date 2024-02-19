import React from 'react';
import demoImg from '../../assets/zodiac 12.jpg'
import Instagram1 from '../../assets/Instagram/ZahansInsight-1.jpg'
import Instagram2 from '../../assets/Instagram/ZahansInsight-2.jpg'
import Instagram3 from '../../assets/Instagram/ZahansInsight-3.jpg'
import Instagram4 from '../../assets/Instagram/ZahansInsight-4.jpg'
import Instagram5 from '../../assets/Instagram/ZahansInsight-5.jpg'
import Instagram6 from '../../assets/Instagram/ZahansInsight-6.jpg'


const Instagram = () => {
    return (
        <section className='p-4 lg:px-20 space-y-6 pb-20'>
            <div className='flex flex-col md:flex-row justify-between items-center '>
                <h2 className='text-4xl font-bold text-primary  hover-item'>Instagram</h2>
                <button className="btn btn-link  hover-item">See All Topic</button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 flex-wrap' >

                <div className="hero w-full  hover-item h-48 rounded-lg " style={{ backgroundImage: `url(${Instagram1})` }}>
                    <div className=" "></div>
                    <div className="hero-content text-center text-neutral-content">
                            
                    </div>
                </div>
                <div className="hero w-full  hover-item h-48 rounded-lg" style={{ backgroundImage: `url(${Instagram2})` }}>
                    <div className=" "></div>
                    <div className="hero-content text-center text-neutral-content">
                            
                    </div>
                </div>
                <div className="hero w-full  hover-item h-48 rounded-lg" style={{ backgroundImage: `url(${Instagram3})` }}>
                    <div className=" "></div>
                    <div className="hero-content text-center text-neutral-content">
                            
                    </div>
                </div>
                <div className="hero w-full  hover-item h-48 rounded-lg" style={{ backgroundImage: `url(${Instagram4})` }}>
                    <div className=" "></div>
                    <div className="hero-content text-center text-neutral-content">
                            
                    </div>
                </div>
                <div className="hero w-full  hover-item h-48 rounded-lg" style={{ backgroundImage: `url(${Instagram5})` }}>
                    <div className=" "></div>
                    <div className="hero-content text-center text-neutral-content">
                            
                    </div>
                </div>
                <div className="hero w-full  hover-item h-48 rounded-lg" style={{ backgroundImage: `url(${Instagram6})` }}>
                    <div className=" "></div>
                    <div className="hero-content text-center text-neutral-content">
                            
                    </div>
                </div>
               




            </div>

        </section>
    );
};

export default Instagram;