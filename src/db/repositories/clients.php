<?php require_once '../models/client.php';
  require_once '../models/address.php';
  
  function createClient($name, $cpf, $rg, $cellphone, $bornAt, $address) {
    require_once '../db/connect.php';
    
    $sql = "INSERT INTO clients(name, cpf, rg, cellphone, bornAt) VALUES (:name, :cpf, :rg, :cellphone, :bornAt)";
    $stmt = $connector->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':cpf', $cpf);
    $stmt->bindParam(':rg', $rg);
    $stmt->bindParam(':cellphone', $cellphone);
    $stmt->bindParam(':bornAt', $bornAt);

    $stmt->execute();
    $newid = $connector->lastInsertId();

    return $newid;
  }

  function deleteById($id) {
    require_once '../db/connect.php';

    $sql = "DELETE FROM clients WHERE id=:id";
    $stmt = $connector->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
  }

  function getClientById($id) {
    require_once '../db/connect.php';

    $sql = "SELECT * FROM clients WHERE id=:id";
    $stmt = $connector->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();

    $client = [];
    while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
      array_push($client, new Client($result['id'], $result['name'], $result['bornAt'], $result['cpf'], $result['rg'], $result['cellphone'], null));
    }

    return $client;
  }

  function updateClient($id, $name, $cpf, $rg, $cellphone, $bornAt, $address) {
    require_once '../db/connect.php';
    
    $sql = "UPDATE clients SET name=:name, cpf=:cpf, rg=:rg, cellphone=:cellphone, bornAt=:bornAt WHERE id=:id";
    $stmt = $connector->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':cpf', $cpf);
    $stmt->bindParam(':rg', $rg);
    $stmt->bindParam(':cellphone', $cellphone);
    $stmt->bindParam(':bornAt', $bornAt);
    $stmt->execute();
  }

  function getAllClients() {
    require_once '../db/connect.php';

    $sql = "SELECT * FROM clients";
    $stmt = $connector->prepare($sql);
    $stmt->execute();

    $rows = [];
    while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
      array_push($rows, new Client($result['id'], $result['name'], $result['bornAt'], $result['cpf'], $result['rg'], $result['cellphone'], null));
    }

    return $rows;
  }
  
?>