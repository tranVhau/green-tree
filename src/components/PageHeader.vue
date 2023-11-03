<template>
  <div class="header-section-wrapper">
    <nav class="header">
      <div class="nav_tab_1">
        <span>{{ $tc("header-section.home") }}</span>
        <span>{{ $tc("header-section.web-version") }}</span>
        <span>{{ $tc("header-section.web-version") }}</span>
      </div>
      <div class="logo">
        <img src="../assets/img/Logo.png" />
      </div>
      <div class="nav_tab_2">
        <span>{{ $tc("header-section.guideline") }}</span>
        <span>{{ $tc("header-section.gallery") }}</span>
        <span>{{ $tc("header-section.contact") }}</span>
        <span class="text-uppercase" @click="isOpenOptions = true">{{
          this.currentLang
        }}</span>
        <div v-if="isOpenOptions" class="drop-down">
          <div @click="languageChanger('en')">EN</div>
          <div @click="languageChanger('vi')">VI</div>
        </div>
      </div>
      <div
        class="burger-btn"
        :class="{ 'burger-btn-active': isOpenVerticalMenu }"
        @click="passEventToggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="30"
          height="30"
        >
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </div>
      <div
        class="vertical-tab"
        :class="{ 'vertical-tab-active': isOpenVerticalMenu }"
      >
        <ul>
          <li>{{ $tc("header-section.home") }}</li>
          <li>{{ $tc("header-section.web-version") }}</li>
          <li>{{ $tc("header-section.web-version") }}</li>
          <li>{{ $tc("header-section.guideline") }}</li>
          <li>{{ $tc("header-section.gallery") }}</li>
          <li>{{ $tc("header-section.contact") }}</li>
          <li>EN</li>
        </ul>
      </div>
    </nav>
    <div class="main-banner-wrapper">
      <div
        class="container d-flex justify-content-center align-items-center h-100"
      >
        <div class="banner-text">
          <h1 class="text-uppercase">{{ $tc("banner-section.banner_1") }}</h1>
          <h4>
            {{ $tc("banner-section.banner_2") }}
          </h4>
          <div class="mt-4">
            <span class="custom-discover-btn">{{
              $tc("banner-section.banner_3")
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isOpenVerticalMenu"],

  data() {
    return {
      isOpenOptions: false,
      currentLang: "en",
    };
  },

  methods: {
    languageChanger(lang) {
      if (lang == "vi") {
        this.$root._i18n.locale = "vi";
        localStorage.setItem("lang", "vi");
        this.isOpenOptions = false;
        this.currentLang = "vi";
      } else {
        localStorage.setItem("lang", "en");
        this.$root._i18n.locale = "en";
        this.isOpenOptions = false;
        this.currentLang = "en";
      }
      location.reload();
    },

    passEventToggleMenu() {
      this.$emit("ToggleMenu");
    },
  },

  created() {
    const currLang = localStorage.getItem("lang");
    currLang == "en" ? (this.currentLang = "en") : (this.currentLang = "vi");
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 64px;
  width: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  color: var(--Brand, #029834);
  top: 0;
  left: 0;
  z-index: 10;
  .logo {
    display: flex;
    align-items: center;
    margin: 0 20px;
    img {
      width: 56px;
      height: 56px;
      padding: 0.547px;
    }
  }
  .nav_tab_1,
  .nav_tab_2 {
    position: relative;
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    font-family: Inter;
    line-height: 150%;
    text-transform: uppercase;
    .drop-down {
      background: white;
      margin-top: 6px;
      padding: 16px 70px;
      position: absolute;
      right: 0;
      border-radius: 4px;
      box-shadow: rgb(179, 179, 179) 0px 10px 15px -3px;

      div {
        padding: 8px 0;
        cursor: pointer;
      }
    }
    span {
      padding: 8px 12px;
      cursor: pointer;
    }
  }
  .burger-btn {
    display: none;
  }

  .vertical-tab {
    display: none;
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    font-family: Inter;
    line-height: 150%;
    text-transform: uppercase;
    padding: 80px 10px;
    transition: all 1s;
    display: none;
    ul {
      list-style-type: none;
      li {
        padding: 16px 0;
        cursor: pointer;
      }

      /* li:hover {
        border-bottom: 1px solid #029834;
      } */
    }
  }
}

.main-banner-wrapper {
  height: 100vh;
  color: var(--neutral-10, #fafafa);
  background-image: url("../assets/img/mainbanner.png");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  .banner-text {
    font-style: normal;
    line-height: 150%;
    h1 {
      font-family: Maven Pro;
      font-size: 56px;
      font-weight: 600;
    }
    h4 {
      font-family: Inter;
      font-size: 20px;
      font-weight: 400;
      font-weight: 400;
    }
  }
}

@media screen and (max-width: 1000px) {
  .header-section-wrapper {
    .header {
      display: flex;
      justify-content: space-between;
      position: fixed;
      top: 0;
      .nav_tab_1,
      .nav_tab_2 {
        display: none;
      }

      .burger-btn {
        display: block;
        padding: 40px;
      }
      .burger-btn-active {
        transform: translateX(-270px);
      }
    }

    .vertical-tab-active {
      position: fixed;
      display: block;
      top: 0;
      bottom: 0;
      right: 0;
      height: 100vh !important;
      width: 260px;
      z-index: 1000;
      background: rgb(240, 248, 244);
      border-top: none;
      text-align: left;
    }
  }
}
</style>
