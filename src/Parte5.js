import Highlight from 'react-highlight';
import { H2, H3 } from './components/Titles/Titles';

export default function Parte5() {
	return (
		<div>
			<H2 id="topico5">Como instalar e usar?</H2>
			<p>Requisitos</p>
			<ul>
				<li>PHP (última versão)</li>
				<li>Composer (gerenciador de dependências PHP)</li>
			</ul>
			<p>
				Instalando Laravel globalmente (independentemente do sistema
				operacional):
			</p>

			<Highlight>composer global require laravel/installer</Highlight>

			<p>Verificando se foi instalado corretamente:</p>

			<Highlight>laravel --version</Highlight>

			<p>
				PS.: é apenas a versão do instalador do Laravel, não a versão do Laravel
				em si.
			</p>

			<H3>Criando um projeto Laravel</H3>

			<Highlight>
				laravel new project-laravel //laravel new {'<'}nome-do-projeto{'>'}
			</Highlight>

			<p>Mensagens de sucesso:</p>
			<img
				src="./assets/criando-um-projeto-laravel.png"
				alt="Criando um projeto Laravel"
			/>

			<H3>Executando</H3>
			<p>
				O Laravel não precisa de servidor Apache, uma vez que ele mesmo cria um
				servidor internamente na máquina. Dentro do projeto criado, execute:
			</p>

			<Highlight>php artisan serve</Highlight>

			<p>Saída: </p>
			<img
				src="./assets/running-laravel-artisan.png"
				alt="EXecutando o projeto Laravel via Artisan"
			/>

			<H3>Estrutura de diretório</H3>
			<p>Pastas e arquivos mais importantes</p>
			<pre>
				{`
          .
          ├── app/
          │   ├── Http/
          │   │   ├── Controllers/
          │   │   │   └── Controller.php
          │   │   └── Middlewares/
          │   └── Models/  
          ├── public/
          │   └── index.php
          ├── resources/
          │   └── views/
          ├── routes/
          │   └── web.php
          ├── vendor/
          ├── .env
          ├── composer.json
      `}
			</pre>
		</div>
	);
}
