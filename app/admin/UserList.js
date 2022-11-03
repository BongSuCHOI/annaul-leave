import styles from './styles/UserList.module.css';
import Button from '../../components/UI/Button';

const calcPeriod = (startDate) => {
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

const calcTotalVacation = (period) => (period === 0 ? 11 : Math.floor((period - 1) / 2 + 15));

export default function UserList(props) {
	const userDatas = props.userDatas;
	const list =
		userDatas.length > 0 &&
		userDatas.map((user) => {
			const { diffYear, employmentPeriodText } = calcPeriod(user.startDate);
			const totalVacation = calcTotalVacation(diffYear);

			return (
				<tr className={styles.list} key={user.id}>
					<td>1324651321</td>
					<td>{user.name}</td>
					<td>{user.id}</td>
					<td>{user.startDate}</td>
					<td>{employmentPeriodText}</td>
					<td>{totalVacation}</td>
					<td>7</td>
					<td>
						<Button text="삭제" isCenter={true} theme="red" />
					</td>
				</tr>
			);
		});

	return (
		<table className={styles.listTable}>
			<colgroup>
				<col style={{ width: '12.5%' }} />
				<col style={{ width: '12.5%' }} />
				<col style={{ width: '12.5%' }} />
				<col style={{ width: '12.5%' }} />
				<col style={{ width: '12.5%' }} />
				<col style={{ width: '12.5%' }} />
				<col style={{ width: '12.5%' }} />
				<col style={{ width: '12.5%' }} />
			</colgroup>
			<thead className={styles.thead}>
				<tr>
					<th>No</th>
					<th>이름</th>
					<th>아이디</th>
					<th>입사일</th>
					<th>재직기간</th>
					<th>총 연차</th>
					<th>남은 연차</th>
					<th>삭제</th>
				</tr>
			</thead>
			<tbody>{list}</tbody>
		</table>
	);
}
