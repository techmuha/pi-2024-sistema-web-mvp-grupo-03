import { PetCard } from "@/components/pet-card";
import duff1 from "~/duff-1.png";
import emily1 from "~/emily-1.png";

export function IndexPets() {
	return (
		<div className="grid gap-4">
			<p className="px-6 text-xs font-bold uppercase text-secondary">
				Meus Pets
			</p>

			<div className="flex space-x-3 overflow-x-auto whitespace-nowrap px-6">
				<PetCard name="Duff" breed="Corgi" image={duff1} />
				<PetCard name="Emily" breed="Siamês" image={emily1} />
			</div>
		</div>
	);
}
