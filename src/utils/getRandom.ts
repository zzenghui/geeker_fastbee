//------------------------------------------------获取随机图片start
export function getPicture(index:number) {
  let pictureList = [
    "https://iot.fastbee.cn/static/img/video.fb1e1b71.png",
    "https://iot.fastbee.cn/static/img/gateway.5a51e30f.png",
    "https://iot.fastbee.cn/static/img/product.66c3c4d5.png",
    "https://iot.fastbee.cn/prod-api/profile/iot/1/2023-0522-103624.png"
  ]
//   let randomNum = Math.floor(Math.random() * 3 + 1)
//   return pictureList[randomNum]
  return pictureList[index]
}
//------------------------------------------------获取随机图片end