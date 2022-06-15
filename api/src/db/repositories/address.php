<?php require_once '../models/address.php';
  class AddressRepository {
    private $connector;
    
    function __construct($connector)
    {
      $this->connector = $connector;
    }

    public function createAddressByClientId($clientId, $address) {
      if(count($address) > 0) {
        foreach($address as $row) {
          $sql = "INSERT INTO address(clientId, cep, logradouro, complemento, bairro, localidade) VALUES (:clientId, :cep, :logradouro, :complemento, :bairro, :localidade)";
          $stmt = $this->connector->prepare($sql);
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
  
    public function putAddressByClientId($clientId, $address) {
      $sql = "DELETE FROM address WHERE clientId=:clientId";
      $stmt = $this->connector->prepare($sql);
      $stmt->bindParam(':clientId', $clientId);
      $stmt->execute();
  
      if(count($address) > 0) {
        foreach($address as $row) {
          $sql = "INSERT INTO address(clientId, cep, logradouro, complemento, bairro, localidade) VALUES (:clientId, :cep, :logradouro, :complemento, :bairro, :localidade)";
          $stmt = $this->connector->prepare($sql);
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
  
    public function getAddressByClientId($clientId) {
      $sql = "SELECT * FROM address WHERE clientId=:clientId";
      $stmt = $this->connector->prepare($sql);
      $stmt->bindParam(':clientId', $clientId);
      $stmt->execute();
  
      $address = [];
      while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
        array_push($address, new Address($result['id'], $result['clientId'], $result['cep'], $result['logradouro'], $result['complemento'], $result['bairro'], $result['localidade']));
      }
  
      return $address;
    }

  }
?>