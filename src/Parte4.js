import Highlight from 'react-highlight';
import { H2, H3 } from './components/Titles/Titles';

export default function Parte4() {
	return (
		<div>
			<H2 id="topico4">Quais recursos oferecem?</H2>
			<ul>
				<li>Utiliza o gerenciador de pacotes Composer</li>
				<li>Sistemas de template Blade</li>
				<ul>
					<li>Flexível</li>
					<li>Propõe minimizar o uso de código PHP incorporado ao HTML</li>
				</ul>
			</ul>
			<p>
				Ademais, o Laravel fornece suporte nativo para os bancos de dados
				populares, como o MySQL, PostgreSQL, SQLite e SQL Server.
			</p>
			<p>Já vem com um ambiente configurado para dar suporte para ao Vue.js</p>
			<H3>Artisan</H3>
			<p>
				Artisan é uma interface de linha de comando embutido ao Laravel. Com
				ele, é possível utilizar uma gama de comandos que auxilia o
				desenvolvedor durante o processo de desenvolvimento e, consequentemente,
				de build do projeto web.
			</p>
			<p>
				O comando artisan é chamado no terminal do Linux/MacOS utilizando a
				sintaxe a seguir:
			</p>
			<Highlight>php artisan {'<comando>'}</Highlight>
			<p>
				Onde {'<'}comando{'>'} é o comando que desejamos utilizar.
			</p>
			<p>Exemplos de comandos artisan:</p>
			<ul>
				<li>
					<span className="code-marker">
						artisan <span className="code-marker2">list</span>
					</span>
					: lista os comandos disponíveis;
				</li>
				<li>
					<span className="code-marker">
						artisan <span className="code-marker2">help</span>
					</span>
					: apresenta a ajuda para um determinado comando;
				</li>
				<li>
					<span className="code-marker">
						artisan <span className="code-marker2">migrate</span>
					</span>
					: executa as migrações do banco de dados;
				</li>
				<li>
					<span className="code-marker">
						artisan <span className="code-marker2">make:controller</span>{' '}
						{'<Controlador>'}
					</span>
					: cria controllers, que são classes responsáveis por manipular e
					processar as requisições feitas pelo usuário.
				</li>
			</ul>
		</div>
	);
}
