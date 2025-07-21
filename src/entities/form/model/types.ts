export interface IForm {
    fields: Field[],
    name: string,
    id: string,
}

export interface Field {
    id: string,
    type: string | number | 'phone',
    isRequired: boolean,
    label: string
}

