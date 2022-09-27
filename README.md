# AarcoWebMVC
sitio web diseñado en core mvc

# funcionalidades
1. obtiene las marcas y los agrega a un select
2. conforme la marca se selecciona, filtra sus submarcas que tiene relacion con marca.
3. conforme se seleccione una sub marca filtra los modelos sub marca a relacion a la submarca
4. consulta el codigo postal y obtiene el estado, municipio y colonia.

# bugs
1. la tabla Descripciones no tiene una relacion correcta con ModelSub, esta un avance en el algoritmo para poder limpiarlos, no se finalizado aun.
2. no realiza la cotizacion a causa de la falta de descripciones.
3. no es bug pero un mejor diseño vendria mejor

# como instalarlo
1. al abrir visual studio existe la opcion de cargar un proyecto de github, a lo cual solo bastaria en cargar este repositorio.

# notas
1. tiene hardcoding en el script de marcas.js, estan comentadas con // hardcoding
2. para que funcione se necesita montar la api y pasar las urls del hardcoding :,c
