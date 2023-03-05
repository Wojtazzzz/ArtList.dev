export const truncateString = (str: string, maxLength: number, appendString: string) => {
	if (str.length > maxLength) {
		return str.slice(0, maxLength) + appendString;
	}

	return str;
};
