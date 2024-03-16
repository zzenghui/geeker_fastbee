// 判断元素是否在可视区域  第一次出现时显示动画
import { Directive, DirectiveBinding } from "vue";

const animate: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    //元素到浏览器顶部的距离
    let elementTop = el.offsetTop;
    //浏览器可视区域的高度
    let screenTop = window.innerHeight || document.documentElement.clientHeight;
    function viewAddAnimate() {
      let sc = document.documentElement.scrollTop;
      if (elementTop - sc < screenTop) {
        binding.value.split(" ").forEach((item: string) => {
          el.classList.add(item);
        });
        window.onscroll = null;
      }
    }
    viewAddAnimate();
    window.onscroll = function () {
      viewAddAnimate();
    };
    (el.parentNode as HTMLElement).onscroll = function () {};
  }
};

export default animate;
