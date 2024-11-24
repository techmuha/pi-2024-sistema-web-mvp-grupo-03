import { LogoIcon } from "./logo-icon";

export function Loader() {
	return (
		<div className="fixed inset-0 grid place-items-center bg-primary">
			<div className="grid justify-items-center gap-8">
				<LogoIcon className="w-20 text-secondary" />
				<h1 className="font-serif text-4xl text-neutral-50">PetCard</h1>
			</div>
		</div>
	);
}
