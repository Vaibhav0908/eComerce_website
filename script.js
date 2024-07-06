$(document).ready(
    function () {
        $(".user").click(
            function () {
                $(".form").slideDown({ display: "block" })
                $(".block_div1").css({ display: "block"})
                // $(".wraper").css({ position: "fixed"})
            }
        )
    }
)

$(document).ready(
    function () {
        $(".close").click(
            function () {
                $(".form").css({ display: "none" })
                $(".block_div1").css({ display: "none"})
                // $(".wraper").css({ position: "relative"})
            }
        )
    }
)

$(document).ready(
    function () {
        $(".login").click(
            function () {
                $(".register").css({ backgroundColor: "white", color: "rgb(68, 68, 234)" })
                $(".login").css({ backgroundColor: "rgb(68, 68, 234)", color: "white" })
                $(".name").css("display", "none")
                $(".confirm_password").css("display", "none")
                $(".signin").css("display", "block")
                $(".create_account").css("display", "none")
                $(".form").css("margin", "200px 0px 0px 400px")
            }
        )
    }
)

$(document).ready(
    function () {
        $(".register").click(
            function () {
                $(".login").css({ backgroundColor: "white", color: "rgb(68, 68, 234)" })
                $(".register").css({ backgroundColor: "rgb(68, 68, 234)", color: "white" })
                $(".name").css("display", "block")
                $(".confirm_password").css("display", "block")
                $(".signin").css("display", "none")
                $(".create_account").css("display", "block")
                $(".form").css("margin", "150px 0px 0px 400px")
            }
        )
    }
)

$(document).ready(
    function () {
        $(".search").click(
            function () {
                $(".block_div2").css({ display: "block" })
                $(".search_close").css({ display: "block" })
                $(".search_bar").css({ display: "block" })
            }
        )
    }
)

$(document).ready(
    function () {
        $(".search_close").click(
            function () {
                $(".block_div2").css({ display: "none" })
                $(".search_close").css({ display: "none" })
                $(".search_bar").css({ display: "none" })
            }
        )
    }
)

$(document).ready(
    function () {
        $(".bag").click(
            function () {
                $(".shopping_cart").css({ display: "block" })
            }
        )
    }
)

$(document).ready(
    function () {
        $(".shopping_cart_close").click(
            function () {
                $(".shopping_cart").css({ display: "none" })
            }
        )
    }
)

$(document).ready(
    function () {
        $(".vegetable").click(
            function () {
                $(".vegetable").css({ color: "white", padding: "10px", backgroundColor: "rgb(228, 28, 48)", borderRadius: "5px" })
                $(".meats").css({ padding: "0px", backgroundColor: "white", color: "black" })
                $(".bakery").css({ padding: "0px", backgroundColor: "white", color: "black" })
                $(".beverages").css({ padding: "0px", backgroundColor: "white", color: "black" })
                $(".vegetable_content").css({display:"block"})
                $(".meat_content").css({display:"none"})
                $(".bakery_content").css({display:"none"})
                $(".beverages_content").css({display:"none"})
            }
        )
    }
)
$(document).ready(
    function () {
        $(".meats").click(
            function () {
                $(".meats").css({ color: "white", padding: "10px", backgroundColor: "rgb(228, 28, 48)", borderRadius: "5px" })
                $(".vegetable").css({ padding: "0px", backgroundColor: "white", color: "black" })
                $(".bakery").css({ padding: "0px", backgroundColor: "white", color: "black" })
                $(".beverages").css({ padding: "0px", backgroundColor: "white", color: "black" })
                $(".vegetable_content").css({display:"none"})
                $(".meat_content").css({display:"block"})
                $(".bakery_content").css({display:"none"})
                $(".beverages_content").css({display:"none"})
            }
        )
    }
)

$(document).ready(
    function () {
        $(".bakery").click(
            function () {
                $(".bakery").css({ color: "white", padding: "10px", backgroundColor: "rgb(228, 28, 48)", borderRadius: "5px" })
                $(".meats").css({ padding: "0px", backgroundColor: "white", color: "black" })
                $(".vegetable").css({ padding: "0px", backgroundColor: "white", color: "black" })
                $(".beverages").css({ padding: "0px", backgroundColor: "white", color: "black" })
                $(".vegetable_content").css({display:"none"})
                $(".meat_content").css({display:"none"})
                $(".bakery_content").css({display:"block"})
                $(".beverages_content").css({display:"none"})
            }
        )
    }
)

$(document).ready(
    function () {
        $(".beverages").click(
            function () {
                $(".beverages").css({ color: "white", padding: "10px", backgroundColor: "rgb(228, 28, 48)", borderRadius: "5px" })
                $(".meats").css({ padding: "0px", backgroundColor: "white", color: "black" })
                $(".bakery").css({ padding: "0px", backgroundColor: "white", color: "black" })
                $(".vegetable").css({ padding: "0px", backgroundColor: "white", color: "black" })
                $(".vegetable_content").css({display:"none"})
                $(".meat_content").css({display:"none"})
                $(".bakery_content").css({display:"none"})
                $(".beverages_content").css({display:"block"})
            }
        )
    }
)

$(document).ready(
    function () {
        $(".moon").click(function () {
                $("body").toggleClass("body_color_night")
                $(".product_background").toggleClass("product_background_night")
                $(".night_mode").toggleClass("night_mode_for_night")
                $(".user").toggleClass("user_night")
                $(".bag").toggleClass("bag_night")
                $(".add_to_cart").toggleClass("add_to_cart_night")
                $(".icon_bg").toggleClass("icon_bg_night")
                $(".location").toggleClass("location_night")
                $(".social_clr").toggleClass("social_clr_night_mode")
                $(".social_clr").toggleClass("social_clr_night")
                $(".packet_img").toggleClass("packet_img_night")
                $(".moon").toggleClass("fas fa-sun")
                $(".carousel_night").toggleClass("carousel_slider_night")
                $(".contact_icon").toggleClass("contact_icon_night")
                $(".playbutton").css({color:"blue"})
                $(".line2").css("display", "block")
                $(".line1").css("display", "none")
                $(".text_color").toggleClass("text_color_night")
                $(".contact_icon").toggleClass("contact_icon_night_mode")
                $(".add_to_cart").toggleClass("add_to_cart_night_mode")
            }
        )
    }
)

$(document).ready(
    function(){
        $(".text_color_night").on({
            mouseover: function () { $(this).css({ color: "rgb(68, 68, 234)",transition:"1.2s"}) },
            mouseout: function () { $(this).css({ color: "white" })}
        })
    }
)

$(document).ready(
    function(){
        $(".contact_icon_night_mode").on({
            mouseover: function () { $(this).css({ color: "red"}) },
            mouseout: function () { $(this).css({ color: "white" })}
        })
    }
)

$(document).ready(
    function(){
        $(".social_clr_night_mode").on({
            mouseover: function () { $(this).css({ backgroundColor: "rgb(68, 68, 234)"}) },
            mouseout: function () { $(this).css({ backgroundColor: "rgb(2, 2, 42)" })}
        })
    }
)

$(document).ready(
    function(){
        $(".add_to_cart_night_mode").on({
            mouseover: function () { $(this).css({ backgroundColor: "rgb(68, 68, 234)"}) },
            mouseout: function () { $(this).css({ backgroundColor: "rgb(2, 2, 42)" })}
        })
    }
)

$(document).ready(
    function () {
        $(".add_to_cart").click(
            function () {
                $(this)
                var name = $(".add_name").text()
                var price = $(".add_price").text()
                $(".shopping").text(name)
                $(".shop_price").text(price)
            }
        )

    }
)

// $(document).ready(
//     function () {
//         $(".image_bg1").on({ mouseover: function () { $(".eye1").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye1").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg2").on({ mouseover: function () { $(".eye2").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye2").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg3").on({ mouseover: function () { $(".eye3").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye3").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg4").on({ mouseover: function () { $(".eye4").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye4").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg5").on({ mouseover: function () { $(".eye5").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye5").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg6").on({ mouseover: function () { $(".eye6").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye6").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg7").on({ mouseover: function () { $(".eye7").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye7").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg8").on({ mouseover: function () { $(".eye8").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye8").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg9").on({ mouseover: function () { $(".eye9").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye9").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg10").on({ mouseover: function () { $(".eye10").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye10").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg11").on({ mouseover: function () { $(".eye11").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye11").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg12").on({ mouseover: function () { $(".eye12").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye12").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg13").on({ mouseover: function () { $(".eye13").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye13").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg14").on({ mouseover: function () { $(".eye14").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye14").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg15").on({ mouseover: function () { $(".eye15").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye15").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg16").on({ mouseover: function () { $(".eye16").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye16").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg17").on({ mouseover: function () { $(".eye17").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye17").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg18").on({ mouseover: function () { $(".eye18").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye18").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg19").on({ mouseover: function () { $(".eye19").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye19").css({ display: "none" }) } })
//     }
// )
// $(document).ready(
//     function () {
//         $(".image_bg20").on({ mouseover: function () { $(".eye20").css({ display: "inline" }) }, 
//         mouseout: function () { $(".eye20").css({ display: "none" }) } })
//     }
// )

$(document).ready(
    function () {
        $(".image_bg").on({ 
            mouseover: function () { 
                $(".eye").css({ display: "inline" }) }, 
            mouseout: function () { 
                $(".eye").css({ display: "none" }) } })
    }
)



$(document).ready(
    function(){
        $(".eye1").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".lady_finger_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye2").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".brinjal_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye3").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".palak_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye4").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".packet1_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye5").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".packet2_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye6").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".packet3_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye7").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".packet4_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye8").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".packet5_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye9").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".packet6_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye10").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".packet7_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye11").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".packet8_content").css({display:"block"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".eye12").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".meat1_content").css({display:"block"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".eye13").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".meat2_content").css({display:"block"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".eye14").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".meat3_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye15").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".bakery1_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye16").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".bakery2_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye17").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".bakery3_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye18").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".beverages1_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye19").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".beverages2_content").css({display:"block"})
            }
        )
    }
)
$(document).ready(
    function(){
        $(".eye20").click(
            function(){
                $(".block_div1").css({display:"block"})
                $(".wraper").css({position:"fixed"})
                $(".beverages3_content").css({display:"block"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".close1").click(
            function(){
                $(".block_div1").css({display:"none"})
                $(".wraper").css({position:"relative"})
                $(".packet_content").css({display:"none"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".send_message").on({mouseover:function(){$(".send_message").css({backgroundColor:"rgb(68, 68, 234)",transition:"1.1s", border:"1px solid rgb(68, 68, 234)", color:"white"})},mouseout:function(){$(".send_message").css({backgroundColor:"rgb(241, 49, 87)",border:"1px solid rgb(241, 49, 87)", transition:"2.5s"})}})
    }
)

$(document).ready(
    function(){
        $(".home1").click(
            function(){
                $(".home").css({display:"block"})
                $(".about_us_block").css({display:"none"})
                $(".contact_us_block").css({display:"none"})
                $(".blog_single_block").css({display:"none"})
                $(".blog_post_block").css({display:"none"})
                $(".single_page_block").css({display:"none"})
                $(".faqs_block").css({display:"none"})
                $(".product1_block").css({display:"none"})
                $(".product2_block").css({display:"none"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".product1").click(
            function(){
                $(".product1_block").css({display:"block"})
                $(".about_us_block").css({display:"none"})
                $(".home").css({display:"none"})
                $(".contact_us_block").css({display:"none"})
                $(".blog_post_block").css({display:"none"})
                $(".blog_single_block").css({display:"none"})
                $(".single_page_block").css({display:"none"})
                $(".faqs_block").css({display:"none"})
                $(".product2_block").css({display:"none"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".product2").click(
            function(){
                $(".product2_block").css({display:"block"})
                $(".product1_block").css({display:"none"})
                $(".about_us_block").css({display:"none"})
                $(".home").css({display:"none"})
                $(".contact_us_block").css({display:"none"})
                $(".blog_post_block").css({display:"none"})
                $(".blog_single_block").css({display:"none"})
                $(".single_page_block").css({display:"none"})
                $(".faqs_block").css({display:"none"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".about_us").click(
            function(){
                $(".about_us_block").css({display:"block"})
                $(".home").css({display:"none"})
                $(".contact_us_block").css({display:"none"})
                $(".blog_post_block").css({display:"none"})
                $(".blog_single_block").css({display:"none"})
                $(".single_page_block").css({display:"none"})
                $(".faqs_block").css({display:"none"})
                $(".product1_block").css({display:"none"})
                $(".product2_block").css({display:"none"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".blog_page1").click(
            function(){
                $(".blog_post_block").css({display:"block"})
                $(".home").css({display:"none"})
                $(".about_us_block").css({display:"none"})
                $(".contact_us_block").css({display:"none"})
                $(".blog_single_block").css({display:"none"})
                $(".single_page_block").css({display:"none"})
                $(".faqs_block").css({display:"none"})
                $(".product1_block").css({display:"none"})
                $(".product2_block").css({display:"none"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".blog_page2").click(
            function(){
                $(".blog_single_block").css({display:"block"})
                $(".blog_post_block").css({display:"none"})
                $(".home").css({display:"none"})
                $(".about_us_block").css({display:"none"})
                $(".contact_us_block").css({display:"none"})
                $(".single_page_block").css({display:"none"})
                $(".faqs_block").css({display:"none"})
                $(".product1_block").css({display:"none"})
                $(".product2_block").css({display:"none"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".blog_page3").click(
            function(){
                $(".single_page_block").css({display:"block"})
                $(".blog_single_block").css({display:"none"})
                $(".blog_post_block").css({display:"none"})
                $(".home").css({display:"none"})
                $(".about_us_block").css({display:"none"})
                $(".contact_us_block").css({display:"none"})
                $(".faqs_block").css({display:"none"})
                $(".product1_block").css({display:"none"})
                $(".product2_block").css({display:"none"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".blog_page4").click(
            function(){
                $(".single_page_block").css({display:"none"})
                $(".blog_single_block").css({display:"none"})
                $(".blog_post_block").css({display:"none"})
                $(".home").css({display:"none"})
                $(".about_us_block").css({display:"none"})
                $(".contact_us_block").css({display:"none"})
                $(".faqs_block").css({display:"block"})
                $(".product1_block").css({display:"none"})
                $(".product2_block").css({display:"none"})
            }
        )
    }
)

$(document).ready(
    function(){
        $(".contact_us").click(
            function(){
                $(".contact_us_block").css({display:"block"})
                $(".home").css({display:"none"})
                $(".about_us_block").css({display:"none"})
                $(".blog_post_block").css({display:"none"})
                $(".single_page_block").css({display:"none"})
                $(".blog_single_block").css({display:"none"})
                $(".faqs_block").css({display:"none"})
                $(".product1_block").css({display:"none"})
                $(".product2_block").css({display:"none"})
            }
        )
    }
)

