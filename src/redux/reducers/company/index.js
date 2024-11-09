import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    editInfo: {}
}

const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        setEditInfo: (state, action) => {
            state.editInfo = action.payload;
        }
    }
})

const { actions, reducer } = companySlice;
export const { setEditInfo } = actions;
export default reducer;