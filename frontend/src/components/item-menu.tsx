import type { ReactNode } from "react";
import { ChevronRight } from "react-feather";
import { Link } from "react-router";

export type ItemMenuProps = {
	children: ReactNode;
	to: string;
	onClick?: () => void;
};

export function ItemMenu({ to, children, onClick }: ItemMenuProps) {
	return (
		<Link
			to={to}
			onClick={onClick}
			className="flex items-center justify-between gap-2 rounded-lg bg-gray-100 px-4 py-[14px] text-sm font-medium"
		>
			{children}

			<ChevronRight className="h-3 w-3 text-gray-500" />
		</Link>
	);
}
