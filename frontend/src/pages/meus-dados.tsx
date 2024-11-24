import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { PageHeading } from "@/components/page-heading";
import { type FormEvent, useCallback } from "react";
import { useNavigate } from "react-router";

export function MeusDados() {
	const navigate = useNavigate();

	const handleSubmit = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			const formData = new FormData(event.currentTarget);
			// @ts-expect-error
			const fieldValues = Object.fromEntries(formData.entries());
			console.log("🚀 ~ NovoPet ~ fieldValues:", fieldValues);

			navigate("/");
		},
		[navigate],
	);

	return (
		<>
			<PageHeading
				title="Meus dados"
				description="Gerencie aqui seus dados cadastrais."
			/>

			<form className="grid gap-6" onSubmit={handleSubmit}>
				<Input name="name" label="Nome completo" required />
				<Input name="whatsapp" label="Whatsapp" inputMode="tel" required />
				<Input name="address" label="Endereço" required />

				<Button className="mt-20" type="submit">
					Salvar dados
				</Button>
			</form>
		</>
	);
}
