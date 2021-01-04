/*
[00:00.000] 作词 : 原田夏樹 / 鈴木まりこ
[00:00.235] 作曲 : 原田夏樹
[00:00.470]君の虜になってしまえばきっと
[00:04.940]この夏は充実するのもっと
[00:08.560]もう戻れなくたって忘れないで
* */

const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyricString){
  const lineStrings = lyricString.split('\n');
  const lyrics = [];
  for(let line of lineStrings){
    if(line){ // 歌词结尾还会有 \n 导致数组有空数据
      const result = parseExp.exec(line);
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
      const totalTime = time1 + time2 + time3;
      const content = line.replace(parseExp,'').trim();
      const lineObj = {
        time:totalTime,
        content
      }
      lyrics.push(lineObj);
    }
  }
  return lyrics;
}