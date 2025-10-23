<?php
  //$data="hola"
  //echo("<script>console.log('PHP: " . $data . "');</script>");
  $user=$_GET['user'];
  $password=$_GET['password'];
  session_start();


  $_SESSION['SessionNombre']=$user;
  $_SESSION['SessionPass']=$password;
  //$json = file_get_contents('php://input');
  //$params = json_decode($json);
  require("conexion.php");
  $con=retornarConexion();
  $registro=mysqli_query($con,"select usuario from login where user='$user' AND password='$password'");  //parece funcionar
  $row=mysqli_num_rows($registro);
  if ($row>0) {
    $vec=$registro->fetch_array()[0];
    $_SESSION['SessionUsuario']=$vec;
    $usuario=json_encode($vec);
    echo "Buena lectura :)"; } //revisar que sea integer
  else {echo "ATENCION !!!! usuario no encontrado, por favor intente nuevamente.";}
  mysqli_close($con);

  //if ($registro=mysqli_query($con,"select usuario from login where user='anas' AND password='anas'")){  //cambiar o agregar user
  //  $row=mysqli_num_rows($registro);
  //  if  ($row)>0{
      //$row=mysqli_fetch_array($registro,MYSQLI_ASSOC);
  //    $vec=$row[0];
  //  }
  //  else {echo "no volvieron registros";}
  //}
  //echo json_encode($row);
  //echo "el usuario logeado es:",$row;  //revisar que sea integer

  //$registro=mysqli_query($con,"select usuario from login where user=$user AND password=$password");  //parece funcionar
  //$registro=mysqli_query($con,"select usuario from login where user='anas' AND password='anas'");  //cambiar o agregar user
  ////echo $registro; OJO No puede convertir registro a string para ver el valor
  //$row=mysqli_fetch_array($registro,MYSQLI_ASSOC);
  //if (count($row)==0)//($row_cnt!=0) {
  //  {echo "no volvieron registros";}
  //else {

?>


