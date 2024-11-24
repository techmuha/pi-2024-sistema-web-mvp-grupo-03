import { IndexHeading } from "./index-heading";
import { IndexNews } from "./index-news";
import { IndexPets } from "./index-pets";

export function Index() {
	return (
		<>
			<IndexHeading />

			<div className="-mx-6 grid gap-10">
				<IndexNews />
				<IndexPets />
			</div>
		</>
	);
}
