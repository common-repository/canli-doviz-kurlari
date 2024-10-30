<?php
/*
Plugin Name: Doviz Kurlari

Plugin URI: http://www.doviz.com.tr

Version: 2.00

Author: Burak Demirel

Description: Sitenize doviz kurlarını ekleyebileceğiniz bir plugin.

*/

 

add_action( 'admin_menu', 'menuekleme' );

function menuekleme(){

    add_menu_page( 'Hosgeldiniz', 'Döviz Kurlari', 'manage_options', 'doviz-kurlari/home.php', '', '', 81 );

    

}

 

add_action( 'admin_init', 'plugin_ayarlari' );

function plugin_ayarlari() {

  register_setting( 'doviz-ekle-plugin', 'doviz-link' );

  //register_setting( 'yaziekleme-plugini', 'ye-baslik' );

}
?>