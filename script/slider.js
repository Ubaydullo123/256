class Slider {
  constructor({ id, direction, transition, autoPlay, autoPlayTime, }) {
    this.slider = document.getElementById(id)
    this.inner = this.slider.querySelector('.slider__inner')
    this.slides = [...this.inner.children]
    this.prev = this.slider.querySelector('.slider__prev')
    this.next = this.slider.querySelector('.slider__next  ')

    this.inner.style.height = this.getHeighest() + 'px'
    this.direction = direction.toUpperCase() === 'Y' ? 'Y' : 'X'

    this.moveSize = this.direction === 'X' ? this.inner.clientWidth : this.inner.clientHeight
    this.active = 0
    this.transition = transition
    this.autoPlay = autoPlay
    this.autoPlayTime = autoPlayTime
    this.slides.forEach((item, i) => {
      item.style.height = '100%'
      if (i !== this.active)
        item.style.transform = `translate${this.direction}(${this.moveSize}px)`
      if (i === this.slides.length - 1) {
        item.style.transform = `translate${this.direction}(${-this.moveSize}px)`
      }
    })

    // this.prev.onclick = () => this.move(this.prev)
    // this.next.onclick = () => this.move(this.next)

    if (this.autoPlay) {
      this.setUpInterval()

      this.slider.onmouseover = () => clearInterval(this.intervalId)
      this.slider.onmouseout = () => this.setUpInterval()
    }
  }

  setUpInterval(){
    this.intervalId = setInterval(() => this.move(this.next), this.autoPlayTime)
  }

  move(btn) {
    // this.disableBtn()
    const moveSide = btn === this.next ? this.moveSize : -this.moveSize

    this.slides.forEach((item, i) => {
      item.style.transition = `0ms`
      if (i !== this.active) {
        item.style.transform = `translate${this.direction}(${this.moveSize}px)`
      }
    })

    this.slides[this.active].style.transition = `${this.transition}ms`
    this.slides[this.active].style.transform = `translate${this.direction}(${-this.moveSize}px)`

    this.setActive(btn)

    this.slides[this.active].style.transition = `${this.transition}ms`
    this.slides[this.active].style.transform = `translate${this.direction}(0px)`
  }

  // disableBtn() {
  //   // this.prev.disabled = true
  //   // this.next.disabled = true
  //   setTimeout(() => {
  //     this.prev.disabled = false
  //     this.next.disabled = false
  //   }, this.transition)
  // }

  setActive(btn) {
    if (btn === this.next) {
      this.active++
      if (this.active >= this.slides.length) this.active = 0
    } else {
      this.active--
      if (this.active < 0) this.active = this.slides.length - 1
    }
  }

  getHeighest() {
    const sizes = this.slides.map(item => item.clientHeight)
    return Math.max(...sizes)
  }

}

const slider1 = new Slider({
  id: 'slider1',
  direction: 'X',
  transition: 500,
  autoPlay: true,
  autoPlayTime: 3000,
  btnDisabled: true,
})    