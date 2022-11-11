export const calcPeriod = (startDate) => {
	const today = new Date();
	const startDay = new Date(startDate);
	const diffDate = today.getTime() - startDay.getTime();
	const diffMonth = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));
	const diffYear = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 365)));
	let employmentPeriodText = '';

	if (diffYear > 0) {
		employmentPeriodText = `${diffYear}년 ${diffMonth - diffYear * 12}개월`;
	} else {
		employmentPeriodText = `${diffMonth}개월`;
	}

	return { diffYear, employmentPeriodText };
};

export const calcTotalVacation = (period) =>
	period === 0 ? 11 : Math.floor((period - 1) / 2 + 15);
