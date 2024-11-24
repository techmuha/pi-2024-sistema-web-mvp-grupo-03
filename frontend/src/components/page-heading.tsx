import { useCallback, type ReactNode } from "react";
import { IconButton } from "./icon-button";
import { ChevronLeft } from "react-feather";
import { useNavigate } from "react-router";

export type PageHeadingProps = {
	title: string;
	description?: string;
	action?: ReactNode;
};

export function PageHeading({ action, title, description }: PageHeadingProps) {
	const navigate = useNavigate();

	const goBack = useCallback(() => {
		navigate(-1);
	}, [navigate]);

	return (
		<div className="mb-8 grid gap-4">
			<div className="flex items-center justify-between gap-2">
				<IconButton onClick={goBack}>
					<ChevronLeft />
				</IconButton>

				{action}
			</div>

			<div className="grid gap-2">
				<h1 className="font-serif text-2xl text-primary">{title}</h1>
				{description && <p className="opacity-60">{description}</p>}
			</div>
		</div>
	);
}
