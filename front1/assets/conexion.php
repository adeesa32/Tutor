<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","bdtutor");
  return $con;
}
?>
