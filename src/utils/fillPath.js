export default function (path, params) {
	return Object.entries(params).reduce((acc, [name, value]) => {
		return acc.replace(`:${name}`, value);
	}, path);
}
