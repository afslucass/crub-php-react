<?php

  function getErrorResponse($error) {
    $response = ['message' => $error];
    
    return json_encode($response);
  }
?>