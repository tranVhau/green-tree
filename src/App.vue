<template>
  <div id="app">
    <div ref="top"></div>
    <div class="app-wrapper">
      <div class="">
        <PageHeader
          v-bind:isOpenVerticalMenu="isOpenVerticalMenu"
          @ToggleMenu="ToggleMenu"
        />
        <PageContent />
      </div>
      <div
        :class="{ 'right-padding-active  right-padding': isOpenVerticalMenu }"
      ></div>
    </div>
    <PageFooter />

    <button
      class="toTopBtn btn-toggle-round scroll-top js-scroll-top"
      type="button"
      title="Scroll to top"
      @click="backToTop"
      v-if="percentageOfPossition < 305"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-up"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width=""
        stroke="cuurentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="18" y1="11" x2="12" y2="5" />
        <line x1="6" y1="11" x2="12" y2="5" />
      </svg>

      <svg
        data-v-96e7cef4=""
        width="50"
        height="50"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="svgToTop"
      >
        <circle
          data-v-96e7cef4=""
          cx="24"
          cy="24"
          r="23"
          transform="rotate(-90 24 24)"
          stroke="#029834"
          stroke-width="2"
          :style="ringStyle"
        ></circle>
      </svg>
    </button>
  </div>
</template>

<script>
import PageContent from "./components/PageContent.vue";
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  name: "App",
  components: { PageHeader, PageContent, PageFooter },
  data() {
    return {
      isOpenVerticalMenu: false,
      percentageOfPossition: 310,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    backToTop() {
      this.$refs["top"].scrollIntoView({ behavior: "smooth" });
    },
    ToggleMenu() {
      this.isOpenVerticalMenu = !this.isOpenVerticalMenu;
    },

    caculatePercentagePos() {
      //current possition
      const currentPos = window.scrollY;
      //page height
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      const pageHeight = Math.max(
        htmlElement.clientHeight,
        htmlElement.scrollHeight,
        htmlElement.offsetHeight,
        bodyElement.scrollHeight,
        bodyElement.offsetHeight
      );

      return currentPos / pageHeight;
    },

    handleScroll() {
      this.percentageOfPossition =
        310 - Number((320 - 140) * this.caculatePercentagePos());
    },
  },

  computed: {
    ringStyle() {
      return {
        transition: "stroke-dashoffset 10ms linear 0s",
        strokeDasharray: "307.919, 307.919",
        strokeDashoffset: this.percentageOfPossition,
      };
    },
  },
};
</script>

<style>
#app {
  position: relative;
  overflow-x: hidden;
}

.right-padding {
  transition: padding 1s;
  background: #f0f8f4;
}

.right-padding-active {
  padding: 0 100px;
  /* display: block; */
}
.scroll-top {
  position: fixed;
  z-index: 50;
  padding: 0;
  right: 20px;
  bottom: 20px;
  height: 46px;
  width: 46px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.4s ease;
  border: none;
  color: #90ffb5;
  background-color: #9eedb8;
}

.scroll-top .icon-tabler-arrow-up {
  position: absolute;
  stroke-width: 2px;
  /* stroke: white; */
  stroke: white;
}

.app-wrapper {
  display: flex;
}

@media screen and (max-width: 1000px) {
  .right-padding {
    padding: 0 100px;
  }
}
</style>
