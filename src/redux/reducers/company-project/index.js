import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    editInfo: {}
}

const companyProjectSlice = createSlice({
    name: "companyProject",
    initialState,
    reducers: {
        setEditInfo: (state, action) => {
            state.editInfo = action.payload;
        }
    }
})

const { actions, reducer } = companyProjectSlice;
export const { setEditInfo } = actions;
export default reducer;