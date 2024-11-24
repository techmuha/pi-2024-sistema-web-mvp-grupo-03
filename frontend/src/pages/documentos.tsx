import { PageHeading } from "@/components/page-heading";
import { PlusCircle, File, Trash } from "react-feather";

export function Documentos() {
	return (
		<div>
			<PageHeading
				title="Documentos"
				description="[NOME]"
				action={
					<label className="text-secondary">
						<input className="hidden" type="file" />
						<PlusCircle />
					</label>
				}
			/>

			<div className="grid grid-cols-2 gap-6">
				{[
					{
						kind: "pdf",
						title: "Carteira-Vacinacao-Duff.pdf",
						date: "2024-12-12T15:20:20",
					},
					{
						kind: "xlsx",
						title: "certificado-de-castracao.xlsx",
						date: "2024-10-03T08:10:20",
					},
					{
						kind: "pdf",
						title: "Registro-Identificacao.pdf",
						date: "2024-05-19T15:20:20",
					},
					{
						kind: "pdf",
						title: "pedigree.pdf",
						date: "2024-05-29T08:10:20",
					},
					{
						kind: "pdf",
						title: "passaporte.pdf",
						date: "2023-12-07T15:20:20",
					},
				].map(({ title, date, kind }) => {
					return (
						<div
							key={`pet-document-item-${crypto.randomUUID()}`}
							className="relative grid h-[190px] place-items-center rounded-2xl bg-white shadow-md"
						>
							<div className="grid gap-4">
								<File className="mx-auto h-12 w-12 text-black/20" />

								<div className="grid gap-2 text-center">
									<p className="line-clamp-2 text-sm text-black/90">{title}</p>
									<p className="text-sm text-black/30">
										{new Date(date).toLocaleDateString("pt-BR")}
									</p>
								</div>
							</div>

							<div className="absolute left-0 top-4 flex w-full items-center justify-between px-4">
								<div className="rounded bg-blue-400 px-2 py-1 text-xs font-bold uppercase text-white">
									{kind}
								</div>

								<Trash className="text-red-500" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
