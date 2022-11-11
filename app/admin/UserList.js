'use client';

import styles from './styles/UserList.module.css';
import Button from '../../components/UI/Button';
import { calcPeriod, calcTotalVacation } from '../../util/calculation';
import { useGetAllUserInfo, useDeleteUser } from '../../util/basicFetch';

export default function UserList({ prefetchUsers }) {
	const { data } = useGetAllUserInfo(prefetchUsers);
	const { mutate: deleteUser } = useDeleteUser();
	const usersData = data?.filter((d) => d.role === 0);

	const deleteUserHandler = async (pk) => {
		const isConfirm = confirm('삭제하시겠습니까?');
		if (isConfirm) {
			deleteUser({ pk });
		}
	};

	const list =
		usersData &&
		usersData.map((user) => {
			const { id, user_name, user_id, startDate } = user;
			const { diffYear, employmentPeriodText } = calcPeriod(startDate);
			const totalVacation = calcTotalVacation(diffYear);

			return (
				<tr className={styles.list} key={id}>
					<td>{user_name}</td>
					<td>{user_id}</td>
					<td>{startDate?.slice(0, 10)}</td>
					<td>{employmentPeriodText}</td>
					<td>{totalVacation}</td>
					<td>2</td>
					<td>7</td>
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
