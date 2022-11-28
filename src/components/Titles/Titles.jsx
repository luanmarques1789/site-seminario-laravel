// title levels

export default function H1({ children }) {
	const classNames = [
		'text-6xl',
		'uppercase',
		'text-center',
		'text-custom-red1',
		'font-bold',
		'my-16',
	].join(' ');

	return <h1 className={classNames}>{children}</h1>;
}

export function H2({ children, id }) {
	const classNames = [
		'text-4xl',
		'text-custom-red1',
		'font-bold',
		'mb-8',
		'uppercase',
	].join(' ');

	return (
		<h2 id={id} className={classNames}>
			{children}
		</h2>
	);
}

export function H3({ children, id }) {
	const classNames = ['text-2xl', 'text-custom-red1', 'font-bold', 'mb-8'].join(
		' '
	);

	return (
		<h2 id={id} className={classNames}>
			{children}
		</h2>
	);
}
