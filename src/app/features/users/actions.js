import {createAsyncThunk} from "@reduxjs/toolkit";
import axi from "../../../api/config";

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async ({currentPage}, {rejectWithValue}) => {
        try {
            const {data} = await axi.get(`users?page=${currentPage}&count=6`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const register = createAsyncThunk(
    'users/register',
    async (user, {rejectWithValue}) => {
        try {
            const {data} = await axi.get('token');
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Token: data.token
                }
            }
            await axi.post(`users`, user, config)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)
