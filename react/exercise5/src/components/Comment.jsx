import PropTypes from "prop-types";

Comment.propTypes = {
	email: PropTypes.string,
	date: PropTypes.string,
	content: PropTypes.string,
};

export default function Comment({ email, date, content }) {
	return (
		<div>
			<h3>{email}</h3>
			<p>{date}</p>
			<p>{content}</p>
		</div>
	);
}
