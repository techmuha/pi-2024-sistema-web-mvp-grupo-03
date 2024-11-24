import { Bell, Menu } from "react-feather";
import { NavigationMenu } from "@/components/navigation-menu";
import { Notifications } from "@/components/notifications";
import { useReducer } from "react";

export function IndexHeading() {
	const [isNotificationsOpen, toggleNotificationsOpen] = useReducer(
		(state) => !state,
		false,
	);
	const [isMenuOpen, toggleMenuOpen] = useReducer((state) => !state, false);

	return (
		<>
			<div className="mb-8 flex items-center justify-between">
				<div className="grid font-serif text-primary">
					<p className="text-2xl opacity-80">Olá,</p>
					<h2 className="text-4xl">[NOME]</h2>
				</div>

				<div className="flex items-center gap-6">
					<button
						type="button"
						title="Notificações"
						className="relative text-gray-700"
						onClick={toggleNotificationsOpen}
					>
						<div className="absolute left-0 top-0 h-2 w-2 rounded-full bg-secondary" />
						<Bell />
					</button>

					<button
						type="button"
						title="Menu"
						className="relative text-gray-700"
						onClick={toggleMenuOpen}
					>
						<Menu />
					</button>
				</div>
			</div>

			{isNotificationsOpen && (
				<Notifications onClose={toggleNotificationsOpen} />
			)}
			{isMenuOpen && <NavigationMenu onClose={toggleMenuOpen} />}
		</>
	);
}
