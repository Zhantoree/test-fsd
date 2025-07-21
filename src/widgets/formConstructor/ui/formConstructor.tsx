import { FormCreate } from "@features/formCreate"
import { type IForm, selectForms } from "@entities/form"
import { useAppSelector } from "@shared/lib/store"
import { FormPreview } from "@features/formPreview"

const FormConstructor = () => {
	const forms = useAppSelector<IForm[]>(selectForms)

	return (
		<>
			{
				forms?.map((form: IForm) => <FormCreate key={form.id} form={form} />)
			}
			{
				forms?.map((form: IForm) => <FormPreview key={form.id} form={form} />)
			}
		</>
	)
}

export default FormConstructor