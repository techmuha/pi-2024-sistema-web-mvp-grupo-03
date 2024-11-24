import type { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export type TextareaProps = DetailedHTMLProps<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
> & {
	label?: string;
};

export function Textarea({ label, ...props }: TextareaProps) {
	return (
		<label className="grid gap-2">
			{label && <span className="text-xs text-gray-500">{label}</span>}

			<textarea
				className="rounded-2xl border border-primary/30 bg-primary/5 p-4"
				placeholder="Digite aqui"
				rows={5}
				{...props}
			/>
		</label>
	);
}
