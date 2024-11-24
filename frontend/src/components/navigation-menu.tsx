import { Drawer, type DrawerProps } from "./drawer";
import { ItemMenu } from "./item-menu";

export type NavigationMenuProps = Pick<DrawerProps, "onClose">;

export function NavigationMenu({ onClose }: NavigationMenuProps) {
	return (
		<Drawer title="Menu" onClose={onClose}>
			<div className="grid gap-4">
				{[
					{ to: "/", label: "Início" },
					{ to: "/novo-pet", label: "Novo PetCard" },
					{ to: "/meus-dados", label: "Meus dados" },
				].map(({ to, label }) => {
					return (
						<ItemMenu
							key={`navigation-menu-item-${to}`}
							to={to}
							onClick={onClose}
						>
							{label}
						</ItemMenu>
					);
				})}
			</div>
		</Drawer>
	);
}
