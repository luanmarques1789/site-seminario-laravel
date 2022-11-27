import Title, { H2 } from './components/Title/Titles';
import Highlight from 'react-highlight';
import Parte3 from './Vantagens-e-Desvantagens';

export default function Home() {
	return (
		<div className="w-1/2 mx-auto">
			<Title>FRAMEWOK LARAVEL</Title>
			<div>
				<H2>O que é?</H2>
				<p>
					Laravel é um framework PHP utilizado para construir aplicações web
					full-stack modernas e escaláveis, tais como rotas, validação, cache,
					filas, armazenamento de arquivo, e mais. Além disso, Laravel também
					pode servir como uma API para aplicações mobile ou JavaScript
					single-page.
				</p>
			</div>
			<hr />
			<div>
				<H2>Para que serve</H2>
				<p>
					Metaforicamente, Laravel é como uma caixa de ferramentas a qual
					auxilia o desenvolvedor com soluções pré-prontas facilitando o
					desenvolvimento de uma aplicação web.
				</p>
			</div>

			<hr />

			<Parte3 />

			<hr />

			<div>
				<H2>Quais recursos oferecem</H2>
				<ul>
					<li>Utiliza o gerenciador de pacotes Composer</li>
					<li>Sistemas de template Blade</li>
					<ul>
						<li>Flexível</li>
						<li>Propõe minimizar o uso de código PHP incorporado ao HTML</li>
					</ul>
				</ul>
			</div>

			<hr />

			<div>
				<H2>como instalar e usar</H2>
				<Highlight>composer global laravel</Highlight>
			</div>

			<hr />

			<div>
				<H2>Códigos de exemplo</H2>
				<Highlight>composer global laravel</Highlight>
			</div>

			<hr />

			<div>
				<H2>Quando utilizar</H2>
				<Highlight>composer global laravel</Highlight>
			</div>

			<hr />

			<div>
				<H2>
					Indicações de livros, sites, cursos e/ou vídeos para aprendizado
				</H2>
				<Highlight>composer global laravel</Highlight>
			</div>
		</div>
	);
}
