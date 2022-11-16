export default function simpleValidate(value) {
	// 간단하게 비엇는지만 확인
	if (value === '' || value.length === 0) {
		return false;
	} else {
		return true;
	}
}
