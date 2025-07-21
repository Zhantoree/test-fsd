import { Input as AntInput } from "antd"
import type { InputProps as AntdInputProps } from 'antd';
import type { FC } from "react"

interface MyInputProps extends AntdInputProps {
	id: string;
}

export const Input: FC<MyInputProps> = ({ id, className,  ...props }) => (
	<AntInput
		id={id}
		className={`bg-[#FEFEFE]! border-0! leading-none! py-6! px-4! ${className}`}
		{...props}
	/>
);
