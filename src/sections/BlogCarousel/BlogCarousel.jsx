import React, { useRef, useState } from 'react';
import demoImage from '../../assets/zodiac 12.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BlogCarousel.css';
import { Pagination, Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const BlogCarousel = () => {

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
  });
  return (
    <>
      <Swiper
         slidesPerView={'auto'}
         pagination={{
           clickable: true,
         }}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
       
        
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
      >

        {
          allArticles &&
          allArticles.map(allArticle =>

            <SwiperSlide className=''>
              <div className="hero min-h-screen " style={{ backgroundImage: `url(${allArticle.images[0]})`, backgroundSize: "cover",backgroundRepeat: "no-repeat", backgroundPosition: "top" , }}>
              <div className="hero-overlay bg-opacity-40"></div>
              
              <div className="w-full text-start text-neutral-content p-4 md:p-10 lg:p-20 ">
                <div className=" text-neutral-content">
                  <h1 className="text-3xl font-bold capitalize ">{allArticle.title}</h1>
                  <p className="py-2 text-sm text-justify pb-10 ">{allArticle.content[0].split('.')?.slice(0, 1)?.join('.')}.</p>
                  <Link to={`/article/${allArticle._id}`}><button className="btn capitalize button button-4 ">Read more</button></Link>
                </div>
              </div>
            </div>

              {/* 
            <div className="hero min-h-screen bg-secondary-content text-white ">
              <div className=" flex-col lg:flex-row">


                <img src={allArticle.images[0]} className="w-full lg:w-96 h-72 rounded-none zoom object-cover object-center bg-neutral-content" />
                <div className='text-start'>
                  <h1 className="text-4xl font-bold capitalize">{allArticle.title}</h1>
                  <p className="py-6 text-base text-justify"> {allArticle.content.split('.').slice(4, 6).join('.')}
                  </p>

                  <Link to={`/article/${allArticle._id}`}><button className="btn bg-transparent text-white font-bold capitalize hover:text-neutral hover:bg-white">Read more</button></Link>

                </div>
              </div>
            </div> */}
            </SwiperSlide>)
        }

         {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>  */}
      </Swiper>
    </>
  );
};

export default BlogCarousel;