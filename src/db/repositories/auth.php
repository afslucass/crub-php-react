<?php require_once '../models/auth.php';
  function getUserByLogin($login) {
    require '../db/connect.php';

    $sql = "SELECT * FROM auth WHERE login=:login";
    $stmt = $connector->prepare($sql);
    $stmt->bindParam(':login', $login);
    $stmt->execute();

    $auth = [];
    while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
      array_push($auth, new Auth($result['id'], $result['login'], $result['password']));
    }

    return $auth;
  }
?>