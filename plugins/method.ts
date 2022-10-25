import type { Ref } from 'vue'
// 节流 , const ? = Throttle(fn,delay) , fn 在 delay 毫秒内只能被调用一次
const Throttle = (fn: Function, delay: number) => {
	let timer: null | object = null;
	return function(...arg: any) {
		if (timer) return;
		console.log(timer);
		fn(...arg);
		timer = setTimeout(() => {
			timer = null;
		}, delay);
	};
};

// 首字母转换成小写或大写
type UpperLower = '' | 'upper' | 'Upper' | '大写' | '首字母大写' | 'lower' | 'Lower' | '小写' | '首字母小写';
const InitialConvertCase = (str: string, upperLower: UpperLower = ''): string => {
	const initial = str.charAt(0);
	const upperArr = ['upper', 'Upper', '大写', '首字母大写'];
	const lowerArr = ['lower', 'Lower', '小写', '首字母小写'];
	if (upperArr.indexOf(upperLower) !== -1) {
		return (str = initial.toUpperCase() + str.slice(1));
	}
	if (lowerArr.indexOf(upperLower) !== -1) {
		return (str = initial.toLowerCase() + str.slice(1));
	}
	if (initial === initial.toUpperCase()) {
		return (str = initial.toLowerCase() + str.slice(1));
	}
	if (initial === initial.toLowerCase()) {
		return (str = initial.toUpperCase() + str.slice(1));
	}
	return '';
};

// 驼峰转下划线,拆分单词 ("SonOfABitch" => "son_of_a_bitch")
const SplitWord = (str: string) => {
	let newStr = '';
	for (const i of str) {
		if (!newStr) {
			newStr += i.toLowerCase();
			continue;
		}
		if (i === i.toUpperCase()) {
			newStr += '_' + i.toLowerCase();
		} else {
			newStr += i;
		}
	}
	return newStr;
};

// 获取当前时间
const GetNow = () => {
	const YY = new Date().getFullYear();
	const MM = new Date().getUTCMonth() + 1;
	const DD = new Date().getDate();
	const HH = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
	const mm = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
	const ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
	const currentTime = HH + ':' + mm + ':' + ss;
	const currentDay = YY + '年' + MM + '月' + DD + '日';

	// 获取周
	// const weeks = ["日", "一", "二", "三", "四", "五", "六"];
	// const week = weeks[new Date().getDay()];

	return currentDay + ' ' + currentTime;
};

// 冒泡法排序
const SortArr = (arr: Array<any>, attr = 'id', flag = 'ascending') => {
	for (let i = 0; i < arr.length - 1; i++) {
		//比较arr.length - 1轮
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i][attr] > arr[j][attr] && flag === 'ascending') {
				//交换
				let temp = arr[i]; //临时变量
				arr[i] = arr[j];
				arr[j] = temp;
			} else if (arr[i][attr] < arr[j][attr] && flag === 'descending') {
				let temp = arr[i]; //临时变量
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
};

// 获取元素高度
const GetElementsHeight = (selector: string, uni: Uni,refObj: Ref<number>, delay: number = 0) => {
	let itemHeightList = [];
	setTimeout(function() {
		let view = uni.createSelectorQuery().selectAll(selector);
		view.boundingClientRect(data => {
			if (!data) return;
			itemHeightList.push(data[0].height);
			refObj.value = itemHeightList[0]
		}).exec();
	}, delay);
};

export { Throttle, InitialConvertCase, SplitWord, GetNow, SortArr, GetElementsHeight };
