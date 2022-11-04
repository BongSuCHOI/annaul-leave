module.exports = (sequelize, DataTypes) => {
	// 모델 생성
	const Vacation = sequelize.define(
		'Vacation',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				comment: '고유번호 UUIDV4',
			},
			vacation: {
				type: DataTypes.JSONTYPE,
				// type: DataTypes.STRING(),
				// get() {
				// 	return this.getDataValue('vacationHistory').split(';');
				// },
				// set(val) {
				// 	this.setDataValue('vacationHistory', val.join(';'));
				// },
				comment: '사용 연차 데이터',
			},
		},
		{
			charset: 'utf8', // 한국어 설정
			collate: 'utf8_general_ci', // 한국어 설정
			tableName: 'Vacation', // 테이블 이름
			paranoid: true, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
		}
	);

	return Vacation;
};

// 이거 구조 알아봐야함
// 그냥 users랑 관계 설정하고 user_id 컬럼을 추가하면 자동으로 연결이 되나? 어케 로그인한 유저의 해당 정보를 받아오지? 약간 커뮤니티 같은 곳에서 유저가 쓴 글 목록 같은 테이블 구조랑 똑같을 거 같은데 알아보자
// 저거 알아보고 위에 컬럼 구조 수정
