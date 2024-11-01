// import React from 'react';
// import { IoMdArrowBack } from "react-icons/io";
// import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
// import Avatar from "react-avatar";

// function Profile() {
//   const user = { following: [1], id: 1 }; // Dummy data for 'user' and 'id'
//   const id = 1; // Dummy id
//   const profile = { username: "ronitkothari" }; // Dummy data for 'profile'

//   return (
//     <div className='w-[50%] border-l border-r border-gray-200'>
//       <div>
//         <div className='flex items-center py-2'>
//           <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
//             <IoMdArrowBack size="24px" />
//           </Link>
//           <div className='ml-2'>
//             <h1 className='font-bold text-lg'>ronit</h1>
//             <p className='text-gray-500 text-sm'>10 post</p>
//           </div>
//         </div>
//         <img src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360" alt="banner" />
//         <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
//           <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="120" round={true} />
//         </div>
//         <div className='text-right m-4'>
//           <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400'>Edit Profile</button>
//           <button className='px-4 py-1 bg-black text-white rounded-full'>
//             {user.following.includes(id) ? "Following" : "Follow"}
//           </button>
//         </div>
//         <div className='m-4'>
//           <h1 className='font-bold text-xl'></h1>
//           <p>{`@${profile?.username}`}</p>
//         </div>
//         <div className='m-4 text-sm'>
//           <p>🌐 Exploring the web's endless possibilities with MERN Stack 🚀 | Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me on this coding journey!</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;





// import React from 'react';
// import { IoMdArrowBack } from "react-icons/io";
// import { Link, useParams } from 'react-router-dom';
// import Avatar from "react-avatar";
// import { useSelector,useDispatch } from "react-redux";
// import useGetProfile from '../hooks/useGetProfile';
// import axios from "axios";
// import { USER_API_END_POINT } from '../utils/constants';
// import toast from "react-hot-toast"
// import { followingUpdate } from '../redux/userSlice';
// import { getRefresh } from '../redux/tweetSlice';

// const Profile = () => {
//     const { user, profile } = useSelector(store => store.user);
//     const { id } = useParams();
//     useGetProfile(id);
//     const dispatch = useDispatch();

//     const followAndUnfollowHandler = async () => {
//         if(user.following.includes(id)){
//             // unfollow
//             try {
//                 axios.defaults.withCredentials = true;
//                 const res = await axios.post(`${USER_API_END_POINT}/unfollow/${id}`, {id:user?._id});
//                 console.log(res);
//                 dispatch(followingUpdate(id));
//                 dispatch(getRefresh());
//                 toast.success(res.data.message);
//             } catch (error) {
//                 toast.error(error.response.data.message);
//                 console.log(error);
//             }
            
//         }else{
//             // follow
//             try {
//                 axios.defaults.withCredentials = true;
//                 const res = await axios.post(`${USER_API_END_POINT}/follow/${id}`, {id:user?._id});
//                 console.log(res);
//                 dispatch(followingUpdate(id));
//                 dispatch(getRefresh());
//                 toast.success(res.data.message);
//             } catch (error) {
//                 toast.error(error.response.data.message);
//                 console.log(error);
//             }
//         }
//     }

//     return (
//         <div className='w-[50%] border-l border-r border-gray-200'>
//             <div>
//                 <div className='flex items-center py-2'>
//                     <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
//                         <IoMdArrowBack size="24px" />
//                     </Link>
//                     <div className='ml-2'>
//                         <h1 className='font-bold text-lg'>{profile?.name}</h1>
//                         <p className='text-gray-500 text-sm'>10 post</p>
//                     </div>
//                 </div>
//                 <img src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360" alt="banner" />
//                 <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
//                     <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="120" round={true} />
//                 </div>
//                 <div className='text-right m-4'>
//                     {
//                         profile?._id === user?._id ? (
//                             <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400'>Edit Profile</button>

//                         ) : (
//                             <button onClick={followAndUnfollowHandler} className='px-4 py-1 bg-black text-white rounded-full'>{user.following.includes(id) ? "Following" : "Follow"}</button>
//                         )
//                     }
//                 </div>
//                 <div className='m-4'>
//                     <h1 className='font-bold text-xl'>{profile?.name}</h1>
//                     <p>{`@${profile?.username}`}</p>
//                 </div>
//                 <div className='m-4 text-sm'>
//                     <p>🌐 Exploring the web's endless possibilities with MERN Stack 🚀 | Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me on this coding journey!</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Profile

// import React, { useState, useEffect } from 'react'; // Added useEffect import
// import { IoMdArrowBack } from "react-icons/io";
// import { Link, useParams } from 'react-router-dom';
// import Avatar from "react-avatar";
// import { useSelector, useDispatch } from "react-redux";
// import useGetProfile from '../hooks/useGetProfile';
// import axios from "axios";
// import { USER_API_END_POINT } from '../utils/constants';
// import toast from "react-hot-toast";
// import { followingUpdate } from '../redux/userSlice';
// import { getRefresh } from '../redux/tweetSlice';

// const Profile = () => {
//     const { user, profile } = useSelector(store => store.user);
//     const { id } = useParams();
//     useGetProfile(id);
//     const dispatch = useDispatch();

//     const [description, setDescription] = useState(profile?.userdescription || ""); // Store current description
//     const [isEditing, setIsEditing] = useState(false); // Track whether user is editing description
//     const [newDescription, setNewDescription] = useState(description); // Store new description

//     useEffect(() => {
//         setDescription(profile?.userdescription || "No description provided");
//     }, [profile]);

//     const followAndUnfollowHandler = async () => {
//         // Follow/Unfollow functionality
//         try {
//             const res = await axios.post(`${USER_API_END_POINT}/${user.following.includes(id) ? "unfollow" : "follow"}/${id}`, { id: user?._id });
//             dispatch(followingUpdate(id));
//             dispatch(getRefresh());
//             toast.success(res.data.message);
//         } catch (error) {
//             toast.error(error.response.data.message);
//         }
//     };

//     const saveDescription = async () => {
//         // Save new description to the server
//         try {
//             const res = await axios.put(`${USER_API_END_POINT}/updateUserDescription`, { id: user?._id, userdescription: newDescription });
//             toast.success(res.data.message);
//             setIsEditing(false); // Exit edit mode
//             setDescription(newDescription); // Update description with the new value
//             dispatch(getRefresh());
//         } catch (error) {
//             toast.error("Failed to update description");
//         }
//     };

//     return (
//         <div className='w-[50%] border-l border-r border-gray-200'>
//             <div className='flex items-center py-2'>
//                 <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
//                     <IoMdArrowBack size="24px" />
//                 </Link>
//                 <div className='ml-2'>
//                     <h1 className='font-bold text-lg'>{profile?.name}</h1>
//                     <p className='text-gray-500 text-sm'>10 posts</p>
//                 </div>
//             </div>
//             <img src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360" alt="banner" />
//             <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
//                 <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="120" round={true} />
//             </div>
//             <div className='text-right m-4'>
//                 {profile?._id === user?._id ? (
//                     <>
//                         {isEditing ? (
//                             <>
//                                 <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400' onClick={saveDescription}>
//                                     Save
//                                 </button>
//                                 <button className='px-4 py-1 ml-2 hover:bg-gray-200 rounded-full border border-gray-400' onClick={() => setIsEditing(false)}>
//                                     Cancel
//                                 </button>
//                             </>
//                         ) : (
//                             <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400' onClick={() => setIsEditing(true)}>
//                                 Edit Profile
//                             </button>
//                         )}
//                     </>
//                 ) : (
//                     <button onClick={followAndUnfollowHandler} className='px-4 py-1 bg-black text-white rounded-full'>
//                         {user.following.includes(id) ? "Following" : "Follow"}
//                     </button>
//                 )}
//             </div>
//             <div className='m-4'>
//                 <h1 className='font-bold text-xl'>{profile?.name}</h1>
//                 <p>{`@${profile?.username}`}</p>
//             </div>

//             <div className='m-4 text-sm'>
//                 {isEditing ? (
//                     <textarea
//                         value={newDescription}
//                         onChange={(e) => setNewDescription(e.target.value)}
//                         className="w-full border p-2"
//                         rows="3"
//                         placeholder="Tell the world who you are!"
//                     />
//                 ) : (
//                     <p>{description || "No description provided"}</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Profile;

// import React, { useState, useEffect } from 'react';
// import { IoMdArrowBack } from "react-icons/io";
// import { Link, useParams } from 'react-router-dom';
// import Avatar from "react-avatar";
// import { useSelector, useDispatch } from "react-redux";
// import useGetProfile from '../hooks/useGetProfile';
// import axios from "axios";
// import { USER_API_END_POINT } from '../utils/constants';
// import toast from "react-hot-toast";
// import { followingUpdate } from '../redux/userSlice';
// import { getRefresh } from '../redux/tweetSlice';

// const Profile = () => {
//     const { user, profile } = useSelector(store => store.user);
//     const { id } = useParams();
//     useGetProfile(id);
//     const dispatch = useDispatch();

//     const [description, setDescription] = useState(profile?.userdescription || "");
//     const [isEditing, setIsEditing] = useState(false);
//     const [newDescription, setNewDescription] = useState(description);

//     useEffect(() => {
//         setDescription(profile?.userdescription || "No description provided");
//     }, [profile]);

//     const followAndUnfollowHandler = async () => {
//         if (!user?._id) {
//             toast.error("Please login first");
//             return;
//         }

//         try {
//             // Configure axios to include credentials
//             const config = {
//                 withCredentials: true,
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             };

//             const action = user.following.includes(id) ? "unfollow" : "follow";
//             const res = await axios.post(
//                 `${USER_API_END_POINT}/${action}/${id}`, 
//                 { id: user._id },
//                 config
//             );

//             if (res.data && res.data.success) {
//                 dispatch(followingUpdate(id));
//                 dispatch(getRefresh());
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             if (error.response) {
//                 switch (error.response.status) {
//                     case 401:
//                         toast.error("Please login to follow/unfollow users");
//                         break;
//                     case 400:
//                         toast.error(error.response.data.message || "Bad request");
//                         break;
//                     default:
//                         toast.error("Something went wrong. Please try again later");
//                 }
//             } else if (error.request) {
//                 toast.error("Network error. Please check your connection");
//             } else {
//                 toast.error("An unexpected error occurred");
//             }
//         }
//     };

//     const saveDescription = async () => {
//         try {
//             const config = {
//                 withCredentials: true,
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             };

//             const res = await axios.put(
//                 `${USER_API_END_POINT}/updateUserDescription`, 
//                 { 
//                     id: user?._id, 
//                     userdescription: newDescription 
//                 },
//                 config
//             );

//             if (res.data && res.data.success) {
//                 toast.success(res.data.message);
//                 setIsEditing(false);
//                 setDescription(newDescription);
//                 dispatch(getRefresh());
//             }
//         } catch (error) {
//             if (error.response) {
//                 toast.error(error.response.data.message || "Failed to update description");
//             } else {
//                 toast.error("Failed to update description. Please check your connection");
//             }
//         }
//     };

//     return (
//         <div className='w-[50%] border-l border-r border-gray-200'>
//             <div className='flex items-center py-2'>
//                 <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
//                     <IoMdArrowBack size="24px" />
//                 </Link>
//                 <div className='ml-2'>
//                     <h1 className='font-bold text-lg'>{profile?.name}</h1>
//                     <p className='text-gray-500 text-sm'>10 posts</p>
//                 </div>
//             </div>
//             <img src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360" alt="banner" />
//             <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
//                 <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="120" round={true} />
//             </div>
//             <div className='text-right m-4'>
//                 {profile?._id === user?._id ? (
//                     <>
//                         {isEditing ? (
//                             <>
//                                 <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400' onClick={saveDescription}>
//                                     Save
//                                 </button>
//                                 <button className='px-4 py-1 ml-2 hover:bg-gray-200 rounded-full border border-gray-400' onClick={() => setIsEditing(false)}>
//                                     Cancel
//                                 </button>
//                             </>
//                         ) : (
//                             <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400' onClick={() => setIsEditing(true)}>
//                                 Edit Profile
//                             </button>
//                         )}
//                     </>
//                 ) : (
//                     <button onClick={followAndUnfollowHandler} className='px-4 py-1 bg-black text-white rounded-full'>
//                         {user.following.includes(id) ? "Following" : "Follow"}
//                     </button>
//                 )}
//             </div>
//             <div className='m-4'>
//                 <h1 className='font-bold text-xl'>{profile?.name}</h1>
//                 <p>{`@${profile?.username}`}</p>
//             </div>

//             <div className='m-4 text-sm'>
//                 {isEditing ? (
//                     <textarea
//                         value={newDescription}
//                         onChange={(e) => setNewDescription(e.target.value)}
//                         className="w-full border p-2"
//                         rows="3"
//                         placeholder="Tell the world who you are!"
//                     />
//                 ) : (
//                     <p>{description || "No description provided"}</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Profile;

// import React, { useState, useEffect } from 'react';
// import { IoMdArrowBack } from "react-icons/io";
// import { Link, useParams } from 'react-router-dom';
// import Avatar from "react-avatar";
// import { useSelector, useDispatch } from "react-redux";
// import useGetProfile from '../hooks/useGetProfile';
// import useGetMyTweets from '../hooks/useGetMyTweets';
// import axios from "axios";
// import { USER_API_END_POINT } from '../utils/constants';
// import toast from "react-hot-toast";
// import { followingUpdate } from '../redux/userSlice';
// import { getRefresh } from '../redux/tweetSlice';

// const Profile = () => {
//     const { user, profile } = useSelector(store => store.user);
//     const { tweets } = useSelector(store => store.tweet);
//     const { id } = useParams();
//     useGetProfile(id);
//     useGetMyTweets(id);
//     const dispatch = useDispatch();

//     // Filter tweets to only show tweets from the profile we're viewing
//     const profileTweets = tweets?.filter(tweet => tweet.userId === id) || [];

//     const [description, setDescription] = useState(profile?.userdescription || "");
//     const [isEditing, setIsEditing] = useState(false);
//     const [newDescription, setNewDescription] = useState(description);

//     useEffect(() => {
//         setDescription(profile?.userdescription || "No description provided");
//     }, [profile]);

//     const followAndUnfollowHandler = async () => {
//         if (!user?._id) {
//             toast.error("Please login first");
//             return;
//         }

//         try {
//             const config = {
//                 withCredentials: true,
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             };

//             const action = user.following.includes(id) ? "unfollow" : "follow";
//             const res = await axios.post(
//                 `${USER_API_END_POINT}/${action}/${id}`, 
//                 { id: user._id },
//                 config
//             );

//             if (res.data && res.data.success) {
//                 dispatch(followingUpdate(id));
//                 dispatch(getRefresh());
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             if (error.response) {
//                 switch (error.response.status) {
//                     case 401:
//                         toast.error("Please login to follow/unfollow users");
//                         break;
//                     case 400:
//                         toast.error(error.response.data.message || "Bad request");
//                         break;
//                     default:
//                         toast.error("Something went wrong. Please try again later");
//                 }
//             } else if (error.request) {
//                 toast.error("Network error. Please check your connection");
//             } else {
//                 toast.error("An unexpected error occurred");
//             }
//         }
//     };

//     const saveDescription = async () => {
//         try {
//             const config = {
//                 withCredentials: true,
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             };

//             const res = await axios.put(
//                 `${USER_API_END_POINT}/updateUserDescription`, 
//                 { 
//                     id: user?._id, 
//                     userdescription: newDescription 
//                 },
//                 config
//             );

//             if (res.data && res.data.success) {
//                 toast.success(res.data.message);
//                 setIsEditing(false);
//                 setDescription(newDescription);
//                 dispatch(getRefresh());
//             }
//         } catch (error) {
//             if (error.response) {
//                 toast.error(error.response.data.message || "Failed to update description");
//             } else {
//                 toast.error("Failed to update description. Please check your connection");
//             }
//         }
//     };

//     return (
//         <div className='w-[50%] border-l border-r border-gray-200'>
//             <div className='flex items-center py-2'>
//                 <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
//                     <IoMdArrowBack size="24px" />
//                 </Link>
//                 <div className='ml-2'>
//                     <h1 className='font-bold text-lg'>{profile?.name}</h1>
//                     <p className='text-gray-500 text-sm'>{profileTweets.length} posts</p>
//                 </div>
//             </div>
//             <img src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360" alt="banner" />
//             <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
//                 <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="120" round={true} />
//             </div>
//             <div className='text-right m-4'>
//                 {profile?._id === user?._id ? (
//                     <>
//                         {isEditing ? (
//                             <>
//                                 <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400' onClick={saveDescription}>
//                                     Save
//                                 </button>
//                                 <button className='px-4 py-1 ml-2 hover:bg-gray-200 rounded-full border border-gray-400' onClick={() => setIsEditing(false)}>
//                                     Cancel
//                                 </button>
//                             </>
//                         ) : (
//                             <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400' onClick={() => setIsEditing(true)}>
//                                 Edit Profile
//                             </button>
//                         )}
//                     </>
//                 ) : (
//                     <button onClick={followAndUnfollowHandler} className='px-4 py-1 bg-black text-white rounded-full'>
//                         {user.following.includes(id) ? "Following" : "Follow"}
//                     </button>
//                 )}
//             </div>
//             <div className='m-4'>
//                 <h1 className='font-bold text-xl'>{profile?.name}</h1>
//                 <p>{`@${profile?.username}`}</p>
//             </div>

//             <div className='m-4 text-sm'>
//                 {isEditing ? (
//                     <textarea
//                         value={newDescription}
//                         onChange={(e) => setNewDescription(e.target.value)}
//                         className="w-full border p-2"
//                         rows="3"
//                         placeholder="Tell the world who you are!"
//                     />
//                 ) : (
//                     <p>{description || "No description provided"}</p>
//                 )}
//             </div>

//             {/* Tweets Section */}
//             <div className="border-t border-gray-200">
//                 {profileTweets.map((tweet) => {
//                     const tweetUser = tweet.userDetails[0];
//                     return (
//                         <div key={tweet._id} className="p-4 border-b border-gray-200 hover:bg-gray-50">
//                             <div className="flex items-start">
//                                 <Avatar 
//                                     src={tweetUser?.profileImage || "https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"} 
//                                     size="40" 
//                                     round={true} 
//                                     className="mr-3"
//                                 />
//                                 <div className="flex-1">
//                                     <div className="flex items-center">
//                                         <span className="font-bold">{tweetUser?.name}</span>
//                                         <span className="ml-2 text-gray-500">@{tweetUser?.username}</span>
//                                     </div>
//                                     <p className="mt-1">{tweet.description}</p>
//                                     {tweet.image && (
//                                         <img 
//                                             src={tweet.image} 
//                                             alt="Tweet" 
//                                             className="mt-2 rounded-xl max-h-96 w-full object-cover"
//                                         />
//                                     )}
//                                     <div className="flex items-center mt-2 text-gray-500">
//                                         <span className="mr-4">❤️ {tweet.like?.length || 0}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Profile;

import React, { useState, useEffect, useRef } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import Avatar from "react-avatar";
import { useSelector, useDispatch } from "react-redux";
import useGetProfile from '../hooks/useGetProfile';
import useGetMyTweets from '../hooks/useGetMyTweets';
import axios from "axios";
import { USER_API_END_POINT } from '../utils/constants';
import toast from "react-hot-toast";
import { followingUpdate, updateProfileImages } from '../redux/userSlice';
import { getRefresh } from '../redux/tweetSlice';

const Profile = () => {
    const { user, profile } = useSelector(store => store.user);
    const { tweets } = useSelector(store => store.tweet);
    const { id } = useParams();
    const bannerInputRef = useRef(null);
    const profileInputRef = useRef(null);
    useGetProfile(id);
    useGetMyTweets(id);
    const dispatch = useDispatch();

    // Filter tweets to only show tweets from the profile we're viewing
    const profileTweets = tweets?.filter(tweet => tweet.userId === id) || [];

    const [description, setDescription] = useState(profile?.userdescription || "");
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(description);
    const [isImageUploading, setIsImageUploading] = useState(false);

    useEffect(() => {
        setDescription(profile?.userdescription || "No description provided");
    }, [profile]);

    const handleImageUpload = async (file, type) => {
        if (!file) return;
        
        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            toast.error('File size should be less than 5MB');
            return;
        }

        // Check file type
        if (!file.type.startsWith('image/')) {
            toast.error('Please upload only image files');
            return;
        }

        setIsImageUploading(true);
        try {
            const reader = new FileReader();
            
            reader.onloadend = async () => {
                const base64String = reader.result;
                
                const config = {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                const payload = {
                    id: user?._id,
                    [type === 'banner' ? 'bannerImage' : 'profileImage']: base64String
                };

                const res = await axios.put(
                    `${USER_API_END_POINT}/updateUserImages`,
                    payload,
                    config
                );

                if (res.data && res.data.success) {
                    // Update Redux store with new image
                    dispatch(updateProfileImages({
                        profileImage: type === 'profile' ? base64String : undefined,
                        bannerImage: type === 'banner' ? base64String : undefined
                    }));
                    toast.success(`${type === 'banner' ? 'Banner' : 'Profile'} image updated successfully`);
                    dispatch(getRefresh());
                }
            };

            reader.onerror = () => {
                toast.error('Error reading file');
                setIsImageUploading(false);
            };

            reader.readAsDataURL(file);
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error(`Failed to update ${type} image`);
        } finally {
            setIsImageUploading(false);
        }
    };

    const followAndUnfollowHandler = async () => {
        if (!user?._id) {
            toast.error("Please login first");
            return;
        }

        try {
            const config = {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const action = user.following.includes(id) ? "unfollow" : "follow";
            const res = await axios.post(
                `${USER_API_END_POINT}/${action}/${id}`, 
                { id: user._id },
                config
            );

            if (res.data && res.data.success) {
                dispatch(followingUpdate(id));
                dispatch(getRefresh());
                toast.success(res.data.message);
            }
        } catch (error) {
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        toast.error("Please login to follow/unfollow users");
                        break;
                    case 400:
                        toast.error(error.response.data.message || "Bad request");
                        break;
                    default:
                        toast.error("Something went wrong. Please try again later");
                }
            } else if (error.request) {
                toast.error("Network error. Please check your connection");
            } else {
                toast.error("An unexpected error occurred");
            }
        }
    };

    const saveDescription = async () => {
        try {
            const config = {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const res = await axios.put(
                `${USER_API_END_POINT}/updateUserDescription`, 
                { 
                    id: user?._id, 
                    userdescription: newDescription 
                },
                config
            );

            if (res.data && res.data.success) {
                toast.success(res.data.message);
                setIsEditing(false);
                setDescription(newDescription);
                dispatch(getRefresh());
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Failed to update description");
            } else {
                toast.error("Failed to update description. Please check your connection");
            }
        }
    };

    return (
        <div className='w-[50%] border-l border-r border-gray-200'>
            <div className='flex items-center py-2'>
                <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                    <IoMdArrowBack size="24px" />
                </Link>
                <div className='ml-2'>
                    <h1 className='font-bold text-lg'>{profile?.name}</h1>
                    <p className='text-gray-500 text-sm'>{profileTweets.length} posts</p>
                </div>
            </div>

            {/* Banner Image Section */}
            <div className="relative h-[200px]">
                <img 
                    src={profile?.bannerImage || "https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360"} 
                    alt="banner" 
                    className="w-full h-full object-cover"
                />
                {profile?._id === user?._id && (
                    <>
                        <input
                            type="file"
                            ref={bannerInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e.target.files[0], 'banner')}
                        />
                        <button 
                            onClick={() => bannerInputRef.current.click()}
                            disabled={isImageUploading}
                            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-70 transition-all"
                        >
                            {isImageUploading ? 'Uploading...' : 'Change Banner'}
                        </button>
                    </>
                )}
            </div>

            {/* Profile Image Section */}
            <div className='relative'>
                <div className='absolute top-[-60px] ml-2 border-4 border-white rounded-full'>
                    <div className="relative">
                        <Avatar 
                            src={profile?.profileImage || "https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"} 
                            size="120" 
                            round={true} 
                        />
                        {profile?._id === user?._id && (
                            <>
                                <input
                                    type="file"
                                    ref={profileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e.target.files[0], 'profile')}
                                />
                                <button 
                                    onClick={() => profileInputRef.current.click()}
                                    disabled={isImageUploading}
                                    className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                                >
                                    {isImageUploading ? '⌛' : '📷'}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className='text-right m-4 mt-16'>
                {profile?._id === user?._id ? (
                    <>
                        {isEditing ? (
                            <>
                                <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400' onClick={saveDescription}>
                                    Save
                                </button>
                                <button className='px-4 py-1 ml-2 hover:bg-gray-200 rounded-full border border-gray-400' onClick={() => setIsEditing(false)}>
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400' onClick={() => setIsEditing(true)}>
                                Edit Profile
                            </button>
                        )}
                    </>
                ) : (
                    <button onClick={followAndUnfollowHandler} className='px-4 py-1 bg-black text-white rounded-full'>
                        {user.following.includes(id) ? "Following" : "Follow"}
                    </button>
                )}
            </div>

            <div className='m-4'>
                <h1 className='font-bold text-xl'>{profile?.name}</h1>
                <p>{`@${profile?.username}`}</p>
            </div>

            <div className='m-4 text-sm'>
                {isEditing ? (
                    <textarea
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        className="w-full border p-2 rounded-md"
                        rows="3"
                        placeholder="Tell the world who you are!"
                    />
                ) : (
                    <p>{description || "No description provided"}</p>
                )}
            </div>

            {/* Tweets Section */}
            <div className="border-t border-gray-200">
                {profileTweets.map((tweet) => {
                    const tweetUser = tweet.userDetails[0];
                    return (
                        <div key={tweet._id} className="p-4 border-b border-gray-200 hover:bg-gray-50">
                            <div className="flex items-start">
                                <Avatar 
                                    src={tweetUser?.profileImage || "https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"} 
                                    size="40" 
                                    round={true} 
                                    className="mr-3"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center">
                                        <span className="font-bold">{tweetUser?.name}</span>
                                        <span className="ml-2 text-gray-500">@{tweetUser?.username}</span>
                                    </div>
                                    <p className="mt-1">{tweet.description}</p>
                                    {tweet.image && (
                                        <img 
                                            src={tweet.image} 
                                            alt="Tweet" 
                                            className="mt-2 rounded-xl max-h-96 w-full object-cover"
                                        />
                                    )}
                                    <div className="flex items-center mt-2 text-gray-500">
                                        <span className="mr-4">❤️ {tweet.like?.length || 0}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Profile;