import { createSlice } from "@reduxjs/toolkit";

const filtersContactsSlice = createSlice({
    name: 'filters',
    initialState: {
        name: '',
    },
    reducers: {
        setFilter: (state, action) => {
            state.name = action.payload;
        }
    }
})

export const { setFilter } = filtersContactsSlice.actions;

export default filtersContactsSlice.reducer;