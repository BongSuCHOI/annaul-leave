'use client';

import React from 'react';

const GlobalContext = React.createContext({
	id: '',
	name: '',
	startDate: '',
	employmentPeriod: '',
	totalLeave: 0,
	remainLeave: 0,
	useLeave: 0,
	leaveDates: [],
	addLeave: () => {},
	removeLeave: () => {},
});

export default GlobalContext;
