import { configureStore } from "@reduxjs/toolkit"
import { formSlice } from "@entities/form"


export const store = configureStore({
	reducer: {
		forms: formSlice,
	},
})

