<template>
<div class="profile">
    <h3>
        <span> Thông tin tài khoản</span>
    </h3>
    <div class="clearfix"></div>
    <table class="table table-borderless">
        <tr>
            <td class="text-right">Số điện thoại</td>
            <td>
                <span class="ColorDo">0965288463</span>
            </td>
        </tr>
        <tr>
            <td class="text-right">Email</td>
            <td>
                <b>
        <span>nvkhoa1871997@gmail.com</span>
      </b>
            </td>
        </tr>
        <tr>
            <td class="text-right">Ngày mở tài khoản</td>
            <td>
                <b>
        <span>22-09-2018</span>
      </b>
            </td>
        </tr>
        <tr>
            <td class="text-right">Key phân phối</td>
            <td>
                <b>
        <span>784423</span>
      </b>
            </td>
        </tr>
        <!-- <tr>
    <td class="text-right">IP phân phối</td>
    <td>
      <textarea rows="2" cols="20" class="form-control" style="height:90px;width:200px;"></textarea>
    </td>
  </tr> -->

        <tr>
            <td class="text-right">Tình trạng tài khoản</td>
            <td class="text-success">
                <b>
        <span>Active</span>
      </b>
            </td>
        </tr>
    </table>
    <!-- end BgTblUserInfo -->
    <div class="clearfix">
        <p class="ColorDo text-left">Thông tin cá nhân</p>
    </div>
    <div class="InfoCurrent" id="account">
        <div class="col-xs-12">
            <form>
                <div class="form-group row">
                    <label for="name" class="col-4 col-form-label">Ảnh đại diện:</label>
                    <a class="col-8">
                        <input type="file" class="cmnd-input" style="display: none;" />
                        <img src="../../../assets/client/images/avatar.png" width="100px" height="100px" class="cmnd-img pointer"/>
                    </a>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-4 col-form-label"> Họ và tên (
                    <span class="ColorDo">*</span>)</label>
                    <div class="col-8">
                        <input type="text" value="Nguyễn Văn Khoa" tabindex="103" class="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-4 col-form-label"> Giới tính (
                    <span class="ColorDo">*</span>)
                    </label>
                    <div class="col-8">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="sexRadio" id="men" value="Nam">
                            <label class="form-check-label" for="men">Nam</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="sexRadio" id="woman" value="Nu">
                            <label class="form-check-label" for="woman">Nữ</label>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-4 col-form-label"> Số CMND (
                    <span class="ColorDo">*</span>)</label>
                    <div class="col-8">
                        <input type="text" value="Nguyễn Văn Khoa" tabindex="103" class="form-control" />
                     </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-4 col-form-label"> Tình trạng chứng thực</label>
                    <div class="col-8" style="color:#3c763d; font-weight: bold;">
                        <span>Chưa chứng thực</span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-4 col-form-label">Số điện thoại nhà (
                    <span class="ColorDo">*</span>)</label>
                    <div class="col-8">
                        <input type="text" value="0965288463" class="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-4 col-form-label"> Số nhà (
                    <span class="ColorDo">*</span>)</label>
                    <div class="col-8">
                        <input type="text" value="Thôn 4, Ðiền Hòa, Phong Ðiền, Thừa Thiên Huế" class="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-4 col-form-label"> Đường (
                    <span class="ColorDo">*</span>)</label>
                    <div class="col-8">
                        <input type="text" value="street" class="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-4 col-form-label"> </label>
                    <div class="col-8">
                        <div class="row">
                            <div class="selectpicker col-sm-6">
                                <span class="arrow-up"></span>
                                <select class="form-control">
                                    <option  value="-1">Chọn tỉnh / thành phố</option>
                                </select>
                            </div>
                            <div class="selectpicker col-sm-6">
                                <select class="form-control">
                                    <option value="-1">Chọn quận / huyện</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group text-right">
                    <div class="col-sm-7  col-sm-offset-4">
                        <input type="submit" value="Cập Nhật" class="btn btn-danger" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
