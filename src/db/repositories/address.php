<?php require_once '../models/address.php';

  function createAddressByClientId($clientId, $address) {
    require '../db/connect.php';

    if(count($address) > 0) {
      foreach($address as $row) {
        $sql = "INSERT INTO address(clientId, cep, logradouro, complemento, bairro, localidade) VALUES (:clientId, :cep, :logradouro, :complemento, :bairro, :localidade)";
        $stmt = $connector->prepare($sql);
        $stmt->bindParam(':clientId', $clientId);
        $stmt->bindParam(':cep', $row->cep);
        $stmt->bindParam(':logradouro', $row->logradouro);
        $stmt->bindParam(':complemento', $row->complemento);
        $stmt->bindParam(':bairro', $row->bairro);
        $stmt->bindParam(':localidade', $row->localidade);
        
        $stmt->execute();
      }
    }
  }

  function putAddressByClientId($clientId, $address) {
    require '../db/connect.php';

    $sql = "DELETE FROM address WHERE clientId=:clientId";
    $stmt = $connector->prepare($sql);
    $stmt->bindParam(':clientId', $clientId);
    $stmt->execute();

    if(count($address) > 0) {
      foreach($address as $row) {
        $sql = "INSERT INTO address(clientId, cep, logradouro, complemento, bairro, localidade) VALUES (:clientId, :cep, :logradouro, :complemento, :bairro, :localidade)";
        $stmt = $connector->prepare($sql);
        $stmt->bindParam(':clientId', $clientId);
        $stmt->bindParam(':cep', $row->cep);
        $stmt->bindParam(':logradouro', $row->logradouro);
        $stmt->bindParam(':complemento', $row->complemento);
        $stmt->bindParam(':bairro', $row->bairro);
        $stmt->bindParam(':localidade', $row->localidade);
        
        $stmt->execute();
      }
    }
  }

  function getAddressByClientId($clientId) {
    require '../db/connect.php';

    $sql = "SELECT * FROM address WHERE clientId=:clientId";
    $stmt = $connector->prepare($sql);
    $stmt->bindParam(':clientId', $clientId);
    $stmt->execute();

    $address = [];
    while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
      array_push($address, new Address($result['id'], $result['clientId'], $result['cep'], $result['logradouro'], $result['complemento'], $result['bairro'], $result['localidade']));
    }

    return $address;
  }
?>