import React, { useState } from 'react';
import { Modal, Button, CarouselIndicators } from '@goorm-dev/gds-challenge';

const LENGTH = 4;

export default function ParentModal({ isOpen, toggle, children }) {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<Modal isOpen={isOpen} centered fade={false} toggle={toggle}>
			<Modal.Header toggle={toggle} />
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer>
				<CarouselIndicators length={LENGTH} activeIndex={activeIndex} />
				<Button
					color="link"
					disabled={activeIndex <= 0}
					onClick={() => {
						setActiveIndex((prev) => {
							if (prev <= 0) {
								return 0;
							}
							return prev - 1;
						});
					}}
				>
					이전
				</Button>
				<Button
					disabled={activeIndex >= LENGTH - 1}
					onClick={() => {
						setActiveIndex((prev) => {
							if (prev >= LENGTH - 1) {
								return 0;
							}
							return prev + 1;
						});
					}}
				>
					다음
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
