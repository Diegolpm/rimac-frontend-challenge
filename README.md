# Rimac Frontend Challenge

## 📋 Descripción del Proyecto

Este proyecto es una solución al Frontend Challenge de Rimac, enfocado en crear una aplicación web moderna que demuestre habilidades en desarrollo frontend utilizando las mejores prácticas y tecnologías actuales.

## 🚀 Características Principales

- ✅ Diseño responsive y mobile-first
- ✅ Interfaz de usuario intuitiva y accesible
- ✅ Integración con APIs
- ✅ Gestión de estado eficiente
- ✅ Componentes reutilizables
- ✅ Optimización de rendimiento
- ✅ Pruebas unitarias

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework:** React
- **Lenguaje:** TypeScript/JavaScript
- **Estilos:** CSS Modules/Styled Components
- **Gestión de Estado:** Context API
- **Testing:** Jest/Vitest + Testing Library
- **Build Tool:** Vite/Webpack
- **Linting:** ESLint + Prettier

## 📁 Estructura del Proyecto

```
src/
├── shared/             # Compartidos
│   ├── components/     # Componentes reutilizables
│   └── utils/          # Funciones utilitarias
├── pages/              # Páginas de la aplicación
├── services/           # Servicios para APIs
├── store/              # Gestión de estado global
├── utils/              # Funciones utilitarias
├── types/              # Definiciones de tipos TypeScript
├── styles/             # Estilos globales
└── assets/             # Recursos estáticos
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm/yarn/pnpm

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Diegolpm/rimac-frontend-challenge.git
   cd rimac-frontend-challenge
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**

   ```bash
   cp .env.example .env.local
   ```

   Edita el archivo `.env.development` con tus configuraciones.

4. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📝 Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye la aplicación para producción
npm run preview      # Vista previa de la build de producción
npm run test         # Ejecuta las pruebas
npm run test:watch   # Ejecuta las pruebas en modo watch
npm run lint         # Ejecuta el linter
npm run lint:fix     # Corrige errores de linting automáticamente
npm run type-check   # Verifica los tipos TypeScript
```

## 🎨 Funcionalidades Implementadas

### ✅ Funcionalidades Completadas

- [ ] Página de inicio con diseño responsivo
- [ ] Formulario de cotización de seguros
- [ ] Validación de formularios en tiempo real
- [ ] Integración con API de Rimac
- [ ] Manejo de estados de carga y error
- [ ] Navegación entre pasos del proceso
- [ ] Resumen de cotización
- [ ] Diseño mobile-first
- [ ] Optimización de imágenes
- [ ] Accesibilidad web (WCAG)

### 🔄 En Desarrollo

- [ ] Funcionalidad adicional 1
- [ ] Funcionalidad adicional 2

````

## 📱 Responsive Design

La aplicación está optimizada para:

- 📱 **Mobile:** 320px - 768px
- 📱 **Tablet:** 768px - 1024px
- 🖥️ **Desktop:** 1024px+

## 🌐 Navegadores Soportados

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)

## 🚀 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Configura las variables de entorno

## 🔧 Configuración Adicional

### Variables de Entorno

```env
VITE_API_BASE_URL=https://rimac-front-end-challenge.netlify.app/api
VITE_APP_NODE_ENV=development
VITE_APP_BASENAME=/rimac
````

### Configuración de IDE (VS Code)

Extensiones recomendadas:

- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Equipo de Rimac por proporcionar este desafío técnico
- Comunidad de desarrolladores por las mejores prácticas
- Recursos y documentación utilizados en el desarrollo

---

**Frontend Challenge de Rimac**
