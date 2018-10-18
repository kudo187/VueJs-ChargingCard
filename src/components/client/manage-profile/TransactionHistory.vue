<template>
<div class="transactionhistory">
    <h3>
        <span> Thông tin tài khoản</span>
    </h3>
    <div class="clearfix"></div>
    <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="Rút tiền" key="1">

            <!--Panel 1-->
            <div class="tab-pane" id="panelWithdrawal" role="tabpanel">
                <br>

                <div class="col-lg">
                    <div class="card">
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Họ và tên</th>
                                    <!-- <th scope="col" >Loại thẻ</th> -->
                                    <!-- <th scope="col" >Số lượng</th> -->
                                    <th scope="col">Tổng tiền</th>
                                    <th scope="col">Ngày rút</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Khoa</td>
                                    <td>Khoa</td>
                                    <td>Khoa</td>
                                    <td>Khoa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <!--/.Panel 1-->
        </a-tab-pane>
        <a-tab-pane tab="Mua card" key="2" forceRender>
            <!--Panel 2-->
            <div class="tab-pane " id="panelBuyCard" role="tabpanel">
                <br>

                <div class="col-lg">
                    <div class="card">
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Họ và tên</th>
                                    <th scope="col">Loại thẻ</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Tổng tiền</th>
                                    <th scope="col">Ngày mua</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>AA</td>
                                    <td>Khoa</td>
                                    <td>Khoa</td>
                                    <td>Khoa</td>
                                    <td>Khoa</td>
                                    <td>Khoa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <!--/.Panel 2-->
        </a-tab-pane>
        <a-tab-pane tab="Nạp tiền" key="3">
            <!--Panel 3-->
            <div class="tab-pane" id="panelRecharge" role="tabpanel">
                <br>

                <div class="col-lg">
                    <div class="card">
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Họ và tên</th>
                                    <th scope="col">Loại thẻ</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Tổng tiền</th>
                                    <th scope="col">Ngày nạp</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Khoa</td>
                                    <td>Khoa</td>
                                    <td>Khoa</td>
                                    <td>Khoa</td>
                                    <td>Khoa</td>
                                    <td>Khoa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--/.Panel 3-->
        </a-tab-pane>
    </a-tabs>

    <!-- Tab panels -->

</div>
</template>

<script>
export default {
  name: "TransactionHistory",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
