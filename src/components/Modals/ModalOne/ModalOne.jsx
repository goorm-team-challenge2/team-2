import { useEffect, useState } from 'react';

import { Input, Label, Typography } from '@goorm-dev/gds-challenge';

import styles from './ModalOne.module.scss';

const ModalOne = ({ onChange }) => {
	const [name, setName] = useState(null);
	const [phone, setPhone] = useState(null);
	const [email, setEmail] = useState(null);

	const [entireAggre, setEntireAggre] = useState(true);
	const [privacyAggre, setPrivacyAggre] = useState(true);
	const [marketingAggre, setMarketingAggre] = useState(true);

	const [advAggre, setAdvAggre] = useState(true);
	const [advAggreDetail, setAdvAggreDetail] = useState({
		email: true,
		sms: true,
	});

	useEffect(() => {
		if (name && phone && email && privacyAggre) {
			onChange(
				name,
				phone,
				email,
				privacyAggre,
				marketingAggre,
				advAggreDetail,
			);
		}
	}, [name, phone, email, privacyAggre]);

	useEffect(() => {
		if (
			privacyAggre &&
			marketingAggre &&
			advAggre &&
			advAggreDetail.email &&
			advAggreDetail.sms
		) {
			setEntireAggre(true);
			return;
		}

		setEntireAggre(false);
	}, [privacyAggre, marketingAggre, advAggre, advAggreDetail]);

	useEffect(() => {
		if (advAggreDetail.email && advAggreDetail.sms) {
			setAdvAggre(true);
			return;
		}

		setAdvAggre(false);
	}, [advAggreDetail]);

	return (
		<div className={styles.container}>
			<div>
				<Typography token="h4">참여자 정보를 입력해주세요.</Typography>
				<Typography token="paragraph-sm">
					오프라인 팀 챌린지 참여자의 정보를 수집하려고 해요.
				</Typography>
			</div>

			<div className={styles.inputBox}>
				<div>
					<Label className={styles.inputLabel}>
						이름
						<span className={styles.inputStar}>*</span>
					</Label>
					<Input
						className={styles.inputStyle}
						type="text"
						placeholder="이름을 입력해주세요."
						onChange={(e) => {
							return setName(e.target.value);
						}}
						value={name}
					/>
				</div>
				<div className={styles.phone}>
					<Label className={styles.inputLabel}>
						전화번호
						<span className={styles.inputStar}>*</span>
					</Label>
					<Input
						className={styles.inputStyle}
						type="text"
						placeholder="ex. 01012345678"
						onChange={(e) => {
							return setPhone(e.target.value);
						}}
						value={phone}
					/>
				</div>
				<div className={styles.email}>
					<Label className={styles.inputLabel}>
						이메일
						<span className={styles.inputStar}>*</span>
					</Label>
					<Input
						className={styles.inputStyle}
						type="text"
						placeholder="ex. goormee@goorm.io"
						onChange={(e) => {
							return setEmail(e.target.value);
						}}
						value={email}
					/>
				</div>
			</div>

			<div className={styles.aggrementBox}>
				<Input
					type="checkbox"
					label="전체 동의"
					checked={entireAggre}
					onChange={() => {
						if (!entireAggre) {
							setPrivacyAggre(true);
							setMarketingAggre(true);
							setAdvAggre(true);
							setAdvAggreDetail({ email: true, sms: true });
						} else {
							setPrivacyAggre(false);
							setMarketingAggre(false);
							setAdvAggre(false);
							setAdvAggreDetail({ email: false, sms: false });
						}
						return setEntireAggre(!entireAggre);
					}}
				/>

				<div className={styles.aggrementBorder}> </div>

				<Input
					type="checkbox"
					label="(필수) 개인정보처리방침"
					checked={privacyAggre}
					onChange={() => {
						return setPrivacyAggre(!privacyAggre);
					}}
				/>

				<Input
					type="checkbox"
					label="(선택) 마케팅 목적의 개인 정보 수집 및 이용"
					checked={marketingAggre}
					onChange={() => {
						return setMarketingAggre(!marketingAggre);
					}}
				/>

				<Input
					type="checkbox"
					label="(선택) 광고성 정보 수신"
					checked={advAggre}
					onChange={() => {
						if (!advAggre) {
							setAdvAggreDetail({ email: true, sms: true });
						} else {
							setAdvAggreDetail({ email: false, sms: false });
						}
						return setAdvAggre(!advAggre);
					}}
				/>

				<div className={styles.advBox}>
					<Input
						type="checkbox"
						label="이메일"
						checked={advAggreDetail.email}
						onChange={() => {
							return setAdvAggreDetail((prev) => {
								return {
									...prev,
									email: !advAggreDetail.email,
								};
							});
						}}
					/>
					<Input
						type="checkbox"
						label="SMS"
						checked={advAggreDetail.sms}
						onChange={() => {
							return setAdvAggreDetail((prev) => {
								return { ...prev, sms: !advAggreDetail.sms };
							});
						}}
					/>
				</div>
				<div className={styles.advMessage}>
					※ 광고성 정보 수신에 동의하시면 챌린지에 꾸준히 참여하실 수
					있도록 리마인드 알림을 보내드려요.
				</div>
			</div>
		</div>
	);
};

export default ModalOne;
