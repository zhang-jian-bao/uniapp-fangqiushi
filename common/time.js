//封装时间格式的js文件
const gettime={
	//获取聊天的时间(相差300s内的信息不会显示时间)
	getChatTime(v1,v2){
		//PHP写的时间戳是10位,服务器的是13位
		v1=v1.toString().length<13?v1*1000:v1;
		v2=v2.toString().length<13?v2*1000:v2;
		if((parseInt(v1)-parseInt(v2)/1000)>300){
			return this.gettime(v1);
		}
	},
	gettime(shorttime){
		shorttime=shorttime.toString().length<13?shorttime*1000:shorttime;
		let nowDate=(new Date()).getTime();
		let cha=(nowDate-parseInt(shorttime))/1000;
		if(cha<43200){
			//当天
			return this.dateFormat(new Date(shorttime),
			"{A}{t}:{ii}");
		}else if(cha<518400){
			//隔天 显示日期+时间
			return this.dateFormat(new Date(shorttime),"{Mon}月{DD}日 {A} {t}:{ii}");
		}else{
			//隔年 显示完整日期+时间
			return this.dateFormat(new Date(shorttime),"{Y}-{MM}-{DD} {A} {t}:{ii}");
		}
	},
	parseNumber(num){
		return num<10?'0'+num:num;
	},
	dateFormat(date,formatStr){
		let dateObj={},
		rStr=/\{([^}]+)\}/,
		mons=['一','二','三','四','五','六','七','八','九','十','十一','十二'];
		dateObj['Y']=date.getFullYear();
		dateObj['M']=date.getMonth()+1;
		dateObj['MM']=this.parseNumber(dateObj['M']);
		dateObj['Mon']=mons[dateObj['M']-1];
		dateObj['D']=date.getDate();
		dateObj['DD']=this.parseNumber(dateObj['D']);
		dateObj['h']=date.getHours();
		dateObj['hh']=this.parseNumber(dateObj['h']);
		dateObj['t']=dateObj['h']>12?dateObj['h']-12:dateObj['h'];
		dateObj['tt']=this.parseNumber(dateObj['t']);
		dateObj['A']=dateObj['h']>12?'下午':'上午';
		dateObj['i']=date.getMinutes();
		dateObj['ii']=this.parseNumber(dateObj['i']);
		dateObj['s']=date.getSeconds();
		dateObj['ss']=this.parseNumber(dateObj['s']);
		while(rStr.test(formatStr)){
			formatStr=formatStr.replace(rStr,dateObj[RegExp.$1]);
		}
		return formatStr;
	}
}	
	export default{
		gettime
	}
