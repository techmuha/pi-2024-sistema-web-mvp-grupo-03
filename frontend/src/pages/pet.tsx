import { IconButton } from "@/components/icon-button";
import { ItemMenu } from "@/components/item-menu";
import { ChevronLeft } from "react-feather";
import { useNavigate, useParams } from "react-router";
import duff1 from "~/duff-1.png";

export function Pet() {
	const params = useParams();
	const navigate = useNavigate();

	return (
		<div className="grid gap-8">
			<div className="relative -ml-8 -mr-8 -mt-8 flex h-[450px] overflow-hidden rounded-b-[40px]">
				<img
					alt=""
					src={duff1}
					className="absolute inset-0 h-full w-full object-cover"
				/>

				<IconButton
					className="absolute left-8 top-8 !bg-primary text-white"
					onClick={() => {
						navigate("/");
					}}
				>
					<ChevronLeft />
				</IconButton>

				<div className="relative m-6 mt-auto w-full rounded-2xl bg-secondary/95 px-6 py-4 text-white">
					<p className="font-serif text-3xl">[NOME]</p>
					<p className="text-base">[RAÇA]</p>
				</div>
			</div>

			<div className="grid gap-4">
				{[
					{ to: `/pet/${params?.id}/editar`, label: "Cadastro" },
					{ to: `/pet/${params?.id}/coleira`, label: "Coleira" },
					{ to: `/pet/${params?.id}/documentos`, label: "Documentos" },
					{ to: `/pet/${params?.id}/fotos`, label: "Fotos" },
				].map(({ to, label }) => {
					return (
						<ItemMenu key={`pet-navigation-item-${to}`} to={to}>
							{label}
						</ItemMenu>
					);
				})}
			</div>
		</div>
	);
}
