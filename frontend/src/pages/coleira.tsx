import { Button } from "@/components/button";
import { PageHeading } from "@/components/page-heading";
import qrcodeSample from "~/qrcode-sample.png";

export function Coleira() {
	return (
		<div>
			<PageHeading title="Coleira" description="[NOME]" />

			<img alt="" src={qrcodeSample} className="mx-auto h-[300px] w-[300px]" />

			<Button className="mt-20">Salvar imagem</Button>
		</div>
	);
}
