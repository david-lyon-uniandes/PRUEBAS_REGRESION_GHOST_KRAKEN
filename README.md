# PRUEBAS_REGRESION_GHOST_KRAKEN
 
 # Equipo 

| Nombre            | email |
| -------------     | ------------- |
| Elisa Angulo      | e.angulov@uniandes.edu.co  |
| David León        | da.vargasl1@uniandes.edu.co   |
| Camilo Barreiro   | c.barreiroh@uniandes.edu.co  |
| Isaí Oliva        | i.oliva@uniandes.edu.co  |

# Listado de diferencias encontradas Ghost 3.42 - Ghost 5.19.0

| Diferencia Identificada | Descripción detallada | Aplicacion | Evidencia Ghost 3.34 -> Evidencia Ghost 5.19.0 -> diff |
| :---         |     :---:      |          ---: |     :---:      |
| Diferencia en login   | Diferencia en el botón de siging, color y dimensiones de ancho y alto. Diferencia en el tamaño de los unputs de username y password    | Ghost         |![Screenshot 2022-11-18 185440](https://user-images.githubusercontent.com/111364928/202816586-c1e19fa6-066e-49d4-bbbf-6a6d1d4dc414.jpg)|
| Diferencia en barra de navegación y el header     | En el header, en la posición de las secciones para consultar o filtrar un post, diferencia en el botón de new post en cuanto al color, diferencia en el simbolo de sección de post , diferencia de la presentación de los posts creados. | Ghost         |![Screenshot 2022-11-18 185719](https://user-images.githubusercontent.com/111364928/202816810-1a01b634-4ac6-48b1-9b8a-dee580961c4c.jpg) |
| Diferencia en crear posts    |el botón de back (post) el color de la fuente es diferente, en la nueva versión esta la opción de colocar imagen antes del título, mno hay botón de publish en la nueva versión y cambio la fuente| Ghost         |![Screenshot 2022-11-18 185918](https://user-images.githubusercontent.com/111364928/202816987-5cf36ca7-6f05-435a-8411-ed776ea1ff48.jpg)|
| listado de paginas   | El botón de new post, no se tiene la columna de title, los botones de los filstros son diferentes, | Ghost         |![Screenshot 2022-11-18 190056](https://user-images.githubusercontent.com/111364928/202817193-389d2dd6-13a8-4447-a044-dc9d226a889a.jpg)|
| Edición de páginas     | Para editar una pagin las diferencias son: En la version 3.42 no tiene la opcion de agregar imagen, en la nueva version el titulo es mas grande que la vieja version, el boton del color de page es azul para la version 3.42 y para la nueva version es negro   , en la esquina inferior de la version 5.19 tiene un indicar de cantidad de palabras y finalmente el simbolo de configuración es diferente.  | Ghost         |![Screenshot 2022-11-18 190154](https://user-images.githubusercontent.com/111364928/202817290-210e34ca-f53a-45db-9a12-313865e1af72.jpg)|
| crear páginas     | Para crear paginas las diferencias son: En la version 3.42 no tiene la opcion de agregar imagen, en la nueva version el titulo es mas grande que la vieja version, el boton del color de page es azul para la version 3.42 y para la nueva version es negro   , en la esquina inferior de la version 5.19 tiene un indicar de cantidad de palabras y finalmente el simbolo de configuración es diferente.      | Ghost         |![Screenshot 2022-11-18 190341](https://user-images.githubusercontent.com/111364928/202817465-9f4bf4c5-4b68-44fd-b049-1d404aeb9155.jpg)|

# Reportes

[Escenario 1 y 2](https://uniandes-my.sharepoint.com/:w:/g/personal/da_vargasl1_uniandes_edu_co/EZcX7cm9yhlNvq4bDLYuxhkB_wF76dtIaLq6UvA1tMpClg?e=C4ySrE)
<br/>

# Escenarios implementados en Kraken 🐙 y analizados en Backstop JS

<table align="center">
<tr align="center">
<th><center>Funcionalidad</center></th>
<th><center>Escenarios</center></th>
<th><center>Estado</center></th>
</tr>
<tr align="center">
<th rowspan="4"><center> Crear post</center></th>
<td>Crear posts</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Funcionalidad_Crear_Post">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear post sin titulo y con contenido</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Funcionalidad_Crear_Post">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear un post sin titulo ni contenido</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Funcionalidad_Crear_Post">Click aqui</a></td>
</tr>
<tr align="center">
</tr>
<tr align="center">
<th rowspan="4"><center>Crear pagina</center></th>
<td>Crear pagina </td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Pagina_Nueva">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear pagina sin titulo y con contenido</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Pagina_Sin_Titulo_Con_Contenido">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear pagina vacia</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Pagina_Vacia">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear pagina con titulo y descripcion</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_pagina_con_titulo_con_descripcion">Click aqui</a></td>
</tr>
<tr align="center">
<th rowspan="4"><center> Crear tags</center></th>
<td>Crear tags sin nombre</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Tag_Sin_Nombre">Click aqui</a></td>
</tr>
<tr align="center">
</tr>
<tr align="center">
</tr>
</tr>
<tr align="center">
<th rowspan="4"><center> Crear usuario</center></th>
</tr>
<tr align="center">
<td>Registrar usuario con un email erroneo</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Usuario_Email_Incorrecto">Click aqui</a></td>
</tr>
</table>

# Repositorios

[Kraken 5.19](https://github.com/ELISAANGULO/pruebaskraken)
<br/>
[Kraken 3.42](https://github.com/CBarreiro22/Ghost3.2-test)

# Ejecución Backstop JS

1. Instalar las dependencias

```shell
npm install -g backstopjs
```

2. Ejecutar Script

```shell
npm run script
```

3. Ejecutar comando

```shell
backstop reference
```

4. Ejecutar comando

```shell
backstop test
```
## Reporte

Para ver el reporte de click en este [link](https://github.com/david-lyon-uniandes/PRUEBAS_REGRESION_GHOST_KRAKEN/releases/tag/v.1.1.0) y descargue el release y una ves descomprimida la carpeta vaya al directorio ./backstop_data/html_report/ y abra el archivo index.html en el browser:

