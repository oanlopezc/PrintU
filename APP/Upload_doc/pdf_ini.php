<?php
 // pdf_ini.php
 require("config_pdf.php");
 
        $uploads_dir = '/var/www/html/upload/';
        $ruta_file = $_FILES["document"]["tmp_name"];
        //$name = basename($_FILES["document"]["name"]);
        $ruta = $uploads_dir . basename($_FILES["document"]["name"]);
        //$ruta = "$uploads_dir/$name";
        echo "<br />Valor de RUTA : ".$ruta."<br />";
       if( move_uploaded_file($ruta_file, $ruta) ){
echo "<br /> Upload Sucessfull! <br />";
}

 //echo "<br />  Name : ".$name."<br />";
 echo " File Name  : ".$ruta_file."<br />";

?>
