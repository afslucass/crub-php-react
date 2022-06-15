<?php 
  require_once '../utils/jwt.php';
  require_once '../../responseCode.php';

  function auth() {
    $headers = apache_request_headers();
    
    if(!isset($headers['Authorization'])) {
      http_response_code(403);
      echo AUTH_ERROR;
      exit();
    }

    $token = $headers['Authorization'];
    $token = explode(' ', $token)[1];
  
    if(!verifyJWT($token)) {
      http_response_code(403);
      echo AUTH_ERROR;
      exit();
    }
  }
?>