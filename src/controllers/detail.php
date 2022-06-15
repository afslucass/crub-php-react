<?php 
  require_once '../db/repositories/clients.php';
  require_once '../db/repositories/address.php';
  require_once '../../responseCode.php';
  require_once '../middlewares/authenticate.php';

  auth();

  if(!isset($_GET["id"])) {
    echo 'EMPTY_VALUES';
    return;
  }
  
  $id = $_GET["id"];
  
  $rows;
  try {
    $rows = getClientById($id);
    $rows[0]->addresses = getAddressByClientId($rows[0]->id);
  } catch (Exception $err) {
    http_response_code(500);
    echo GENERIC_ERROR;
    
    return;
  }

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($rows);
?>