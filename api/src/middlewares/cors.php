<?php
  function cors() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
      http_response_code(200);
  
      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, DELETE, POST, PUT, OPTIONS");         
      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        // header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
      exit(0);
    }
  }
?>