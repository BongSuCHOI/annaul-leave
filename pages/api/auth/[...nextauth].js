import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../lib/auth';

export default NextAuth({
	providers: [
		CredentialsProvider({
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				user_id: { label: '아이디', type: 'text' },
				user_pw: { label: '패스워드', type: 'password' },
			},
			async authorize(credentials, req) {
				const { user_id, user_pw } = credentials;

				const res = await fetch(`http://10.10.10.147:3000/api/user/${user_id}`);
				if (!res.ok) throw new Error('Error!');
				const user = await res.json();

				// 아이디 없음
				if (!user) return null;

				// db에 hash로 저장된 비밀번호랑 입력된 비밀번호 hash로 변환 후 비교
				const verifyPw = await verifyPassword(user_pw, user.user_pw);

				// 비밀번호 없음
				if (!verifyPw) return null;

				// 기본적으로 user 객체가 email, name, image 3개만 리턴해줌
				// jwt에 user로 넘겨준 후 다시 session 의 token으로 넘겨 줌 (jwt > session 실행 순서)
				return { id: user.user_id, role: user.role };
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token }) {
			return { id: token.id, role: token.role, expires: session.expires };
		},
	},
	pages: {
		signIn: '/',
		signOut: '/',
	},
	secret: process.env.SECRET,
});
