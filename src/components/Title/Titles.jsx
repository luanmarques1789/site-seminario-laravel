export default function H1({ children }) {
	const classNames = [
		'text-6xl',
		'uppercase',
		'text-center',
		'text-orange-tone1',
		'font-bold',
		'my-16',
	].join(' ');

	return <h1 className={classNames}>{children}</h1>;
}

export function H2({ children }) {
	const classNames = [
		'text-4xl',
		'text-orange-tone1',
		'font-bold',
		'mb-8',
	].join(' ');

	return <h2 className={classNames}>{children}</h2>;
}
