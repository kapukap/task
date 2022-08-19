import {createAsyncThunk} from "@reduxjs/toolkit";
import axi from "../../../api/config";

export const getPositions = createAsyncThunk(
    'positions/getPositions',
    async (arg, thunkAPI) => {
        try {
            const {data} = await axi.get('positions')

            if (!data.success) {
                return thunkAPI.rejectWithValue(data)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }
)
