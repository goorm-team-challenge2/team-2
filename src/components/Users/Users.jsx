import User from './User/User';

const data = [
	{
		// ModalOne
		name: '김바다',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '김바다',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '김바다',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '김바다',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '김바다',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '김바다',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '두번째양반',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '세번째양반',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '두번째양반',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '세번째양반',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '두번째양반',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '세번째양반',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '두번째양반',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '세번째양반',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '두번째양반',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
	{
		// ModalOne
		name: '세번째양반',
		phone: '010-8021-1233',
		email: 'a@a.com',
		agreements: {
			privacy: true,
			marketing: true,
			advertisement: true,
			// 상태로 관리해주셔도 되고 데이터로 관리해주셔도 될거같아요
			advEmail: true,
			advSMS: true,
		},
		// ModalTwo
		majorIsSW: true,
		goorm: {
			experience: true,
			usedService: [
				{
					id: '구름EDU',
					check: false,
				},
				{
					id: '구름LEVEL',
					check: false,
				},
			],
			reasonForUse: '구름톤 챌린지에 참여하려고 ',
		},
		// ModalThree (각 문장 28자 제한)
		expectations: ['a', 's', 'd', 'd'],
		// ModalFour
		sendMessage: '문제 난이도가 어려웠으면 좋겠어요',
	},
];

const Users = () => {
	return (
		<>
			{data
				.map((user, index) => {
					return <User key={index} data={user} num={index} />;
				})
				.reverse()}
		</>
	);
};

export default Users;
