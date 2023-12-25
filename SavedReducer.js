import { createSlice } from "@reduxjs/toolkit";

export const SavedSlice = createSlice({
    name: "saving",
    initialState: {
        savings: [],
    },
    reducers: {
        savedRecipes: (state, action) => {
            // state.savings.push({...action.payload})
            // Kiểm tra xem món ăn đã tồn tại trong danh sách chưa
            const existingRecipe = state.savings.find(item => item.id === action.payload.id);
            
            // Nếu món ăn chưa tồn tại, thêm nó vào danh sách
            if (!existingRecipe) {
                state.savings.push({ ...action.payload });
            }
        }
    }
});

export const {savedRecipes} = SavedSlice.actions

export default SavedSlice.reducer