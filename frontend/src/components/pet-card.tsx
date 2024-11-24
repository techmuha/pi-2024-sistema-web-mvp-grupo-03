import { Link } from "react-router";

export type PetCardProps = {
	name: string;
	breed: string;
	image: string;
	to: string;
};

export function PetCard({ image, name, breed, to }: PetCardProps) {
	return (
		<Link
			to={to}
			className="relative h-[445px] w-full flex-none content-end overflow-hidden rounded-2xl"
		>
			<img
				alt={name}
				src={image}
				className="absolute inset-0 h-full w-full object-cover"
			/>

			<div className="relative mx-3 my-4 rounded-2xl bg-secondary/95 px-6 py-4 text-white">
				<p className="font-serif text-3xl">{name}</p>
				<p className="text-base">{breed}</p>
			</div>
		</Link>
	);
}
