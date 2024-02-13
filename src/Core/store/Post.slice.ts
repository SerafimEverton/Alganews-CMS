import { createSlice } from "@reduxjs/toolkit";
import { Post } from "evertonss-sdk/dist/@Types";
import { size } from "polished";

interface postSliceState{
    paginated?: Post.Paginated;
}

const initialState: postSliceState = {
    paginated: {
        page: 0,
        size: 0,
        totalElements: 0,
        totalPages: 1,
        content: []
    }
}

const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers : {}
})

export const postReducer = postSlice.reducer;