import Title from './components/Titles/Titles';
import Parte1 from './Parte1';
import Parte2 from './Parte2';
import Parte3 from './Parte3';
import Parte4 from './Parte4';
import Parte5 from './Parte5';
import Parte6 from './Parte6';
import Parte7 from './Parte7';
import Parte8 from './Parte8';

function TableOfContents() {
	return (
		<div className="border-4 p-5 my-10 ">
			<p className="text-center text-2xl uppercase my-0">Sumário</p>
			<ol className="p-0 ml-5 list-decimal m-0">
				<li>
					<a href="#topico1">
						<span class="title">O que é?</span>
					</a>
				</li>
				<li>
					<a href="#topico2">
						<span>Para que serve?</span>
					</a>
				</li>
				<li>
					<a href="#topico3">
						<span>Vantagens e desvantagens</span>
					</a>
				</li>
				<li>
					<a href="#topico4">
						<span>Quais recursos oferecem?</span>
					</a>
				</li>
				<li>
					<a href="#topico5">
						<span>Como instalar e usar?</span>
					</a>
				</li>
				<li>
					<a href="#topico6">
						<span>Códigos de exemplo</span>
					</a>
				</li>
				<li>
					<a href="#topico7">
						<span>Quando utilizar?</span>
					</a>
				</li>
				<li>
					<a href="#topico8">
						<span>Indicações para estudo complementar</span>
					</a>
				</li>
			</ol>
		</div>
	);
}

export default function Home() {
	return (
		<div className="w-1/2 mx-auto">
			<img
				src="./assets/logomark.min.svg"
				alt="Ícone do Laravel"
				className="flex justify-items-center mx-auto w-1/4"
			/>

			<h1 className="text-center text-5xl font-bold max-md:text-4xl">
				O Framewok PHP
				<span className="inline-block mt-2 leading-none text-custom-red1">
					{' '}
					para os artesãos da Web
				</span>
			</h1>

			<TableOfContents />
			<Parte1 />
			<hr />
			<Parte2 />
			<hr />
			<Parte3 />
			<hr />
			<Parte4 />
			<hr />
			<Parte5 />
			<hr />
			<Parte6 />
			<hr />
			<Parte7 />
			<hr />
			<Parte8 />
		</div>
	);
}
