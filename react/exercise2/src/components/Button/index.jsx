import styles from "./styles.module.scss";

export default function Button(props) {
	// eslint-disable-next-line react/prop-types
	return <button className={styles.btnMain}>{props.text}</button>;
}
