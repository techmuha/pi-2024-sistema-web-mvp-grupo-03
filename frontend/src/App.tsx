import { useEffect, useState } from "react";
import { Loader } from "@/components/loader";
import { BrowserRouter, Route, Routes } from "react-router";
import { Index } from "@/pages/index";
import { MeusDados } from "@/pages/meus-dados";
import { LayoutsDefault } from "@/layouts/default";
import { NovoPet } from "@/pages/novo-pet";
import { Pet } from "@/pages/pet";
import { Coleira } from "@/pages/coleira";
import { Documentos } from "@/pages/documentos";
import { Fotos } from "@/pages/fotos";

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (loading) {
			setTimeout(() => {
				setLoading(false);
			}, 3000);
		}
	}, [loading]);

	if (loading) {
		return <Loader />;
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LayoutsDefault />}>
					<Route index element={<Index />} />
					<Route path="meus-dados" element={<MeusDados />} />
					<Route path="novo-pet" element={<NovoPet />} />
					<Route path="pet/:id" element={<Pet />} />
					<Route path="pet/:id/coleira" element={<Coleira />} />
					<Route path="pet/:id/documentos" element={<Documentos />} />
					<Route path="pet/:id/fotos" element={<Fotos />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
