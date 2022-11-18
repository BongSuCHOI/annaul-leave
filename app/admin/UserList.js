'use client';

import styles from '@app/admin/styles/UserList.module.css';
import Button from '@components/UI/Button';
import { calcPeriod, calcTotalVacation } from '@util/calculation';
import { useDBGET, useDBPOST } from '@lib/db_controller';

export default function UserList({ prefetchUsers }) {
	const { mutateAsync: deleteUser } = useDBPOST('/user/destroy', ['allUser']);
	const { data } = useDBGET('/user', ['allUser'], prefetchUsers);

	const usersData = data
		?.filter((d) => d.role === 0)
		.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

	const deleteUserHandler = async (pk) => {
		const isConfirm = confirm('삭제하시겠습니까?');
		if (isConfirm) {
			const result = deleteUser({ pk });
			if (result) {
				alert('삭제되었습니다.');
			}
		}
	};

	const list =
		usersData &&
		usersData.map((user) => {
			const { id, user_name, user_id, startDate, vacations } = user;
			const { diffYear, employmentPeriodText } = calcPeriod(startDate);
			const totalVacation = calcTotalVacation(diffYear);

			return (
				<tr className={styles.list} key={id}>
					<td>{user_name}</td>
					<td>{user_id}</td>
					<td>{startDate?.slice(0, 10)}</td>
					<td>{employmentPeriodText}</td>
					<td>{totalVacation}</td>
					<td>{vacations.length}</td>
					<td>{totalVacation - vacations.length}</td>
					<td>
						<Button
							text="삭제"
							isCenter={true}
							theme="red"
							onClick={() => {
								deleteUserHandler(id);
							}}
						/>
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
					<th>이름</th>
					<th>아이디</th>
					<th>입사일</th>
					<th>재직기간</th>
					<th>총 연차</th>
					<th>사용 연차</th>
					<th>남은 연차</th>
					<th>삭제</th>
				</tr>
			</thead>
			<tbody>{list}</tbody>
		</table>
	);
}
