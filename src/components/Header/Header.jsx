import cn from 'classnames';
import { Button, Typography } from '@goorm-dev/gds-challenge';
import styles from './Header.module.scss';
import ParentModal from '../Modals/ParentModal';
import { useState } from 'react';
import ModalTwo from '../Modals/ModalTwo/ModalTwo';

const Header = ({ onSaveUserInfo }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen((prev) => {
			return !prev;
		});
	};
	const [isCompleted, setIsCompleted] = useState(false);

	const onChangeModalTwo = (one, two, checkBoxes, reason) => {
		setIsCompleted(one || two);
		onSaveUserInfo(1, {
			id: 1,
			majorIsSW: one === '전공' ? true : false,
			goorm: {
				experience: two === '예' ? true : false,
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
