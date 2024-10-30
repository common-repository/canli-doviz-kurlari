<?php
    function doviz_plugin_init()
    {
            wp_register_style( 'bootstrap_css', plugins_url( "/css/bootstrap.min.css", __FILE__ ), array(), '20120208', 'all' );   
            wp_enqueue_style('bootstrap_css');
            wp_register_style( 'custom_style', plugins_url( "/css/style.css", __FILE__ ), array(), '20120208', 'all' );   
            wp_enqueue_style('custom_style');
            wp_register_script( 'bootstrap_js', plugins_url( "/js/bootstrap.min.js", __FILE__ ) );   
            wp_enqueue_script('bootstrap_js');
            wp_register_script( 'custom_script', plugins_url( "/js/script.js", __FILE__ ) );   
            wp_enqueue_script('custom_script');

    }
   add_action( 'wp_enqueue_scripts', 'doviz_plugin_init' );
?>

<html>
<head>
    <meta charset="utf-8">
    <title>Döviz Ekleme</title>  
   <?php 
   doviz_plugin_init(); 
   ?>   
</head>

<body>

<h1>Doviz Ekleme</h1>
<hr>

<div class="add-website">

<div class="col-md-12">
    <div class="container add-website">
        <ul class="nav nav-pills">
            <li class="active"><a data-toggle="pill" href="#serbest-piyasa" class="serbest" id="open-market">Serbest Piyasa</a></li>
            <li class=""><a data-toggle="pill" href="#merkez-bankasi" class="mb" id="merkez-bank">Merkez Bankası</a></li>
            <li class=""><a data-toggle="pill" href="#altin-fiyatlari" class="altin" id="gold-price">Altın Fiyatları</a></li>
            <li><a data-toggle="pill" href="#banka-doviz" class="bnk" id="currency-bank">Banka Döviz Kurları</a></li>

        </ul>

        <div class="col-md-7">
            <div class="tab-content addw-content">
                <div class="tab-pane fade active in" id="serbest-piyasa">
                    <ul id="currency-list">
                        <li>
                            
                            <input name="usd" type="checkbox"><span>Amerikan Doları</span></li>
                        <li>
                            
                            <input name="eur" type="checkbox"><span>Euro</span></li>
                        <li>
                           
                            <input name="gbp" type="checkbox"><span>İngiliz Sterlini</span></li>
                        <li>
                            
                            <input name="jpy" type="checkbox"><span>Japon Yeni</span></li>
                        <li>
                            
                            <input name="chf" type="checkbox"><span>İsviçre Frangı</span></li>
                        <li>
                            
                            <input name="dkk" type="checkbox"><span>Danimarka Kronu</span></li>
                        <li>
                           
                            <input name="sek" type="checkbox"><span>İsveç Kronu</span></li>
                        <li>
                           
                            <input name="nok" type="checkbox"><span>Norveç Kronu</span></li>
                        <li>
                            
                            <input name="sar" type="checkbox"><span>Suudi Arabistan Riyali</span></li>
                        <li>
                          
                            <input name="aud" type="checkbox"><span>Avustralya Doları</span></li>
                        <li>
                           
                            <input name="cad" type="checkbox"><span>Kanada Doları</span></li>
                        <li>
                            
                            <input name="rub" type="checkbox"><span>Rus Rublesi</span></li>
                        <li>
                            
                            <input name="cny" type="checkbox"><span>Çin Yuan Renminbi</span></li>
                        <li>
                            
                            <input name="gar" type="checkbox"><span>Güney Afrika Randı</span></li>
                        <li>
                            
                            <input name="mek" type="checkbox"><span>Meksika Pezosu</span></li>
                        <li>
                           
                            <input name="yzd" type="checkbox"><span>Yeni Zellanda Doları</span></li>
                        <li>
                            
                            <input name="irr" type="checkbox"><span>Irak Dinarı</span></li>
                        <li>
                        
                            <input name="uae" type="checkbox"><span>Birleşik Arap Emirlikleri Dirhemi</span></li>
                        <li>
                           
                            <input name="kwd" type="checkbox"><span>Kuveyt Dinarı</span></li>
                        <li>
                            
                            <input name="bah" type="checkbox"><span>Bahreyn Dinarı</span></li>
                    </ul>
                </div>

                <div class="tab-pane fade" id="merkez-bankasi">
                    <ul id="currency-list">
                        <li>
                            
                            <input name="usd" type="checkbox"><span>Amerikan Doları</span></li>
                        <li>
                            
                            <input name="eur" type="checkbox"><span>Euro</span></li>
                        <li>
                           
                            <input name="gbp" type="checkbox"><span>İngiliz Sterlini</span></li>
                        <li>
                            
                            <input name="jpy" type="checkbox"><span>Japon Yeni</span></li>
                        <li>
                            
                            <input name="chf" type="checkbox"><span>İsviçre Frangı</span></li>
                        <li>
                            
                            <input name="dkk" type="checkbox"><span>Danimarka Kronu</span></li>
                        <li>
                           
                            <input name="sek" type="checkbox"><span>İsveç Kronu</span></li>
                        <li>
                           
                            <input name="nok" type="checkbox"><span>Norveç Kronu</span></li>
                        <li>
                            
                            <input name="sar" type="checkbox"><span>Suudi Arabistan Riyali</span></li>
                        <li>
                          
                            <input name="aud" type="checkbox"><span>Avustralya Doları</span></li>
                        <li>
                           
                            <input name="cad" type="checkbox"><span>Kanada Doları</span></li>
                        <li>
                            
                            <input name="rub" type="checkbox"><span>Rus Rublesi</span></li>
                        <li>
                            
                            <input name="cny" type="checkbox"><span>Çin Yuan Renminbi</span></li>
                        <li>
                            
                            <input name="gar" type="checkbox"><span>Güney Afrika Randı</span></li>
                        <li>
                            
                            <input name="mek" type="checkbox"><span>Meksika Pezosu</span></li>
                        <li>
                           
                            <input name="yzd" type="checkbox"><span>Yeni Zellanda Doları</span></li>
                        <li>
                            
                            <input name="irr" type="checkbox"><span>Irak Dinarı</span></li>
                        <li>
                        
                            <input name="uae" type="checkbox"><span>Birleşik Arap Emirlikleri Dirhemi</span></li>
                        <li>
                           
                            <input name="kwd" type="checkbox"><span>Kuveyt Dinarı</span></li>
                        <li>
                            
                            <input name="bah" type="checkbox"><span>Bahreyn Dinarı</span></li>
                    </ul>
                </div>

                <div class="tab-pane fade" id="altin-fiyatlari">
                    <ul id="currency-list">
                        <li><input name="ceyrek-altin" type="checkbox"><span>Çeyrek Altın</span></li>
                        <li><input name="cumhuriyet-altini" type="checkbox"><span>Cumhuriyet Altını</span></li>
                        <li><input name="22-ayar-bilezik" type="checkbox"><span>22 Ayar Bilezik</span></li>
                        <li><input name="gram-altin" type="checkbox"><span>Gram Altın</span></li>
                        <li><input name="tam-altin" type="checkbox"><span>Tam Altın</span></li>
                        <li><input name="yarim-altin" type="checkbox"><span>Yarım Altın</span></li>
                        <li><input name="14-ayar-altin" type="checkbox"><span>14 Ayar Altın</span></li>
                        <li><input name="18-ayar-altin" type="checkbox"><span>18 Ayar Altın</span></li>
                    </ul>
                </div>

                <div class="tab-pane fade" id="banka-doviz">
                    <ul id="banklist">
                        <li>
                            <input name="bank" type="radio" value="akbank" checked=""><span>Akbank</span>
                        </li>
                        <li>
                            <input name="bank" type="radio" value="finansbank"><span>Finansbank</span>
                        </li>
                        <li>
                            <input name="bank" type="radio" value="garanti"><span>Garanti</span>
                        </li>
                        <li>
                            <input name="bank" type="radio" value="halkbank"><span>Halkbank</span>
                        </li>
                        <li>
                            <input name="bank" type="radio" value="isbank"><span>İş Bankası</span>
                        </li>
                        <li>
                            <input name="bank" type="radio" value="sekerbank"><span>Şekerbank</span>
                        </li>
                        <li>
                            <input name="bank" type="radio" value="vakifbank"><span>Vakıfbank</span>
                        </li>
                        <li>
                            <input name="bank" type="radio" value="yapikredi"><span>Yarpı Kredi</span>
                        </li>
                        <li>
                            <input name="bank" type="radio" value="ziraat"><span>Ziraat Bankası</span>
                        </li>

                    </ul>
                    <ul id="currency-list">
                        <li>
                            
                            <input name="usd" type="checkbox"><span>Amerikan Doları</span></li>
                        <li>
                            
                            <input name="eur" type="checkbox"><span>Euro</span></li>
                        <li>
                           
                            <input name="gbp" type="checkbox"><span>İngiliz Sterlini</span></li>
                        <li>
                            
                            <input name="jpy" type="checkbox"><span>Japon Yeni</span></li>
                        <li>
                            
                            <input name="chf" type="checkbox"><span>İsviçre Frangı</span></li>
                        <li>
                            
                            <input name="dkk" type="checkbox"><span>Danimarka Kronu</span></li>
                        <li>
                           
                            <input name="sek" type="checkbox"><span>İsveç Kronu</span></li>
                        <li>
                           
                            <input name="nok" type="checkbox"><span>Norveç Kronu</span></li>
                        <li>
                            
                            <input name="sar" type="checkbox"><span>Suudi Arabistan Riyali</span></li>
                        <li>
                          
                            <input name="aud" type="checkbox"><span>Avustralya Doları</span></li>
                        <li>
                           
                            <input name="cad" type="checkbox"><span>Kanada Doları</span></li>
                        <li>
                            
                            <input name="rub" type="checkbox"><span>Rus Rublesi</span></li>
                        <li>
                            
                            <input name="cny" type="checkbox"><span>Çin Yuan Renminbi</span></li>
                        <li>
                            
                            <input name="gar" type="checkbox"><span>Güney Afrika Randı</span></li>
                        <li>
                            
                            <input name="mek" type="checkbox"><span>Meksika Pezosu</span></li>
                        <li>
                           
                            <input name="yzd" type="checkbox"><span>Yeni Zellanda Doları</span></li>
                        <li>
                            
                            <input name="irr" type="checkbox"><span>Irak Dinarı</span></li>
                        <li>
                        
                            <input name="uae" type="checkbox"><span>Birleşik Arap Emirlikleri Dirhemi</span></li>
                        <li>
                           
                            <input name="kwd" type="checkbox"><span>Kuveyt Dinarı</span></li>
                        <li>
                            
                            <input name="bah" type="checkbox"><span>Bahreyn Dinarı</span></li>
                    </ul>
                </div>




            </div>

           <form method="post" action="options.php">
            <?php settings_fields( 'doviz-ekle-plugin' ); ?>
            <?php do_settings_sections( 'doviz-ekle-plugin' ); ?>
            <br>
            Aşağıdaki kodu, eklemek istediğiniz sayfanın düzenleme kısmından metin bölümüne tıklayıp yapıştırdığınızda seçtiğiniz döviz kurlarını eklemiş olursunuz.
            <br>
            <input type="text" name="doviz-link"  style="width:100%;" >
           </form>
           <a target="_blank" href="https://youtu.be/hKfXm9xfOOM">Buraya tıklayarak</a> döviz kurlarının nasıl eklendiğini örnek video'muzda görebilirsiniz.
        </div>

        <div class="col-md-5">
            <iframe src="https://www.doviz.com.tr/embeded/get/serbest/usd" width="200" height="985" style="border:none" scrolling="no"> </iframe>
        	
        </div>
    </div>
</div>

       </div>
</body>
</html>