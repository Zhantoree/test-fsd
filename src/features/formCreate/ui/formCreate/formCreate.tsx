import type { FC } from "react"
import { Form } from "antd"

import s from "./formCreate.module.scss"
import { addField, changeFieldName, deleteField, toggleFieldRequired, type IForm } from "@entities/form"
import { Input } from "@shared/ui/input"
import { useAppDispatch } from "@shared/lib/store"
import { FieldAddButton } from "@features/formCreate/ui/fieldAddButton/fieldAddButton"

interface FormCreateProps {
	form: IForm;
}

export const FormCreate: FC<FormCreateProps> = ({ form }) => {
	const dispatch = useAppDispatch()

	const handleChange = (value: string, formId: string, fieldId: string) => {
		dispatch(changeFieldName({ formId, fieldId, value }))
	}

	const handleDelete = (formId: string, fieldId: string) => {
		dispatch(deleteField({ formId, fieldId }))
	}
	const handleToggleRequired = (formId: string, fieldId: string) => {
		dispatch(toggleFieldRequired({ formId, fieldId }))
	}

	return (
		<section className="w-[50%] h-full">
			<div className="h-full px-10 lg:px-20 xl:px-30 bg-[#f9f9f9] overflow-y-scroll">
				<h2 className={"font-medium m-0 mt-25 mb-10"}>{form.name}</h2>
				<FieldAddButton id={form.id}
												onClick={() => dispatch(addField({ formId: form.id }))}
												className={"w-full flex justify-between! mb-4!"}
				/>

				<Form layout={"vertical"}>
					{form?.fields?.map((field) => (<div key={field.id}>
							<Form.Item
								id={field.id}
								name={field.id}
								className={s.formItem}
								labelAlign={"right"}
								label={<>
									<span className="text-gray-500 cursor-pointer">{field.label.trim() || "Новое поле"}</span>
									<span className="text-[#3EA648] cursor-pointer"
												onClick={() => handleDelete(form.id, field.id)}>Удалить поле</span>
								</>
								}>
								<Input
									id={field.id}
									value={field.label}
									onChange={(e) => handleChange(e.target.value, form.id, field.id)}
									placeholder={field.label.trim() || "Новое поле"}
								/>
							</Form.Item>
							<Form.Item
								id={`${field.id}-required`}
								className={s.formItemRequired}
								layout={"horizontal"}
								labelCol={{ style: { order: 2 } }}
							>
								<div className={"flex items-center"}
										 onClick={() => handleToggleRequired(form.id, field.id)}
								>
									<Input
										id={`${field.id}-required`}
										type={"checkbox"}
										rootClassName={"w-5!"}
										className={"h-5 border-1! mr-5!"}
										checked={field?.isRequired}
									/>
									<p className={"my-0 cursor-pointer"}>Сделать обязательным</p>
								</div>

							</Form.Item>
						</div>
					))}

				</Form>
			</div>
		</section>
	)
}