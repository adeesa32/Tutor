<?php
function retornarConexion() {
  $con=mysqli_connect("148.228.13.11:3307","bdtutor","1B0Gc8q","bdtutor");
  if (!$con) {
    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

//echo "Éxito: Se realizó una conexión apropiada a MySQL! La base de datos mi_bd es genial." . PHP_EOL;
//echo "Información del host: " . mysqli_get_host_info($con) . PHP_EOL;
  return $con;
}
/*function retornarConexion() {
  $con=mysqli_connect("localhost","root","","bdtutor");
  return $con;
}*/
?>
