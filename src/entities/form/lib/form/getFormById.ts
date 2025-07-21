import type { Field, IForm } from "@entities/form/model/types.ts"

export const getFormById = (state: RootState, formId: string): IForm => {
    return state.forms.find((form: IForm) => form.id === formId)
}

export const getFieldFromFormById = (state: RootState, formId: string, fieldId: string): Field | undefined => {
    const form = getFormById(state, formId)
    if(form) {
        return form.fields.find(field => field.id === fieldId)
    }
    return undefined
}