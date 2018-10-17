<template>
<div class="header">
    <header class="header trans_300">
        <!-- Main Navigation -->
        <div class="main_nav_container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-right">
                        <div class="logo_container">
                            <a href="/">Change
                            <span>Card</span>
                        </a>
                        </div>
                        <nav class="navbar_content_menu">
                            <ul class="navbar_menu">
                                <li>
                                    <router-link to="/">trang chủ</router-link>
                                </li>
                                <li>
                                    <router-link to="contact">liên hệ</router-link>
                                </li>
                                <li class="account">
                                    <a>
                                    Cá nhân
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                    <ul class="account_selection">
                                        <li>
                                            <router-link to="/login">
                                                <i class="fa fa-sign-in" aria-hidden="true"></i>Đăng nhập</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/register">
                                                <i class="fa fa-user-plus" aria-hidden="true"></i>Đăng ký</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/admin">
                                                <i class="zmdi zmdi-arrow-right"></i>Go admin</router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <!-- <ul class="navbar_user">
                              <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></li>
                              <li class="checkout">
                                  <a href="#">
                                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                      <span id="checkout_items" class="checkout_items">2</span>
                                  </a>
                              </li>
                          </ul> -->
                            <div class="hamburger_container">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="fs_menu_overlay"></div>
    <div class="hamburger_menu">
        <div class="hamburger_close">
            <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <div class="hamburger_menu_content text-right">
            <ul class="menu_top_nav">
                <li class="menu_item has-children text-center">
                    <button class="chip row" type="button">
                    <div class="col-md-3">
                        <img class="img-responsive" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="Contact Person">
                    </div>
                    <div class="col-md-9">
                        <span> Khoa</span>
                        <br>Số dư:
                        <span class="ColorDo"> 100 Gold</span>
                    </div>
                </button>
                    <ul class="menu_selection text-manage-profile">
                        <li>
                            <router-link to="/manage-profile">
                                <i class="fa fa-user mr-2"></i> Thông tin cá nhân</router-link>
                        </li>
                        <li>
                            <router-link to="/manage-profile/change-password">
                                <i class="fa fa-key mr-2"></i>Đổi mật khẩu</router-link>
                        </li>
                        <li>
                            <a>
                            <i class="fa fa-sign-out mr-2"></i> Log out</a>
                        </li>
                    </ul>
                </li>
                <li class="menu_item has-children">
                    <a>
                    cá nhân
                    <i class="fa fa-angle-down"></i>
                </a>
                    <ul class="menu_selection">
                        <li>
                            <router-link to="/login">
                                <i class="fa fa-sign-in mr-2 ml-3" aria-hidden="true"></i>Đăng nhập</router-link>
                        </li>
                        <li>
                            <router-link to="/register">
                                <i class="fa fa-user-plus mr-2 ml-3" aria-hidden="true"></i>Đăng ký</router-link>
                        </li>
                        <li>
                            <router-link to="/admin">
                                <i class="fa fa-user-plus mr-2 ml-3" aria-hidden="true"></i>Go Admin</router-link>
                        </li>
                    </ul>
                </li>
                <li class="menu_item">
                    <router-link to="/">Trang chủ</router-link>
                </li>
                <li class="menu_item">
                    <router-link to="/detail">liên hệ</router-link>
                </li>
            </ul>
        </div>
    </div>

    <!-- FIXED SUPPORT -->
    <div id="fixedSupport">
        <ul class="text-uppercase text-center">
            <li>
                <router-link to="" class="item active">
                    <i class="sprite register ib "></i>
                    <span class="lbl profile">Đăng nhập</span>
                </router-link>
            </li>
            <li>
                <router-link to="#" class="item">
                    <i class="sprite recharge ib"></i>
                    <span class="lbl">Nạp tiền</span>
                </router-link>
            </li>
            <li>
                <router-link to="skype:hotro_card2?chat" class="item" title="Skype" rel="nofollow">
                    <i class="sprite support ib"></i>
                    <span class="lbl">Hỗ trợ</span>
                </router-link>
            </li>
            <li>
                <router-link to="ymsgr:sendim?hotrogate" class="item" title="Yahoo!" rel="nofollow">
                    <i class="sprite yahoo ib"></i>
                    <span class="lbl">Hỗ trợ</span>
                </router-link>
            </li>
            <li>
                <router-link to="mailto:nvkhoa@gmail.com" class="item">
                    <i class="sprite feedback ib"></i>
                    <span class="lbl">Góp ý</span>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
button.chip {
    padding: 25px;
    background: none;
    border: none;

}

.chip img {
    width: 50px;
    border-radius: 50%;
}

.dropdown-menu.text-manage-profile.show {
    top: -20px;
    left: 40px;
}

a.drprofile.dropdown-item:hover {
    color: red !important;
}

.text-manage-profile a {
    border-bottom: 1px solid #2f3133;
}

.text-manage-profile a:last-child {
    border-bottom: none
}
</style>
