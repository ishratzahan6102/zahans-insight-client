import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import './Detail.css'
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
import AdminPhoto from '../../assets/Logo & Banner/Blog pp.jpg'
import YouTube from 'react-youtube';
import CategoryButtons from '../../sections/RandomPick/CategoryButtons';
import SearchBar from '../../sections/RandomPick/SearchBar';
import SideInsta from '../../sections/RandomPick/SideInsta';
import Instagram from '../../sections/Instagram/Instagram';
import Breadcrums from '../../sections/Breadcrums/Breadcrums';

const Details = () => {
    const article = useLoaderData();
    const { _id, images, content, title, writer, date, category, views, youtubeLink, bigFont, bold, pictureQuotation, italic, underline, Instruction } = article
    console.log(article.bigFont[0])

    let res = article.content.slice(-1);

    console.log(res)
    console.log({ Details }, article)
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
        <section className=' space-y-20 pb-20'>
            <section className='px-4 lg:px-20 space-y-20 py-10 '>
                <div className='flex flex-col lg:flex-row gap-10  '>
                    <div className='w-full lg:w-2/3'>

                        <Breadcrums article={article}></Breadcrums>

                        <div>
                            <div className=" flex-col lg:flex-row ">
                                <div>
                                    <p className="py-6 text-orange-700 font-bold uppercase">{category}</p>
                                    <h1 className="text-4xl font-bold capitalize">{title}</h1>
                                    <div className="stat px-0 flex flex-row w-1/2 items-center ">
                                        <div className="avatar">
                                            <div className="rounded-full w-12 object object-cover">
                                                <img src={AdminPhoto} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="stat-title text-secondary text-sm ">by <span className='text-orange-700 font-semibold'>{writer}</span></div>
                                            <div className="stat-desc  font-semibold">{date}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-6'>


                            {content[0] && content[0] ? <p className="py-4 font-semibold text-lg leading-loose ">{content[0]}</p>

                                :
                                ""
                            }

                            <div className="card py-4 w-full max-h-screen rounded-none">
                                <figure> <img className='max-w-full max-h-screen zoom object-top object-cover ' src={images[0]} alt={title} />
                                </figure>
                                <p className='text-xs pt-2 text-zinc-400 font-semibold'>"{pictureQuotation}"</p>
                            </div>

                            {content[1] && content[1] ? <p className="py-4  text-lg leading-loose">
                                <span className='text-6xl font-bold'>{bigFont[0]}</span>
                                <span className='font-bold'>{bold[0]} </span>
                                {content[1]}
                            </p>
                                :
                                ""
                            }

                            {content[2] && content[2] ? <p className="py-4  text-lg leading-loose">
                                <span className='text-2xl text-yellow-400 underline font-bold custom-font'>{underline[0]} </span>
                                <span className='font-bold'></span>
                                {content[2]}</p>
                                :
                                ""
                            }

                            <div className="card py-4 w-full max-h-screen rounded-none">
                                <figure> <img className='max-w-full max-h-screen zoom object-top object-cover ' src={images[1]} alt={title} /></figure>
                                <p className='text-xs pt-2 text-zinc-400 font-semibold'>"{pictureQuotation}"</p>
                            </div>

                            {content[3] && content[3] ? <p className="py-4  text-lg leading-loose">
                                <span className='text-2xl text-yellow-400 underline font-bold custom-font'>{underline[1]} </span>
                                <span className='font-bold'></span>
                                {content[3]}</p>
                                :
                                ""
                            }

                            {content[4] && content[4] ? <p className="py-4  text-lg leading-loose">
                                <span className='text-2xl text-yellow-400 underline font-bold custom-font'>{underline[2]} </span>
                                <span className='font-bold'></span>
                                {content[4]}</p>
                                :
                                ""
                            }

                            <div className="card py-4 w-full max-h-screen rounded-none">
                                <figure> <img className='max-w-full max-h-screen zoom object-top object-cover ' src={images[2]} alt={title} /></figure>
                                <p className='text-xs pt-2 text-zinc-400 font-semibold'>"{pictureQuotation}"</p>
                            </div>

                            {content[5] && content[5] ? <p className="py-4  text-lg leading-loose">
                                <span className='text-2xl text-yellow-400 underline font-bold custom-font'>{underline[3]} </span>
                                <span className='font-bold'></span>
                                {content[5]}</p>
                                :
                                ""
                            }

                            {content[6] && content[6] ? <p className="py-4  text-lg leading-loose">
                                <span className='text-2xl text-yellow-400 underline font-bold custom-font'>{underline[4]} </span>
                                <span className='font-bold'></span>
                                {content[6]}</p>
                                :
                                ""
                            }

                            {content[7] && content[7] ?
                                <p className="py-4  text-lg leading-loose">
                                    <span className='text-2xl text-yellow-400 underline font-bold custom-font'>{underline[5]} </span>
                                    <span className='font-bold'></span>
                                    {content[7]}</p>
                                :
                                ""
                            }


                            {content[8] && content[8] ? <p className="py-4  text-lg leading-loose">
                                <span className='text-2xl text-yellow-400 underline font-bold custom-font'>{underline[6]} </span>
                                <span className='font-bold'></span>
                                {content[8]}</p>

                                :
                                ""
                            }

                            {content[9] && content[9] ? <p className="py-4  text-lg leading-loose">
                                <span className=' text-zinc-600 italic bg-base-200 shadow-lg' >{italic[0]} </span>
                                <span className='font-bold'></span>
                                {content[9]}</p>

                                :
                                ""
                            }

                            <p className="py-2 leading-loose font-semibold">Email us your opinion at <span className='text-zinc-600 italic underline'>zahansInsight@gmail.com</span> and follow us on <span className='text-red-600 font-semibold pb-2 capitalize' ><a href='www.youtube.com/@Zahans_Insight'>Youtube </a> </span>for regular updates. Have a good day!</p>

                            <Breadcrums article={article}></Breadcrums>
                        </div>
                    </div>

                    <div className='space-y-8 w-full lg:w-1/3'>
                        {/* <div className='w-full'>
                            <p className='text-red-600 font-semibold underline pb-2'>{Instruction}</p>
                            <iframe className='w-full h-56 ml-auto rounded-md' width="" height="" src={youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div> */}
                        <div className='grid grid-cols-1 gap-2'>
                            {
                                allArticles &&
                                allArticles.map(allArticle =>
                                    <Link to={`/article/${allArticle._id}`}><div className=" hover-item w-full flex flex-row gap-2 items-start bg-zinc-100 p-2 rounded-sm">
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
                        <CategoryButtons></CategoryButtons>
                        {/* <SearchBar></SearchBar>
                        <SideInsta></SideInsta> */}
                    </div>
                </div>
            </section>
            <TrendingTopic />
            <Instagram></Instagram>
        </section>
    );
};

export default Details;