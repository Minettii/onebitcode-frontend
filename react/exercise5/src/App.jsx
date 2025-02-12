import NewCommentForm from "./components/NewCommentForm";
import Comment from "./components/Comment";
import useCommentCollection from "./hooks/useCommentCollection";

export default function App() {
	const [comments, addComment] = useCommentCollection();
	return (
		<div id="app">
			<NewCommentForm addComment={addComment} />
			{comments.length > 0 ? (
				comments.map((comment) => (
					<Comment
						key={comment.id}
						content={comment.content}
						date={comment.date}
						email={comment.email}
					/>
				))
			) : (
				<p>Seja o primeiro a comentar!</p>
			)}
		</div>
	);
}
