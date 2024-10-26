import axios from "axios"; // Axios is used to make HTTP requests
import { TWEET_API_END_POINT } from "../utils/constants"; // API endpoint URL is imported from constants
import { useEffect } from "react"; // React hook that runs side effects
import { useDispatch, useSelector } from "react-redux"; // Redux hooks for dispatching actions and selecting state
import { getAllTweets } from "../redux/tweetSlice"; // Redux action to store tweets in the global state

// Custom hook that fetches tweets for a given user id
const useGetMyTweets = (id) => {
    const dispatch = useDispatch(); // Initialize dispatch to send actions to the Redux store
    const { refresh, isActive } = useSelector(store => store.tweet); // Extract 'refresh' and 'isActive' from the tweet part of the Redux store

    // Function to fetch all tweets of the user by their id
    const fetchMyTweets = async () => {
        try {
            // Make a GET request to fetch the user's own tweets
            const res = await axios.get(`${TWEET_API_END_POINT}/alltweets/${id}`, {
                withCredentials: true, // Send cookies along with the request
            });
            console.log(res); // Log the response to the console (for debugging)
            dispatch(getAllTweets(res.data.tweets)); // Dispatch the fetched tweets to the Redux store
        } catch (error) {
            console.log(error); // Log any errors to the console
        }
    };

    // Function to fetch tweets from accounts that the user is following
    const followingTweetHandler = async () => {
        try {
            axios.defaults.withCredentials = true; // Ensure credentials (like cookies) are included with all requests
            // Make a GET request to fetch tweets from followed accounts
            const res = await axios.get(`${TWEET_API_END_POINT}/followingtweets/${id}`);
            console.log(res); // Log the response to the console (for debugging)
            dispatch(getAllTweets(res.data.tweets)); // Dispatch the fetched tweets to the Redux store
        } catch (error) {
            console.log(error); // Log any errors to the console
        }
    };

    // useEffect hook runs when 'isActive' or 'refresh' values change
    useEffect(() => {
        if (isActive) {
            fetchMyTweets(); // Fetch the user's own tweets if they are active
        } else {
            followingTweetHandler(); // Fetch tweets from followed accounts if the user is not active
        }
    }, [isActive, refresh]); // The effect will re-run when either 'isActive' or 'refresh' changes
};

export default useGetMyTweets; // Export the custom hook so it can be used in other components
