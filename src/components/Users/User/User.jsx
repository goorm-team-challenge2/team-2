import { useState } from 'react';

import { Collapse, Button } from '@goorm-dev/gds-challenge';
import { ChevronDownIcon, ChevronUpIcon } from '@goorm-dev/gds-icons';

import Card from '../../Card/Card';

import styles from './User.module.scss';

const checkedServices = (usedService) => {
	let str = '';
	const ideNames = usedService
		.filter((service) => service.check)
		.map((service) => service.id)
		.join(', ');

	if (ideNames.length === 0) str = '-';
	else str = ideNames;

	return str;
};

const User = ({ data, num }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleCard = () => {
		setIsOpen((prev) => {
			return !prev;
		});
	};

	return (
		<>
			<button className={styles.button} onClick={toggleCard}>
				<div>{`참여자 ${num + 1}. ${data.name}`}</div>
				{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
			</button>
			<Collapse isOpen={isOpen}>
				<Card
					className={styles.card}
					type="content"
					title="이름"
					between
				>
					{data.name}
				</Card>
				<Card className={styles.card} type="content" title="전화번호">
					{data.phone}
				</Card>
				<Card className={styles.card} type="content" title="이메일">
					{data.email}
				</Card>
				<Card className={styles.card} type="content" title="질문1">
					<p>Q. SW 관련 학과를 전공하셨나요? (객관식)</p>
					<p>A. {data.majorIsSW ? '예' : '아니오'}</p>
				</Card>
				<Card className={styles.card} type="content" title="질문2">
					<p>Q. 구름 서비스를 사용해보신 적 있나요? (객관식)</p>
					<p>A. {data.goorm.experience ? '예' : '아니오'}</p>
				</Card>
				<Card className={styles.card} type="content" title="질문2-1">
					<p>
						Q. 사용 경험이 있는 서비스를 선택해주세요. (객관식, 복수
						선택 가능)
					</p>
					<p>A. {checkedServices(data.goorm.usedService)}</p>
				</Card>
				<Card className={styles.card} type="content" title="질문2-2">
					<p>
						Q. 해당 서비스를 사용하게 된 이유는 무엇인가요? (주관식)
					</p>
					<p>
						A.{' '}
						{data.goorm.reasonForUse.length
							? data.goorm.reasonForUse
							: '-'}
					</p>
				</Card>
				<Card className={styles.card} type="content" title="질문3">
					<p>
						Q. 오프라인 팀 챌린지에 가장 기대하는 점은 무엇인가요?
						(객관식)
					</p>
					<p>A. {data.expectations.join(', ')}</p>
				</Card>
				<Card className={styles.card} type="content" title="질문4">
					<p>
						Q. 구름톤 챌린지에 전달하고 싶은 말을 적어주세요.
						(주관식)
					</p>
					<p>A. {data.sendMessage}</p>
				</Card>
			</Collapse>
		</>
	);
};

export default User;
