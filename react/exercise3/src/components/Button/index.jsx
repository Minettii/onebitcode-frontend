/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";

export default function Button({ text, url }) {
	return (
		<a target="_blank" href={url} className={styles.btnMain}>
			{text}
		</a>
	);
}
