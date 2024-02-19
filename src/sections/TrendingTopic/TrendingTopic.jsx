import React from 'react';
import demoImg from '../../assets/zodiac 12.jpg'
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Stories from '../../assets/Category/thumbnail-Stories.jpg'
import All from '../../assets/Category/All.png'
import Movies from '../../assets/Category/thumbnail-Movies.jpg'
import Sports from '../../assets/Category/thumbnail-Sports.jpg'
import Travel from '../../assets/Category/thumbnail-Travel.jpg'
import Lifestyle from '../../assets/Category/thumbnail-Lifestyle.jpg'

const TrendingTopic = () => {
    const { data: allArticles, isLoading, refetch } = useQuery({
        queryKey: ['allArticles'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://zahan-s-insight-server.vercel.app/allArticles`, {
                })
                const data = await res.json()
                return data
            }
            catch (errors) {
            }
        }
    })
    return (
        <section className='px-4 md:px-10 lg:px-20 text-primary space-y-6'>
            <div className='flex flex-col md:flex-row justify-between items-center '>
                <h2 className='text-4xl font-bold   hover-item'>Trending This Week</h2>
                <Link to="/allArticles"><button className="btn btn-link  hover-item">See All Topic</button></Link>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 flex-wrap' >

                <Link to="/allArticles"><div className="hero  hover-item w-full  h-48 rounded-lg" style={{ backgroundImage: `url(${All})` }}>
                    <div className=" "></div>
                    <div className="hero-content  text-center text-neutral-content">

                    </div>
                </div></Link>

                <Link to="/allArticles/Stories">
                    <div className="hero  hover-item w-full  h-48 rounded-lg" style={{ backgroundImage: `url(${Stories})` }}>
                        <div className=" "></div>
                        <div className="hero-content  text-center text-neutral-content">
                            <button className="bg-transparent text-3xl text-zinc-100 font-bold mt-32">Stories</button>

                        </div>
                    </div>
                </Link>

                <Link to="/allArticles/Movies">
                    <div className="hero  hover-item w-full  h-48 rounded-lg" style={{ backgroundImage: `url(${Movies})` }}>
                        <div className=" "></div>
                        <div className="hero-content  text-center text-neutral-content">
                            <button className="bg-transparent text-3xl text-zinc-100 font-bold mt-32">Movies</button>
                        </div>
                    </div>
                </Link>

                <Link to="/allArticles/Lifestyle">
                    <div className="hero  hover-item w-full  h-48 rounded-lg" style={{ backgroundImage: `url(${Lifestyle})` }}>
                        <div className=" "></div>
                        <div className="hero-content  text-center text-neutral-content">
                            <button className="bg-transparent text-3xl text-zinc-100 font-bold mt-32">Lifestyle</button>
                        </div>
                    </div>
                </Link>

                <Link to="/allArticles/Travel">
                    <div className="hero  hover-item w-full  h-48 rounded-lg" style={{ backgroundImage: `url(${Travel})` }}>
                        <div className=" "></div>
                        <div className="hero-content  text-center text-neutral-content">
                            <button className="bg-transparent text-3xl text-zinc-100 font-bold mt-32">Travel</button>
                        </div>
                    </div>
                </Link>

                <Link to="/allArticles/Sports">
                    <div className="hero  hover-item w-full  h-48 rounded-lg" style={{ backgroundImage: `url(${Sports})` }}>
                        <div className=" "></div>
                        <div className="hero-content  text-center text-neutral-content">
                            <button className="bg-transparent text-3xl text-zinc-100 font-bold mt-32">Sports</button>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default TrendingTopic;