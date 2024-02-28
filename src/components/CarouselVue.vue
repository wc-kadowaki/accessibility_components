<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
</script>

<template>
  <div class="carousel">
    <Swiper
      :slides-per-view="1"
      :space-between="50"
      :modules="[Navigation, Pagination, Scrollbar, A11y]"
      navigation
      :pagination="{ clickable: true }"
      :a11y="{
        containerMessage: 'スライドショー',
        containerRoleDescriptionMessage: 'カルーセル',
        prevSlideMessage: '前のスライドへ',
        nextSlideMessage: '次のスライドへ',
        firstSlideMessage: '最初のスライド',
        lastSlideMessage: '最後のスライド',
      }"
      role="group"
    >
      <SwiperSlide><div class="carousel__slide">Slide 1</div></SwiperSlide>
      <SwiperSlide><div class="carousel__slide">Slide 2</div></SwiperSlide>
      <SwiperSlide><div class="carousel__slide">Slide 3</div></SwiperSlide>
      <SwiperSlide><div class="carousel__slide">Slide 4</div></SwiperSlide>
      <SwiperSlide><div class="carousel__slide">Slide 5</div></SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  &__slide {
    padding: 30px;
  }
}
</style>
