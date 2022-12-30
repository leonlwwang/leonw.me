export function getDate(input : Date) : string {
	const options : object = { year: 'numeric', month: 'long', day: 'numeric' };
	return input.toLocaleDateString(undefined, options);
}