docker pull node
docker run -it --rm -p 4200:4200 -v ${PWD}:/src -w /src --name angular node /bin/bash

npm install -g @angular/cli

ng new bytebank

de dentro do container
ng serve --host 0.0.0.0

npm start

guide:
- formsmodule