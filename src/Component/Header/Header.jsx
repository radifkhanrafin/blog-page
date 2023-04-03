import React from 'react';

const Header = () => {
    return (
        <div>

            <div className='flex justify-between bg-slate-300 p-3 rounded-xl  my-5'>
                <h1><a className="btn btn-ghost normal-case text-xl md:text-2xl lg:text-4xl  font-bold">Knowledge Cafe</a></h1>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/319986637_1176397989632103_6320080492894996317_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF6Gg0q7D_s6VEnSn_7YrI95fn10b0kc_7l-fXRvSRz_u1EuehGMre0vvKwgFaG8eVULaYUkht4dVRZV4_HSriI&_nc_ohc=7wT4sTPU6NoAX_mv0eB&_nc_ht=scontent.fdac90-1.fna&oh=00_AfBRwtklTZHEL4ea1-baoIziohDUkW2r93XBHR3iGVWJtg&oe=642AF02E" />
                    </div>
                </label>
            </div>

        </div>
    );
};

export default Header;