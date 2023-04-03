import React, { useEffect, useState } from 'react';
import './Bookmark.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Bookmark = ({ bookmark, readTime }) => {
    const [time, setTime] = useState(0)

    const [bookmarked, setBookmarked] = useState([])

    useEffect(() => {
        const readTimeFromLocalStorage = JSON.parse(localStorage.getItem("Read Time"))
        setTime(readTimeFromLocalStorage)
    }, [readTime]);


    useEffect(() => {

        const bookmarkFromLocalStorage = JSON.parse(localStorage.getItem("Bookmark"))
        setBookmarked(bookmarkFromLocalStorage)

    }, [bookmark]);
    return (
        <div className='sticky top-0'>
            <h1 className='spend-time text-2xl p-3 mb-5 font-bold border-2 border-indigo-400 rounded-md' >Spent time on read : <span  data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="6000">{time ? time : '0'}</span>   min</h1>
            <div className='bookmark py-3'>
                <h1 className='text-2xl p-3 font-bold rounded-lg'>Bookmarked Blogs :
                    {bookmarked ? bookmarked.length : '0'} </h1>

                {bookmarked &&
                    bookmarked?.map(blog => <h2
                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="600"
                        className='text-2xl bg-gray-300 p-3 m-3 rounded-lg shadow-lg font-semibold mb-7'>
                        {blog.Blog_title}</h2>)
                }
            </div>

        </div>
    );
};

export default Bookmark;