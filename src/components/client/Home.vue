<template>
<div class="home">
    <Header />
    <div class="container" id="containerContent">
        <section class="HomeContent innerFloat">
            <div class="MainContent row">
                <div class="SideBarLeft col-md-3">
                    <div id="cssmenu">
                        <ul class="bgColor">
                            <li class="has-sub doanhThuBg">
                                <a href="#">
                <i class="sprite2 share ib"></i>
                <span>Cơ Hội Làm Giàu</span>
              </a>
                                <ul>
                                    <li>
                                        <router-link to="/">Chia sẻ doanh thu
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-sub theGameBg">
                                <a href="#">
                <i class="sprite2 g ib"></i>
                <span>Mua mã thẻ game</span>
              </a>
                                <ul>
                                    <li>
                                        <router-link to="/">
                                            <img src="../../assets/client/images/icon-gate.png"> &nbsp;Thẻ Gate</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/">
                                            <img src="../../assets/client/images/icon-zing.png"> &nbsp;Thẻ Zing</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/">
                                            <img src="../../assets/client/images/icon-vcoin.png"> &nbsp;Thẻ Vcoin</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/">
                                            <img src="../../assets/client/images/icon-oncash.png"> &nbsp;Thẻ OnGame</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/">
                                            <img src="../../assets/client/images/icon-garena.png"> &nbsp;Thẻ Garena</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-sub theDienThoaiBg">
                                <a href="#">
                    <i class="sprite2 share ib"></i>
                    <span>Mua mã thẻ điện thoại</span>
                  </a>
                                <ul>
                                    <li>
                                        <router-link to="/home/viettel-card">
                                            <img src="../../assets/client/images/Logo_Mobile/viettel.png"> &nbsp;Thẻ Viettel</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/home/mobi-card">
                                            <img src="../../assets/client/images/Logo_Mobile/mobifone.png"> &nbsp;Thẻ Mobifone</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/home/vina-card">
                                            <img src="../../assets/client/images/Logo_Mobile/vinaphone.png"> &nbsp;Thẻ Vinaphone</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/home/vietnam-card">
                                            <img src="../../assets/client/images/Logo_Mobile/vietnam.png"> &nbsp;Thẻ Vietnamobile</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/home/gmobile-card">
                                            <img src="../../assets/client/images/Logo_Mobile/gmobile.png"> &nbsp;Thẻ Gmobile</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="buy-card-types">
                                <router-link to="/">
                                    <i class="card-icon"></i>
                                    <span style="border-color: rgba(255, 255, 255, 0.34902);">Mua nhiều loại thẻ</span>
                                </router-link>
                            </li>
                            <li class="has-sub tienDienThoaiBg">
                                <a>
                <i class="sprite2 phone ib"></i>
                <span>Nạp tiền điện thoại</span>
              </a>
                                <ul>
                                    <li>
                                        <router-link to="/">
                                            <img src="../../assets/client/images/icon-other.png"> &nbsp;Trả trước</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/">
                                            <img src="../../assets/client/images/icon-other.png"> &nbsp;Trả trước nhiều số</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-sub tienGameBg">
                                <a >
                <i class="sprite2 game ib"></i>
                <span>Nạp tiền game</span>
              </a>
                                <ul>
                                    <li>
                                        <router-link to="/">
                                            <img src="../../assets/client/images/Logo_Mobile/icon-gate.jpg"> &nbsp;Bạc Gate</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/">
                                            <img src="../../assets/client/images/Logo_Mobile/icon-zing.jpg"> &nbsp;Zingxu</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/">
                                            <img src="../../assets/client/images/Logo_Mobile/icon-ongate.jpg"> &nbsp;OnGate</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/">
                                            <img src="../../assets/client/images/Logo_Mobile/icon-ongame.jpg"> &nbsp;OnGame</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-sub pay-bill">
                                <router-link to="/">
                                    <i class="pay-icon"></i>
                                    <span style="border-color: rgba(255, 255, 255, 0.34902);">thanh toán hóa đơn</span>
                                </router-link>
                                <ul>
                                    <li>
                                        <router-link to="/">
                                            <img src="#"> &nbsp;Cước di động trả sau</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-sub thanhToanBg">
                                <a href="javascript:;">
                <i class="sprite2 screen ib"></i>
                <span>Dịch vụ thanh toán</span>
              </a>
                                <ul>
                                    <li>
                                        <router-link to="/">
                                            <img src="#"> &nbsp;Hướng dẫn kết nối gạch thẻ</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!-- end cssmenu -->

                    <div class="support-left">
                        <p>Chăm sóc khách hàng</p>
                        <p class="mobile" style="font-size:18px;text-transform: lowercase;">0965288463 - Ext 4</p>
                    </div>
                </div>
                <!-- end SideBarLeft -->
                <div class="blockContent col-md-9">

                    <router-view />
                    <!-- endn BlockContent -->
                </div>
            </div>
        </section>
    </div>
    <!-- end container -->
    <Footer />
</div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue';
export default {
    name: 'Home',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style >
    
</style>
