import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export function Button({ children, className = "", ...props }: ButtonProps) {
	return (
		<button
			type="button"
			className={`flex h-[56px] w-full items-center justify-center rounded-2xl bg-secondary font-medium text-white ${className}`.trim()}
			{...props}
		>
			{children}
		</button>
	);
}
