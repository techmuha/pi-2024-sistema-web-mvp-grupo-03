import news1 from "~/news-1.png";
import news2 from "~/news-2.png";

const DATA = [
	{
		image: news1,
	},
	{
		image: news2,
	},
];

export function IndexNews() {
	return (
		<div className="grid gap-4">
			<p className="px-6 text-xs font-bold uppercase text-secondary">
				Novidades
			</p>

			<div className="flex space-x-3 overflow-x-auto whitespace-nowrap px-6">
				{DATA.map(({ image }) => {
					return (
						<img
							key={`news-item-${crypto.randomUUID()}`}
							alt="Novidades 1"
							src={image}
							className="h-[130px] w-full flex-none rounded-2xl object-cover"
						/>
					);
				})}
			</div>

			<div className="flex items-center justify-center gap-1">
				{DATA.map(() => {
					return (
						<div
							key={`news-item-${crypto.randomUUID()}`}
							className="h-[6px] w-[6px] rounded-full bg-gray-300"
						/>
					);
				})}
			</div>
		</div>
	);
}
