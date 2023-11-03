<template>
  <div class="content-section-wrapper">
    <!-- DISCOVER THE SCIENCE OF PLANT MANAGEMENT -->
    <div
      class="section-1-wrapper"
      ref="first-animation-target"
      :class="{ 'active-animation': isTriggerAnimation.firstAnimationTarget }"
    >
      <div class="container d-flex justify-content-center">
        <div class="text-center">
          <h4 class="text-uppercase custom-text-title">
            {{ $tc("banner-section.banner_4") }}
          </h4>
          <p class="custom-text-content">
            {{ $tc("banner-section.banner_5") }}
          </p>
        </div>
      </div>
    </div>
    <!-- IMAGE GALLERY -->
    <div class="section-2-wrapper" ref="seccond-animation-target">
      <div class="grid-container">
        <div
          class="content-top custom-text-content"
          :class="{
            'active-animation': isTriggerAnimation.seccondAnimationTarget,
          }"
        >
          <h3 class="text-uppercase custom-text-title">
            {{ $tc("content-section.content_1") }}
          </h3>
          <p>{{ $tc("content-section.content_2") }}</p>
          <div>
            <span class="custom-discover-btn">{{
              $tc("banner-section.banner_3")
            }}</span>
          </div>
        </div>
        <div class="image-top">
          <img src="../assets//img/1stclushterbanner2.png" />
          <div
            class="img-wrapper"
            :class="{
              'active-img-animation': isTriggerAnimation.seccondAnimationTarget,
            }"
          ></div>
        </div>

        <div class="item-right">
          <img src="../assets/img/1stclushterbanner1.png" />
          <div
            class="img-wrapper"
            :class="{
              'active-img-animation': isTriggerAnimation.seccondAnimationTarget,
            }"
          ></div>
        </div>
        <div class="item-bottom">
          <img src="../assets/img/mainbanner.png" />
          <div
            class="img-wrapper"
            :class="{
              'active-img-animation': isTriggerAnimation.seccondAnimationTarget,
            }"
          ></div>
        </div>
      </div>
    </div>

    <div class="parallax">
      <div
        class="text-uppercase custom-container d-flex justify-content-center align-items-center h-100"
      >
        {{ $tc("content-section.content_3") }}
      </div>
    </div>
    <!-- HIGHLIGHT FEATURES -->
    <div class="custom-container section-wrapper d-flex justify-content-center">
      <div class="text-center">
        <h4 class="text-uppercase custom-text-title">
          {{ $tc("content-section.content_4") }}
        </h4>
        <p class="custom-text-content">
          {{ $tc("content-section.content_5") }}
        </p>
      </div>
    </div>
    <!-- CAROUSEL -->
    <div class="custom-container">
      <div v-for="(item, index) in carouselItem" :key="index">
        <div
          class="carousel-wrapper"
          :class="{ 'carousel-wrapper-active': currentSlideIdx === index }"
        >
          <div class="carousel-left">
            <img :src="item.imgs.vertical_img" :alt="item.imgs.alt" />
            <div class="carousel-hider"></div>
          </div>
          <div class="carousel-top">
            <div class="navigate-btns">
              <svg
                @click="transitionSlide('prev')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 12L4 12M4 12L10 18M4 12L10 6"
                  stroke="#006633"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                @click="transitionSlide('next')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="#006633"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="carousel-content">
              <div class="custom-text-title">
                {{ $tc(`content-carousel.${item.title}`) }}
              </div>
              <div class="custom-text-content">
                {{ $tc(`content-carousel.${item.content}`) }}
              </div>
              <div class="carousel-hider"></div>
            </div>
            <!-- <div class="carousel-wrapper"></div> -->
          </div>
          <div class="carousel-bottom">
            <img :src="item.imgs.horizon_img" :alt="item.imgs.alt" />
            <div class="carousel-hider"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- ĐỒNG HÀNH CÙNG CHÚNG TÔI -->
    <div class="custom-container section-wrapper d-flex justify-content-center">
      <div class="text-center">
        <h4 class="text-uppercase custom-text-title">
          ĐỒNG HÀNH CÙNG CHÚNG TÔI
        </h4>
        <p class="custom-text-content">
          Những đơn vị đã tin cậy và cùng đồng hành với chúng tôi trong quá
          trình chuyển đổi số
        </p>
      </div>
    </div>
    <!-- LOGOS -->
    <div class="custom-container d-flex flex-column">
      <div class="row text-center">
        <div
          class="col-lg-3 col-md-6 my-5"
          v-for="(logo, index) in logoList"
          :key="index"
        >
          <img :src="logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlideIdx: 0,
      isTriggerAnimation: {
        firstAnimationTarget: true,
        seccondAnimationTarget: true,
      },
      carouselItem: [
        {
          title: "carousel_1_header",
          content: "carousel_1_body",
          imgs: {
            vertical_img: require("../assets/img/carousel/cluster1-v.png"),
            horizon_img: require("../assets/img/carousel/cluster1-h.png"),
            alt: "slide1",
          },
        },
        {
          title: "carousel_2_header",
          content: "carousel_2_body",
          imgs: {
            vertical_img: require("../assets/img/carousel/cluster2-v.png"),
            horizon_img: require("../assets/img/carousel/cluster2-h.png"),
            alt: "slide2",
          },
        },
        {
          title: "carousel_3_header",
          content: "carousel_3_body",
          imgs: {
            vertical_img: require("../assets/img/carousel/cluster3-v.png"),
            horizon_img: require("../assets/img/carousel/cluster3-h.png"),
            alt: "slide3",
          },
        },
      ],

      logoList: [
        require("../assets/img/Logo_0.png"),
        require("../assets/img/Logo_1.png"),
        require("../assets/img/Logo_2.png"),
        require("../assets/img/Logo_3.png"),
        require("../assets/img/Logo_3.png"),
        require("../assets/img/Logo_2.png"),
        require("../assets/img/Logo_1.png"),
        require("../assets/img/Logo_0.png"),
      ],
    };
  },
  methods: {
    // handle the carousel navigate buttons behavior and exceptions, type params {next, prev}
    transitionSlide(type) {
      const sizeOfCarousel = this.carouselItem.length;
      if (type === "next" && this.currentSlideIdx === sizeOfCarousel - 1) {
        this.currentSlideIdx = 0;
      } else if (type === "next") {
        this.currentSlideIdx++;
      }

      if (type === "prev" && this.currentSlideIdx === 0) {
        this.currentSlideIdx = sizeOfCarousel - 1;
      } else if (type === "prev") {
        this.currentSlideIdx--;
      }
    },
  },

  created() {
    setInterval(() => {
      this.transitionSlide("next");
    }, 4000);
  },

  mounted() {
    const options = {
      root: null,
      threshold: 0.01,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const currentY = entry.boundingClientRect.y;
        const isIntersecting = entry.isIntersecting;

        if (currentY > 0 && isIntersecting) {
          entry.target.className == "section-1-wrapper"
            ? (this.isTriggerAnimation.firstAnimationTarget = true)
            : (this.isTriggerAnimation.seccondAnimationTarget = true);
        } else if (currentY > 0) {
          this.isTriggerAnimation.firstAnimationTarget = false;
          this.isTriggerAnimation.seccondAnimationTarget = false;
        }
      });
    }, options);

    observer.observe(this.$refs["first-animation-target"]);
    observer.observe(this.$refs["seccond-animation-target"]);
  },
};
</script>

<style lang="scss" scoped>
.section-wrapper {
  position: relative;
  padding: 80px 196px;
}
.section-1-wrapper {
  padding: 80px 196px;
  transition: 1s;
  opacity: 0;
  transform: translateY(200px);
}

.active-animation {
  opacity: 1;
  transform: translateY(0);
}

.section-2-wrapper {
  .grid-container {
    position: relative;
    display: grid;
    padding: 120px;
    grid-gap: 24px;
    grid-template-columns: repeat(12, 1fr);
    background: #f0f8f4;
    .content-top {
      opacity: 0;
      transition: 1s;
      transform: translateY(200px);
      grid-column: 2 / 6;
      grid-row: 1;
      text-align: right;
      span {
        border: 1px solid var(--Hover, #063);
      }
    }
    .active-animation {
      opacity: 1;
      transform: translateY(0);
    }
    .image-top {
      position: relative;
      grid-column: 6 / 9;
      grid-row: 1;
      align-self: stretch;
      img {
        width: 100%;
        height: 100%;
      }
      .img-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        transition: 1s;
        background: #f0f8f4;
      }
      .active-img-animation {
        width: 0%;
      }
    }

    .item-bottom {
      position: relative;
      grid-column: 2 / 9;
      grid-row: 2;
      img {
        width: 100%;
        height: 100%;
      }
      .img-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        transition: 1s;
        background: #f0f8f4;
      }
      .active-img-animation {
        width: 0%;
      }
    }
    .item-right {
      position: relative;
      grid-column: 9 / 12;
      grid-row: 1 / 3;
      justify-self: start;
      align-self: center;
      img {
        width: 100%;
        height: 100%;
      }

      .img-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        transition: 1s;
        background: #f0f8f4;
      }
      .active-img-animation {
        width: 0%;
      }
    }
  }
}

.parallax {
  height: 600px;
  background: rgba(0, 0, 0, 0) url("../assets/img/mainbanner.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  div {
    font-family: Maven Pro;
    font-size: 28px;
    font-weight: bold;
    color: var(--neutral-10, #fafafa);
    text-align: center;
  }
}

.carousel-wrapper {
  display: grid;
  display: none;
  grid-template-columns: auto auto;
  gap: 24px;
  padding: 0 80px;
  position: relative;

  .carousel-top {
    .navigate-btns {
      display: flex;
      justify-content: flex-end;

      svg {
        width: 40px;
        height: 40px;
        padding: 8px;
        border-radius: 48px;
        border: 1px solid #063;
        margin: 0 8px;
      }

      svg:hover {
        background: #063;
        stroke: #ffff;
      }
    }

    .carousel-content {
      position: relative;
      .carousel-hider {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        height: 100%;
        transition: 1s;
        background: #fafafa;
        animation: carousel 1s;
      }
    }
  }

  .carousel-left {
    position: relative;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    img {
      width: 100%;
      height: 100%;
    }

    .carousel-hider {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      height: 100%;
      transition: 1s;
      background: #fafafa;
      animation: carousel 1s;
    }
  }

  .carousel-bottom {
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
    .carousel-hider {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      height: 100%;
      transition: 1s;
      background: #fafafa;
      animation: carousel 1s;
    }
  }
}
.carousel-wrapper-active {
  display: grid;
}

@keyframes carousel {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

@media screen and (max-width: 1000px) {
  /* .content-section-wrapper {
    transform: translateX(-140px);
    transition: 1s;
  } */

  .section-wrapper {
    padding: 40px 100px;
  }

  .section-2-wrapper {
    .grid-container {
      display: grid;
      grid-gap: 24px;
      grid-template-columns: repeat(4, 1fr);
      background: #f0f8f4;

      .content-top {
        grid-column: 1 / 5;
        text-align: center;
        span {
          border: 1px solid var(--Hover, #063);
        }
      }
      .image-top {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        align-self: stretch;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .item-bottom {
        grid-column: 1 / 5;
        grid-row: 3 / 4;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .item-right {
        grid-column: 3 / 5;
        grid-row: 2 / 3;
        justify-self: start;
        align-self: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .carousel-wrapper {
    display: grid;
    display: none;
    grid-template-columns: auto;
    gap: 24px;
    padding: 50px 100px;

    .carousel-top {
      .navigate-btns {
        display: none;
      }
    }

    .carousel-left {
      grid-row: 1 / 3;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .carousel-bottom {
      display: none;
    }
  }
}
.carousel-wrapper-active {
  display: grid;
}
</style>
