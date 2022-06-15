<?php 
  require_once '../db/connect.php';
  require_once '../db/repositories/clients.php';
  require_once '../db/repositories/address.php';
  require_once '../../responseCode.php';
  require_once '../middlewares/authenticate.php';

  auth();

  header("Content-Type: application/json; charset=UTF-8");
  $json = file_get_contents('php://input');
  $data = json_decode($json);

  if(
    !isset($data->name) or
    !isset($data->cpf) or
    !isset($data->rg) or
    !isset($data->cellphone) or
    !isset($data->bornAt) 
  ) {
    echo EMPTY_VALUES;
    return;
  }
  
  $name = $data->name;
  $cpf = $data->cpf;
  $rg = $data->rg;
  $cellphone = $data->cellphone;
  $bornAt = $data->bornAt;
  $address = [];

  if(is_array($data->address)) {
    $address = $data->address;
  }

  try {
    $clientsRepository = new ClientsRepository($connector);
    $addressRepository = new AddressRepository($connector);
    
    $clientId = $clientsRepository->createClient($name, $cpf, $rg, $cellphone, $bornAt, $address);
    $addressRepository->createAddressByClientId($clientId, $address);
  } catch (Exception $err) {
    http_response_code(500);
    echo GENERIC_ERROR;
  }

?>