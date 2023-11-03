<template>
  <div class="footer-wrapper bg-dark h-100">
    <div class="footer-logo">
      <img src="../assets/img/Logo_0.png" />
    </div>
    <div class="info-tab">
      <h4>Sở Xây dựng Thành phố Cần Thơ</h4>
      <p>Địa chỉ: 25 Ngô Hữu Hạnh, Phường Tân An, Quận Ninh Kiều, TP Cần Thơ</p>
      <p>Hotline: 02923820335</p>
      <p>Email: soxd@cantho.gov.vn</p>
    </div>
    <div class="navigate-tab">
      <ul>
        <li>HOME</li>
        <li>WEB VERSION</li>
        <li>GUIDELINE</li>
        <li>FEATURE</li>
        <li>GALLERY</li>
        <li>CONTACT</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  background: url("../assets/img/footer-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  gap: 40px;
  .footer-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    height: 100%;
  }

  .info-tab {
    padding: 80px;
  }
  .navigate-tab {
    padding: 80px 10px;
    li {
      list-style-type: none;
      padding: 10px 0;
    }
  }
}

@media screen and (max-width: 1000px) {
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .footer-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: white;
    }
    .info-tab {
      padding: 20px;
    }
    .navigate-tab {
      padding: 0px;
      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
        li {
          list-style-type: none;
          padding: 2px;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
