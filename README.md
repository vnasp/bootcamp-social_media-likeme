# Galería de Arte

Galería interactiva de arte donde los usuarios pueden compartir sus obras, dar like/dislike y participar en concursos. Incluye autenticación con Google mediante Firebase y almacenamiento de imágenes en la nube.

> Nota: Este es un proyecto académico desarrollado durante el Bootcamp Full Stack JavaScript de Desafío LATAM. Variante con Firebase del proyecto LikeMe.

## Vista previa

[Ver en GitHub Pages](https://vnasp.github.io/bootcamp-social_media-likeme/)

## Funcionalidades

- Subir y eliminar obras de arte propias
- Sistema de like/dislike con contador de votos
- Autenticación con Google (Firebase Auth)
- Almacenamiento de imágenes en Firebase Storage
- Base de datos NoSQL con Firestore
- Galería responsiva con Material UI

## Tecnologías

- React 18
- React Router 6
- React Context API
- Material UI (MUI)
- Firebase (Auth, Firestore, Storage)
- Vite

## Estructura del Proyecto

```
src/
├── components/
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ImagesAll.jsx
│   ├── ImagesEdit.jsx
│   ├── ImagesLike.jsx
│   ├── ImagesUpload.jsx
│   ├── ImagesUser.jsx
│   ├── LogOutButton.jsx
│   ├── LoggedHeader.jsx
│   ├── Login.jsx
│   └── SnackbarItem.jsx
├── contexts/
│   ├── AuthContext.jsx
│   └── ImagesContext.jsx
├── views/
│   ├── Dashboard.jsx
│   └── Home.jsx
├── App.jsx
└── main.jsx
```
