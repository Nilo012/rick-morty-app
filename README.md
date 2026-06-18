# 🚀 Demo
* **Ver proyecto en vivo:** [Rick and Morty app](https://rick-morty-app-livid.vercel.app/)


# 🚀 Rick and Morty App

Esta es una aplicación web interactiva desarrollada con **React** y **Vite** que permite explorar y buscar personajes de la famosa serie animada Rick and Morty, consumiendo datos directamente desde la [Rick and Morty API](https://rickandmortyapi.com/).

## ✨ Características Principales

* **Búsqueda en tiempo real:** Filtra personajes por nombre de manera rápida.
* **Navegación paginada:** Explora todos los resultados mediante un sistema de paginación robusto.
* **Diseño Responsivo:** Interfaz adaptada tanto para dispositivos móviles como para equipos de escritorio.
* **Arquitectura Limpia:** Uso de componentes modulares y CSS Modules para una fácil escalabilidad.

## 🛠 Tecnologías Utilizadas

* **Framework:** [React](https://reactjs.org/) (Vite).
* **Estilos:** [CSS Modules](https://github.com/css-modules/css-modules).
* **Icons:** [react-icons](https://react-icons.github.io/react-icons/).
* **Gestión de Estado:** `useState` y `useEffect` de React.

## 📁 Estructura del Proyecto

```text
src/
├── assets/           # Recursos estáticos (imágenes)
├── components/       # Componentes reutilizables
│   ├── Character.jsx         # Card individual de personaje
│   ├── CharacterList.jsx     # Orquestador de la lista
│   ├── Footer.jsx            # Pie de página persistente
│   ├── Pagination.jsx        # Controles de navegación
│   └── Search.jsx            # Barra de búsqueda
├── data/             # Lógica de conexión (httpClient)
└── App.jsx           # Componente raíz



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
