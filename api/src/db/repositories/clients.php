<?php require_once '../models/client.php';
  require_once '../models/address.php';
  
  class ClientsRepository {
    private $connector;
    
    function __construct($connector)
    {
      $this->connector = $connector;
    }

    public function createClient($name, $cpf, $rg, $cellphone, $bornAt, $address) {
      $sql = "INSERT INTO clients(name, cpf, rg, cellphone, bornAt) VALUES (:name, :cpf, :rg, :cellphone, :bornAt)";
      $stmt = $this->connector->prepare($sql);
      $stmt->bindParam(':name', $name);
      $stmt->bindParam(':cpf', $cpf);
      $stmt->bindParam(':rg', $rg);
      $stmt->bindParam(':cellphone', $cellphone);
      $stmt->bindParam(':bornAt', $bornAt);
  
      $stmt->execute();
      $newid = $this->connector->lastInsertId();
  
      return $newid;
    }
  
    public function deleteById($id) {
      $sql = "DELETE FROM clients WHERE id=:id";
      $stmt = $this->connector->prepare($sql);
      $stmt->bindParam(':id', $id);
      $stmt->execute();
    }
  
    public function getClientById($id) {
      $sql = "SELECT * FROM clients WHERE id=:id";
      $stmt = $this->connector->prepare($sql);
      $stmt->bindParam(':id', $id);
      $stmt->execute();
  
      $client = [];
      while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
        array_push($client, new Client($result['id'], $result['name'], $result['bornAt'], $result['cpf'], $result['rg'], $result['cellphone'], null));
      }
  
      return $client;
    }
  
    public function updateClient($id, $name, $cpf, $rg, $cellphone, $bornAt, $address) {
      $sql = "UPDATE clients SET name=:name, cpf=:cpf, rg=:rg, cellphone=:cellphone, bornAt=:bornAt WHERE id=:id";
      $stmt = $this->connector->prepare($sql);
      $stmt->bindParam(':id', $id);
      $stmt->bindParam(':name', $name);
      $stmt->bindParam(':cpf', $cpf);
      $stmt->bindParam(':rg', $rg);
      $stmt->bindParam(':cellphone', $cellphone);
      $stmt->bindParam(':bornAt', $bornAt);
      $stmt->execute();
    }
  
    public function getAllClients() {
      $sql = "SELECT * FROM clients";
      $stmt = $this->connector->prepare($sql);
      $stmt->execute();
  
      $rows = [];
      while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
        array_push($rows, new Client($result['id'], $result['name'], $result['bornAt'], $result['cpf'], $result['rg'], $result['cellphone'], null));
      }
      
      return $rows;
    }
  }  
?>