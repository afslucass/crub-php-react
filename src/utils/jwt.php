<?php
  require_once '../../env.php';

  function generateJWT($header, $payload) {
    $header = json_encode($header);
    $header = base64_encode($header);

    $payload = json_encode($payload);
    $payload = base64_encode($payload);

    $signature = hash_hmac('sha256', "$header.$payload", JWT_PASSWORD, true);
    $signature = base64_encode($signature);

    return "$header.$payload.$signature";
  }

  function verifyJWT($token) {
    $part = explode(".",$token);
    $header = $part[0];
    $payload = $part[1];
    $signature = $part[2];

    $valid = hash_hmac('sha256', "$header.$payload", JWT_PASSWORD, true);
    $valid = base64_encode($valid);

    return $signature == $valid;
  }
?>