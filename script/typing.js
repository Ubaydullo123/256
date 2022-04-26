class Typing {
  constructor(el, interval, delay = 0, loop = false) {
    this.el = document.querySelector(el);
    this.text = this.el.innerHTML.trim();
    this.el.innerHTML = "";
    this.interval = interval;
    this.loop = loop;

    setTimeout(() => {
      this.writeLetter(0);
    }, delay);
  }

  writeLetter(i) {
    this.el.innerHTML += this.text[i];
    if (this.el.innerHTML === this.text) {
      if (this.loop) setTimeout(() => this.rewrite(), 5000);
      return;
    }
    setTimeout(() => {
      this.writeLetter(++i);
    }, this.interval);
  }

  rewrite() {
    const text = this.el.innerHTML;
    this.el.innerHTML = text.slice(0, text.length - 1);
    if (this.el.innerHTML.length == 0) {
      setTimeout(() => this.writeLetter(0), 5000);
      return;
    }
    setTimeout(() => this.rewrite(), this.interval / 2);
  }
}

new Typing('.intro__title', 150, 0, true)