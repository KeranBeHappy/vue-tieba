<template>
  <div>
    <div v-on:mouseenter="stopPlay()" v-on:mouseleave="play()"
         class="swiper-container gallery-top swiper-container-horizontal">
      <div class="swiper-wrapper">
        <div v-for="value in run" class="swiper-slide swiper-slide-next" style="width: 100%; margin-right: 10px;"
             v-bind:style="{backgroundImage: 'url(' + value.imgs + ')'}"></div>
      </div>
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white swiper-button-disabled"></div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 缩略图-->
    <div class="swiper-container gallery-thumbs swiper-container-horizontal">
      <div class="swiper-wrapper">
        <div v-for="value in run" class="swiper-slide swiper-slide-next" style="margin-right: 10px;"
             v-bind:style="{backgroundImage: 'url(' + value.imgs + ')'}"></div>
      </div>
    </div>
  </div>
</template>
<style>
  .gallery-top {
    height: 9.8rem;
    width: 100%;
  }

  .gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 1rem 0;
    background: rgba(250, 250, 250, 0.3);
  }

  .gallery-thumbs .swiper-slide {
    width: 30%;
    height: 6rem;
    opacity: 0.3;
  }

  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }

  .swiper-slide {
    background-size: 100% 160%;
    -webkit-background-size: 100% 160%;
  }
</style>
<script>
  import Swiper from '../../static/js/swiper-3.4.2.min'

  let galleryTop
  let galleryThumbs
  export default {
    name: 'main',
    data() {
      return {
        run: [
          {
            'imgs': '../../static/img/tb_run1.jpg'
          }, {
            'imgs': '../../static/img/tb_run2.jpg'
          }, {
            'imgs': '../../static/img/tb_run3.jpg'
          }, {
            'imgs': '../../static/img/tb_run4.jpg'
          }
        ],
      }
    },

    mounted() {
      this.lunbo()
    },
    methods: {
      lunbo() {
        galleryTop = new Swiper('.gallery-top', {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          // 如果需要分页器
          pagination: '.swiper-pagination',
          spaceBetween: 10,
          grabCursor: true,
          initialSlide: 1,
          autoplayDisableOnInteraction: false
        })
        galleryThumbs = new Swiper('.gallery-thumbs', {
          spaceBetween: 10,
          autoplay: 2000,
          initialSlide: 1,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true,
          autoplayDisableOnInteraction: false,
          grabCursor: true
        })
        galleryTop.params.control = galleryThumbs
        galleryThumbs.params.control = galleryTop
      },
      stopPlay() {
        galleryTop.stopAutoplay()
        galleryThumbs.stopAutoplay()
      },
      play() {
        galleryTop.startAutoplay()
        galleryThumbs.startAutoplay()
      }
    }
  }

</script>
