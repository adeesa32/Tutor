<?php
session_start();
  require("conexion.php");
  $con=retornarConexion();

  $loginUser=$_SESSION['SessionUsuario'];
  $loginUserInt=intval($loginUser);

  $idLectura=mysqli_query($con,"select RDL2 from avance where usuario=$loginUserInt");
  $row=mysqli_num_rows($idLectura);
  if ($row>0) {
    $lecturaActual=$idLectura->fetch_array()[0];
    $avance=json_encode($lecturaActual);
    echo $avance; } //$vec,  AQUI Mandaba un letreto
  else {echo "ATENCION !!!! error, por favor intente nuevamente.";}
  mysqli_close($con);
?>


