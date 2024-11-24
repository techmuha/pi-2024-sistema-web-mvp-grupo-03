import { Outlet } from "react-router";

export function LayoutsDefault() {
	return (
		<main className="px-6 py-8">
			<Outlet />
		</main>
	);
}