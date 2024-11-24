import type { DetailedHTMLProps, SelectHTMLAttributes } from "react";

export type SelectProps = DetailedHTMLProps<
	SelectHTMLAttributes<HTMLSelectElement>,
	HTMLSelectElement
> & {
	label?: string;
	options: Array<{
		label: string;
		value: string;
	}>;
};

export function Select({ label, options, ...props }: SelectProps) {
	return (
		<label className="grid gap-2">
			{label && <span className="text-xs text-gray-500">{label}</span>}

			<select
				className="h-[56px] rounded-2xl border border-primary/30 bg-primary/5 px-4"
				{...props}
			>
				<option value="" hidden>
					Selecione aqui
				</option>

				{options?.map(({ label, value }) => {
					return (
						<option key={`select-option-item-${value}`} value={value}>
							{label}
						</option>
					);
				})}
			</select>
		</label>
	);
}
