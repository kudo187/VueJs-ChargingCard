<template>
<div class="manageprofile">
    <Header/>
    <div class="container" id="containerContent">
        <section class="HomeContent innerFloat">
            <div class="MainContent row">
                <div class="SideBarLeft col-md-3">
                    <div id="cssmenu">
                        <ul class="bgColor">
                            <li class="tttk">
                                <router-link to="/manage-profile">
                                    <i class="spriteAccountInfo info ib"></i>
                                    <span style="border-color: rgba(255, 255, 255, 0.34902);">Thông tin tài khoản</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/manage-profile/transfers">
                                    <i class="spriteAccountInfo transfer ib"></i>
                                    <span style="border-color: rgba(255, 255, 255, 0.34902);">Chuyển GGold</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/manage-profile/transaction-history">
                                    <i class="spriteAccountInfo transfer ib"></i>
                                    <span style="border-color: rgba(255, 255, 255, 0.34902);">Lịch sử giao dịch</span>
                                </router-link>
                            </li>
                            <li class="has-sub ttmk">
                                <a>
                <i class="spriteAccountInfo security ib"></i>
                <span style="border-color: rgba(255, 255, 255, 0.34902);">Bảo mật tài khoản</span>
                <span class="holder" style="border-color: rgba(255, 255, 255, 0.34902);"></span>
              </a>
                                <ul>
                                    <!-- <li >
                  <a href="/cau-hinh-mk/">Cấu hình mật khẩu</a>
                </li> -->
                                    <li>
                                        <router-link to="/manage-profile/change-password">Đổi mật khẩu đăng nhập</router-link>
                                    </li>
                                    <!-- <li>
                  <router-link to="/doi-mk-giao-dich/">Đổi mật khẩu giao dịch</a>
                </li> -->
                                    <li>
                                        <router-link to="/cau-hinh-thong-bao-so-du/">Thông báo số dư</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!-- end cssmenu -->

                    <div class="support-left">
                        <p>Chăm sóc khách hàng</p>
                        <p class="mobile" style="font-size:18px;text-transform: lowercase;">0965288463 - Kudo</p>
                    </div>
                </div>
                <!-- end SideBarLeft -->
                <div class="blockContent col-md-9">
                    <router-view />
                </div>
                <!-- endn BlockContent -->
            </div>
        </section>
    </div>
    <!-- end container -->
    <Footer/>
</div>

</template>

<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
export default {
  name: "ManageProfile",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
