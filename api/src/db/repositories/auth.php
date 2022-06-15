<?php require_once '../models/auth.php';
  class AuthRepository {
    private $connector;
    
    function __construct($connector)
    {
      $this->connector = $connector;
    }

    function getUserByLogin($login) {
      $sql = "SELECT * FROM auth WHERE login=:login";
      $stmt = $this->connector->prepare($sql);
      $stmt->bindParam(':login', $login);
      $stmt->execute();
  
      $auth = [];
      while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
        array_push($auth, new Auth($result['id'], $result['login'], $result['password']));
      }
  
      return $auth;
    }
  }
?>