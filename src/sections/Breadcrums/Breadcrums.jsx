import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrums = ({article}) => {
    const { _id, images, content, title, writer, date, category, views, youtubeLink, bigFont, bold, pictureQuotation, italic, underline, Instruction } = article
    return (
        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current  text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <Link className=' text-blue-700' to="/">Home</Link>
                           
                        </a>
                    </li>
                    
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current  text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <Link className=' text-blue-700' to="/allArticles">See All Articles</Link>
                            
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current  text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <Link className=' text-blue-700' to={`/allArticles/${category}`} > {category} </Link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Breadcrums;