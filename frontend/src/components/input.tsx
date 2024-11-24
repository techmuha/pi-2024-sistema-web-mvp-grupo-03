import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	label?: string;
};

export function Input({ label, ...props }: InputProps) {
	return (
		<label className="grid gap-2">
			{label && <span className="text-xs text-gray-500">{label}</span>}

			<input
				className="h-[56px] rounded-2xl border border-primary/30 bg-primary/5 px-4"
				placeholder="Digite aqui"
				{...props}
			/>
		</label>
	);
}
