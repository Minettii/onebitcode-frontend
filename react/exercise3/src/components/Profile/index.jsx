/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import Button from "../Button";

export default function Profile({
	avatar,
	name,
	bio,
	email,
	phone,
	githubUrl,
	linkedinUrl,
	twitterUrl,
}) {
	return (
		<div className={styles.profileWrapper}>
			<img className={styles.avatar} src={avatar} alt={name} />
			<h2>{name}</h2>
			<hr />
			<p>{bio}</p>
			<hr />
			<p>{phone}</p>
			<hr />
			<p>{email}</p>
			<hr />
			<Button text="GitHub" url={githubUrl} />
			<Button text="LinkedIn" url={linkedinUrl} />
			<Button text="Twitter" url={twitterUrl} />
		</div>
	);
}
