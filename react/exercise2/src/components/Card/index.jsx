import styles from "./styles.module.scss";
import Button from "../Button";

export default function Card({ title, posterImg }) {
	return (
		<div id={styles.wrapper}>
			<div id={styles.flexbox}>
				<img src={posterImg} alt={title} />
				<div>
					<h1>{title}</h1>
					<p>
						Um pôster decorativo épico do filme Star Wars, com
						moldura de MDF e tamanho A3. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Iure aperiam voluptatum
						maiores inventore quas maxime modi, reprehenderit
						nostrum sed libero dolore doloribus incidunt, porro in
						alias. Deleniti ducimus cupiditate molestias corporis
						fuga excepturi quisquam omnis, minus velit iusto ipsa
						nihil et quos ex quasi, asperiores tempore aut!
					</p>
					<Button text="Comprar agora" />
				</div>
			</div>
		</div>
	);
}
