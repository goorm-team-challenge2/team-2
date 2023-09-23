import { useState } from 'react';

import { EmptyView, Header } from '@/components';
import UserAnswer from '@/components/UserAnswer/UserAnswer';

import styles from './App.module.scss';

function App() {
	const [modalId, setModalId] = useState(0);
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
				modalId={modalId}
			/>
			<main className={styles.main}>
				{/* <EmptyView /> */}
				<UserAnswer />
			</main>
		</div>
	);
}

export default App;

// https://www.figma.com/file/ihvdLEzT5Q8ivyJjnOv2h0/%EC%98%A4%ED%94%84%EB%9D%BC%EC%9D%B8-%ED%8C%80-%EC%B1%8C%EB%A6%B0%EC%A7%80-%EA%B3%BC%EC%A0%9C?type=design&node-id=0-1&mode=design&t=b3yT8aE2EwWvlT8h-0

