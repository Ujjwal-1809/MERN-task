import React, { useState } from 'react'
import img1 from '../assets/articleimg1.jpeg'
import img2 from '../assets/articleimg2.jpeg'
import img3 from '../assets/articleimg3.jpeg'
import userimg1 from '../assets/userimg1.jpeg'
import userimg2 from '../assets/userimg2.jpeg'
import userimg3 from '../assets/userimg3.jpeg'
import userimg4 from '../assets/userimg4.jpeg'
import userimg5 from '../assets/userimg5.jpeg'
import userimg6 from '../assets/userimg6.jpeg'
import userimg7 from '../assets/userimg7.jpeg'
import userimg8 from '../assets/userimg8.jpeg'

const Article = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [followedGroups, setFollowedGroups] = useState({});

    const handleFollow = (groupName) => {
        setFollowedGroups((prev) => ({
            ...prev,
            [groupName]: !prev[groupName], // Toggle follow state for that group
        }));
    };

    const groups = [
        { img: userimg5, name: "Leisure" },
        { img: userimg6, name: "Activism" },
        { img: userimg7, name: "MBA" },
        { img: userimg8, name: "Philosophy" },
    ];

    return (

        <div className="w-full gap-y-3 max-w-full md:w-full sm:m-6 sm:w-[80%] grid grid-cols-1 sm:grid-cols-[65%_35%] px-0 sm:px-6">

            <div className="flex justify-between items-center sm:hidden p-4 text-center ">
                <h2 className='font-bold'>Posts(368)</h2>
                <button className='bg-slate-200 p-1.5 rounded-sm'>Filter: All &nbsp; <i className="fa-solid fa-caret-down"></i></button>
            </div>

            <div className='w-full flex flex-col gap-y-3'>
                <div className='w-full border border-slate-300 rounded-sm'>
                    <img className="w-full h-34 sm:h-48 object-cover rounded-sm" src={img1} alt="" />
                    <h2 className='font-bold m-4'>✍️ Article</h2>
                    <div className='flex w-[95%] m-4 relative'>
                        <p className='font-bold'>What if famous brands had regular fonts? Meet<br />  RegulaBrands!</p>
                        <i onClick={() => setIsOpen(!isOpen)}
                            className="fa-solid fa-ellipsis ml-auto text-xl cursor-pointer"></i>

                        {isOpen && (
                            <div className="absolute right-0 top-5 w-36 bg-white shadow-lg border rounded-md text-sm">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Report</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <p className='text-slate-500 m-4'>I've worked in UX for the better part of a decade. From now on, I plan to rei...</p>

                    <div>
                        <div className='m-4 flex items-center justify-center'>
                            <div className='flex justify-center items-center mr-[50%] gap-x-2'>
                                <img className='h-11 w-11 rounded-full' src={userimg1} alt="USER Img" />
                                <h2 className='font-bold'>Sarthak Kamra</h2>
                            </div>
                            <h3 className='mr-2.5 text-sm'><i className="fa-regular fa-eye"></i> 1.4k views</h3>
                            <button className='bg-slate-300 rounded-sm p-1 h-8 w-8'><i className="fa-solid fa-share-nodes"></i></button>
                        </div>
                    </div>
                </div>

                <div className='w-full border border-slate-300 rounded-sm'>
                    <img className='w-full h-34 sm:h-48 object-cover rounded-sm' src={img2} alt="" />
                    <h2 className='font-bold m-4'>🔬️ Education</h2>
                    <div className='flex w-[95%] m-4 relative'>
                        <p className='font-bold'>Tax Benefits for Investment under National Pension <br /> Scheme launched by Government</p>
                        <i onClick={() => setIsOpen(!isOpen)}
                            className="fa-solid fa-ellipsis ml-auto text-xl cursor-pointer"></i>

                        {isOpen && (
                            <div className="absolute right-0 top-5 w-36 bg-white shadow-lg border rounded-md text-sm">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Report</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                                </ul>
                            </div>
                        )}                    </div>
                    <p className='text-slate-500 m-4'>I've worked in UX for the better part of a decade. From now on, I plan to rei...</p>

                    <div>
                        <div className='m-4 flex items-center justify-center'>
                            <div className='flex justify-center items-center mr-[50%] gap-x-2'>
                                <img className='h-11 w-11 rounded-full object-cover' src={userimg2} alt="USER Img" />
                                <h2 className='font-bold'>Sarah West</h2>
                            </div>
                            <h3 className='mr-2.5 text-sm'><i className="fa-regular fa-eye"></i> 1.4k views</h3>
                            <button className='bg-slate-300 rounded-sm p-1 h-8 w-8'><i className="fa-solid fa-share-nodes"></i></button>
                        </div>
                    </div>
                </div>

                <div className='w-full border border-slate-300 rounded-sm'>
                    <img className='w-full h-34 sm:h-48 object-cover rounded-sm' src={img3} alt="" />
                    <h2 className='font-bold m-4'>🗓️ Meetup</h2>
                    <div className='flex w-[95%] m-4 items-center relative'>
                        <p className='font-bold text-xl'>Finance & Investment Elite Social Mixer @Lujiazui
                        </p>
                        <i onClick={() => setIsOpen(!isOpen)}
                            className="fa-solid fa-ellipsis ml-auto text-xl cursor-pointer"></i>

                        {isOpen && (
                            <div className="absolute right-0 top-5 w-36 bg-white shadow-lg border rounded-md text-sm">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Report</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                                </ul>
                            </div>
                        )}                    </div>

                    <div className='flex gap-x-16 m-4'>
                        <h3 className='text-sm font-bold'><i className="fa-solid fa-calendar-days"></i> Fri, 12 Oct, 2018</h3>
                        <h3 className='font-semibold'><i className="fa-solid fa-location-dot"></i> Ahmedabad, India</h3>
                    </div>

                    <button className='text-orange-400 border-2 font-bold border-slate-300 w-[90%] h-9 m-4 cursor-pointer'>Visit Website</button>

                    <div>
                        <div className='m-4 flex items-center justify-center'>
                            <div className='flex justify-center items-center mr-[50%] gap-x-2'>
                                <img className='h-11 w-11 rounded-full object-cover' src={userimg3} alt="USER Img" />
                                <h2 className='font-bold'>Ronal Jones</h2>
                            </div>
                            <h3 className='mr-2.5 text-sm'><i className="fa-regular fa-eye"></i> 1.4k views</h3>
                            <button className='bg-slate-300 rounded-sm p-1 h-8 w-8'><i className="fa-solid fa-share-nodes"></i></button>
                        </div>
                    </div>
                </div>
                <div className='w-full border border-slate-300 rounded-sm'>
                    <h2 className='font-bold m-4'>💼️ Job</h2>
                    <div className='flex items-center w-[95%] m-4 relative'>
                        <p className='font-bold text-xl'>Software Developer
                        </p>
                        <i onClick={() => setIsOpen(!isOpen)}
                            className="fa-solid fa-ellipsis ml-auto text-xl cursor-pointer"></i>

                        {isOpen && (
                            <div className="absolute right-0 top-5 w-36 bg-white shadow-lg border rounded-md text-sm">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Report</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                                </ul>
                            </div>
                        )}

                    </div>

                    <div className='flex gap-x-16 m-4'>
                        <h3 className='text-sm font-bold'> <i className="fa-solid fa-bag-shopping mr-1"></i>Innovaccer Analytics Private Ltd.</h3>
                        <h3 className='font-semibold'><i className="fa-solid fa-location-dot"></i> Noida, India</h3>
                    </div>

                    <button className='text-green-700 border-2 font-bold border-slate-300 w-[90%] h-9 m-4 cursor-pointer'>Apply on Timesjobs</button>

                    <div>
                        <div className='m-4 flex items-center justify-center'>
                            <div className='flex justify-center items-center mr-[50%] gap-x-2'>
                                <img className='h-11 w-11 rounded-full object-cover' src={userimg4} alt="USER Img" />
                                <h2 className='font-bold'>Joseph Gray</h2>
                            </div>
                            <h3 className='mr-2.5 text-sm'><i className="fa-regular fa-eye"></i> 1.4k views</h3>
                            <button className='bg-slate-300 rounded-sm p-1 h-8 w-8'><i className="fa-solid fa-share-nodes"></i></button>
                        </div>
                    </div>
                </div>

            </div>

            {/* column 2 */}
            <div className="hidden sm:block w-[80%] pb-4 justify-self-end">

                <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                    <div className="flex items-center gap-2 w-full">
                        <i className="fa-solid fa-location-dot text-gray-700"></i>
                        <input
                            type="text"
                            placeholder='Noida, India'
                            className="w-full outline-none text-black bg-transparent placeholder:text-sm font-semibold"
                        />
                    </div>
                    <i className="fa-solid fa-pen text-gray-500 cursor-pointer"></i>
                </div>

                <div className="flex items-start gap-2 mt-4 text-gray-500 text-sm">
                    <i className="fa-solid fa-circle-info mt-1"></i>
                    <p className='text-sm'>Your location will help us serve better and extend a personalised experience.</p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 mt-9">
                    {/* Heading */}
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <i className="fa-regular fa-thumbs-up"></i> RECOMMENDED GROUPS
                    </h2>

                    {/* Groups List */}
                    <div className="flex flex-col space-y-3 w-full">
                        {groups.map((group, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center w-full max-w-md  p-3 rounded-lg shadow-sm"
                            >
                                {/* Group Info */}
                                <div className="flex items-center gap-3">
                                    <img
                                        className="h-11 w-11 rounded-full object-cover"
                                        src={group.img}
                                        alt="User Img"
                                    />
                                    <h2 className="font-bold">{group.name}</h2>
                                </div>

                                {/* Follow Button */}
                                <button
                                    onClick={() => handleFollow(group.name)}
                                    className={`rounded-full px-4 py-1 transition cursor-pointer 
                                ${followedGroups[group.name] ? "bg-black text-white" : "bg-gray-300 hover:bg-gray-400"}
                            `}
                                >
                                    {followedGroups[group.name] ? "Followed" : "Follow"}
                                </button>
                            </div>

                        ))}
                        <h3 className='text-end text-blue-500 mt-6'>See more...</h3>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Article