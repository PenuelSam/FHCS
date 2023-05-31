import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalState: false
}

const FormSlice = createSlice({
    initialState,
    name: 'modal',
    reducers: {
    setOpenModal : (state, action) => {
        state.modalState = action.payload.modalState
    },
    setCloseModal : (state, action) => {
        state.modalState = action.payload.modalState
    }
    }
})

export const {setOpenModal, setCloseModal} = FormSlice.actions

export const selectModalState = (state) => state.modal.modalState

export default FormSlice.reducer