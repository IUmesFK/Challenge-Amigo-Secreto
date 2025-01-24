<h1 align='center' >Challenge Amigo Secreto</h1>

   <p align="left">
   <img src="https://img.shields.io/badge/ESTADO-FINALIZADO-green">
   </p>

   <p align='left'>Desarrollo del challenge "Amigo secreto", el mismo consiste en ingresar nombres por medio de un campo para posteriormente sortearlos para determinar quien es el amigo secreto.</p>


<h2>¿Como usar el programa?</h2>

<br>

<p>Puedes usar el programa haciendo click <a href='https://iumesfk.github.io/Challenge-Amigo-Secreto/' target='_blank'>aqui</a> o tambien descargar el archivo .zip haciendo click <a href='https://github.com/IUmesFK/Challenge-Amigo-Secreto/archive/refs/heads/main.zip'>aqui</a></p>

<p>Si descargaste el archivo, debes descomprimirlo en la locación que desees, para ello debes hacer click derecho sobre el archivo descargado y seleccionar la opción 'Extraer aqui'.</p>

![ejemplo extracción](https://github.com/user-attachments/assets/b600f3d9-90b0-41a3-9ce9-54933ca81d51)

<p>Cuando lo extraigas, se creara una carpeta con el nombre 'Challenge-Amigo-Secreto-main', deberas abrir la carpeta y podras ver que hay varios archivos en ella, lo unico que deberas hacer es hacer doble click en el archivo con el nombre 'index'</p>

![archivo index](https://github.com/user-attachments/assets/85036f70-b197-421b-b4e1-57644e5156e1)

<p>¡Y listo! ya podras usar el programa tranquilamente.</p>

<br>

   ## :hammer:Funcionalidades del proyecto

- `Funcionalidad 1`: Agregar amigos al arreglo.
<p>Para agregar cada amigo que el usuario vaya ingresando, se creo la función agregarAmigos(), la misma se encargara de capturar el valor ingresado en la etiqueta input con el id 'amigo' al pulsar el botón 'Añadir'</p>
<p>En caso de que el input este vacio, lanzara una alerta indicando al usuario que ingrese un nombre.</p>
<p>Si el valor ingresado es valido, se usará el método push() en nuestro arreglo para agregar su valor, y una vez agregado, se dejará el campo en blanco, esto para evitar que el usuario tenga que borrar lo ingresado por su cuenta, haciendo el programa menos tedioso de utilizar.</p>
<br>

![Ejemplo 1er función](https://github.com/user-attachments/assets/f73a25cb-0110-4bf6-ade3-d56d70d0b16a)


- `Funcionalidad 2`: Actualizar la lista de amigos.

<p>Como podrá notar en la imagen de abajo, lo que se logra con esta funcionalidad es mostrar en una lista los nombres ingresados por el usuario. Esto se consigue mediante el uso de un bucle `for`, que recorre cada elemento del arreglo `listaAmigos`. En cada iteración, se crea un nuevo elemento de lista (li = list item) y se agrega a la lista HTML correspondiente.</p>

<p>Con esta funcionalidad, cada vez que se invoque a la función que recibe como parametro un arreglo de nombres, se actualizará la lista HTML con los nuevos amigos. Esto permite que la lista en la interfaz de usuario siempre refleje los cambios hechos en el arreglo de amigos.</p>

  ![Ejemplo 2da función](https://github.com/user-attachments/assets/a1eb1abb-09b5-4c6a-b5a1-1ebbd8e561ae)

- `Funcionalidad 3`: Sortear el amigo.

<p>Esta funcionalidad permite realizar un sorteo aleatorio entre los amigos de la lista. Si hay al menos dos amigos en la lista, se selecciona uno al azar y se muestra el nombre del amigo elegido como el "amigo secreto". La selección se realiza mediante la generación de un número aleatorio, que se usa como índice para elegir un amigo de la lista.</p>

<p>Con esta funcionalidad, los usuarios pueden hacer un sorteo aleatorio entre los amigos que se encuentran en la lista. Al hacer clic en el botón 'Sortear amigo', la función selecciona un amigo de manera aleatoria y muestra el resultado en el contenedor HTML designado.</p>

![Ejemplo 3er función](https://github.com/user-attachments/assets/f0db5170-071a-4012-93b1-2c30ea6f13e3)

<br>

<h2 align='center' >Vista completa del programa</h2>

<br>

![image](https://github.com/user-attachments/assets/fe3c0b23-a537-4333-8cb0-2cb9517385e1)
