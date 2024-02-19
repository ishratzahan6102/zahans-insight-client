import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Instagram1 from '../../assets/Instagram/ZahansInsight-1.jpg'
import Instagram2 from '../../assets/Instagram/ZahansInsight-2.jpg'
import Instagram3 from '../../assets/Instagram/ZahansInsight-3.jpg'
import Instagram4 from '../../assets/Instagram/ZahansInsight-4.jpg'
import Instagram5 from '../../assets/Instagram/ZahansInsight-5.jpg'
import Instagram6 from '../../assets/Instagram/ZahansInsight-6.jpg'
import TrendingTopic from '../../sections/TrendingTopic/TrendingTopic';
import Stories from '../../assets/Category/thumbnail-Stories.jpg'
import Movies from '../../assets/Category/thumbnail-Movies.jpg'
import Travel from '../../assets/Category/thumbnail-Travel.jpg'
import Lifestyle from '../../assets/Category/thumbnail-Lifestyle.jpg'
import { Link } from 'react-router-dom';
import CategoryButtons from '../../sections/RandomPick/CategoryButtons';

const MostPopularBanner = () => {


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
        <section className='py-10'>
            <section className='px-10 space-y-6 '>
                <div className='flex flex-col lg:flex-row gap-6  '>
                    <div className='w-full lg:w-2/3'>

                        <div className="">
                            <div className=" flex-col lg:flex-row ">
                                <div className=''>
                                    <p className="py-6 text-orange-700 font-bold"></p>
                                    <h1 className="text-4xl font-bold"></h1>

                                    <div className="stat px-0 flex flex-row w-1/2 items-center">
                                        <div className="stat-figure text-secondary">
                                            <div className="avatar online">
                                                <div className="w-16 rounded-full">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="stat-title">by </div>
                                            <div className="stat-desc text-secondary font-semibold"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-6'>
                            
                        </div>
                    </div>

                    <div className='space-y-8 w-full lg:w-1/3'>
                        {/* <div className='grid grid-cols-2 gap-2'>
                            <div className="w-full flex flex-row gap-2 items-center bg-zinc-100 p-2 rounded-badge">
                                <div className=" text-secondary">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={Stories} />
                                        </div>
                                    </div>
                                </div>
                                <div className="stat-title"><Link to="/allArticles/Stories">Stories</Link></div>
                            </div>
                            <div className="w-full flex flex-row gap-2 items-center bg-zinc-100 p-2 rounded-badge">
                                <div className=" text-secondary">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={Movies} />
                                        </div>
                                    </div>
                                </div>
                                <div className="stat-title"><Link to="/allArticles/Movies">Movies</Link></div>
                            </div>
                            <div className="w-full flex flex-row gap-2 items-center bg-zinc-100 p-2 rounded-badge">
                                <div className=" text-secondary">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={Lifestyle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="stat-title"><Link to="/allArticles/Lifestyle">Lifestyle</Link></div>
                            </div>
                            <div className="w-full flex flex-row gap-2 items-center bg-zinc-100 p-2 rounded-badge">
                                <div className=" text-secondary">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={Travel} />
                                        </div>
                                    </div>
                                </div>
                                <div className="stat-title"><Link to="/allArticles/Travel">Travel</Link></div>
                            </div>
                            <div className="w-full flex flex-row gap-2 items-center bg-zinc-100 p-2 rounded-badge">
                                <div className=" text-secondary">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={Politics} />
                                        </div>
                                    </div>
                                </div>
                                <div className="stat-title"><Link to="/allArticles/Politics">Politics</Link></div>
                            </div>

                        </div> */}

                        <CategoryButtons></CategoryButtons>
                        <div className='bg-zinc-100 p-4'>
                            <h2 className='text-2xl font-bold text-center'>Search</h2>
                            <hr className='my-4'></hr>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className='grid grid-cols-1 gap-2'>

                            {
                                allArticles &&
                                allArticles.map(allArticle =>
                                    <Link to={`/article/${allArticle._id}`}><div className="w-full flex flex-row gap-2 items-start bg-zinc-100 p-2 rounded-sm">
                                        <div className=" text-secondary">
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src={allArticle.images[1]} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' text-neutral-content font-bold'><p>{allArticle.title}</p>

                                            <p className='text-zinc-500 text-sm pb-2'>by <span className='text-orange-700 font-semibold'>{allArticle.writer}</span>
                                            </p>
                                            <p className='text-zinc-500 text-sm pt-2'>{allArticle.date}
                                            </p>
                                        </div>
                                    </div></Link>)
                            }
                        </div>
                        <div className='bg-zinc-100 p-10'>
                            <h2 className='text-2xl font-bold text-center'>Instagram</h2>
                            <hr className='my-4'></hr>
                            <div className='grid grid-cols-3 gap-2 '>
                                <div className="avatar">
                                    <div className="w-36 rounded-lg">
                                        <img src={Instagram1} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-36 rounded-lg">
                                        <img src={Instagram2} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-36 rounded-lg">
                                        <img src={Instagram3} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-36 rounded-lg">
                                        <img src={Instagram4} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-36 rounded-lg">
                                        <img src={Instagram5} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-36 rounded-lg">
                                        <img src={Instagram6} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TrendingTopic />
        </section>
    );
};

export default MostPopularBanner;