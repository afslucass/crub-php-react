<?php 
  class Address
  {
    public $id;
    public $clientId;
    public $cep;
    public $logradouro;
    public $complemento;
    public $bairro;
    public $localidade;

    function __construct($id, $clientId, $cep, $logradouro, $complemento, $bairro, $localidade) {
      $this->id = $id;
      $this->clientId = $clientId;
      $this->cep = $cep;
      $this->logradouro = $logradouro;
      $this->complemento = $complemento;
      $this->bairro = $bairro;
      $this->localidade = $localidade;
    }
  }
?>