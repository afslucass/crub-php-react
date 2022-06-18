<?php 
  class Client
  {
    public $id;
    public $name;
    public $bornAt;
    public $cpf;
    public $rg;
    public $cellphone;
    public $address;

    function __construct($id, $name, $bornAt, $cpf, $rg, $cellphone, $address) {
      $this->id = $id;
      $this->name = $name;
      $this->bornAt = $bornAt;
      $this->cpf = $cpf;
      $this->rg = $rg;
      $this->cellphone = $cellphone;
      $this->address = $address;
    }
  }
?>