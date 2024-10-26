import { createSlice } from "@reduxjs/toolkit";

// Define a slice for user-related state management
const userSlice = createSlice({
    name: "user", // The name of the slice, which is used to identify actions and state
    initialState: {
        user: null,       // Holds the current logged-in user's data
        otherUsers: null, // Holds data for other users in the system
        profile: null     // Holds the profile information of the current user
    },
    reducers: {
        // Action to set the current user's data
        getUser: (state, action) => {
            state.user = action.payload; // Update the 'user' state with the action's payload
        },
        // Action to set the data for other users
        getOtherUsers: (state, action) => {
            state.otherUsers = action.payload; // Update the 'otherUsers' state with the action's payload
        },
        // Action to set the profile information of the current user
        getMyProfile: (state, action) => {
            state.profile = action.payload; // Update the 'profile' state with the action's payload
        },
        // Action to update the following list of the current user
        followingUpdate: (state, action) => {
            // Check if the user is already following the given user (in action.payload)
            if (state.user.following.includes(action.payload)) {
                // If already following, remove (unfollow) that user
                state.user.following = state.user.following.filter((itemId) => {
                    return itemId !== action.payload; // Keep only the IDs that do not match the payload
                });
            } else {
                // If not following, add (follow) that user
                state.user.following.push(action.payload); // Add the user ID to the 'following' array
            }
        }
    }
});

// Export the action creators so they can be used in components
export const { getUser, getOtherUsers, getMyProfile, followingUpdate } = userSlice.actions;

// Export the reducer so it can be added to the Redux store
export default userSlice.reducer;
