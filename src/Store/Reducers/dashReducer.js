import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkState: false, 
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
    activeMenu: true,
    screenSize: 0
};

const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        toggleFeature: (state, action) => {
            const feature = action.payload;
            if (state.hasOwnProperty(feature)) {
            // Set the selected feature to true
            state[feature] = !state[feature];
            // If the selected feature is true, set all other features to false
            
            if (state[feature]) {
                Object.keys(state).forEach((key) => {
                if (key !== feature) {
                    state[key] = false;
                }
                state.activeMenu = true;
                });
            }
        }
        },
        toggleDarkMode: (state) => {
            state.darkState = !state.darkState;
        },
        setActiveMenu: (state, action) => {
            state.activeMenu = action.payload;
            console.log('activeMenu',state.activeMenu)
        }
    },
});


export const { toggleFeature, toggleDarkMode, setActiveMenu } = navbarSlice.actions;

export default navbarSlice.reducer;
