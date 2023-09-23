import { EmptyView, Header } from '@/components';

import styles from './App.module.scss';
import { useState } from 'react';

function App() {
	const [userInfo, setUserInfo] = useState([
		{
			// ModalOne
			id: 0,
			name: '',
			phone: null,
			email: '',
			agreements: {
				privacy: false,
				marketing: false,
				advertisement: false,
				// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
				advEmail: false,
				advSMS: false,
			},
		},
		// ModalTwo
		{
			id: 1,
			majorIsSW: false,
			goorm: {
				experience: false,
				usedService: {
					구름EDU: false,
					구름LEVEL: false,
					구름DEVTH: false,
					구름IDE: false,
					구름EXP: false,
				},
				reasonForUse: '',
			},
		},
		{
			id: 2,
			// ModalThree (각 문장 28자 제한)
			expectations: ['', '', '', ''],
		},
		{
			id: 3,
			// ModalFour
			sendMessage: '',
		},
	]);
	return (
		<div className={styles.App}>
			<Header
				onSaveUserInfo={(id, data) => {
					setUserInfo((prev) => {
						const newInfo = [...prev];
						newInfo[id] = data;
						return newInfo;
					});
				}}
			/>
			<main className={styles.main}>
				<EmptyView />
			</main>
		</div>
	);
}

export default App;
