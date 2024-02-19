import React from 'react';

const SearchBar = () => {
    return (
        <div className='bg-zinc-100 p-4 '>
            <h2 className='text-2xl font-bold text-center  hover-item'>Search</h2>
            <hr className='my-4'></hr>
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
    );
};

export default SearchBar;