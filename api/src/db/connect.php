<?php
  require_once '../../env.php';

  try {
    $connector = new PDO(DB . ':host=' . SERVER . ';dbname=' . NAME, USER, PASSWORD);
  } catch (PDOException $e) {
    echo 'Erro ao conectar: ' . $e->getMessage();
  }
?>