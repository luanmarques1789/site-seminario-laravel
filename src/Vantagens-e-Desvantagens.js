import { H2 } from './components/Title/Titles';

export default function Parte3() {
	return (
		<div>
			<H2>Vantagens e Desvanatgens</H2>
			<table className="table-auto">
				<thead>
					<tr>
						<th>
							<span>Vantagens</span>
						</th>
						<th>
							<span>Desvantagens</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<span>Desempenho aprimorado</span>
						</td>
						<td>
							<span>Rodar Laravel em hospedagens comuns não é produtivo</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>Alta segurança</span>
						</td>
						<td>
							<span>
								Complexidade da estrutura de trabalho dificulta a instalação em
								geral
							</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>Migração de banco de dados</span>
						</td>
						<td>
							<span>Custo alto para contratar desenvolvedores</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>Redução de custo com manutenção</span>
						</td>
						<td>
							<span>Suporte limitado</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>“Baixa” curva de aprendizagem</span>
						</td>
						<td>
							<span>Lento</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
