
<?php

  $json = file_get_contents('php://input');  // ¿esto funciona para forms también?
  $params = json_decode($json);

  require("conexion.php");
  $con=retornarConexion();

   mysqli_query($con,"insert into login(nombre, apellido, email, user, password) values
                   ('$params->name','$params->lastname','$params->email', '$params->user', '$params->password')");

  //mysqli_query($con,"insert into avance(usuario, RDL2) values ('$params->name',$params->number)");
  /*class Result {}
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';
  echo json_encode($response);*/
?>
