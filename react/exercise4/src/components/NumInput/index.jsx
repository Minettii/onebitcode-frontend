/* eslint-disable react/prop-types */
import "./styles.module.scss";

export default function Input(props) {
	return (
		<input
			type="number"
			id={props.id}
			value={props.pswdLength}
			onChange={(ev) => {
				let newNum = Math.max(4, Math.min(30, ev.target.value));
				props.setPswdLength(newNum);
			}}
		/>
	);
}
