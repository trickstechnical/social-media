import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: 'Rahul'
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{}
})

export default userSlice.reducer