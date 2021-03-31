import userApi from 'api/userApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const register = createAsyncThunk('users/register', async (payload) => {
    // call API to register
    const data = await userApi.register(payload);

    // save data to local storage
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user)); //convert object user to string

    // return user data
    return data.user;
});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
    },
    reducers: {},
    extraReducers: {
        [register.fullfilled]: (state, action) => {
            // update the current state
            state.current = action.payload;
        },
    },
});

export const { reducer } = userSlice;

export default reducer;
