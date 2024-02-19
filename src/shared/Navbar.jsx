import React from 'react';
import logo from '../assets/Logo & Banner/good morning (Poster).png'
import { Link } from 'react-router-dom';
import AdminPhoto from '../assets/Logo & Banner/Blog pp.jpg'

const Navbar = () => {

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content px-1 lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>
                        <div>

                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-6 py-6 z-[2] lg:z-[-1] p-2s shadow bg-primary text-zinc-600  rounded-box w-60">
                            <li><Link className="sp-action-button" to="/allArticles">All</Link></li>
                            <li><Link className="sp-action-button" to="/allArticles/Stories">Stories</Link></li>
                            <li><Link className="sp-action-button" to="/allArticles/Movies">Movies</Link></li>
                            <li><Link className="sp-action-button" to="/allArticles/Sports">Sports</Link></li>
                            <li><Link className="sp-action-button" to="/allArticles/Lifestyle">Lifestyle</Link></li>
                            <li><Link className="sp-action-button" to="/allArticles/Travel">Travel</Link></li>

                            <div className='flex flex-col-reverse lg:flex-row items-start lg:items-center py-8'>
                                <div className="form-control visible ">
                                    <input type="text" placeholder="Search" className="input input-bordered w-full " />
                                </div>
                                <ul className="menu menu-horizontal rounded-box flex flex-row  gap-2 justify-center items-center">
                                    <li>
                                        <a className="px-0 lg:px-2" >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="px-0 lg:px-2" >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="px-0 lg:px-2" >
                                            <div className="indicator indicator-neutral">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                                <span className="badge badge-xs badge-primary indicator-item"></span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <Link to="/">
                        <div className='flex flex-row gap-2 items-center'>
                            <div className="">
                                <div className="w-36 rounded-md">
                                    <Link to="/"> <img src={logo} alt="Tailwind-CSS-Avatar-component" /></Link>
                                </div>
                            </div>

                        </div>
                    </Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  text-zinc-300">
                        <li><Link className="sp-action-button" to="/allArticles">All</Link></li>
                        <li><Link className="sp-action-button" to="/allArticles/Stories">Stories</Link></li>
                        <li><Link className="sp-action-button" to="/allArticles/Movies">Movies</Link></li>
                        <li><Link className="sp-action-button" to="/allArticles/Sports">Sports</Link></li>
                        <li><Link className="sp-action-button" to="/allArticles/Lifestyle">Lifestyle</Link></li>
                        <li><Link className="sp-action-button" to="/allArticles/Travel">Travel</Link></li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex bg-neutral text-zinc-300">
                    <div className='flex flex-row items-center '>
                        <div className="form-control md:hidden lg:visible">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <ul className="menu menu-horizontal rounded-box">
                            <li>
                                <a className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                </a>
                            </li>
                            <li>
                                <a className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </a>
                            </li>
                            <li>
                                <a className="px-2">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                        <span className="badge badge-xs badge-primary indicator-item"></span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="avatar  ">
                            <div className="rounded-full w-10 object object-cover ring ring-primary ring-offset-base-100 ring-offset-1 ">
                                <img src={AdminPhoto} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='navbar-end visible lg:hidden pr-2'>
                    <div className="avatar ">
                        <div className="rounded-full w-10 object object-cover ring ring-primary ring-offset-base-100 ring-offset-1  ">
                            <img src={AdminPhoto} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;