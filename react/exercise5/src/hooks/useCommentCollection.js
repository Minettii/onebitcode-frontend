import { useState } from "react";
import dayjs from "dayjs";

export default function useCommentCollection() {
	const [comments, setComments] = useState(() => {
		const savedComments = localStorage.getItem("comments");
		if (!savedComments) {
			return [];
		}
		return JSON.parse(savedComments);
	});

	function addComment(email, content) {
		const date = `Em ${dayjs().format("DD/MM/YYYY, HH:mm:ss")}`;
		const comment = { id: comments.length, email, content, date };
		setComments((state) => {
			const newComments = [comment, ...state];
			localStorage.setItem("comments", JSON.stringify(newComments));
			return newComments;
		});
	}

	return [comments, addComment];
}
