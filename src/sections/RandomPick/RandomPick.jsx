import React from 'react';
import './RandomPick.css'
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import banner from '../../assets/Logo & Banner/Cream Gradient Beauty Vlogger Youtube Banner (1).png'

import CategoryButtons from './CategoryButtons';
import SideInsta from './SideInsta';
import SearchBar from './SearchBar';



const RandomPick = () => {

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
        <section className='px-4 md:px-10 lg:px-20 space-y-6'>
            <div>
                <div className='flex flex-col md:flex-row justify-between items-center pt-6'>
                    <h2 className='text-4xl font-bold text-red-600  hover-item'><a href='http://www.youtube.com/@Zahans_Insight'>Youtube</a></h2>
                    <button className="btn btn-link text-red-600  hover-item"><a href='http://www.youtube.com/@Zahans_Insight'>Subscribe To Our Channel</a></button>
                </div>

                <a className=' p-10 ' href='http://www.youtube.com/@Zahans_Insight'>
                    <div className="hero py-20 bg-red-50 random-pick-banner  hover-item">
                        <div className="hero-content w-full text-center flex flex-col md:flex-row justify-between">
                            <div className=" text-start">
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center pt-6'>
                <h2 className='text-4xl font-bold text-primary  hover-item'>Latest News</h2>
                <Link to="/allArticles"><button className="btn btn-link  hover-item">See All Topic</button></Link>
            </div>
            <div className='flex flex-col md:flex-row gap-6  '>
                <div className='w-full lg:w-2/3'>
                    <div className='grid grid-cols-1 gap-4'>
                        {
                            allArticles &&
                            allArticles.map(allArticle =>
                                <>
                                    <div className="card w-full card-normal lg:card-side bg-base-100 gap-x-4  hover-item">

                                        <Link to={`/article/${allArticle._id}`}>  <img className='w-full lg:w-96 h-72 rounded-none zoom object-cover object-center bg-neutral-content' src={allArticle.images[2]} alt="Album" /></Link>

                                        <div className='border-gray-200 border rounded-md p-4 w-full'>
                                            <p className="py-2 text-orange-700 font-semibold uppercase">{allArticle.category}</p>

                                            <Link to={`/article/${allArticle._id}`}> <p className="py-2 text-2xl font-bold text-primary capitalize">{allArticle.title}</p></Link>
                                            <div className="stats my-2 ">
                                                <div className="stat rounded-none flex-row justify-between pl-0">
                                                    <div className="stat-figure text-primary">
                                                        <div className="rating gap-1">
                                                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-500 hover:bg-red-700" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="stat-title">{allArticle.views}</p>
                                                        <div className="stat-desc">{allArticle.date} • 3 min read</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>

                <div className='space-y-8 w-full lg:w-1/3'>
                    <CategoryButtons></CategoryButtons>
                    <SearchBar></SearchBar>
                    <div className='grid grid-cols-1 gap-2'>
                        {
                            allArticles &&
                            allArticles.map(allArticle =>
                                <Link to={`/article/${allArticle._id}`}><div className="w-full flex flex-row gap-2 items-start bg-zinc-100 p-2 rounded-sm  hover-item">
                                    <div className=" text-secondary">
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                <img src={allArticle.images[1]} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' text-primary text-sm '><p className='pb-2'>{allArticle.title}</p>

                                        <p className='text-zinc-500 text-xs'>{allArticle.date}</p>

                                    </div>
                                </div>
                                </Link>)
                        }
                    </div>
                    <SideInsta></SideInsta>
                </div>
            </div>
        </section>
    );
};

export default RandomPick;