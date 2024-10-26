// import React from 'react'
// import Leftsidebar from "./Leftsidebar";
// import Rightsidebar from "./Rightsidebar";
// import Feed from "./Feed.js";
// import { Outlet, useNavigate } from "react-router-dom";

// function Home() {
//   return (
//     <div className='flex justify-between w-[80%] mx-auto'>
//         <Leftsidebar/>
//         <Outlet />
//         <Rightsidebar/>
      
//     </div>
//   )
// }

// export default Home


import React,{useEffect} from 'react'
import LeftSidebar from './Leftsidebar'
import RightSidebar from './Rightsidebar'
import { Outlet, useNavigate } from "react-router-dom";
import useOtherUsers from '../hooks/useOtherUsers';
import { useSelector } from "react-redux";
import useGetMyTweets from '../hooks/useGetMyTweets';


const Home = () => {
  const { user, otherUsers } = useSelector(store => store.user);
  const navigate = useNavigate();

  useEffect(()=>{
    if (!user) {
      navigate("/login");
    }
  },[]);
  // custom Hook
  useOtherUsers(user?._id);
  useGetMyTweets(user?._id);

  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar />
      <Outlet />
      <RightSidebar otherUsers={otherUsers} />
    </div>
  )
}

export default Home