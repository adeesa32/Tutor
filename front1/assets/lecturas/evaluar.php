<?php
session_start();
function calcularResultado($respuestas)
{
    $total = 0;
    $res=[];
    $contador=0;
    foreach ($respuestas as $respuesta) {

        if (is_array($respuesta)) {
            $total += calcularResultado($respuesta);
        }

        if (strpos($respuesta, ":=") !== false) {
            $valor = floatval(substr($respuesta, strpos($respuesta, ":=") + 2));
            $res[]=$valor; //manejo de indices
            ++$contador;
            $total += $valor;
        }

        if (is_numeric($respuesta)) {
            $total += floatval($respuesta);
        }
    }

    return [$total,$res,$contador];
}
?>
<!DOCTYPE html>
<html>
<style>
    body {
        background: rgb(0, 34, 59);
        background: linear-gradient(90deg, rgba(0, 34, 59, 1) 0%, rgba(33, 147, 226, 1) 100%);
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    div.resultado {
        text-align: center;
        font-size: 18px;
        width: 720px;
        margin: 5px auto;
        padding: 50px 10px;
        background-color: #FFF;
        border-radius: 5px;
    }

    pre.respuestas {
        text-align: left;
        width: 720px;
        margin: 5px auto;
        padding: 10px;
        background-color: #000;
        border-radius: 5px;
        color: #090;
        font-size: 12px;
    }
    div.mensaje {
        text-align: center;
        font-size: 20px;
        width: 720px;
        margin: 5px auto;
        padding: 50px 10px;
        background-color: #FFF;
        border-radius: 5px;
    }
    div.cuestionarios {
        text-align: left;
        font-size: 12px;
        width: 720px;
        margin: 5px auto;
        padding: 10px;
        background-color: #FFF;
        border-radius: 5px;
    }
</style>

<head>
</head>

<body>
    <?php
     //require("conexion.php");
     //$con=retornarConexion();
     $idcuestionario =$_POST['idcuestionario'];
     //$result=mysqli_query($con,"select RDL2 from tlecturas where cuestionario=$idcuestionario"); //ya probé "tlecturas" y arroja error parse, con ' tampoco
     //$metrica=$result->fetch_array()[0];
     $nombre=$_SESSION['SessionNombre'];
     //$password=$_SESSION['SessionPass'];
     //$loginUser=$_SESSION['SessionUsuario'];
     //$recupera=mysqli_query($con,"select usuario from login where user='$nombre' AND password='$password'");
     //$usuario=$recupera->fetch_array()[0];
     //$usuarioInt=intval($usuario)
    ?>
    <?php if (!empty($_POST['respuestas'])) : ?>
        <div class="resultado">
            <?php list($total,$res,$contador) =calcularResultado($_POST['respuestas'])?>
            <?php $today = date("Y-m-d H:i:s")?>
            <?=$nombre?><br>
            Cuestionario: <?= $_POST['idcuestionario'] ?><br>
            Resultado: <?= $total ?> puntos de <?=$contador?><br>  <!--faltaría agregar un <br> para cambiar linea-->
            <!--RDL2:< ?=$metrica ?><br>--> <!-- yo agregué esta linea-->
        </div>
      <!--  <pre class="respuestas">// OJO aqui va signo < ? y=print_r($_POST, true) ?></pre>-->
    <?php endif; ?>
    <?php
      if ($total == $contador)
          {$mensaje="Excelente!!!";}
      elseif ($total > ($contador-2))
          {$mensaje="Vas bien, puedes mejorar";}
      else
          {$mensaje="Puedes hacerlo mejor";}
    ?>
      <div class="mensaje">
       Mensaje:<?=$mensaje?>
      </div>
    <?php
      //$idusuario=$_SESSION['SessionUsuario'];
      //mysqli_query($con,"insert into historial(usuario,cuestionario,res1,res2,res3,res4,res5,score,fecha) values
      //            ($usuarioInt,'$idcuestionario','$res[0]','$res[1]','$res[2]','$res[3]','$res[4]','$total','$today')");  // aquí se envían los valores,poner nombre tabla
      //$metrica=mysqli_query($con,"select RDL2 from tlecturas where cuestionario=$idcuestionario)"); //idcuestionario es "int" en mysql, aquí también
      //mysqli_close($con);
    ?>
<!--    <div class="cuestionarios">
        <h2>Cuestionarios</h2>
        < ?php
        //$archivos = glob(__DIR__ . DIRECTORY_SEPARATOR . "cuestionario_*.htm");
        //echo '<ul>';
        //foreach ($archivos as $archivo) {
        //    echo '<li>';
        //    echo '<a href="' . basename($archivo) . '">' . basename($archivo) . '</a>';
        //    echo '</li>';
        //}
        //echo '</ul>'
        ?> -->
<!--    </div>-->

</body>
</html>

