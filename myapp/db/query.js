// tablePath 为完整表格路径 (例:xxxx.xxxx)
const sql = {
	query(tablePath, queryInfo, accurate = false) {
		const {
			content,
			pageNum,
			pageSize,
			column
		} = queryInfo
		const m = (pageNum - 1) * pageSize
		const n = pageNum * pageSize - 1
		if (accurate) {
			return "SELECT * FROM " + tablePath + " where " + column + " = '" + content + "' limit " + m +
				"," + n
		}
		return "SELECT * FROM " + tablePath + " where " + column + " like '%" + content + "%' limit " + m + "," + n
	},
	insert(tablePath, addItem) {
		let keyList = []
		let valueList = []
		for (let i in addItem) {
			keyList.push(i)
			valueList.push("'" + addItem[i] + "'")
		}

		const columnsStr = keyList.join(",")
		const valuesStr = valueList.join(",")
		return "INSERT INTO " + tablePath + " (" + columnsStr + ") VALUES (" + valuesStr + ");"
	},
	update(tablePath, updateItem) {
		let list = []
		for (let i in updateItem) {
			if (i === "id") continue

			list.push(i + "=" + "'" + updateItem[i] + "'")
		}

		const setStr = list.join(",")
		return "UPDATE " + tablePath + " SET " + setStr + " WHERE (`id` = '" + updateItem.id + "')"
	},
	delete(tablePath, id) {
		return "DELETE FROM " + tablePath + " WHERE (`id` = '" + id + "')"
	}
}

module.exports = sql
