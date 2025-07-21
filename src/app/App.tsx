import { Providers } from "@app/providers"
import AppRouter from "@app/routers/appRouter.tsx"

function App() {
	return (
		<Providers>
			<AppRouter />
		</Providers>
	)
}

export default App
