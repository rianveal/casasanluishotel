<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="refresh" content="4; url=http://casasanluishotel.com/"/>
  <title>Casa San Luis Hotal | Send email</title>
  <style>
    body{
      background-color: #F5F5F5; 
      width: 100%; 
      height: 100%;
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;
    }
    .message-sucessfull--content{
      position: absolute; 
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%); 
      padding: 1em; 
      background-color: #FAFAA;
      box-shadow: 0 0 10px rgba(0,0,0,.5);
      width: 60%;
      height: auto;
      text-align: center;
      z-index: 9999999;
    }
  </style>
  <script language="JavaScript">
    javascript:window.history.forward(1); //Esto es para cuando le pulse al botón de Atrás
    // javascript:window.history.back(1); //Esto para cuando le pulse al botón de Adelante
  </script>
</head>
<body>
  <?php

    // Varios destinatarios
    $para  = 'rianveal@gmail.com' . ', '; // atención a la coma
    $para .= 'rianveal@gmail.com';

    // título
    $título = 'Casa San Luis Hotel';

    // mensaje
    $mensaje .= '
    <html>
    <head>
      <title>Contacto web - Casa San Luis Hotel</title>
    </head>
    <body>
      <div style="padding: 1em 0 0 0; text-align: justify;">
        <p>Hola Sres.</p>
        <h2>Casa San Luis Hotel</h2>
        <div>
          <h3 style="color: #546E7A;">El sr(a). <span style="color: #263238;">'. strip_tags($_POST['nombres']) .'</span> cuyo correo electrónico es <span style="color: #263238;">'. strip_tags($_POST['correo']) .' y telefono(s) '. strip_tags($_POST['numeroContacto']) .'</span>  ha escrito el siguiente mensaje.</h3>
          <h3 style="font-weight: 700; color= #263238;"> hola mundo'. strip_tags($_POST['numeroCedula']) .'</h3>
        </div>

      </div>
    </body>
    </html>';

    // Para enviar un correo HTML, debe establecerse la cabecera Content-type
    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    // Cabeceras adicionales
    $cabeceras .= 'To: rianveal@gmail.com' . "\r\n";
    $cabeceras .= 'From: Contacto Web - Casa San Luis Hotel rianveal@hotmail.com' . "\r\n";
    $cabeceras .= 'Cc:' . "\r\n";
    $cabeceras .= 'Bcc:' . "\r\n";

    // Enviarlo
    mail($para, $título, $mensaje, $cabeceras);

    // if ($_POST['submit']) {
    //   if (mail ($to, $subject, $body, $from)) { 
    //     echo '<p>Thank you for your email!</p>';
    //   } else { 
    //     echo '<div class="message-sucessfull--content">
    //              <div>
    //                 <div style="text-align: center;">
    //                     <h3 style="color: #013f42; margin-top: 0;">Gestión Proactiva | Consultores HSEQ</h3>
    //                 </div>
    //                 <h1>Gracias por escribirnos</h1>
    //                 <p>La información ha sido verificada y en poco tiempo le brindaremos respuesta a su mensaje.</p>
    //              </div>   
    //           </div>';
    //   }
    // }
  ?>

  <div class="message-sucessfull--content">
     <div>
        <div style="text-align: center;">
            <h3 style="color: #013f42; margin-top: 0;">Casa San Luis Hotel</h3>
        </div>
        <h1>Gracias por escribirnos</h1>
        <p>La información ha sido verificada y en poco tiempo le brindaremos respuesta a su solicitud vía correo electrónico.</p>
     </div>   
  </div>

  <script type="text/javascript">
    WebFontConfig = {
    google: { families: [ 'Roboto:300,400' ] } };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
  </script>

</body>
</html>


