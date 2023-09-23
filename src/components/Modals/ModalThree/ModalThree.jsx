import { useEffect, useState } from 'react';

import { Input, Label } from '@goorm-dev/gds-challenge';

import styles from './ModalThree.module.scss';

const ModalThree = () => {
	const [oneText, setOneText] = useState('1. blabla');
	const [twoText, setTwoText] = useState('2. blabla');
	const [threeText, setThreeText] = useState('3. blabla');
	const [fourText, setFourText] = useState('4. blabla');

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				오프라인 팀 챌린지에 가장 기대하는 점은 무엇인가요?{' '}
			</div>
			<div className={styles.subTitle}>
				더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.
			</div>

			<div className={styles.inputBox}>
				<Input
					className={styles.inputStyle}
					type="text"
					onChange={(e) => {
						return setOneText(e.target.value);
					}}
					value={oneText}
				/>
			</div>
		</div>
	);
};

export default ModalThree;
