import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    editInfo: {}
}

const companyPositionSlice = createSlice({
    name: "companyPosition",
    initialState,
    reducers: {
        setEditInfo: (state, action) => {
            state.editInfo = action.payload;
        }
    }
})

const { actions, reducer } = companyPositionSlice;
export const { setEditInfo } = actions;
export default reducer;