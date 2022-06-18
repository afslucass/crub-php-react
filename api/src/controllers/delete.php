<?php
  require_once '../db/connect.php';
  require_once '../db/repositories/clients.php';
  require_once '../../responseCode.php';
  require_once '../middlewares/authenticate.php';
  require_once '../middlewares/cors.php';

  cors();
  auth();
  
  if(!isset($_REQUEST["id"])) {
    echo 'EMPTY_VALUES';
    return;
  }
  
  $id = $_REQUEST["id"];
  
  try {
    $clientsRepository = new ClientsRepository($connector);
    $clientsRepository->deleteById($id);
    
  } catch (Exception $err) {
    http_response_code(500);
    echo GENERIC_ERROR;
  }

?>