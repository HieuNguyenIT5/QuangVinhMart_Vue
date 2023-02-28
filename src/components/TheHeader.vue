<template>
    <div class="container-fluid" style="background-color: #55AA44;">
        <div class="container">
            <div class="row text-white text-while p-2" id="head-body">
                <div class="col-6 d-flex justify-content-start">
                    <a class="pe-3"><i class="fa-solid fa-location-dot"></i></a>
                    <a class="pe-3"><i class="fa-regular fa-envelope"></i></a>
                    <a class="pe-3"><i class="fa-brands fa-facebook-f"></i></a>
                </div>
                <div class="col-6 d-flex justify-content-end">
                    <a class="">Đăng nhập</a>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" style="background-color: #60BB46;">
        <div class="container">
            <div class="row text-while" id="head-body" style="padding: 1rem 0">
                <div class="col-12 col-sm-3 d-flex align-items-center justify-content-sm-start justify-content-center">
                    <router-link :to="{name: 'home'}">
                        <img src="../assets/images/logo.png" alt="logo" height="100" />
                    </router-link>
                </div>
                <div class="col-9 col-sm-6 d-flex align-items-center justify-content-center">
                    <form method="POST" action="">
                        <div id="search-wp">
                            <input type="text" name="s" id="s" placeholder="Nhập từ khóa tìm kiếm tại đây!">
                            <button type="submit" id="sm-s">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-3 col-sm-3 d-flex align-items-center justify-content-end" id="action-wp">
                    <div id="advisory-wp" class="d-none d-sm-block " >
                        <span class="title fs-4">Tư vấn</span>
                        <span class="phone fw-bold">0911.634.683</span>
                    </div>
                    <a href="?page=cart" title="giỏ hàng" id="cart-respon-wp" class="fl-right">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span id="num">2</span>
                    </a>
                    <div id="cart-wp" class="fl-right">
                        <router-link :to="{name : 'cart'}">
                            <div id="btn-cart" >
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            <span id="num">2</span>
                        </div>
                        </router-link>
                        
                        <div id="dropdown">
                            <p class="desc">Có <span>2 sản phẩm</span> trong giỏ hàng</p>
                            <ul class="list-cart">
                                <li class="clearfix d-flex">
                                    <a href="" title="" class="thumb fl-left">
                                        <img :src="baseUrl+'/public/images/image_blank.jpg'" alt="" style="width:50px">
                                    </a>
                                    <div class="info fl-right">
                                        <a href="" title="" class="product-name">Sony Express X6</a>
                                        <p class="price">6.250.000đ</p>
                                        <p class="qty">Số lượng: <span>1</span></p>
                                    </div>
                                </li>
                                <li class="clearfix d-flex">
                                    <a href="" title="" class="thumb fl-left">
                                        <img :src="baseUrl+'/public/images/image_blank.jpg'" alt="" style="width:50px">
                                    </a>
                                    <div class="info fl-right">
                                        <a href="" title="" class="product-name">Laptop Lenovo 10</a>
                                        <p class="price">16.250.000đ</p>
                                        <p class="qty">Số lượng: <span>1</span></p>
                                    </div>
                                </li>
                            </ul>
                            <div class="total-price clearfix">
                                <p class="title fl-left">Tổng:</p>
                                <p class="price fl-right">18.500.000đ</p>
                            </div>
                            <dic class="action-cart clearfix">
                                <a href="?page=cart" title="Giỏ hàng" class="view-cart fl-left">Giỏ hàng</a>
                                <a href="?page=checkout" title="Thanh toán" class="checkout fl-right">Thanh toán</a>
                            </dic>
                        </div>
                    </div>
                    <div id="btn-respon" class="d-sm-none ms-4 text-white"><i class="fa fa-bars" aria-hidden="true"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup(){
        return {
            baseUrl
        }
    }
}
</script>