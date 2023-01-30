function Retate(opt) {
  this.opt = opt
  this.data = opt.data

  this.flag = true
  this.index = 0
  this.step = 360 / this.data.length

  this.el = document.querySelector(opt.el)

  console.log(this.el)
  this.createDom(this.el, opt.data)

  initEvent(this.el, this)
}

initEvent = function (target, t) {
  target.onmouseenter = function () {
    // t.nextStep()
  }
  target.onmouseleave = function () {
    t.flag = true
  }

  target.onclick = function (e) {
    if (e.target.nodeName == "LI") {
      console.log(e.target.getAttribute("data-i"))
      t.index = e.target.getAttribute("data-i")
      const style = `
      transform: rotateX(${t.index * t.step}deg) perspective(2000px);
      `
      console.log(style)

      t.el.style = style
    }
  }
}

Retate.prototype.createDom = function (target, data) {
  const li = []
  const step = 360 / this.data.length
  this.data.forEach((item, i) => {
    console.log(document)
    const dom = document.createElement("li")
    dom.innerHTML = item
    dom.setAttribute("data-i", i)
    dom.setAttribute("data-deg", step * i)
    dom.style = `transform: rotateX(${step * i}deg) translateZ(140px);`
    li.push(dom)
    this.el.append(dom)
  })
  console.log(li)
}

Retate.prototype.nextStep = function (i) {
  if (i) {
    this.index = i
  } else {
    this.index++
  }
  console.log(this.index)
}



周二（6号）早上8:45离开酒店，9点到达罗家基地，中午12点前往永旺负一楼用餐（佳味螺，生煎先生），下午14:20左右离开酒店去往罗家基地，18点前往永旺负一楼陈香桂用餐，晚上9点30左右下班回酒店
周三（7号）早上8:45离开酒店，9点到达罗家基地，中午12点永旺负一楼用餐（食其家）然后回到酒店，下午14:20左右离开酒店去往罗家基地，晚上10点左右下班回酒店
周四（8号）早上8:45离开酒店，9点到达罗家基地，中午12点左右回到酒店，下午14:20左右离开酒店去往罗家基地，18点前往永旺负一楼遇见小面用餐，晚上9点40左右下班回酒店