import React from 'react';

const Question = () => {
    return (
        <div>
            <div className="drawer h-[500px] mt-8">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  flex">
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button justify-center items-center mx-auto my-auto ">React related questions and answers</label>
                    
                </div>

                <div className="drawer-side shadow-lg ">
                    <label htmlFor="my-drawer" className="drawer-overlay"> </label>
                    <ul className="menu p-5 w-[90%]  bg-gray-100 text-base-content">

                        <li className='text-3xl font-semibold mb-3'>Q.1 What is the difference between States and Props?</li>
                        <p className='text-justify font-semibold mb-5'>A. Props is an immutable component.  State is mutable <br />
                            B. Through props, data can be passed from the parent component to the child component, such as arrays, functions, objects, etc , On the other hand, any data can be stored in an array or object through state.
                        </p>
                        <li className='text-3xl font-semibold mb-3'>Q.2 How does useState work?</li>
                        <p className='text-justify font-semibold mb-5'>useState is a hook that manages state through functional components.  useState returns an array with two elements.  One of which is the current value and the other is the update value</p>
                        <small>Example:</small>
                        <img className='w-96 ml-9 mb-5' src="../../../public/usestatepng.png" alt="" />

                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Question;