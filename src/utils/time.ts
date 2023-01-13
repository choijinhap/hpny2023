export const IsoToDate = (timestamp: string) => {
	const datetime = new Date(timestamp);
	const year = datetime.getFullYear();
	const month = datetime.getMonth() + 1;
	const date = datetime.getDate();
	return `${year}. ${month >= 10 ? month : '0' + month}. ${date >= 10 ? date : '0' + date}`;
};
