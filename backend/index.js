require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
const app = express();

app.use(express.json());

// Conexão com o banco de dados
const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

// Rotas de CRUD para "usuarios"
// GET todos os usuários
app.get("/usuarios", async (req, res) => {
	try {
		const [rows] = await pool.query("SELECT * FROM usuarios");
		res.json(rows);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// GET usuário por ID
app.get("/usuarios/:id", async (req, res) => {
	try {
		const [rows] = await pool.query(
			"SELECT * FROM usuarios WHERE id_usuario = ?",
			[req.params.id],
		);
		rows.length
			? res.json(rows[0])
			: res.status(404).json({ error: "Usuário não encontrado" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// CREATE novo usuário
app.post("/usuarios", async (req, res) => {
	const { nome, email, senha, telefone, endereco } = req.body;
	try {
		const [result] = await pool.query(
			"INSERT INTO usuarios (nome, email, senha, telefone, endereco) VALUES (?, ?, ?, ?, ?)",
			[nome, email, senha, telefone, endereco],
		);
		res.status(201).json({ id_usuario: result.insertId });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// UPDATE usuário
app.put("/usuarios/:id", async (req, res) => {
	const { nome, email, senha, telefone, endereco } = req.body;
	try {
		const [result] = await pool.query(
			"UPDATE usuarios SET nome = ?, email = ?, senha = ?, telefone = ?, endereco = ? WHERE id_usuario = ?",
			[nome, email, senha, telefone, endereco, req.params.id],
		);
		result.affectedRows
			? res.sendStatus(204)
			: res.status(404).json({ error: "Usuário não encontrado" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// DELETE usuário
app.delete("/usuarios/:id", async (req, res) => {
	try {
		const [result] = await pool.query(
			"DELETE FROM usuarios WHERE id_usuario = ?",
			[req.params.id],
		);
		result.affectedRows
			? res.sendStatus(204)
			: res.status(404).json({ error: "Usuário não encontrado" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Rotas de CRUD para "pets"
// Implementação similar a "usuarios" (CRUD)
app.get("/pets", async (req, res) => {
	try {
		const [rows] = await pool.query("SELECT * FROM pets");
		res.json(rows);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

app.get("/pets/:id", async (req, res) => {
	try {
		const [rows] = await pool.query("SELECT * FROM pets WHERE id_pet = ?", [
			req.params.id,
		]);
		rows.length
			? res.json(rows[0])
			: res.status(404).json({ error: "Pet não encontrado" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

app.post("/pets", async (req, res) => {
	const {
		id_usuario,
		nome,
		especie,
		raca,
		data_nascimento,
		peso,
		historico_vacinacao,
		foto,
		QR_Code,
	} = req.body;
	try {
		const [result] = await pool.query(
			"INSERT INTO pets (id_usuario, nome, especie, raca, data_nascimento, peso, historico_vacinacao, foto, QR_Code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
			[
				id_usuario,
				nome,
				especie,
				raca,
				data_nascimento,
				peso,
				historico_vacinacao,
				foto,
				QR_Code,
			],
		);
		res.status(201).json({ id_pet: result.insertId });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

app.put("/pets/:id", async (req, res) => {
	const {
		nome,
		especie,
		raca,
		data_nascimento,
		peso,
		historico_vacinacao,
		foto,
		QR_Code,
	} = req.body;
	try {
		const [result] = await pool.query(
			"UPDATE pets SET nome = ?, especie = ?, raca = ?, data_nascimento = ?, peso = ?, historico_vacinacao = ?, foto = ?, QR_Code = ? WHERE id_pet = ?",
			[
				nome,
				especie,
				raca,
				data_nascimento,
				peso,
				historico_vacinacao,
				foto,
				QR_Code,
				req.params.id,
			],
		);
		result.affectedRows
			? res.sendStatus(204)
			: res.status(404).json({ error: "Pet não encontrado" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

app.delete("/pets/:id", async (req, res) => {
	try {
		const [result] = await pool.query("DELETE FROM pets WHERE id_pet = ?", [
			req.params.id,
		]);
		result.affectedRows
			? res.sendStatus(204)
			: res.status(404).json({ error: "Pet não encontrado" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
