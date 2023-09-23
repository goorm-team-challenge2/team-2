import React, { useState } from 'react';
import { Typography, TextArea } from '@goorm-dev/gds-challenge';

export default function ModalFour({ onChange }) {
	const [opinion, setOpinion] = useState('');
	return (
		<div
			onChange={() => {
				onChange(opinion);
			}}
		>
			<Typography token="h4">
				구름톤 챌린지에 전하고 싶은 말을 적어주세요.
			</Typography>
			<Typography token="paragraph-sm" style={{ marginBottom: '40px' }}>
				더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.
			</Typography>
			<TextArea
				placeholder="ex.
다음 번 챌린지에서는 더 어려운 문제가 출제되면 좋겠어요.
오프라인 과제가 다양했으면 좋겠어요."
				block
				style={{
					width: '100%',
					height: '100px',
				}}
				value={opinion}
				onChange={(e) => {
					setOpinion(e.target.value);
				}}
			/>
		</div>
	);
}
