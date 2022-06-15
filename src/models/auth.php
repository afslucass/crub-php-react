<?php 
  class Auth
  {
    public $id;
    public $login;
    public $password;

    function __construct($id, $login, $password) {
      $this->id = $id;
      $this->login = $login;
      $this->password = $password;
    }
  }
?>