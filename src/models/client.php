<?php 
  class Client
  {
    public $id;
    public $name;
    public $bornAt;
    public $cpf;
    public $rg;
    public $cellphone;
    public $addresses;

    function __construct($id, $name, $bornAt, $cpf, $rg, $cellphone, $addresses) {
      $this->id = $id;
      $this->name = $name;
      $this->bornAt = $bornAt;
      $this->cpf = $cpf;
      $this->rg = $rg;
      $this->cellphone = $cellphone;
      $this->addresses = $addresses;
    }
  }
?>