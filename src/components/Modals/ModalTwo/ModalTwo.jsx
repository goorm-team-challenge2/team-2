import React, { useState } from 'react';
import {
	Typography,
	Form,
	Button,
	Input,
	TextArea,
} from '@goorm-dev/gds-challenge';

export default function ModalTwo({ onChange }) {
	const [one, setOne] = useState(null);
	const [two, setTwo] = useState(null);
	const [checkBoxes, setCheckBoxes] = useState({
		구름EDU: false,
		구름LEVEL: false,
		구름DEVTH: false,
		구름IDE: false,
		구름EXP: false,
	});
	const [reason, setReason] = useState('');

	const handleCheckBoxChange = (e) => {
		const { name, checked } = e.target;
		setCheckBoxes({ ...checkBoxes, [name]: checked });
	};

	return (
		<div>
			<Typography token="h4">
				구름 서비스 이용 경험을 알려주세요.
			</Typography>
			<Typography token="paragraph-sm" style={{ marginBottom: '32px' }}>
				더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.
			</Typography>
			<Form.Group gap="lg" style={{ marginBottom: '32px' }}>
				<Typography token="paragraph">
					1. SW 관련 학과를 전공하셨나요?{' '}
					<Typography token="paragraph" color="danger">
						*
					</Typography>
				</Typography>
				<div
					style={{ display: 'flex', gap: '16px' }}
					onClick={(e) => {
						onChange(one, two, checkBoxes, reason);
					}}
				>
					<Button
						color="basic"
						size="lg"
						block
						onClick={() => {
							setOne('전공');
						}}
						active={one === '전공'}
					>
						전공
					</Button>
					<Button
						color="basic"
						size="lg"
						block
						onClick={() => {
							setTwo('비전공');
						}}
						active={one === '비전공'}
					>
						비전공
					</Button>
				</div>
			</Form.Group>
			<Form.Group gap="lg" style={{ marginBottom: '32px' }}>
				<Typography token="paragraph">
					2. 구름 서비스를 사용해보신 적이 있나요?{' '}
					<Typography token="paragraph" color="danger">
						*
					</Typography>
				</Typography>
				<div
					style={{ display: 'flex', gap: '16px' }}
					onClick={(e) => {
						onChange(one, two, checkBoxes, reason);
					}}
				>
					<Button
						color="basic"
						size="lg"
						block
						onClick={() => {
							setTwo('예');
						}}
						active={two === '예'}
					>
						예
					</Button>
					<Button
						color="basic"
						size="lg"
						block
						onClick={() => {
							setTwo('아니오');
						}}
						active={two === '아니오'}
					>
						아니오
					</Button>
				</div>
			</Form.Group>
			{two === '예' && (
				<>
					<Form.Group style={{ marginBottom: '32px' }} gap="lg">
						<Typography token="paragraph">
							{
								'2-1. 사용 경험이 있는 서비스를 선택해주세요. (복수선택가능)'
							}
						</Typography>

						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(3,1fr)',
								rowGap: '16px',
							}}
							onChange={(e) => {
								handleCheckBoxChange(e);
								onChange(one, two, checkBoxes, reason);
							}}
						>
							<Input
								type="checkbox"
								label="구름EDU"
								name="구름EDU"
							/>
							<Input
								type="checkbox"
								label="구름LEVEL"
								name="구름LEVEL"
							/>
							<Input
								type="checkbox"
								label="구름DEVTH"
								name="구름DEVTH"
							/>
							<Input
								type="checkbox"
								label="구름IDE"
								name="구름IDE"
							/>
							<Input
								type="checkbox"
								label="구름EXP"
								name="구름EXP"
							/>
						</div>
					</Form.Group>
					<Form.Group gap="lg">
						<Typography token="paragraph">
							2-2. 해당 서비스를 사용하게 된 이유는 무엇인가요?
						</Typography>
						<TextArea
							block
							placeholder="ex. 구름톤 챌린지에 참여하기 위해 레벨 서비스를 사용해봤습니다."
							value={reason}
							onChange={(e) => {
								setReason(e.target.value);
								onChange(one, two, checkBoxes, reason);
							}}
						/>
					</Form.Group>
				</>
			)}
		</div>
	);
}
