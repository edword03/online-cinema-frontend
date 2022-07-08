export const generateSlug = (string: string) => {
	return string
		.toLowerCase()
		.trim()
		.replaceAll(/\s/g, '-')
		.replaceAll('---', '-')
		.replaceAll('--', '-');
};
