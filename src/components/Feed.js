import React from 'react'
import Createpost from './Createpost'
import Tweet from "./Tweet.js";

function Feed() {
  return (
    <div className='w-[50%] border border-gray-200'>
      <Createpost/>
      <Tweet/>
    </div>
  )
}

export default Feed

