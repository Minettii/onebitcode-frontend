import cardStyle from "./Card.module.scss";
import posterImg from "/sw.jpg";

export default function Card() {
	return (
		<div id={cardStyle.wrapper}>
			<div id={cardStyle.flexbox}>
				<img src={posterImg} />
				<div>
					<h1>Pôster: Star Wars (1977)</h1>
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
					<button>Comprar agora</button>
				</div>
			</div>
		</div>
	);
}
