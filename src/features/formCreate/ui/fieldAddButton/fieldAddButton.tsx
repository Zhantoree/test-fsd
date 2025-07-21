import { Button as AntButton } from "antd"
import type { ButtonProps } from 'antd';
import type { FC } from "react"

interface MyButtonProps extends ButtonProps {
	id: string;
}

export const FieldAddButton: FC<MyButtonProps> = ({ className, ...props }) => {
	return (
		<AntButton className={`text-xs! border-dashed! text-[#3EA648]! border-[#3EA648]! bg-[#f9f9f9]! ${className}`} {...props}>
			<span>Добавить поле</span>
			<span className={'text-3xl font-thin text-center mb-1'}>+</span>
		</AntButton>
	)
}
