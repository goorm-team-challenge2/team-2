import { useState } from 'react';
import cn from 'classnames';

import { Button, Typography } from '@goorm-dev/gds-challenge';

import ModalOne from '../Modals/ModalOne/ModalOne';
import ModalThree from '../Modals/ModalThree/ModalThree';
import ModalTwo from '../Modals/ModalTwo/ModalTwo';
import ParentModal from '../Modals/ParentModal';

import styles from './Header.module.scss';

const Header = ({ onSaveUserInfo, modalId }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen((prev) => {
			return !prev;
		});
	};
	const [isCompleted, setIsCompleted] = useState(false);

	const onChangeModalOne = (
		name,
		phone,
		email,
		privacyAggre,
		marketingAggre,
		advAggreDetail,
	) => {
		if (name && phone && email && privacyAggre) {
			setIsCompleted(true);
		} else {
			setIsCompleted(false);
		}
		onSaveUserInfo(0, {
			id: 0,
			name,
			phone,
			email,
			agreements: {
				privacy: privacyAggre,
				marketing: marketingAggre,
				advertisement: false,
				advEmail: advAggreDetail.email,
				advSMS: advAggreDetail.sms,
			},
		});
	};

	const onChangeModalTwo = (one, two, checkBoxes, reason) => {
		setIsCompleted(one || two);
		onSaveUserInfo(1, {
			id: 1,
			majorIsSW: one === '전공',
			goorm: {
				experience: two === '예',
				usedService: checkBoxes,
				reasonForUse: reason,
			},
		});
	};
	return (
		<header className={cn(styles.header)}>
			<div className={cn(styles.contents)}>
				<Typography token="h5">
					구름톤 챌린지 참여자 정보 수집
				</Typography>
				<Button size="lg" onClick={toggle}>
					설문조사 참여하기
				</Button>
				<ParentModal
					isOpen={isOpen}
					toggle={toggle}
					isCompleted={isCompleted}
				>
					<ModalTwo onChange={onChangeModalTwo} />
				</ParentModal>
			</div>
		</header>
	);
};

export default Header;
