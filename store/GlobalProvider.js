'use client';

import React, { useReducer } from 'react';
import GlobalContext from './global-context';

const initState = {
	leaveData: [
		{ reason: '연차휴가', leaveStart: '2022-10-20', leaveEnd: '2022-10-21' },
		{ reason: '연차휴가', leaveStart: '2022-11-02', leaveEnd: '2022-11-04' },
		{ reason: '연차휴가', leaveStart: '2022-11-07', leaveEnd: '2022-11-07' },
	],
};

const leaveReducer = (state, action) => {
	if (action.type === 'ADD') {
		const data = state.leaveData.concat(action.data);
		return { ...state, leaveData: data };
	}

	if (action.type === 'REMOVE') {
		const filterdData = state.leaveData.filter((data) => data.leaveStart !== action.date);
		return { ...state, leaveData: filterdData };
	}
	return { ...state };
};

const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(leaveReducer, initState);

	const addLeaveHandler = (data) => {
		dispatch({ type: 'ADD', data: data });
	};

	const removeLeaveHandler = (date) => {
		dispatch({ type: 'REMOVE', date: date });
	};

	const context = {
		leaveDatas: state.leaveData,
		addLeave: addLeaveHandler,
		removeLeave: removeLeaveHandler,
	};

	return <GlobalContext.Provider value={context}>{props.children}</GlobalContext.Provider>;
};

export default GlobalProvider;
