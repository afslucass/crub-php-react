<?php 
  require_once '../db/repositories/auth.php';
  require_once '../utils/jwt.php';
  require_once '../../responseCode.php';

  try {
    header("Content-Type: application/json; charset=UTF-8");
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    if(
      !isset($data->login) or
      !isset($data->password)
    ) {
      http_response_code(400);
      echo EMPTY_VALUES;
      return;
    }
    
    $login = $data->login;
    $password = $data->password;

    $user = getUserByLogin(($login));

    if(count($user) === 0) {
      http_response_code(400);
      echo USER_NOT_EXISTS;
      return; 
    }

    if(hash('sha256' ,$password) !== $user[0]->password) {
      http_response_code(400);
      echo PASSWORD_WRONG;
      return; 
    }

    $header = [
      'alg' => 'HS256',
      'typ' => 'JWT'
    ];
    
    $payload = [
      'id' => $user[0]->id,
      'login' => $user[0]->login
    ];

    $token = generateJWT($header, $payload);
    
    $response = [
      'token' => $token
    ];

    echo json_encode($response);

  } catch (Exception $err) {
    http_response_code(500);
    echo GENERIC_ERROR;
  }
?>