// 判断是否为 JSON 格式
function isJSON(str) {
	if (typeof str === "string") {
		try {
			var obj = JSON.parse(str)
			if (typeof obj === "object" && obj) {
				return true
			} else {
				return false
			}

		} catch (e) {
			return false
		}
	}
}

// 冒泡法排序
const SortArr = (arr, attr = "id", flag = "ascending") => {
	for (let i = 0; i < arr.length - 1; i++) {
		//比较arr.length - 1轮
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i][attr] > arr[j][attr] && flag === "ascending") {
				//交换
				let temp = arr[i] //临时变量
				arr[i] = arr[j]
				arr[j] = temp
			} else if (arr[i][attr] < arr[j][attr] && flag === "descending") {
				let temp = arr[i] //临时变量
				arr[i] = arr[j]
				arr[j] = temp
			}
		}
	}
	return arr
}

// Json一级格式数据转三级级联格式
const JsonToCascade = jsonList => {
	let pickerList = []
	for (let item of jsonList) {
		if (item.type === 0) {
			pickerList.push({
				value: item.name,
				text: item.name,
				code: item.code,
				children: []
			})
		}
		if (item.type === 1) {
			for (let i of pickerList) {
				if (i.code === item.parent_code) {
					i.children.push({
						value: i.value + item.name,
						text: item.name,
						code: item.code,
						children: []
					})
				}
			}
		}
		if (item.type === 2) {
			for (let i of pickerList) {
				for (let sI of i.children) {
					if (sI.code === item.parent_code) {
						sI.children.push({
							value: sI.value + item.name,
							text: item.name,
							code: item.code,
						})
					}
				}
			}
		}
	}

	return pickerList
}

// 基于年月日时分秒+随机数生成订单编号
const CreateOrder = () => {
	const setTimeDateFmt = s => { // 个位数补齐十位数
		return s < 10 ? "0" + s : s
	}
	const now = new Date()
	let month = now.getMonth() + 1
	let day = now.getDate()
	let hour = now.getHours()
	let minutes = now.getMinutes()
	let seconds = now.getSeconds()
	month = setTimeDateFmt(month)
	day = setTimeDateFmt(day)
	hour = setTimeDateFmt(hour)
	minutes = setTimeDateFmt(minutes)
	seconds = setTimeDateFmt(seconds)
	let orderCode = now.getFullYear().toString() + month.toString() + day + hour + minutes + seconds + (Math.round(
		Math.random() * 1000000)).toString()
	return orderCode
}

module.exports = {
	isJSON,
	SortArr,
	JsonToCascade,
	CreateOrder
}
