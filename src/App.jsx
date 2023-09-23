import { EmptyView, Header } from '@/components';

import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<main className={styles.main}>
				<EmptyView />
			</main>
		</div>
	);
}

export default App;

// https://www.figma.com/file/ihvdLEzT5Q8ivyJjnOv2h0/%EC%98%A4%ED%94%84%EB%9D%BC%EC%9D%B8-%ED%8C%80-%EC%B1%8C%EB%A6%B0%EC%A7%80-%EA%B3%BC%EC%A0%9C?type=design&node-id=0-1&mode=design&t=b3yT8aE2EwWvlT8h-0

