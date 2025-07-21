import { BrowserRouter, Routes, Route } from "react-router"
import { FormPage } from "@pages/FormPage"

const AppRouter = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<FormPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter