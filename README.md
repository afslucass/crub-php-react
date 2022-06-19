# Kabum

[![image.png](https://i.postimg.cc/28LnJNND/image.png)](https://postimg.cc/rKcd0bpn)

[![image.png](https://i.postimg.cc/cCgtVwjm/image.png)](https://postimg.cc/5QJtzYfY)

# Setup

## Backend

1. Baixe o WampServer https://www.wampserver.com/en/
2. Entre no diretório raiz da instalação do WampServer (normalmente em C:\wamp64), entre na pasta ./www, crie uma pasta chamada 'kabum' e copie o repositório do projeto para dentro dela.
3. Inicie o Wamp e faça o login em http://localhost/phpmyadmin
4. Crie um novo banco de dados, conforme a imagem abaixo:
   [![image.png](https://i.postimg.cc/YqZF7nzw/image.png)](https://postimg.cc/Mv0HbYLs)
5. Com o Banco de dados criado, clique em importar, importe o arquivo que esta em ./api/sql/kabum.sql e clique em executar.
   [![image.png](https://i.postimg.cc/QxfFN6gM/image.png)](https://postimg.cc/N5rspkzh)
6. Entre em ./api/env.php e coloque as configurações do banco de dados:
   [![image.png](https://i.postimg.cc/sX3zhzsC/image.png)](https://postimg.cc/nsSgy6X3)

## Frontend

7. baixe o node.js https://nodejs.org/en/download/
8. Digite no terminal 'npm install -g yarn'
9. Entre na pasta ./frontend e execute 'yarn install' no terminal
10. Dentro da pasta ./frontend, execute 'yarn start' no terminal
11. No navegador, entre em http://localhost:3000/
12. Clique em 'Esqueceu a senha?'

# Mensagem

Ola, primeiramente obrigado pelo andamento da minha candidatura. Saibam que esse projeto foi um desafio para mim pois eu nunca tinha programado em php pra valer. Foi uma semana de pesquisas para conectar o banco de dados, tratar o cors e tudo mais. Caso eu passe garanto ter a mesma dedicação para aprender os padrões e os frameworks php que voces devem utilizar ae. Obrigado!
