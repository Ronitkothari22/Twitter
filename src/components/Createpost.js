// import React, { useState } from 'react';
// import Avatar from "react-avatar";
// import { CiImageOn } from "react-icons/ci";

// function Createpost() {
//     const [activeTab, setActiveTab] = useState('forYou');

//     return (
//         <div className='w-full'> {/* Adjusted width here */}
//             <div>
//                 <div className='flex items-center justify-evenly border-b border-gray-200'>
//                     <div 
//                         className={`${activeTab === 'forYou' ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}
//                         onClick={() => setActiveTab('forYou')}
//                     >
//                         <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
//                     </div>
//                     <div 
//                         className={`${activeTab === 'following' ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}
//                         onClick={() => setActiveTab('following')}
//                     >
//                         <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
//                     </div>
//                 </div>
//                 <div>
//                     <div className='flex items-center p-4'>
//                         <div>
//                             <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} />
//                         </div>
//                         <input className='w-full outline-none border-none text-xl ml-2' type="text" placeholder='What is happening?!' />
//                     </div>
//                     <div className='flex items-center justify-between p-4 border-b border-gray-300'>
//                         <div>
//                             <CiImageOn size="24px" />
//                         </div>
//                         <button className='bg-[#1D9BF0] px-4 py-1 text-lg text-white text-right border-none rounded-full'>Post</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Createpost;




// import React, { useState } from 'react';
// import Avatar from "react-avatar";
// import { CiImageOn } from "react-icons/ci";
// import axios from "axios";
// import { TWEET_API_END_POINT } from "../utils/constants";
// import toast from "react-hot-toast"
// import { useSelector, useDispatch } from "react-redux";
// import { getAllTweets, getIsActive, getRefresh } from '../redux/tweetSlice';

// const CreatePost = () => {
//     const [description, setDescription] = useState("");
//     const { user } = useSelector(store => store.user);
//     const {isActive} = useSelector(store=>store.tweet);
//     const dispatch = useDispatch();

//     const submitHandler = async () => {

//         try {
//             const res = await axios.post(`${TWEET_API_END_POINT}/create`, { description, id: user?._id }, {
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 withCredentials: true
//             });
//             dispatch(getRefresh());
//             if (res.data.success) {
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//             console.log(error);
//         }
//         setDescription("");
//     }

//     const forYouHandler = () => {
//          dispatch(getIsActive(true));
//     }
//     const followingHandler = () => {
        
//         dispatch(getIsActive(false));
//     }

//     return (
//         <div className='w-[100%]'>
//             <div>
//                 <div className='flex items-center justify-evenly border-b border-gray-200'>
//                     <div onClick={forYouHandler} className={`${isActive ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}>
//                         <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
//                     </div>
//                     <div onClick={followingHandler} className={`${!isActive ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}>
//                         <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
//                     </div>
//                 </div>
//                 <div >
//                     <div className='flex items-center p-4'>
//                         <div>
//                             <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} />
//                         </div>
//                         <input value={description} onChange={(e) => setDescription(e.target.value)} className='w-full outline-none border-none text-xl ml-2' type="text" placeholder='What is happening?!' />
//                     </div>
//                     <div className='flex items-center justify-between p-4 border-b border-gray-300'>
//                         <div>
//                             <CiImageOn size="24px" />
//                         </div>
//                         <button onClick={submitHandler} className='bg-[#1D9BF0] px-4 py-1 text-lg text-white text-right border-none rounded-full '>Post</button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default CreatePost

// import React, { useState } from 'react';
// import Avatar from "react-avatar";
// import { CiImageOn } from "react-icons/ci";
// import axios from "axios";
// import { TWEET_API_END_POINT } from "../utils/constants";
// import toast from "react-hot-toast";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllTweets, getIsActive, getRefresh } from '../redux/tweetSlice';

// const CreatePost = ({ isPopup = false }) => {
//     const [description, setDescription] = useState("");
//     const { user } = useSelector(store => store.user);
//     const { isActive } = useSelector(store => store.tweet);
//     const dispatch = useDispatch();

//     const submitHandler = async () => {
//         try {
//             const res = await axios.post(`${TWEET_API_END_POINT}/create`, { description, id: user?._id }, {
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 withCredentials: true
//             });
//             dispatch(getRefresh());
//             if (res.data.success) {
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//             console.log(error);
//         }
//         setDescription("");
//     }

//     const forYouHandler = () => {
//         dispatch(getIsActive(true));
//     }
//     const followingHandler = () => {
//         dispatch(getIsActive(false));
//     }

//     return (
//         <div className='w-[100%]'>
//             <div>
//                 {!isPopup && (
//                     <div className='flex items-center justify-evenly border-b border-gray-200'>
//                         <div onClick={forYouHandler} className={`${isActive ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}>
//                             <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
//                         </div>
//                         <div onClick={followingHandler} className={`${!isActive ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}>
//                             <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
//                         </div>
//                     </div>
//                 )}
//                 <div>
//                     <div className='flex items-center p-4'>
//                         <div>
//                             <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} />
//                         </div>
//                         <input value={description} onChange={(e) => setDescription(e.target.value)} className='w-full outline-none border-none text-xl ml-2' type="text" placeholder='What is happening?!' />
//                     </div>
//                     <div className='flex items-center justify-between p-4 border-b border-gray-300'>
//                         <div>
//                             <CiImageOn size="24px" />
//                         </div>
//                         <button onClick={submitHandler} className='bg-[#1D9BF0] px-4 py-1 text-lg text-white text-right border-none rounded-full '>Post</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CreatePost


import React, { useState } from 'react';
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constants";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { getAllTweets, getIsActive, getRefresh } from '../redux/tweetSlice';

const CreatePost = ({ isPopup = false }) => {
    const [description, setDescription] = useState("");
    const [isPosting, setIsPosting] = useState(false);
    const { user } = useSelector(store => store.user);
    const { isActive } = useSelector(store => store.tweet);
    const dispatch = useDispatch();

    // Default avatar fallback URL
    const defaultAvatar = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png";

    const submitHandler = async () => {
        if (!description.trim()) {
            toast.error("Tweet cannot be empty!");
            return;
        }

        setIsPosting(true);
        try {
            const res = await axios.post(
                `${TWEET_API_END_POINT}/create`,
                { description, id: user?._id },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            );

            if (res.data.success) {
                toast.success(res.data.message);
                setDescription("");
                dispatch(getRefresh());
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error creating post";
            toast.error(errorMessage);
            console.error("Tweet creation error:", error);
        } finally {
            setIsPosting(false);
        }
    };

    const forYouHandler = () => {
        dispatch(getIsActive(true));
    };

    const followingHandler = () => {
        dispatch(getIsActive(false));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submitHandler();
        }
    };

    return (
        <div className='w-full'>
            <div>
                {!isPopup && (
                    <div className='flex items-center justify-evenly border-b border-gray-200'>
                        <div 
                            onClick={forYouHandler} 
                            className={`${
                                isActive ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"
                            } cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}
                        >
                            <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
                        </div>
                        <div 
                            onClick={followingHandler} 
                            className={`${
                                !isActive ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"
                            } cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}
                        >
                            <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
                        </div>
                    </div>
                )}
                <div>
                    <div className='flex items-start p-4'>
                        <div className='flex-shrink-0'>
                            <Avatar 
                                src={user?.profileImage || defaultAvatar}
                                size="40" 
                                round={true}
                                className="cursor-pointer hover:opacity-80"
                            />
                        </div>
                        <div className='flex-grow ml-2'>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className='w-full outline-none border-none text-xl resize-none min-h-[50px]'
                                placeholder='What is happening?!'
                                rows={2}
                            />
                            <div className='flex items-center justify-between mt-2'>
                                <div className='flex items-center'>
                                    <button className='p-2 rounded-full hover:bg-blue-50'>
                                        <CiImageOn size="24px" className="text-blue-500" />
                                    </button>
                                </div>
                                <button
                                    onClick={submitHandler}
                                    disabled={isPosting || !description.trim()}
                                    className={`${
                                        isPosting || !description.trim()
                                            ? 'bg-blue-300 cursor-not-allowed'
                                            : 'bg-[#1D9BF0] hover:bg-blue-600'
                                    } px-4 py-1.5 text-white rounded-full transition-colors duration-200`}
                                >
                                    {isPosting ? 'Posting...' : 'Post'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;