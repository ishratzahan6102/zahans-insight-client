import React from 'react';
import demoImage from '../../assets/zodiac 12.jpg'
import './MostPopular.css'
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const MostPopular = () => {

    const { data: mostPopular, isLoading, refetch } = useQuery({
        queryKey: ['mostPopular'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://zahan-s-insight-server.vercel.app/mostPopular`, {
                })
                const data = await res.json()
                console.log(data)
                return data
            }
            catch (errors) {
            }
        }
    })
 // const bigBanner =  mostPopular[2]? mostPopular[2] : ""
    // const { _id, images, content, title, writer, date, category, views, youtubeLink, bigFont, bold, pictureQuotation, italic, underline, Instruction } = bigBanner
   
    

    return (

        <section className='px-4 md:px-10 lg:px-20 text-primary space-y-6  pb-10'>
            <div className='flex flex-col md:flex-row justify-between items-center pt-10'>
                <h2 className='text-4xl font-bold hover-item'>Most Popular</h2>
                <Link to="/allArticles"><button className="btn btn-link hover-item">See All Topic</button></Link>
            </div>
            <div className='flex flex-col  lg:flex-row gap-6  '>
                {/* <div className='most-popular-banner w-full lg:w-1/3'>

               
            
                <Link to={`/mostPopular/${_id}`}> <div className='hover-item'>
                        <div className="flex-col">
                            <img src={images[0]} alt={title} className="w-full  h-auto rounded-lg zoom " />
                            <div>
                        
                                <div className="card-body p-0">
                                <p className="py-2 font-semibold text-orange-700">{category}</p>
                                <h1 className="text-3xl font-bold capitalize">{title}</h1>
                                    <p className="py-2 text-justify ">{content[0]}</p>
                                </div>
                            </div>
                        </div>
                    </div></Link> 


                   
                </div> */}

                <div className='most-popular-articles w-full '>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                        {
                            mostPopular &&
                            mostPopular.map(mp => <Link to={`/mostPopular/${mp._id}`}><div className="hover-item card w-full  rounded-sm ">
                                <figure>
                                    <img className='w-full rounded-none zoom object-cover object-center h-52 bg-neutral-content' src={mp.images[1]} alt="Shoes" /></figure>
                                <div className="card-body p-0">
                                    <p className="pt-2 text-orange-700 font-semibold ">{mp.category}</p>
                                    <p className=" text-sm text-justify capitalize">{mp.title}</p>

                                </div>
                            </div></Link>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MostPopular;