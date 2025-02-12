import { useState } from "react";
import PropTypes from "prop-types";

NewCommentForm.propTypes = {
	addComment: PropTypes.func,
};

export default function NewCommentForm({ addComment }) {
	const [email, setEmail] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (ev) => {
		ev.preventDefault();
		addComment(email, content);
		setEmail("");
		setContent("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Seção de Comentários</h2>
			<label htmlFor="email">Email</label>
			<input
				required
				type="email"
				name="email"
				id="email"
				value={email}
				onChange={(ev) => setEmail(ev.currentTarget.value)}
			/>
			<label htmlFor="content">Comentário</label>
			<textarea
				required
				name="content"
				id="content"
				rows={8}
				value={content}
				onChange={(ev) => setContent(ev.currentTarget.value)}
			></textarea>
			<button type="submit">Enviar Comentário</button>
			<hr />
		</form>
	);
}
