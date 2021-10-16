docker pull node
docker run -it --rm -p 4200:4200 -v ${PWD}:/src -w /src --name angular node /bin/bash
docker run -it --rm -p 4200:4200 -p 3000:3000 -v ${PWD}:/src -w /src --name angular node /bin/bash

npm install -g @angular/cli

ng new bytebank

de dentro do container
ng serve --host 0.0.0.0

criar um novo componente:
ng generate component extrato

npm start

diretivas:
ngIf
ngFor

guide:
- formsmodule
para formato de datas:
- datepipe
idioma localização:
locale_id

metodologia utilizada para criação de componentes:
http://getbem.com/

criação de serviços:
ng generate service transferencia

api http falsa para mock:
jsonserver
npm install -g json-server

comando para iniciar um servidor:
necessário outro terminal acessando o container
docker exec -it <container> bash
json-server --host 0.0.0.0 --watch db.json
utilizar a ferramenta jsontots para converter de json para typescript

para consumir requisições http, usamos a classe HttpClient

módulo route para roteamento
