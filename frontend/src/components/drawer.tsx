import type { ReactNode } from "react";
import { LogoIcon } from "./logo-icon";
import { Portal } from "react-portal";

export type DrawerProps = {
	onClose: () => void;
	children: ReactNode;
	title: string;
	side?: "left" | "right";
};

export function Drawer({
	title,
	children,
	side = "right",
	onClose,
}: DrawerProps) {
	return (
		<Portal>
			<div
				className={`
				fixed inset-0 flex h-full
				${
					{
						left: "",
						right: "justify-end",
					}[side]
				}
			`.trim()}
			>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div onClick={onClose} className="absolute inset-0 z-50 bg-black/30" />

				<div
					className={`relative z-50 grid w-[280px] h-full content-start gap-10 bg-white px-8 py-16 ${
						{
							left: "rounded-tr-xl rounded-br-xl",
							right: "rounded-bl-xl rounded-tl-xl",
						}[side]
					}`.trim()}
				>
					<div className="flex items-center gap-4 text-secondary">
						<LogoIcon className="h-8" />
						<p className="font-serif text-2xl">{title}</p>
					</div>

					{children}
				</div>
			</div>
		</Portal>
	);
}
