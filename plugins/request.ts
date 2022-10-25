import { InitialConvertCase } from "./method";
import type { Ref } from "vue";

type Operation = "get" | "add" | "delete" | "edit" | "upload" | "download";

interface RenderList {
  name: string;
  renderList: Ref<Array<any>>;
}

interface Information {
  command: string;
  data: {
    operation: Operation;
    commander: string;
    queryInfo?: {
      pageNum: number;
      pageSize: number;
      content: string | number;
	  column?: string;
	  sort?: {
		name: string;
		method: "ascending" | "descending";
	  }
      index?: number;
    };
    updateInfo?: {
      index?: number;
      name?: string;
	  [propName: string]: any;
    };
	autoReq?: boolean
	[propName: string]: any;
  };
  uniReq: Function;
  renderInfo?: Array<RenderList>;
}

class UniReqs {
  method: "GET" | "POST";
  constructor(private _information: Information, public callback?: Function) {
    this.method = this._information.data.operation === "get" ? "GET" : "POST";
	if (this.method === "POST") {
		this.Request("POST")
	} else {
		// 第一步发起请求
		this.Request("GET");
	}

  }

  Request(way : "GET" | "POST") {
	const pendingData = way === "GET" ? this._information.data : JSON.stringify(this._information.data)
    this._information.uniReq({
      url:
        "http://192.168.1.80:3000/api/data/" +
        InitialConvertCase(this._information.command, "小写"),
      method: this.method,
			data:pendingData ,
      header: {
        "content-type": "application/x-www-form-urlencoded",
      },
	  sslVerify:false,
      success: ({ data }: any) => {
        // 待渲染列表赋值
        if (this._information.renderInfo) {
          for (const i of this._information.renderInfo) {
            i.renderList = data.data[i.name];
          }
        }

        // post请求之后马上发起get请求
        if (this.method === "POST") {
          if (this._information.data.autoReq) {
			  this.method = "GET";
			  return this.Request("GET");
		  }
        }

        // (最后一步)成功的回调
        if (this.callback) {
          this.callback(data.data);
        }
      },
      fail: (err: any) => {
        console.log(err);
      },
    });
  }
}

export { UniReqs };
