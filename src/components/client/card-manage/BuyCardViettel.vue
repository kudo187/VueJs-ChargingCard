<template>
<div class="buycardviettel">
<h3>
    <span>Thẻ Viettel</span>
</h3>
<div class="GoldRecharge">
    <div class="BlockBank ">
        <ul class="row">
            <li class="col-md-3 col-4">
                <a data-cost="10,000" data-name="Viettel" >
          <img src="../../../assets/client/images/Logos/card-viettel.jpg">
          <span style="color:#FFFFFF;" class='lbl'>10,000</span>
        </a>
            </li>
            <li class="col-md-3 col-4">
                <a data-cost="20,000" data-name="Viettel" >
          <img src="../../../assets/client/images/Logos/card-viettel.jpg">
          <span style="color:#FFFFFF;" class='lbl'>20,000</span>
        </a>
            </li>
            <!-- <li class="col-md-3 col-4">
        <a data-cost="30,000" data-name="Viettel" (click) = "resetPayAndPrice(30000)">
          <img src="../../../assets/client/images/Logos/card-viettel.jpg">
          <span style="color:#FFFFFF;" class='lbl'>30,000</span>
        </a>
      </li> -->
            <li class="col-md-3 col-4">
                <a data-cost="50,000" data-name="Viettel" >
          <img src="../../../assets/client/images/Logos/card-viettel.jpg">
          <span style="color:#FFFFFF;" class='lbl'>50,000</span>
        </a>
            </li>
            <li class="col-md-3 col-4">
                <a data-cost="100,000" data-name="Viettel" >
          <img src="../../../assets/client/images/Logos/card-viettel.jpg">
          <span style="color:#FFFFFF;" class='lbl'>100,000</span>
        </a>
            </li>
            <li class="col-md-3 col-4">
                <a data-cost="200,000" data-name="Viettel" >
          <img src="../../../assets/client/images/Logos/card-viettel.jpg">
          <span style="color:#FFFFFF;" class='lbl'>200,000</span>
        </a>
            </li>
            <li class="col-md-3 col-4">
                <a data-cost="300,000" data-name="Viettel">
          <img src="../../../assets/client/images/Logos/card-viettel.jpg">
          <span style="color:#FFFFFF;" class='lbl'>300,000</span>
        </a>
            </li>
            <li class="col-md-3 col-4">
                <a data-cost="500,000" data-name="Viettel" >
          <img src="../../../assets/client/images/Logos/card-viettel.jpg">
          <span style="color:#FFFFFF;" class='lbl'>500,000</span>
        </a>
            </li>
        </ul>
    </div>
    <!-- end BlockBank -->
    <div class="clearfix"></div>
    <div id="muaTheGate" class="InfoGoldCharge">
        <div class=" col-sm-8 offset-sm-2">
            <form>
                <div class="form-group row">
                    <label for="denominations" class="col-4 col-form-label">Mệnh giá</label>
                    <div class="col-8">
                        <input type="text" name= "denominations"  class="cardCost isNumber form-control text-right" />
            </div>
                    </div>
                    <div class="form-group row">
                        <label for="quantity"  class="col-4 col-form-label">Số lượng</label>
                        <div class="col-8">
                            <input type="number" name= "quantity" class="form-control isNumber text-right" id="quantity">
              </div>
                        </div>
                        <div class="form-group row">
                            <label for="discount" class="col-4 col-form-label">Chiết khấu (%)</label>
                            <div class="col-8">
                                <input type="text" name= "discount" readonly="readonly" class="form-control isNumber text-right" value="2.8" id="discount">
                </div>
                            </div>
                            <div class="form-group row">
                                <label for="pay" class="col-4 col-form-label">Thanh toán</label>
                                <div class="col-8">
                                    <input type="text" name= "pay"   readonly="readonly" class="form-control isNumber text-right" id="pay">
                  </div>
                                </div>
                                <div class="form-group row">
                                    <label for="discount" class="col-4 col-form-label">Hình thức</label>
                                    <div class="col-8">
                                        <select class="form-control">
                            <option value="0">Hiển thị thẻ</option>
                            <option value="1">In thẻ</option>
                            <option value="2">Gửi thẻ qua tin nhắn</option>
                          </select>
                                    </div>
                                </div>
                                <div class="btnSubmit text-center mt-5">
                                    <button class="btn btn-danger">Đồng ý mua</button>
                                </div>
            </form>
        </div>
    </div>
    <!-- end InfoGold -->
</div>
<!-- end CashRecharge -->
</div>
</template>

<script>
export default {
    name: 'BuyCardViettel'
}
</script>

<style>
    
</style>
