import React from 'react';
import Stories from '../../assets/Category/thumbnail-Stories.jpg'
import Movies from '../../assets/Category/thumbnail-Movies.jpg'
import All from '../../assets/Category/thumbnail-All.png'
import Sports from '../../assets/Category/thumbnail-Sports.jpg'
import Travel from '../../assets/Category/thumbnail-Travel.jpg'
import Lifestyle from '../../assets/Category/thumbnail-Lifestyle.jpg'
import { Link } from 'react-router-dom';

const CategoryButtons = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-2 gap-2'>
                        <div className="w-full  hover-item hover-item flex flex-row gap-2 items-center bg-zinc-100 p-2 rounded-badge">
                            <div className=" text-secondary">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={All} />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-title text-secondary"><Link to="/allArticles">All</Link></div>
                        </div>
                        <div className="w-full  hover-item hover-item flex flex-row gap-2 items-center bg-zinc-100 p-2 rounded-badge">
                            <div className=" text-secondary">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={Stories} />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-title text-secondary"><Link to="/allArticles/Stories">Stories</Link></div>
                        </div>
                        <div className="w-full  hover-item hover-item flex flex-row gap-2 items-center bg-zinc-100 p-2 rounded-badge">
                            <div className=" text-secondary">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={Sports} />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-title text-secondary"><Link to="/allArticles/Sports">Sports</Link></div>
                        </div>
                        <div className="w-full  hover-item hover-item flex flex-row gap-2 items-center bg-zinc-100 p-2 rounded-badge">
                            <div className="text-secondary">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={Movies} />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-title text-secondary "><Link to="/allArticles/Movies">Movies</Link></div>
                        </div>
                        <div className="w-full  hover-item hover-item flex flex-row gap-2 items-center bg-zinc-100 p-2 rounded-badge">
                            <div className=" text-secondary">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={Lifestyle} />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-title text-secondary"><Link to="/allArticles/Lifestyle">Lifestyle</Link></div>
                        </div>
                        <div className="w-full  hover-item hover-item flex flex-row gap-2 items-center bg-zinc-100 p-2 rounded-badge">
                            <div className=" text-secondary">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={Travel} />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-title text-secondary"><Link to="/allArticles/Travel">Travel</Link></div>
                        </div>
                       
                    </div>
    );
};

export default CategoryButtons;