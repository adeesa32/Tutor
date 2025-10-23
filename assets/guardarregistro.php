
<?php

  $json = file_get_contents('php://input');
  $params = json_decode($json);

  require("conexion.php");
  $con=retornarConexion();
  //CRea un nuevo registro, funciona
  mysqli_query($con,"insert into login(nombre, apellido, email, user, password) values
                   ('$params->name','$params->lastname','$params->email', '$params->user', '$params->password')");
  // inserta un nuevo usuario en avance con el default de iniciar en la lectura 1
  $idUsuario=mysqli_query($con,"select usuario from login where user='$params->user' AND password='$params->password'"); //yFalta revisar password
  $usuario=$idUsuario->fetch_array()[0];
  mysqli_query($con,"insert into avance(usuario,RDL2) values ($usuario,1)");   //inicia por dafault en la primer lectura
  mysqli_close($con);
  //mysqli_query($con,"insert into avance(usuario, RDL2) values ('$params->name',$params->number)");
  /*class Result {}
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';
  echo json_encode($response);*/
?>
