import { PageHeading } from "@/components/page-heading";
import duff1 from "~/duff-1.png";
import emily1 from "~/emily-1.png";
import qrcode from "~/qrcode-sample.png";
import news1 from "~/news-1.png";
import news2 from "~/news-2.png";
import { PlusCircle } from "react-feather";

export function Fotos() {
	return (
		<div>
			<PageHeading
				title="Fotos"
				description="[NOME]"
				action={
					<label className="text-secondary">
						<input className="hidden" type="file" />
						<PlusCircle />
					</label>
				}
			/>

			<div className="grid grid-cols-3 gap-[3px] overflow-hidden rounded-2xl">
				{[
					{ src: duff1 },
					{ src: emily1 },
					{ src: qrcode },
					{ src: news1 },
					{ src: news2 },
				].map(({ src }) => {
					return (
						<img
							key={`fotos-item-${crypto.randomUUID()}`}
							alt=""
							src={src}
							className="h-[115px] w-full object-cover"
						/>
					);
				})}
			</div>
		</div>
	);
}
