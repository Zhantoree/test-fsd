import { Provider } from "react-redux"
import { store } from "@app/store.ts"
import type { FC, ReactNode } from "react"
import { ConfigProvider } from "antd"
import ru from "antd/locale/ru_RU"

interface ProvidersProps {
	readonly children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<ConfigProvider locale={ru}>
			<Provider store={store}>
				{children}
			</Provider>
		</ConfigProvider>
	)
}