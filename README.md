# PRUEBAS_REGRESION_GHOST_KRAKEN
 
 # Equipo 

| Nombre            | email |
| -------------     | ------------- |
| Elisa Angulo      | e.angulov@uniandes.edu.co  |
| David León        | da.vargasl1@uniandes.edu.co   |
| Camilo Barreiro   | c.barreiroh@uniandes.edu.co  |
| Isaí Oliva        | i.oliva@uniandes.edu.co  |

# Resemblejs

## Pros

1. Permite configurar colores y caracteristicas de imagenes del resultado en el informe
2. Permite realizar las pruebas de regresion visual con diferentes opciones de presentacion,mediante scripts.js 
3. En el reporte la informacion que se presenta permite determinar las caracteristicas de las comparaciones como las diferencias en porcentaje.

## Contras

1. Respecto al reporte que genera se identifica que no se pueden tener configuraciones en los parametros para  realizar una comparacion, esto con ejemplo umbrales para las diferencias entre imagenes.

# Backstop

## Pros

1. Permite configurar los umbrales de prueba con opciones como "misMatchThreshold", que permite al momemto del reporte analizar la informacion de las pruebas de regresión, con las comparaciones que fallan en relación a los umbrales por superar este mismo que fueron configurados en las pruebas previamente.

## Contras

1. Cuando se tiene varias imagenes por analizar puede ser un proceso largo, porque se debe codificar con javascript las pruebas de los escenarios, para poder ejecutar correctamente los analisis de las imagenes y encontrar diferencias para hacer regresión. 

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

[Kraken](https://github.com/ELISAANGULO/pruebaskraken)

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

