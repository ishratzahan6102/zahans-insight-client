import React from 'react';
import Instagram1 from '../../assets/Instagram/ZahansInsight-1.jpg'
import Instagram2 from '../../assets/Instagram/ZahansInsight-2.jpg'
import Instagram3 from '../../assets/Instagram/ZahansInsight-3.jpg'
import Instagram4 from '../../assets/Instagram/ZahansInsight-4.jpg'
import Instagram5 from '../../assets/Instagram/ZahansInsight-5.jpg'
import Instagram6 from '../../assets/Instagram/ZahansInsight-6.jpg'

const SideInsta = () => {
    return (
        <div className='bg-zinc-100 p-10'>
        <h2 className='text-2xl font-bold text-center  hover-item'>Instagram</h2>
        <hr className='my-4'></hr>
        <div className='grid grid-cols-3 gap-2 '>
            <div className="avatar  hover-item">
                <div className="w-36 rounded-lg">
                    <img src={Instagram1} />
                </div>
            </div>
            <div className="avatar  hover-item">
                <div className="w-36 rounded-lg">
                    <img src={Instagram2} />
                </div>
            </div>
            <div className="avatar  hover-item">
                <div className="w-36 rounded-lg">
                    <img src={Instagram3} />
                </div>
            </div>
            <div className="avatar  hover-item">
                <div className="w-36 rounded-lg">
                    <img src={Instagram4} />
                </div>
            </div>
            <div className="avatar  hover-item">
                <div className="w-36 rounded-lg">
                    <img src={Instagram5} />
                </div>
            </div>
            <div className="avatar  hover-item">
                <div className="w-36 rounded-lg">
                    <img src={Instagram6} />
                </div>
            </div>
        </div>
    </div>
    );
};

export default SideInsta;