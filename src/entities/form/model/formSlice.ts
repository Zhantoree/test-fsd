import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { IForm } from "@entities/form/model/types.ts"
import { getUniqueId } from "@shared/lib/id"
import { getFieldFromFormById, getFormById } from "@entities/form"

const initialState: {forms: IForm[]} = {
    forms: [{
        name: 'Форма #1',
        id: getUniqueId(),
        fields: [{
            isRequired: true,
            label: 'Новое поле 3',
            type: 'string',
            id: getUniqueId()

        }]
    }],
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addField: (state, action: PayloadAction<{formId: string}>) => {
            const foundForm = getFormById(state, action.payload.formId)

            if(foundForm) {
                foundForm.fields.push({
                    type: 'string',
                    label: '',
                    isRequired: false,
                    id: getUniqueId()
                })
            }

            return state
        },
        changeFieldName: (state, action: PayloadAction<{formId: string, fieldId: string, value: string}>) => {
            const foundField = getFieldFromFormById(state, action.payload.formId, action.payload.fieldId)
            if(foundField) {
                foundField.label = action.payload.value
            }

            return state
        },
        toggleFieldRequired: (state, action: PayloadAction<{formId: string, fieldId: string}>) => {
            const foundField = getFieldFromFormById(state, action.payload.formId, action.payload.fieldId)

            if(foundField) {
                foundField.isRequired = !foundField.isRequired
            }

            return state
        },
        deleteField: (state, action: PayloadAction<{formId: string, fieldId: string}>) => {
            const foundForm = getFormById(state, action.payload.formId)

            if(foundForm) {
                foundForm.fields = foundForm.fields.filter(field => field.id !== action.payload.fieldId)
            }

            return state
        }
    }
})

export const {addField, toggleFieldRequired, deleteField, changeFieldName} = formSlice.actions
export default formSlice.reducer