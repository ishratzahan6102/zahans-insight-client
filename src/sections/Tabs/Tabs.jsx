import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Tabs.css';
import { FreeMode, Pagination } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';




const TabSection = () => {
    const { data: Technology } = useQuery({
        queryKey: ['Technology'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://zahan-s-insight-server.vercel.app/allArticles/Technology`, {
                })
                const data = await res.json()
                console.log(data)
                return data
            }
            catch (errors) {
            }
        }
    })
    const { data: AI } = useQuery({
        queryKey: ['AI'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://zahan-s-insight-server.vercel.app/allArticles/AI`, {
                })
                const data = await res.json()
                console.log(data)
                return data
            }
            catch (errors) {
            }
        }
    })

    return (
        <section className='px-4 md:px-10 lg:px-20 space-y-6'>
            <div className='flex flex-col md:flex-row justify-between items-center '>
                <h2 className='text-4xl font-bold text-primary  hover-item' >Innovation & Tech</h2>
                <Link to="/allArticles"><button className="btn btn-link  hover-item">See All Topic</button></Link>
            </div>
            <Tabs className="space-y-6">
                <TabList role="tablist" className="flex flex-row gap-2 tabs tabs-lifted tabs-lg w-1/6 ">
                    <Tab className="btn btn-ghost active: ">Technology</Tab>
                    <Tab className="btn btn-ghost ">AI</Tab>
                </TabList>

                <TabPanel>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        freeMode={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {
                            Technology &&
                            Technology.map(T => <SwiperSlide>
                                <Link to={`/article/${T._id}`}>
                                    <div className="card w-full h-96 bg-zinc-200  rounded-md">
                                        <div className="card-body text-center mx-auto py-10">
                                            <h2 className=" text-center text-orange-700 text-sm font-semibold">{T.category}</h2>
                                            <p className='text-2xl font-bold '>{T.title}</p>
                                        </div>
                                        <figure><img className='zoom tabs-img h-96 ' src={T.images[0]} alt={T.title} /></figure>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            )
                        }
                    </Swiper>
                </TabPanel>

                <TabPanel>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        freeMode={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {
                            AI &&
                            AI.map(A => <SwiperSlide>
                                <Link to={`/article/${A._id}`}>

                                    <div className="card  w-full h-96 bg-zinc-200  rounded-md">
                                        <div className="card-body text-center mx-auto py-10">
                                            <h2 className=" text-center text-orange-700 text-sm font-semibold">{A.category}</h2>
                                            <p className='text-2xl font-bold '>{A.title}</p>
                                        </div>
                                        <figure><img className='zoom tabs-img h-96' src={A.images[0]} alt={A.title} /></figure>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            )
                        }
                    </Swiper>
                </TabPanel>

            </Tabs>
        </section>
    )
};



export default TabSection;