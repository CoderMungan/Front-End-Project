$(".form-giris-yap").hide();

$(".kayit-ol-button").click(function (){ 
    $(".form-giris-yap").show();
    $(".form-kayit-ol").hide();
});

$(".giris-yap-button").click(function () {
    
    $(".baslik").html("Hoşgeldiniz!");
    $("#giris-yap").hide();
    $(".aciklama").hide();
    $(".hatali").hide();
    $(".sifre-unuttum").hide();
    $(".giris-yap-button").hide();

    
});