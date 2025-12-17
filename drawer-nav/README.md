# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Navegación Drawer añadida (explicación)

He añadido una implementación simple de navegación tipo "Drawer" para que puedas explicar su funcionamiento:

- **Dependencia añadida:** `@react-navigation/drawer` (ya contabas con `@react-navigation/native` y las librerías necesarias de `react-native`).
- **Archivos creados/modificados:**
  - `app/_layout.tsx` — componente raíz que envuelve un `NavigationContainer` y crea el `Drawer.Navigator`.
  - `app/HomeScreen.tsx` — pantalla de ejemplo "Home" con un botón que abre el Drawer.
  - `app/SettingsScreen.tsx` — pantalla de ejemplo "Settings" con un botón que cierra el Drawer.

Cómo funciona (resumen para explicar a otras personas):

- Un _Drawer Navigator_ muestra una lista de rutas en un panel lateral (drawer) que se puede abrir deslizando desde el borde izquierdo o con un control (botón) dentro de la UI.
- El `NavigationContainer` mantiene el estado de navegación. Dentro de él, `createDrawerNavigator()` define las rutas disponibles.
- Cada pantalla es un componente React normal que recibe el objeto `navigation` (para abrir/ cerrar/ cambiar rutas).

Ejemplo mínimo (lo que implementé):

- `app/_layout.tsx` crea el Drawer con dos pantallas: `Home` y `Settings`.
- En `HomeScreen` llamo a `navigation.toggleDrawer()` y en `SettingsScreen` a `navigation.closeDrawer()` — esto demuestra cómo controlar el drawer desde la UI.

Cómo probarlo

1. Instala dependencias:

```bash
npm install
```

2. Inicia Expo:

```bash
npx expo start
```

3. Abre la app en un emulador o en Expo Go. Para abrir el Drawer en la app puedes:

- Deslizar desde el borde izquierdo de la pantalla (gesto típico).
- Pulsar el botón "Abrir Drawer" en la pantalla de `Home` que añadí.

Notas y limitaciones

- Esta implementación es intencionalmente simple para propósitos didácticos. En un proyecto real podrías añadir iconos, secciones anidadas, elementos de perfil en el drawer y estilos personalizados.
- Si usas `react-native-reanimated` en Android nativo, asegúrate de seguir la configuración de la librería (plugin de Babel). En Expo Managed suele venir preconfigurado para las versiones compatibles.
