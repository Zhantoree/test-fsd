import { FormConstructor } from "@widgets/formConstructor"

const FormPage = () => {
	return (
		<main className={"h-full"}>
			<div className="w-full h-full flex flex-row justify-between grow shrink-0">
				<FormConstructor />
			</div>
		</main>
	)
}

export default FormPage