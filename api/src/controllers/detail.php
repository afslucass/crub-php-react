<?php 
  require_once '../db/connect.php';
  require_once '../db/repositories/clients.php';
  require_once '../db/repositories/address.php';
  require_once '../../responseCode.php';
  require_once '../middlewares/authenticate.php';
  require_once '../middlewares/cors.php';

  cors();
  auth();

  if(!isset($_GET["id"])) {
    echo 'EMPTY_VALUES';
    return;
  }
  
  $id = $_GET["id"];
  
  $rows;
  try {
    $clientsRepository = new ClientsRepository($connector);
    $addressRepository = new AddressRepository($connector);
    
    $rows = $clientsRepository->getClientById($id);
    $rows[0]->address = $addressRepository->getAddressByClientId($rows[0]->id);
  } catch (Exception $err) {
    http_response_code(500);
    echo GENERIC_ERROR;
    
    return;
  }

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($rows[0]);
?>