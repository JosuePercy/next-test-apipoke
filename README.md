# Prueba Técnica para Desarrollador Frontend con React

El objetivo de esta prueba es evaluar tus habilidades como desarrollador Frontend trabajando con React, así como tu capacidad para utilizar una API pública, estructurar un proyecto, manejar estados, crear componentes reutilizables y desplegar una aplicación. Además, evaluaremos cómo implementas funcionalidades comunes como autenticación básica, manejo de datos dinámicos y diseño atractivo.

---

## Requisitos de la Prueba

### 1. Elegir una API Pública

Puedes seleccionar cualquier API pública gratuita como base de datos para tu proyecto. Algunas sugerencias son:

- [Rick and Morty API](https://rickandmortyapi.com/)
- [Breaking Bad API](https://breakingbadapi.com/)
- [PokeAPI](https://pokeapi.com/)
- O cualquier otra API de tu elección.

### 2. Crear un Proyecto con React

- Utiliza **Create React App**, **Vite**, o cualquier otra herramienta de inicialización.
- Debes usar **JavaScript** o **TypeScript** (a tu elección).

---

## Estructura del Proyecto

El proyecto debe incluir al menos tres páginas principales:

### Página de Login/Registro
- Implementar un formulario básico de inicio de sesión y registro.
- Manejar los datos de usuario de forma local (estado o `localStorage`).
- Validaciones básicas en el formulario (campos requeridos, formato de email válido).

### Página de Inicio (Home)
- Mostrar datos obtenidos desde la API elegida.
- Implementar una barra de búsqueda y filtros para los datos.
- Mostrar imágenes y descripciones de los elementos.

### Página de Creación/Edición
- Crear un formulario para agregar o editar elementos.
- Manejar los datos localmente (no es necesario enviar a la API).
- Mostrar los elementos creados en la página de inicio o en un listado.

---

## Estilización

- Utiliza **CSS puro**, **SASS**, **TailwindCSS** o librerías de estilos como **Material-UI** o **Bootstrap**.
- El diseño debe ser claro y agradable a la vista.

### Opcional: Despliegue
- Despliega la aplicación en **Vercel**, **Netlify** o servicios similares.
- Comparte el enlace de la aplicación desplegada.

---

## Tecnologías Requeridas

- **React**: Librería principal para construir la aplicación.
- **React Router**: Para la navegación entre páginas.
- **Fetch** o **Axios**: Para realizar solicitudes HTTP a la API.

### Manejo de Estado
- Estado local usando `useState` y `useReducer`.
- Opcional: Librerías como **Redux** o **Context API**.

---

## Instrucciones para Realizar la Prueba

### Inicio del Proyecto
Inicializa un proyecto de React con la herramienta de tu preferencia:

```bash
# Usando Create React App
npx create-react-app nombre-del-proyecto

# o con Vite
npm create vite@latest nombre-del-proyecto -- --template react