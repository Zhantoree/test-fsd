import { createSelector } from "@reduxjs/toolkit"
import type { IForm } from "@entities/form/model/types.ts"


const selectBase = createSelector(
	(state: RootState) => state,
	(state) => state.forms
)

export const selectForms = createSelector(
	selectBase,
	(state: { forms: IForm[]}) => state.forms
)