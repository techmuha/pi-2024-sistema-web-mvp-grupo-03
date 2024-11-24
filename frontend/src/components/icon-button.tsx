import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type IconButtonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export function IconButton({ children, className, ...props }: IconButtonProps) {
	return (
		<button
			type="button"
			className={`grid h-14 w-14 place-items-center rounded-full bg-primary/20 text-primary ${className}`.trim()}
			{...props}
		>
			{children}
		</button>
	);
}
