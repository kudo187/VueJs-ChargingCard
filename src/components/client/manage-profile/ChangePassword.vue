<template>
<div class="changepassword">
    <h3>
    <span> Đổi mật khẩu</span>
  </h3>
  <div class="clearfix"></div>
  <!-- end BgTblUserInfo -->
  <div class="InfoCurrent" id="account">
    <div class="col-md-10 offset-md-1">
      <form>
        <div class="form-group row">
          <label for="name" class="col-4 col-form-label"> Nhập mật khẩu cũ (
            <span class="ColorDo">*</span>)</label>
          <div class="col-8">
            <input type="text" placeholder="Old password" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
            <label for="name" class="col-4 col-form-label"> Nhập mật khẩu mới (
              <span class="ColorDo">*</span>)</label>
            <div class="col-8">
              <input type="text" placeholder="New password" class="form-control" />
            </div>
          </div>
          <div class="form-group row">
              <label for="name" class="col-4 col-form-label"> Nhập lại mật khẩu (
                <span class="ColorDo">*</span>)</label>
              <div class="col-8">
                <input type="text" placeholder="Re-Password"  class="form-control" />
              </div>
            </div>
        <div class="form-group text-right">
          <div class="col-6  offset-3">
            <input type="submit" value="Đồng ý" class="btn btn-danger" />
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ChangePassword",
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
