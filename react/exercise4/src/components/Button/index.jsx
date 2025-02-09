import PropTypes from "prop-types";
import styles from "./styles.module.scss";

Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string,
};

export default function Button(props) {
	return (
		<button {...props} className={`${props.className} ${styles.btn}`}>
			{props.children}
		</button>
	);
}
