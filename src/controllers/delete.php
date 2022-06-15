<?php 
  require_once '../db/repositories/clients.php';
  require_once '../../responseCode.php';
  require_once '../middlewares/authenticate.php';

  auth();

  if(!isset($_REQUEST["id"])) {
    echo 'EMPTY_VALUES';
    return;
  }
  
  $id = $_REQUEST["id"];
  
  try {
    deleteById($id);
  } catch (Exception $err) {
    http_response_code(500);
    echo GENERIC_ERROR;
  }

?>