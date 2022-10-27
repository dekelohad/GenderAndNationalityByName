import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { fetchUserInfo } from './userThunks';
import { User } from '../../../models';

export interface UserState {
  status: 'idle' | 'loading' | 'failed';
  users: User[];
}

const initialState: UserState = {
  status: 'idle',
  users: [],
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: (state: UserState) => {
      state.status = 'idle';
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state: UserState) => {
        state.status = 'loading';
      })
      .addCase(fetchUserInfo.fulfilled, (state: UserState, action: PayloadAction<User>) => {
        state.status = 'idle';
        state.users.push(action.payload);
      })
      .addCase(fetchUserInfo.rejected, (state: UserState) => {
        state.status = 'failed';
      });
  },
});

export const { clearState } = counterSlice.actions;

export const selectUsers = (state: RootState) => state.user.users;
export const selectStatus = (state: RootState) => state.user.status;

export default counterSlice.reducer;
