import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { sumeMovieData } from '../../Data/Data';
import { MovieCard } from '../Cards/MovieCard';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router';

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 4 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 3 },
};

const Home: React.FC = () => {
    const carouselRef = useRef<any>(null);
    const [search, setSearch] = useState('sdf')
    useEffect(()=>{
        setSearch('')
    },[])

    const handleNext = () => carouselRef.current?.next();
    const handlePrev = () => carouselRef.current?.previous();

    return (
        < >
            {
                search && <div>
                    hello Search
                </div>
            }
            {
                !search && <>
                    {/*  Banner/slider */}
                    <Banner />
                    <div className="border-b border-[#272829] my-4">
                        {/* Section Header with Custom Arrows */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold border-l-4 border-blue-400 px-1.5">Featured Titles</h2>

                            <div className="flex gap-2">
                                <button
                                    onClick={handlePrev}
                                    className="bg-black/50 cursor-pointer  p-2 rounded-full hover:bg-blue-400 transition"
                                >
                                    <CircleChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="bg-black/50 cursor-pointer text-white p-2 rounded-full hover:bg-black transition"
                                >
                                    <CircleChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        <Carousel
                            ref={carouselRef}
                            responsive={responsive}
                            infinite={true}
                            arrows={false}
                            autoPlay={false}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            itemClass="px-2"
                        >
                            {sumeMovieData.map((d, idx) => (
                                <MovieCard
                                    key={idx}
                                    title={d.title}
                                    type={d.type as 'movie' | 'tv' | 'featured'}
                                    img={d.img}
                                    year={d.year}
                                    id={idx}
                                />
                            ))}
                        </Carousel>
                    </div>
                    <div className="border-b border-[#272829] my-4 py-3">
                        {/* Section Header with Custom Arrows */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold border-l-4 border-blue-400 px-1.5">Season</h2>

                            <div className="flex gap-2">
                                <div className="flex gap-2 items-center text-gray-500 font-semibold">
                                    <span>4509</span>
                                    <Link to={'/sh'} className='text-gray-50 p-1 rounded-lg text-sm cursor-pointer hover:underline bg-blue-500'>See More</Link>
                                </div>
                            </div>
                        </div>

                        <Carousel
                            ref={carouselRef}
                            responsive={responsive}
                            infinite={true}
                            arrows={false}
                            autoPlay={false}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            itemClass="px-2"
                        >
                            {sumeMovieData.map((d, idx) => (
                                <MovieCard
                                    key={idx}
                                    title={d.title}
                                    type={d.type as 'movie' | 'tv' | 'featured'}
                                    img={d.img}
                                    year={d.year}
                                      id={idx}
                                />
                            ))}
                        </Carousel>
                    </div>

                    <div className="border-b border-[#272829] my-4 py-3">
                        {/* Section Header with Custom Arrows */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold border-l-4 border-blue-400 px-1.5">TV Show</h2>
                            <div className="flex gap-2">
                                <div className="flex gap-2 items-center text-gray-500 font-semibold">
                                    <span>4509</span>
                                    <Link to={'/sh'} className='text-gray-50 text-sm p-1 rounded-lg cursor-pointer hover:underline bg-blue-500'>See More</Link>
                                </div>
                            </div>
                        </div>

                        <Carousel
                            ref={carouselRef}
                            responsive={responsive}
                            infinite={true}
                            arrows={false}
                            autoPlay={false}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            itemClass="px-2"
                        >
                            {sumeMovieData.map((d, idx) => (
                                <MovieCard
                                    key={idx}
                                    title={d.title}
                                    type={d.type as 'movie' | 'tv' | 'featured'}
                                    img={d.img}
                                    year={d.year}
                                      id={idx}
                                />
                            ))}
                        </Carousel>
                    </div>
                    <div className="border-b border-[#272829] my-4 py-3">
                        {/* Section Header with Custom Arrows */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold border-l-4 border-blue-400 px-1.5">TV Show</h2>
                            <div className="flex gap-2">
                                <div className="flex gap-2 items-center text-gray-500 font-semibold">
                                    <span>4509</span>
                                    <Link to={'/sh'} className='text-gray-50 text-sm p-1 rounded-lg cursor-pointer hover:underline bg-blue-500'>See More</Link>
                                </div>
                            </div>
                        </div>

                        <Carousel
                            ref={carouselRef}
                            responsive={responsive}
                            infinite={true}
                            arrows={false}
                            autoPlay={false}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            itemClass="px-2"
                        >
                            {sumeMovieData.map((d, idx) => (
                                <MovieCard
                                    key={idx}
                                    title={d.title}
                                    type={d.type as 'movie' | 'tv' | 'featured'}
                                    img={d.img}
                                    year={d.year}
                                      id={idx}
                                />
                            ))}
                        </Carousel>
                    </div>
                    <div className=" my-4 py-3">
                        <div className='border-b border-[#272829]'>


                            {/* Section Header with Custom Arrows */}
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold border-l-4 border-blue-400 px-1.5">Movies</h2>
                                <div className="flex gap-2 items-center text-gray-500 font-semibold">
                                    <span>4509</span>
                                    <Link to={'/sh'} className='text-gray-50 text-sm p-1 rounded-lg cursor-pointer hover:underline bg-blue-500'>See More</Link>
                                </div>
                            </div>

                            <div
                                className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2.5'
                            >
                                {sumeMovieData.map((d, idx) => (
                                    <MovieCard
                                        key={idx}
                                        title={d.title}
                                        type={d.type as 'movie' | 'tv' | 'featured'}
                                        img={d.img}
                                        year={d.year}
                                          id={idx}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            }

        </>
    );
};

export default Home;
