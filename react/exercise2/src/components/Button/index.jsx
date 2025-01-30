import styles from "./styles.module.scss";

export default function Button(props) {
	return <button className={styles.btnMain}>{props.text}</button>;
}
