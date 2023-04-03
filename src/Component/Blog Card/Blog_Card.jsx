import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Blog_Card = (props) => {

    // console.log(props.blog)

    const handleBookmark = props.handleBookmark
    const markToRead = props.markToRead

    const { id, author_name, Author_image, Read_time, Blog_title, Blog_cover_image, publish_date, Hastag } = props.blog

    return (
        <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="7000">
            <div className=" w-[410px] md:w-full lg:w-[750px] ml-0 bg-base-100 mx-auto ">
                <figure className=''>
                    <img className='rounded-md h-[300px] w-[400px] mx-auto md:w-full lg:w-[700px]' src={Blog_cover_image} alt="Blog_cover_image" />
                </figure>
                <div className='flex items-center justify-between gap-5 mx-5 mt-5'>
                    <div className='flex items-center gap-5 '>
                        <div>
                            <img className=' w-16 h-[60px] rounded-full' src={Author_image} alt="" />
                        </div>
                        <div>
                            <h5 className='text-lg font-semibold'>{author_name}</h5>
                            <p>{publish_date}</p>
                        </div>
                    </div>
                    <div>
                        <h6>{Read_time} min read
                            <span onClick={() => handleBookmark(props.blog)} className='ml-2 cursor-pointer'>
                                <FontAwesomeIcon icon={faBookmark} />
                            </span>
                        </h6>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{Blog_title}</h2>
                    <h6><small>{Hastag}</small></h6>
                    <p></p>
                    <div onClick={() => markToRead(Read_time)}>
                        <button className="underline text-blue-500">Mark as read</button>
                    </div>
                    <hr className='border-2 my-3' />
                </div>

            </div>
        </div>
    );
};

export default Blog_Card;