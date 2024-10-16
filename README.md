Generar una clave privada

openssl genrsa -des3 -out rootCA.key 4096

Ahora creamos el certificado a aprtir de dicha key, este el certificado que ponderemos en el ordenador

openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.crt

Ahora creamos el certificado y la clave que son los que pondemos en el servidor express, lo primero crear una key

openssl genrsa -out express.key 2048

y Despues generar el certificado con dicha key

openssl req -new -key express.key -out express.csr

Con esto ya podemos firmar el certificado que usaremos en el express con su clave privada

openssl x509 -req -in express.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out express.crt -days 500 -sha256

para ver el contenido

openssl x509 -in express.crt -text -noout
