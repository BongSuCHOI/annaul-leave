module.exports = (sequelize, DataTypes) => {
	// 모델 생성
	const Users = sequelize.define(
		'Users',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				comment: '고유번호 UUIDV4',
			},
			role: {
				type: DataTypes.NUMBER(),
				defaultValue: 0,
				comment: '어드민 권한',
			},
			user_id: {
				type: DataTypes.STRING(),
				comment: '아이디',
			},
			user_pw: {
				type: DataTypes.STRING(),
				comment: '비밀번호',
			},
			user_name: {
				type: DataTypes.STRING(),
				comment: '이름',
			},
			startDate: {
				type: DataTypes.STRING(),
				comment: '입사일',
			},
		},
		{
			charset: 'utf8', // 한국어 설정
			collate: 'utf8_general_ci', // 한국어 설정
			tableName: 'Users', // 테이블 이름
			timestamps: true, //createAt & updateAt 활성화
			paranoid: true, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
		}
	);

	// 모델 관계성 정의
	Users.associate = (models) => {
		// Users안에 있는 sourceKey값을('id') foreignKey라는('user_id') 컬럼 이름으로 Vacation모델에 새로운 컬럼으로 추가
		Users.hasOne(models.Vacation, { foreignKey: 'user_id', sourceKey: 'id' });
	};

	return Users;
};
