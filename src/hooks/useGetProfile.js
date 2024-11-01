// import axios from "axios"; // Import Axios for making HTTP requests
// import { USER_API_END_POINT } from "../utils/constants"; // Import the API endpoint for the user profile
// import { useEffect } from "react"; // React hook to handle side effects
// import { useDispatch } from "react-redux"; // Redux hook to dispatch actions
// import { getMyProfile } from "../redux/userSlice"; // Redux action to update the user's profile in the store

// // Custom hook to fetch the user's profile using their ID
// const useGetProfile = (id) => {
//     const dispatch = useDispatch(); // Initialize dispatch to send actions to the Redux store

//     // useEffect runs when the component mounts or when the 'id' changes
//     useEffect(() => {
//         // Function to fetch the profile data from the API
//         const fetchMyProfile = async () => {
//             try {
//                 // Make a GET request to the API with the user's ID and credentials (e.g., cookies)
//                 const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
//                     withCredentials: true // Ensures credentials (like cookies) are sent with the request
//                 });
//                 console.log(res); // Log the response for debugging purposes
//                 // Dispatch the fetched profile data to the Redux store
//                 dispatch(getMyProfile(res.data.user));
//             } catch (error) {
//                 console.log(error); // Log any errors that occur during the request
//             }
//         };
//         // Call the fetch function
//         fetchMyProfile();
//     }, [id]); // The effect runs again if the 'id' changes
// };

// export default useGetProfile; // Export the custom hook so it can be used in other components


import axios from "axios";
import { USER_API_END_POINT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile, updateProfileImages } from "../redux/userSlice";

const useGetProfile = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMyProfile = async () => {
            try {
                const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
                    withCredentials: true
                });
                
                dispatch(getMyProfile(res.data.user));
                
                // If the profile has images, update them in the store
                if (res.data.user) {
                    const { profileImage, bannerImage } = res.data.user;
                    if (profileImage || bannerImage) {
                        dispatch(updateProfileImages({ profileImage, bannerImage }));
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchMyProfile();
    }, [id, dispatch]);
};

export default useGetProfile;