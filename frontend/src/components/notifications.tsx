import { Trash } from "react-feather";
import { Drawer, type DrawerProps } from "./drawer";

export type NotificationsProps = Pick<DrawerProps, "onClose">;

export function Notifications({ onClose }: NotificationsProps) {
	return (
		<Drawer side="left" title="Notificações" onClose={onClose}>
			<div className="grid gap-4">
				{[
					{
						id: 1,
						title: "Hora de proteger seu amigo!",
						excerpt:
							"As vacinas de Duff estão próximas do vencimento. Mantenha o cuidado em dia e evite riscos à saúde dele!",
					},
					{
						id: 2,
						title: "Emily está oficialmente protegido!",
						excerpt:
							"Emily agora faz parte da PetCard! Comece a acompanhar de perto a saúde e o bem-estar dele.",
					},
				].map(({ id, title, excerpt }) => {
					return (
						<div
							key={`notification-card-item-${id}`}
							className="grid gap-2 rounded-lg bg-gray-100 p-4"
						>
							<p className="text-sm font-medium">{title}</p>
							<p className="text-xs text-gray-600">{excerpt}</p>
						</div>
					);
				})}
			</div>

			<button
				type="button"
				className="absolute bottom-10 left-8 mt-auto flex items-center gap-2 text-sm font-medium text-gray-400"
			>
				<Trash className="h-3 w-3" />
				Apagar todos
			</button>
		</Drawer>
	);
}
