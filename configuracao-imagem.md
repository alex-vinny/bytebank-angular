docker pull node
docker run -it --rm -p 4200:4200 -v ${PWD}:/src -w /src --name angular node /bin/bash

npm install -g @angular/cli

ng new bytebank

de dentro do container
ng serve --host 0.0.0.0

criar um novo componente:
ng generate component extrato

npm start

guide:
- formsmodule
para formato de datas:
- datepipe
idioma localização:
locale_id

metodologia utilizada para criação de componentes:
http://getbem.com/

