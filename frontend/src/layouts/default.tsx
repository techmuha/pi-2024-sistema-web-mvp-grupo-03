import { Outlet } from "react-router";

export function LayoutsDefault() {
	return (
		<main className="h-full px-6 py-8">
			<Outlet />
		</main>
	);
}
