// import React from 'react'
// import Createpost from './Createpost'
// import Tweet from "./Tweet.js";

// function Feed() {
//   return (
//     <div className='w-[50%] border border-gray-200'>
//       <Createpost/>
//       <Tweet/>
//     </div>
//   )
// }

// export default Feed

import React from 'react'
import CreatePost from './Createpost.js'
import Tweet from './Tweet.js'
import {useSelector} from "react-redux";

const Feed = () => {
  const {tweets} = useSelector(store=>store.tweet);
  return (
    <div className='w-[50%] border border-gray-200'>
      <div>
        <CreatePost/>
        {
          tweets?.map((tweet)=> <Tweet key={tweet?._id} tweet={tweet}/>)
        }
        
         
      </div>
    </div>
  )
}

export default Feed