import React, { useEffect, useState } from 'react';
import Bookmark from '../Blog/Bookmark';
import Blog_Card from '../Blog Card/Blog_Card';
import { ToastContainer, toast } from 'react-toastify';
import './Main_page.css'


const Main_Page = () => {
    const [bloger, setBloger] = useState([])
    const [bookmark, setBookmark] = useState([])
    const [readTime, setReadtime] = useState()

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBloger(data))
    }, []);



    const handleBookmark = (blog) => {
        const previousBookmark = JSON.parse(localStorage.getItem("Bookmark"))
        let currentBookmark = []

        if (previousBookmark) {
            const isThisBookmark = previousBookmark.find(bookmark => bookmark.id === blog.id)

            if (isThisBookmark) {
                toast("You Have Already Bookmarked This Blog")
            }

            else {
                currentBookmark.push(...previousBookmark, blog)
                localStorage.setItem("Bookmark", JSON.stringify(currentBookmark))
                setBookmark(currentBookmark)
                toast(" Bookmark Successful!")
            }
        }

        else {
            currentBookmark.push(blog)
            setBookmark(currentBookmark)
            localStorage.setItem("Bookmark", JSON.stringify(currentBookmark))
            toast(" Bookmark Successful!")
        }
    }



    const markToRead = (time) => {
        const previousReadTime = JSON.parse(localStorage.getItem("Read Time"))

        if (previousReadTime) {
            const totalTime = previousReadTime + time;
            localStorage.setItem("Read Time", totalTime)
            setReadtime(totalTime)
        } else {

            localStorage.setItem("Read Time", time)
            setReadtime(time)
        }
    }
    return (
        <div className=' grid  grid-cols-1 md:grid-cols-6 lg:grid-cols-12 '>
            <div className='col-span-8 '>
                {
                    bloger.map(blog =>
                        <Blog_Card
                            blog={blog}
                            key={blog.id}
                            handleBookmark={handleBookmark}
                            markToRead={markToRead}
                        ></Blog_Card>
                    )
                }

            </div>
            <div className='col-span-4'>
                <Bookmark
                    bookmark={bookmark}
                    readTime={readTime}
                ></Bookmark>
            </div>

        </div>
    );
};

export default Main_Page;