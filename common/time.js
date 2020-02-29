//封装时间格式的js文件
const gettime={
	//计算当前的日期星座
	getHroscope(data){
		let c=['魔蝎','水瓶','双鱼','金牛','双子','巨蟹','狮子','处女','天秤',
		'天蝎','射手','白羊'];
		let date=new Date(data);
		let month=date.getMonth()+1;
		let day=date.getDate();
		let statrMonth=month-(day-14<'865778999988'.charAt(month));
		return c[statrMonth]+'座';
	},
	//计算年龄指定时间与当前的时间差
	sumAge(data){
		let dateBegin=new Date(data.replace(/-/g,'/'));
		let dateEnd=new Date();//获取当前的时间
		let dateDiff=dateEnd.getTime()-dateBegin.getTime();//时间差的毫秒数
		let dayDiff=Math.floor(dateDiff/(24*3600*1000));//计算出相差的天数3600=24*60*60
		let leave1=dateDiff%(24*3600*1000);//计算天数后的剩余毫秒数
		let hours=Math.floor(leave1/(3600*1000));//计算出小时数
		let leave2=leave1%(3600*1000);//计算出小时后的毫秒数
		let minutes=Math.floor(leave2/(60*1000));//计算相差的分钟数
		let leave3=leave2%(60*1000);//计算相差的分钟数后的毫秒数
		let seconds=Math.round(leave3/1000);//计算秒
		return dayDiff+'天'+hours+'小时'+minutes+'分钟'+seconds+'秒';
	},
	
	
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
