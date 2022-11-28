import { H2, H3 } from './components/Titles/Titles';

export default function Parte3() {
	return (
		<div>
			<H2 id="topico3">Vantagens e Desvantagens</H2>
			<p>
				De fato, Laravel possui muitos pontos fortes a serem considerados ao
				optar por um framework de desenvolvimento web. Contudo, assim como
				qualquer outra tecnologia, ele tem os seus pontos fracos. Na tabela
				abaixo, nota-se as suas vantagens e desvantagens.
			</p>
			<H3>Vantagens</H3>
			<ul>
				<li>Desempenho aprimorado</li>
				<li>Rodar Laravel em hospedagens comuns não é produtivo</li>
				<li>Alta segurança</li>
				<li>
					Complexidade da estrutura de trabalho dificulta a instalação em geral
				</li>
				<li>Migração de banco de dados</li>
			</ul>
			<H3>Desvantagens</H3>
			<ul>
				<li>Custo alto para contratar desenvolvedores</li>
				<li>Redução de custo com manutenção</li>
				<li>Suporte limitado</li>
				<li>“Baixa” curva de aprendizagem</li>
				<li>Lento</li>
			</ul>
		</div>
	);
}
