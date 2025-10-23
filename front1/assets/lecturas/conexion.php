<?php
function retornarConexion() {
  $con=mysqli_connect("http://tutor-inteligente.facultaddelenguas.com","root","","bdtutor");
  return $con;
}
?>
