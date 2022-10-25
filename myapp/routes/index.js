var express = require("express")
var methods = require("../plugins/methods")
var conn = require("../db/sql")
var query = require("../db/query")
var jwt = require("jsonwebtoken")
//接入短信的sdk
var QcloudSms = require("qcloudsms_js")
const alipaySdk = require("../db/alipay")
const AlipayFormData = require("alipay-sdk/lib/form").default
var router = express.Router()

//验证码
let code = ""

//设置跨域访问（设置在所有的请求前面即可）
router.all("*", function(req, res, next) {
	//设置允许跨域的域名，*代表允许任意域名跨域
	res.header("Access-Control-Allow-Origin", "*")
	//允许的header类型
	res.header("Access-Control-Allow-Headers", "content-type")
	//跨域允许的请求方式 
	res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
	if (req.method === "OPTIONS")
		res.sendStatus(200) //让options尝试请求快速结束
	else
		next()
})

// 获取数据
const GetReqData = req => {
	let reqData = {}
	for (let i in req.query) {
		if (methods.isJSON(req.query[i])) {
			reqData[i] = JSON.parse(req.query[i])
		} else {
			reqData[i] = req.query[i]
		}
	}
	return reqData
}
const PostReqData = req => {
	let reqData = {}
	for (let i in req.body) {
		reqData = JSON.parse(i)
	}
	return reqData
}

// POST
router.post("/", function(req, res, next) {

})

router.post("/api/data/order", function(req, res, next) {

	let reqData = PostReqData(req)

	let {
		orderInfo,
		totalPrice,
		operation
	} = reqData

	if (operation === "add") {
		const orderNumber = methods.CreateOrder()
		const { userId } = orderInfo[0]
		const goodsId = orderInfo.map(item => {
			return item.goodId
		}).join(",")
		const goodsNum = orderInfo.map(item => {
			return item.num
		}).join(",")

		const addItem = {
			totalPrice,
			userId,
			orderNumber,
			goodsId,
			goodsNum,
			orderStatus: 1
		}

		conn.query(query.insert("shop.order_list", addItem), function(error,
			mysqlRes, fields) {
			if (error) throw error

			const queryInfo = {
				pageNum: 1,
				pageSize: 9999,
				content: orderNumber,
				column: "orderNumber"
			}
			conn.query(query.query("shop.order_list", queryInfo, true), function(error2,
				mysqlRes2, fields2) {
				if (error2) throw error2

				res.json({
					"code": 0,
					"data": {
						success: true,
						orderInfo: mysqlRes2
					}
				})
			})
		})
	}

	if (operation === "edit") {
		const { updateInfo } = reqData
		conn.query(query.update("shop.order_list", updateInfo), function(error,
			mysqlRes, fields) {
			if (error) throw error

			res.json({
				"code": 0,
				"data": {
					success: true,
					message: "修改状态成功"
				}
			})
		})
	}

})

router.post("/api/data/cart", function(req, res, next) {
	const reqData = PostReqData(req)
	const {
		updateInfo,
		itemsId,
		userId
	} = reqData

	if (reqData.operation === "edit") {
		conn.query(query.update("shop.shopping_cart", updateInfo), function(error,
			mysqlRes, fields) {
			if (error) throw error

			res.json({
				"code": 0,
				"data": {
					success: true,
					message: "修改成功"
				}
			})
		})
	}

	if (reqData.operation === "delete") {
		for (let id of itemsId) {
			conn.query(query.delete("shop.shopping_cart", id), function(error,
				mysqlRes, fields) {
				if (error) throw error

				if (id === itemsId[itemsId.length - 1]) {
					res.json({
						"code": 0,
						"data": {
							success: true,
							message: "删除成功"
						}
					})
				}
			})
		}
	}

	if (reqData.operation === "add") {
		const addItem = {
			...updateInfo,
			userId,
			goodId: updateInfo.id
		}
		delete addItem.id
		conn.query(query.insert("shop.shopping_cart", addItem), function(error,
			mysqlRes, fields) {
			if (error) throw error

			res.json({
				"code": 0,
				"data": {
					success: true,
					message: "添加成功"
				}
			})
		})
	}
})

router.post("/api/data/address", function(req, res, next) {

	let {
		updateInfo,
		operation,
	} = PostReqData(req)

	updateInfo.isDefault = updateInfo.isDefault ? 1 : 0

	const SaveData = () => {
		if (operation === "add") {
			conn.query(query.insert("shop.address", updateInfo), function(error, mysqlRes, fields) {
				if (error) throw error

				res.json({
					"code": 0,
					"data": {
						success: true,
						message: "添加成功"
					}
				})
			})
		}

		if (operation === "edit") {
			conn.query(query.update("shop.address", updateInfo), function(error, mysqlRes, fields) {
				if (error) throw error

				res.json({
					"code": 0,
					"data": {
						success: true,
						message: "修改成功"
					}
				})
			})
		}
	}

	if (updateInfo.isDefault) {
		const sql = "SELECT * FROM shop.address where userId = '" + updateInfo.userId + "' and isDefault = '" +
			updateInfo.isDefault + "'"
		conn.query(sql, function(error, mysqlRes, fields) {
			if (error) throw error

			if (mysqlRes.length > 0) {
				const ID = mysqlRes[0]["id"]

				conn.query(query.update("shop.address", {
					id: ID,
					isDefault: 0
				}), function(error, mysqlRes, fields) {
					if (error) throw error

					SaveData()
				})
			} else {
				SaveData()
			}
		})
	} else {
		SaveData()
	}


})

router.post("/api/data/register", function(req, res, next) {

	let { updateInfo } = PostReqData(req)

	if (updateInfo.phone) {
		const payload = { updateInfo }
		const secret = "niganmaaiyo"
		const token = jwt.sign(payload, secret)
		updateInfo["token"] = token

		conn.query(query.insert("shop.account_info", updateInfo), function(error, mysqlRes, fields) {
			if (error) throw error

			res.json({
				"code": 0,
				"data": {
					success: true,
					message: "注册成功"
				}
			})
		})
	}

})

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" })
})

router.get("/api/data/payment", function(req, res, next) {
	const { orderInfo } = GetReqData(req)
	const {
		orderNumber,
		totalPrice
	} = orderInfo

	const formData = new AlipayFormData()
	formData.setMethod("get")
	formData.addField("bizContent", {
		outTradeNo: orderNumber, // 订单号
		productCode: "FAST_INSTANT_TRADE_PAY",
		totalAmount: totalPrice, // 金额
		subject: "商品", // 商品名称
	})
	// 支付成功或失败打开的页面
	formData.addField("returnUrl", "http://192.168.1.80:8080/#/pages/payment-success/payment-success")

	const result = alipaySdk.exec(
		"alipay.trade.page.pay", {}, { formData: formData },
	)
	result.then(data => {
		res.json({
			"code": 0,
			"data": {
				success: true,
				paymentUrl: data
			}
		})
	})
})

router.get("/api/data/cart", function(req, res, next) {
	const reqData = GetReqData(req)
	const { queryInfo } = reqData

	conn.query(query.query("shop.shopping_cart", queryInfo, true), function(error,
		mysqlRes, fields) {
		if (error) throw error

		res.json({
			"code": 0,
			"data": { shopList: mysqlRes }
		})
	})
})

router.get("/api/data/address", function(req, res, next) {
	const reqData = GetReqData(req)
	const { queryInfo } = reqData

	conn.query(query.query("shop.address", queryInfo, true), function(error,
		mysqlRes, fields) {
		if (error) throw error

		res.json({
			"code": 0,
			"data": { addressList: mysqlRes }
		})
	})
})

router.get("/api/data/login/other", function(req, res, next) {
	const reqData = GetReqData(req)
	const {
		queryInfo,
		loginInfo
	} = reqData

	conn.query(query.query("shop.account_info", queryInfo), function(error, mysqlRes, fields) {
		if (error) throw error

		if (mysqlRes.length > 0) {
			res.json({
				"code": 0,
				"data": { userInfo: mysqlRes[0] }
			})
		} else {
			conn.query(query.insert("shop.account_info", loginInfo), function(error2, mysqlRes2,
				fields2) {
				if (error2) throw error2

				conn.query(query.query("shop.account_info", queryInfo), function(error3,
					mysqlRes3, fields3) {
					if (error3) throw error3

					res.json({
						"code": 0,
						"data": { userInfo: mysqlRes3[0] }
					})
				})
			})
		}
	})
})

router.get("/api/data/code", function(req, res, next) {
	const reqData = GetReqData(req)

	// 短信应用 SDK AppID
	var appid = 1400187558 // SDK AppID 以1400开头
	// 短信应用 SDK AppKey
	var appkey = "dc9dc3391896235ddc2325685047edc7"
	// 需要发送短信的手机号码
	var phoneNumbers = [reqData.updateInfo.phone]
	// 短信模板 ID，需要在短信控制台中申请
	var templateId = 298000 // NOTE: 这里的模板ID`7839`只是示例，真实的模板 ID 需要在短信控制台中申请
	// 签名
	var smsSign = "三人行" // NOTE: 签名参数使用的是`签名内容`，而不是`签名ID`。这里的签名"腾讯云"只是示例，真实的签名需要在短信控制台申请
	// 实例化 QcloudSms
	var qcloudsms = QcloudSms(appid, appkey)
	// 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
	function callback(err, res2, resData) {
		if (err) {
			console.log("err: ", err)
		} else {
			code = res2.req.body.params[0]
			res.json({
				data: {
					success: true,
					code
				}
			})
		}
	}
	var ssender = qcloudsms.SmsSingleSender()
	var params = [Math.floor(Math.random() * (9999 - 1000)) + 1000] //发送的验证码
	ssender.sendWithParam("86", phoneNumbers[0], templateId,
		params, smsSign, "", "", callback)
})

router.get("/api/data/register", function(req, res, next) {
	const reqData = GetReqData(req)
	const { queryInfo } = reqData

	conn.query(query.query("shop.account_info", queryInfo), function(error, mysqlRes, fields) {
		if (error) throw error

		if (mysqlRes.length === 0) {
			res.json({
				"code": 0,
				"data": {
					register: false,
					message: "手机号未注册"
				}
			})
		} else {
			res.json({
				"code": 0,
				"data": {
					register: true,
					message: "手机号已注册"
				}
			})
		}
	})
})

router.get("/api/data/login", function(req, res, next) {
	const reqData = GetReqData(req)
	const { queryInfo } = reqData

	conn.query(query.query("shop.account_info", queryInfo), function(error, mysqlRes, fields) {
		if (error) throw error

		if (mysqlRes.length === 0) {
			res.json({
				"code": 0,
				"data": {
					success: false,
					message: "用户名或手机号不存在"
				}
			})
		} else {
			if (mysqlRes[0].password !== reqData.userInfo.password) {
				res.json({
					"code": 0,
					"data": {
						success: false,
						message: "用户名密码错误"
					}
				})
			} else {
				res.json({
					"code": 0,
					"data": {
						success: true,
						message: "登录成功",
						userInfo: mysqlRes[0]
					}
				})
			}
		}
	})
})

router.get("/api/data/world/china", function(req, res, next) {
	const sql = "SELECT * FROM world.china limit 0,4000;"
	conn.query(sql, function(error, mysqlRes, fields) {
		if (error) throw error

		const cityList = methods.JsonToCascade(mysqlRes)

		res.json({
			"code": 0,
			"data": { cityList }
		})
	})
})

router.get("/api/data/goods", function(req, res, next) {
	const reqData = GetReqData(req)
	const id = reqData.queryInfo.id

	const sql = "SELECT * FROM shop.goods_search where id = " + id
	conn.query(sql, function(error, mysqlRes, fields) {
		if (error) throw error

		res.json({
			"code": 0,
			"data": mysqlRes
		})
	})
})

router.get("/api/data/class/0", function(req, res, next) {
	const allList = [{
			title: "家居家纺",
			list: [{
				id: 1,
				name: "毛巾/浴巾",
				imgUrl: "/static/img/list2.jpg"
			}, {
				id: 2,
				name: "枕头",
				imgUrl: "/static/img/list1.jpg"
			}]
		},
		{
			title: "上衣",
			list: [{
				id: 1,
				name: "T恤",
				imgUrl: "/static/img/list2.jpg"
			}, {
				id: 2,
				name: "衬衫",
				imgUrl: "/static/img/list1.jpg"
			}]
		}, {
			title: "鞋靴",
			list: [{
				id: 1,
				name: "运动鞋",
				imgUrl: "/static/img/list2.jpg"
			}, {
				id: 2,
				name: "皮鞋",
				imgUrl: "/static/img/list1.jpg"
			}]
		},
		{
			title: "食品酒饮",
			list: [{
				id: 1,
				name: "威士忌",
				imgUrl: "/static/img/list2.jpg"
			}, {
				id: 2,
				name: "奥里给",
				imgUrl: "/static/img/list1.jpg"
			}]
		}, {
			title: "家居家纺",
			list: [{
				id: 1,
				name: "毛巾/浴巾",
				imgUrl: "/static/img/list2.jpg"
			}, {
				id: 2,
				name: "枕头",
				imgUrl: "/static/img/list1.jpg"
			}]
		},
		{
			title: "上衣",
			list: [{
				id: 1,
				name: "T恤",
				imgUrl: "/static/img/list2.jpg"
			}, {
				id: 2,
				name: "衬衫",
				imgUrl: "/static/img/list1.jpg"
			}]
		}, {
			title: "鞋靴",
			list: [{
				id: 1,
				name: "运动鞋",
				imgUrl: "/static/img/list2.jpg"
			}, {
				id: 2,
				name: "皮鞋",
				imgUrl: "/static/img/list1.jpg"
			}]
		},
		{
			title: "食品酒饮",
			list: [{
				id: 1,
				name: "威士忌",
				imgUrl: "/static/img/list2.jpg"
			}, {
				id: 2,
				name: "奥里给",
				imgUrl: "/static/img/list1.jpg"
			}]
		}, {
			title: "家居家纺",
			list: [{
				id: 1,
				name: "毛巾/浴巾",
				imgUrl: "/static/img/list2.jpg"
			}, {
				id: 2,
				name: "枕头",
				imgUrl: "/static/img/list1.jpg"
			}]
		},
		{
			title: "上衣",
			list: [{
				id: 1,
				name: "T恤",
				imgUrl: "/static/img/list2.jpg"
			}, {
				id: 2,
				name: "衬衫",
				imgUrl: "/static/img/list1.jpg"
			}]
		}, {
			title: "鞋靴",
			list: [{
				id: 1,
				name: "运动鞋",
				imgUrl: "/static/img/list2.jpg"
			}, {
				id: 2,
				name: "皮鞋",
				imgUrl: "/static/img/list1.jpg"
			}]
		},
		{
			title: "食品酒饮",
			list: [{
				id: 1,
				name: "威士忌",
				imgUrl: "/static/img/list2.jpg"
			}, {
				id: 2,
				name: "奥里给",
				imgUrl: "/static/img/list1.jpg"
			}]
		},
	]

	let resData = {
		"code": "0",
		"data": allList
	}

	res.json(resData)

})

router.get("/api/data/index/search", function(req, res, next) {
	let reqData = {}
	for (let i in req.query) {
		if (methods.isJSON(req.query[i])) {
			reqData[i] = JSON.parse(req.query[i])
		} else {
			reqData[i] = req.query[i]
		}
	}

	const sql = "SELECT * FROM shop.goods_search where name like '%" + reqData.queryInfo.content + "%';"
	conn.query(sql, function(error, mysqlRes, fields) {
		if (error) throw error
		let resData = {
			code: "0",
			data: { productList: [] }
		}

		let productList = []
		for (let i of mysqlRes) {
			productList.push(i)
		}

		if (reqData.queryInfo.sort) {
			const attr = reqData.queryInfo.sort.name
			const flag = reqData.queryInfo.sort.method
			methods.SortArr(productList, attr, flag)
		}

		resData.data.productList = productList
		res.json(resData)
	})

})

for (let i = 0; i < 2; i++) {
	router.get("/api/data/index/" + i + "/more", function(req, res, next) {
		let productList = []
		if (i === 0) {
			productList = [{
				id: 5,
				imgUrl: "/static/img/commodity1.jpg",
				name: "华伦天奴Valentino 服装女士奢侈品钉珠格纹羊毛针织开衫 One Color XS",
				presentPrice: "￥41098",
				originalPrice: "￥46098",
				discount: "8.9"
			}, {
				id: 6,
				imgUrl: "/static/img/commodity2.jpg",
				name: "华伦天奴Valentino 服装女士奢侈品钉珠格纹羊毛针织开衫 One Color XS",
				presentPrice: "￥41097",
				originalPrice: "￥46097",
				discount: "8.9"
			}, {
				id: 7,
				imgUrl: "/static/img/commodity3.jpg",
				name: "华伦天奴Valentino 服装女士奢侈品钉珠格纹羊毛针织开衫 One Color XS",
				presentPrice: "￥41096",
				originalPrice: "￥46099",
				discount: "8.9"
			}, {
				id: 8,
				imgUrl: "/static/img/commodity4.jpg",
				name: "华伦天奴Valentino 服装女士奢侈品钉珠格纹羊毛针织开衫 One Color XS",
				presentPrice: "￥41095",
				originalPrice: "￥46099",
				discount: "8.9"
			}, {
				id: 9,
				imgUrl: "/static/img/commodity1.jpg",
				name: "华伦天奴Valentino 服装女士奢侈品钉珠格纹羊毛针织开衫 One Color XS",
				presentPrice: "￥41094",
				originalPrice: "￥46099",
				discount: "8.9"
			}, {
				id: 10,
				imgUrl: "/static/img/commodity2.jpg",
				name: "华伦天奴Valentino 服装女士奢侈品钉珠格纹羊毛针织开衫 One Color XS",
				presentPrice: "￥41093",
				originalPrice: "￥46099",
				discount: "8.9"
			}, {
				id: 11,
				imgUrl: "/static/img/commodity3.jpg",
				name: "华伦天奴Valentino 服装女士奢侈品钉珠格纹羊毛针织开衫 One Color XS",
				presentPrice: "￥41092",
				originalPrice: "￥46099",
				discount: "8.9"
			}, {
				id: 12,
				imgUrl: "/static/img/commodity4.jpg",
				name: "华伦天奴Valentino 服装女士奢侈品钉珠格纹羊毛针织开衫 One Color XS",
				presentPrice: "￥41091",
				originalPrice: "￥46099",
				discount: "8.9"
			}]
		}

		if (i === 1) {
			productList = [{
				bigImgUrl: "/static/img/shop.jpg",
				list: [{
						id: 1,
						imgUrl: "/static/img/shop1.jpg",
						name: "法唯莎 FAWWESA高端奢侈品牌男鞋高档老爹鞋男秋季新款撞色真皮休闲运动鞋内增高男鞋软底跑步鞋子男 黑白色单鞋【礼盒装】 40【礼盒装】",
						presentPrice: "￥198",
						originalPrice: "￥900",
						discount: "2.2"
					},
					{
						id: 2,
						imgUrl: "/static/img/shop2.jpg",
						name: "丹顿诗哲（DENTONSZHE）高档轻奢侈品牌跑步鞋男新款户外运动休闲鞋子男透气舒适潮流百搭刀锋男鞋 黑色 42",
						presentPrice: "￥298",
						originalPrice: "￥784",
						discount: "3.8"
					},
					{
						id: 3,
						imgUrl: "/static/img/shop3.jpg",
						name: "【HOT】阿迪达斯（Adidas）Yeezy Boost 350 椰子350满天星男女休闲跑步运动鞋 FY2903 41",
						presentPrice: "￥1288",
						originalPrice: "￥1574",
						discount: "8.2"
					},
					{
						id: 4,
						imgUrl: "/static/img/shop4.jpg",
						name: "CHIAY奢侈品牌高档男鞋透气休闲鞋男新款潮流男士运动鞋板鞋真皮厚底小白鞋子男 黑色 41",
						presentPrice: "￥41098",
						originalPrice: "￥460922229",
						discount: "8.9"
					},
				]
			}]
		}

		let reqData = {}
		for (let i in req.query) {
			if (methods.isJSON(req.query[i])) {
				reqData[i] = JSON.parse(req.query[i])
			} else {
				reqData[i] = req.query[i]
			}
		}

		const pageNum = reqData.queryInfo.pageNum
		const pageSize = reqData.queryInfo.pageSize

		if (pageNum * pageSize > productList.length) {
			return res.json({
				code: "0",
				data: "nomore"
			})
		}


		let listName = ""
		if (i === 0) {
			listName = "productList"
		}
		if (i === 1) {
			listName = "storeProductList"
		}

		let resData = {
			code: "0",
			data: { [listName]: [] }
		}
		for (let i = ((pageNum - 1) * pageSize); i < (pageNum * pageSize); i++) {
			resData.data[listName].push(productList[i])
		}

		res.json(resData)
	})
}

router.get("/api/data/index/1", function(req, res, next) {
	res.json({
		"code": 0,
		"data": {
			iconsList: [{
					id: 1,
					imgUrl: "/static/img/icons1.png",
					name: "跑步鞋"
				},
				{
					id: 2,
					imgUrl: "/static/img/icons2.png",
					name: "篮球鞋"
				},
				{
					id: 3,
					imgUrl: "/static/img/icons3.png",
					name: "运动休闲鞋"
				},
				{
					id: 4,
					imgUrl: "/static/img/icons4.png",
					name: "户外鞋"
				},
				{
					id: 5,
					imgUrl: "/static/img/icons5.png",
					name: "运动T恤"
				},
				{
					id: 6,
					imgUrl: "/static/img/icons6.png",
					name: "夹克/连帽衫"
				},
				{
					id: 7,
					imgUrl: "/static/img/icons7.png",
					name: "运动裤"
				},
				{
					id: 8,
					imgUrl: "/static/img/icons8.png",
					name: "冲锋衣裤"
				},
			],
			hotSaleList: [{
					id: 1,
					imgUrl: "/static/img/hot1.jpg",
					name: "特步【腾跃】跑鞋男鞋透气减震轻便运动鞋时尚百搭878319110001 黑/橘子酱色 44码",
					presentPrice: "￥198",
					originalPrice: "￥900",
					discount: "2.2"
				},
				{
					id: 2,
					imgUrl: "/static/img/hot2.jpg",
					name: "耐克NIKE 男子 跑步鞋 泡棉 缓震 透气 ZOOMX INVINCIBLE RUN FLYKNIT 2 运动鞋 DH5425-100白色40码",
					presentPrice: "￥698",
					originalPrice: "￥1190",
					discount: "5.9"
				},
				{
					id: 3,
					imgUrl: "/static/img/hot3.jpg",
					name: "ASICS亚瑟士 METARUN 男子透气减震稳定支撑长距离跑步鞋 Birch/Birch 标准 39.5/US6.5",
					presentPrice: "￥5198",
					originalPrice: "￥5900",
					discount: "8.8"
				},
			],
			storeProductList: [{
				bigImgUrl: "/static/img/shop.jpg",
				list: [{
						id: 1,
						imgUrl: "/static/img/shop1.jpg",
						name: "法唯莎 FAWWESA高端奢侈品牌男鞋高档老爹鞋男秋季新款撞色真皮休闲运动鞋内增高男鞋软底跑步鞋子男 黑白色单鞋【礼盒装】 40【礼盒装】",
						presentPrice: "￥198",
						originalPrice: "￥900",
						discount: "2.2"
					},
					{
						id: 2,
						imgUrl: "/static/img/shop2.jpg",
						name: "丹顿诗哲（DENTONSZHE）高档轻奢侈品牌跑步鞋男新款户外运动休闲鞋子男透气舒适潮流百搭刀锋男鞋 黑色 42",
						presentPrice: "￥298",
						originalPrice: "￥784",
						discount: "3.8"
					},
					{
						id: 3,
						imgUrl: "/static/img/shop3.jpg",
						name: "【HOT】阿迪达斯（Adidas）Yeezy Boost 350 椰子350满天星男女休闲跑步运动鞋 FY2903 41",
						presentPrice: "￥1288",
						originalPrice: "￥1574",
						discount: "8.2"
					},
					{
						id: 4,
						imgUrl: "/static/img/shop4.jpg",
						name: "CHIAY奢侈品牌高档男鞋透气休闲鞋男新款潮流男士运动鞋板鞋真皮厚底小白鞋子男 黑色 41",
						presentPrice: "￥41098",
						originalPrice: "￥460922229",
						discount: "8.9"
					},
				]
			}]
		}
	})
})

router.get("/api/data/index/0", function(req, res, next) {
	res.json({
		"code": 0,
		"data": {
			topBar: [{
					id: 1,
					name: "推荐"
				},
				{
					id: 2,
					name: "运动户外"
				},
				{
					id: 3,
					name: "服饰内衣"
				},
				{
					id: 4,
					name: "鞋靴箱包"
				},
				{
					id: 5,
					name: "美妆个护"
				},
				{
					id: 6,
					name: "家居数码"
				},
				{
					id: 7,
					name: "食品母婴"
				},
			],
			swiperList: [{
					id: 1,
					imgUrl: "/static/img/swiper1.jpg"
				},
				{
					id: 2,
					imgUrl: "/static/img/swiper2.jpg"
				},
				{
					id: 3,
					imgUrl: "/static/img/swiper3.jpg"
				},
			],
			recommendList: [{
				id: 1,
				bigImgUrl: "/static/img/Children.jpg",
				smallImgUrls: [{
						id: 1,
						imgUrl: "/static/img/Children1.jpg"
					},
					{
						id: 2,
						imgUrl: "/static/img/Children2.jpg"
					},
					{
						id: 3,
						imgUrl: "/static/img/Children3.jpg"
					},
				]
			}],
			productList: [{
					id: 1,
					imgUrl: "/static/img/commodity1.jpg",
					name: "拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F",
					presentPrice: "￥198",
					originalPrice: "￥900",
					discount: "2.2"
				},
				{
					id: 2,
					imgUrl: "/static/img/commodity2.jpg",
					name: "唐狮（TonLion）2022上衣ins卫衣外套女oversize开衫627320034012 米白 M",
					presentPrice: "￥298",
					originalPrice: "￥784",
					discount: "3.8"
				},
				{
					id: 3,
					imgUrl: "/static/img/commodity3.jpg",
					name: " GUCCI 古驰/女士小蜜蜂V领混纺开衫5271899X45 淡黄色 XXS",
					presentPrice: "￥12888",
					originalPrice: "￥15749",
					discount: "8.2"
				},
				{
					id: 4,
					imgUrl: "/static/img/commodity4.jpg",
					name: "华伦天奴Valentino 服装女士奢侈品钉珠格纹羊毛针织开衫 One Color XS",
					presentPrice: "￥41098",
					originalPrice: "￥46099",
					discount: "8.9"
				},
			]
		}
	})
})

module.exports = router
