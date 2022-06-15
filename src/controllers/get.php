<?php 
  require_once '../db/repositories/clients.php';
  require_once '../../responseCode.php';
  require_once '../middlewares/authenticate.php';

  auth();

  $rows = getAllClients();

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($rows);
?>