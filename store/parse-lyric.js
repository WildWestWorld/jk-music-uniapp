import {playerStore} from "../store/index"
// 正则(regular)表达式(expression): 字符串匹配利器
// [00:58.65]
//使用正则表达式匹配歌词前面的时间
// \d 匹配数字 \d{2} 匹配两位
// \[ \用于转义，说明你这个[使用来搜索的  \. 也是用于转义
// .原来的意思是匹配除了换行符以外的任意单个字符
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export function parseLyric(lyricString) {
    // let lyricStrings = lyricString.split("\n")
    let lyricStrings = lyricString.split('\r\n');

    if (lyricStrings.length <= 2) {
        lyricStrings = lyricString.split('\n');
    }

    const lyricInfos = [];

    for (const lineString of lyricStrings) {
        // [00:58.65]他们说 要缝好你的伤 没有人爱小丑
        //正则表达式匹配字符就用exec
        const timeResult = timeRegExp.exec(lineString); //如果没有歌词就跳过，继续执行函数

        if (!timeResult) continue; // 1.获取歌词时间

        const minute = timeResult[1] * 60 * 1000;
        const second = timeResult[2] * 1000;
        const millsecondTime = timeResult[3];
        const millsecond = millsecondTime.length === 2 ? millsecondTime * 10 : millsecondTime * 1;
        const time = minute + second + millsecond; // 2.获取歌词文本

        const text = lineString.replace(timeRegExp, '');
		if(text.length !== 0 && text){
			lyricInfos.push([time, text]);
		}
      
    }
	
	const lyric = [];
	//查找中文歌词 原理：翻译的歌词时间不会为0，因为没有为0的时间戳。原本语言的歌词有时间为0的时间戳
	//原理2: 如果有比第一个时间戳还小的时间戳 说明是双语歌词，因为只有双语歌词才会把0放到下面去
	//时间为0的item的索引
	let zeroTimeIndex
	//是否是双语歌词
	let isDoubleLanguage
	//第一个time的时间
	let FirstItemTime
	// lyricInfos.forEach((item,index)=>{
		
	// 	if(index === 0){
	// 		FirstItemTime = item[0]
			
	// 	}
	// 	if(FirstItemTime>item[0]){
	// 		isDoubleLanguage=true
	// 		zeroTimeIndex=index
	// 		console.log(index,zeroTimeIndex)
			
	// 		return 
	// 	}

	// })
	
	for(var i=0;i< lyricInfos.length;i++){
		
		if(i == 0){
			FirstItemTime = lyricInfos[0][0]	

		}
		
		if(FirstItemTime>=lyricInfos[i][0]){
			if(i>0){
				isDoubleLanguage=true
				zeroTimeIndex=i

				
				break 
			}

		}
	}
	
	console.log(isDoubleLanguage,zeroTimeIndex,FirstItemTime)
	//如果是双语格式的歌词
	if(isDoubleLanguage){	
	
		playerStore.setState('isDoubleLanguage',true)
		//push会把对象放在最后面
		
		//翻译成中文的歌词
		let chineseLyric =lyricInfos.slice(0,zeroTimeIndex)
		console.log(chineseLyric)

		
		//原本的语言的歌词 
		let otherLanLyric =lyricInfos.slice(zeroTimeIndex)


	

	
		//匹配 双语 时间相同的歌词 这步的作用是把两个歌词根据时间来实现合并，合并的歌词会放到里面 otherLanLyric里面
		for( var i =0; i< otherLanLyric.length ; i++){
			for(var j =0; j< chineseLyric.length ; j++){
				
				if(otherLanLyric[i][0] === chineseLyric[j][0]){
					otherLanLyric[i][2] = chineseLyric[j][1]					
				}
			}
		}
		
	
		lyric.push(otherLanLyric)
		
	}else{
		playerStore.setState('isDoubleLanguage',false)
		lyric.push(lyricInfos)
	}

    return lyric;
} 



//老版防抖

export function oldDebounce(fun, delay) {
    let run;
    return () => {
        let that = this;
        let args = arguments;
        clearTimeout(run);
        run = setTimeout(() => {
            fun.apply(that, args);
        }, delay);
    };
} //防抖

export function debounce(fun, delay) {
    let timer = null;

    const _debounce = (...args) => {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fun.apply(this, args);
        }, delay);
    };

    return _debounce;
} //节流

export function throttle(fun, interval) {
    let lastIntervalTime = 0;

    const _throttle = () => {
        //我们用剩余时间来判断是否要执行函数
        //new Data().getTime()返回1970.1.1至今的毫秒数
        const nowTime = new Date().getTime(); //(现在的时间-上次时间周期开始的时间)=当前时间在周期位置

        let nowIntervalTime = nowTime - lastIntervalTime; //时间周期-=当前时间在周期位置=周期剩下的时间

        const remainIntervalTime = interval - nowIntervalTime; //如果周期剩下的时间小于0我们就执行函数，也就是这个周期时间到了

        if (remainIntervalTime < 0) {
            fun(); //周期时间到了，就让当前的时间设置为周期开始的时间

            lastIntervalTime = nowTime;
        }
    };

    return _throttle;
}
