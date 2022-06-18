<?php
  require_once '../db/connect.php';
  require_once '../db/repositories/clients.php';
  require_once '../../responseCode.php';
  require_once '../middlewares/authenticate.php';
  require_once '../middlewares/cors.php';
  require_once '../utils/errorResponse.php';

  cors();
  auth();
  
  if(!isset($_REQUEST["id"])) {
    echo getErrorResponse(EMPTY_VALUES);
    return;
  }
  
  $id = $_REQUEST["id"];
  
  try {
    $clientsRepository = new ClientsRepository($connector);
    $clientsRepository->deleteById($id);
    
  } catch (Exception $err) {
    http_response_code(500);
    echo getErrorResponse(GENERIC_ERROR);
  }

  echo '{}';

?>