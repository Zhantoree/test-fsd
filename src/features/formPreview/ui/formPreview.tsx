import type { FC } from "react"
import { Button, Form } from "antd"

import type { IForm } from "@entities/form"
import { Input } from "@shared/ui/input"

interface FormPreviewProps {
	form: IForm;
}

const FormPreview: FC<FormPreviewProps> = ({ form }) => {
	return (
		<section className="w-[50%] h-full bg-[#3EA648] flex justify-center items-start overflow-y-scroll">
			<div className={"w-full bg-[#ffffff] rounded-2xl m-5 lg:m-10 xl:m-15"}>
				<Form layout={"vertical"}
							className={"w-[100%] m-auto px-20!"}
				>
					<h2 className={"m-0 mt-10 mb-5 mx-2 font-medium"}>{form.name}</h2>

					{form?.fields?.map((field) => (
						<Form.Item
							id={field.id}
							name={field.id}
							labelAlign={"right"}
						>
							<Input
								id={field.id}
								value={field.label}
								placeholder={field.label.trim() || "Новое поле"}
								className={"bg-[#f6f6f6]!"}
							/>
						</Form.Item>
					))}
					<Form.Item
						id={`required`}
						layout={"horizontal"}
						labelCol={{ style: { order: 2 } }}
					>
						<div className={"flex items-center"}>
							<Input
								id={`required`}
								type={"checkbox"}
								rootClassName={"w-5!"}
								className={"h-5 border-1! mr-5!"}
							/>
							<p className={"w-80 text-gray-500"}>Нажимая на кнопку "Отправить", я принимаю условия политики и
								конфиденциальности</p>
						</div>

					</Form.Item>
					<Button className={"bg-[#3EA648]! text-white! border-0! rounded-xl! py-6! px-24! mb-8!"}>Отправить</Button>
				</Form>
			</div>
		</section>
	)
}

export default FormPreview