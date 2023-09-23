import cn from 'classnames';

import { Button, Typography } from '@goorm-dev/gds-challenge';

import styles from './Header.module.scss';
import ParentModal from '../Modals/ParentModal/ParentModal';
import { useState } from 'react';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen((prev) => {
			return !prev;
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
				<ParentModal isOpen={isOpen} toggle={toggle}>
					<p>{123}</p>
				</ParentModal>
			</div>
		</header>
	);
};

export default Header;
