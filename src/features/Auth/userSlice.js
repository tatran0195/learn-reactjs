import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-keys';

export const register = createAsyncThunk('users/register', async (payload) => {
    // call API to register
    const data = await userApi.register(payload);

    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user)); //convert object user to string

    // return user data
    return data.user;
});
export const login = createAsyncThunk('users/login', async (payload) => {
    // call API to register
    const data = await userApi.login(payload);

    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user)); //convert object user to string

    // return user data
    return data.user;
});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {
        logout(state) {
            // clear local storage
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);

            // reset current state
            state.current = {};
        },
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            // update the current state
            state.current = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            // update the current state
            state.current = action.payload;
        },
    },
});

export const { actions, reducer } = userSlice;
export const { logout } = actions;

export default reducer;
