import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Instagram1 from '../../assets/Instagram/ZahansInsight-1.jpg'
import Instagram2 from '../../assets/Instagram/ZahansInsight-2.jpg'
import Instagram3 from '../../assets/Instagram/ZahansInsight-3.jpg'
import Instagram4 from '../../assets/Instagram/ZahansInsight-4.jpg'
import Instagram5 from '../../assets/Instagram/ZahansInsight-5.jpg'
import Instagram6 from '../../assets/Instagram/ZahansInsight-6.jpg'
import Stories from '../../assets/Category/thumbnail-Stories.jpg'
import Movies from '../../assets/Category/thumbnail-Movies.jpg'
import Travel from '../../assets/Category/thumbnail-Travel.jpg'
import Lifestyle from '../../assets/Category/thumbnail-Lifestyle.jpg'
import TrendingTopic from '../../sections/TrendingTopic/TrendingTopic';
import CategoryButtons from '../../sections/RandomPick/CategoryButtons';
import SearchBar from '../../sections/RandomPick/SearchBar';
import SideInsta from '../../sections/RandomPick/SideInsta';
import Instagram from '../../sections/Instagram/Instagram';

const Category = () => {
    const articles = useLoaderData();
    const { _id, images, content, title, writer, date, category, categoryImg, views } = articles

    console.log({ Category }, articles)
    const { data: allArticles, isLoading, refetch } = useQuery({
        queryKey: ['category'],
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
        <section className='space-y-20 pb-20'>
            <section className='px-4 lg:px-10  space-y-20 py-10  '>
            
                <div className='flex flex-col lg:flex-row gap-6 '>
                    <div className='w-full  lg:w-2/3'>
                        {
                            articles &&
                            articles.map(article =>
                                <>
                                    <div className="card w-full card-normal lg:card-side bg-base-100 gap-x-4 my-2  hover-item">
                                        <Link to={`/article/${article._id}`}><img className='w-full lg:w-96 h-72 rounded-none zoom object-cover object-center bg-neutral-content' src={article.images[0]} alt="Album" /></Link>

                                        <div className='border-gray-200 border rounded-md p-4 w-full'>
                                            <p className="py-2 text-orange-700 font-semibold uppercase">{article.category}</p>
                                            <Link to={`/article/${article._id}`}> <p className="py-2 text-2xl font-bold text-primary capitalize">{article.title}</p></Link>


                                            <div className="stats my-2 ">
                                                <div className="stat rounded-none flex-row justify-between pl-0">
                                                    <div className="stat-figure text-primary">
                                                        <div className="rating gap-1">
                                                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-500 hover:bg-red-700" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="stat-title">{article.views}</p>
                                                        <div className="stat-desc">{article.date} • 3 min read</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></>
                            )
                        }
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
            <TrendingTopic />
            <Instagram/>
        </section>
    );
};


export default Category;