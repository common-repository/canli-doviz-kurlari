
jQuery(document).ready(function() {
    jQuery('.add-website #serbest-piyasa input[name*=\'usd\']').click();
    var iframeSrcMain = 'https://www.doviz.com.tr/embeded/get/serbest/usd+';
    jQuery(".add-website .col-md-5 iframe").attr("src",iframeSrcMain.slice(0,-1));

    if(0 < jQuery(".add-website .col-md-5").length) {
        jQuery(".add-website .addw-codearea #code-area").val(jQuery(".add-website .col-md-5").html().trim());
    }

    jQuery('.add-website #merkez-bank').click(function(){
        iframeSrcMain = 'https://www.doviz.com.tr/embeded/get/mb/';
        jQuery('.add-website .tab-content .tab-pane ul#currency-list li input').attr('checked', false);
        iframeSrcContent ='';
        var display = jQuery('.bank-currency-head img').css("display" );
        if ( display == "none" ) {
            jQuery('.bank-currency-head img').toggle();
            jQuery('.bank-currency-head .gold-price-head').toggle();
        }
        jQuery('.bank-currency-head img').attr('src','assets/img/tmb-logo.png');
        jQuery('.bank-currency-head img').attr('width','130');
    });
    jQuery('.add-website #open-market').click(function(){
        iframeSrcMain = 'https://www.doviz.com.tr/embeded/get/serbest/';
        jQuery('.add-website .tab-content .tab-pane ul#currency-list li input').attr('checked', false);

        var display = jQuery('.bank-currency-head img').css("display" );
        if ( display == "none" ) {
            jQuery('.bank-currency-head img').toggle();
            jQuery('.bank-currency-head .gold-price-head').toggle();
        }
        jQuery('.bank-currency-head img').attr('src','assets/img/serbest.png');
        jQuery('.bank-currency-head img').attr('width','120');
    });
    jQuery('.add-website #gold-price').click(function(){
        iframeSrcMain = 'https://www.doviz.com.tr/embeded/get/altin/';
        jQuery('.add-website .tab-content .tab-pane ul#currency-list li input').attr('checked', false);

        var display = jQuery('.bank-currency-head img').css("display" );
        if ( display !== "none" ) {
            jQuery('.bank-currency-head img').toggle();
            jQuery('.bank-currency-head .gold-price-head').toggle();
        }
        jQuery('.bank-currency-head .gold-price-head').text('Altın Fiyatları');

    });
    jQuery('.add-website #currency-bank').click(function(){
        iframeSrcMain = 'https://www.doviz.com.tr/embeded/get/akbank/';
        jQuery('.add-website .tab-content .tab-pane ul#currency-list li input').attr('checked', false);
        var display = jQuery('.bank-currency-head img').css("display" );
        if ( display == "none" ) {
            jQuery('.bank-currency-head img').toggle();
            jQuery('.bank-currency-head .gold-price-head').toggle();
        }
        jQuery('.bank-currency-head img').attr('src','assets/img/akbank.png');
        jQuery('.bank-currency-head img').attr('width','120');
    });

    jQuery('.add-website .tab-content .tab-pane ul#banklist li input').on('click', function(e) {
        iframeSrcMain = 'https://www.doviz.com.tr/embeded/get/';
        jQuery('.add-website .tab-content .tab-pane ul#currency-list li input').attr('checked', false);
        if(jQuery(this).prop('checked')){
            iframeSrcMain += jQuery(this).attr("value") + '/';
            console.log(iframeSrcMain);
        }
    });
        jQuery('.add-website .tab-content .tab-pane ul#currency-list li input').on('click', function(e) {


       if(jQuery(this).prop('checked')){
           iframeSrcMain += jQuery(this).attr("name") + '+';
            jQuery(".add-website .col-md-5 iframe").attr("src",iframeSrcMain.slice(0,-1));
            jQuery(".add-website  input[name=\"doviz-link\"]").val(jQuery(".add-website .col-md-5").html().trim());

           //jQuery(".add-website .col-md-5 iframe").contentWindow.location.reload(true);
       }
        else{
           iframeSrcMain = iframeSrcMain.replace((jQuery(this).attr("name") + '+'),"");
           jQuery(".add-website .col-md-5 iframe").attr("src",iframeSrcMain.slice(0,-1));
           jQuery(".add-website input[name=\"doviz-link\"]").val(jQuery(".add-website .col-md-5").html().trim());

       }


    });


});