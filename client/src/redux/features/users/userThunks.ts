import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../../utils';

export const fetchUserInfo = createAsyncThunk(
    'user/fetchUserInfo',
    async (userName: string) => {
        const response = await API.get(`/users/${userName}`);
        return response.data;
    }
);