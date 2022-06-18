<?php 
  require_once '../db/connect.php';
  require_once '../db/repositories/clients.php';
  require_once '../../responseCode.php';
  require_once '../middlewares/authenticate.php';
  require_once '../middlewares/cors.php';
  
  cors();
  auth();
  
  $clientsRepository = new ClientsRepository($connector);
  $rows = $clientsRepository->getAllClients();

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($rows);
?>