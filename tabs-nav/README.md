# Welcome to your Expo app 👋

## Qué he añadido (Navegación Tabs)

He añadido una implementación sencilla de navegación por pestañas (Tabs) para que puedas explicar cómo funciona.

- **Archivo principal de layout**: `app/_layout.tsx` — contiene el `Tabs` de `expo-router` con dos rutas: `index` y `settings`.
- **Pantallas de ejemplo**: `app/index.tsx` (Home) y `app/settings.tsx` (Settings).

La implementación usa `expo-router` para generar la navegación basada en archivos. Cada pantalla está representada por un archivo en `app/` y `app/_layout.tsx` define las pestañas que se muestran en la barra inferior.

## Cómo funciona (explicación breve)

- **File-based routing**: `expo-router` enlaza automáticamente rutas con archivos. `app/index.tsx` se convierte en la ruta `/` y `app/settings.tsx` en `/settings`.
- **Layout con Tabs**: `app/_layout.tsx` exporta un componente que devuelve `<Tabs>`. Cada `Tabs.Screen` referencia el nombre del archivo de la pantalla.
- **Iconos y opciones**: En `app/_layout.tsx` se usan iconos de `@expo/vector-icons` para las pestañas y se configuran opciones como `title` y `tabBarIcon`.

## Ejecutar la app

Instala dependencias y ejecuta la app como de costumbre:

```bash
npm install
npx expo start
```

Abre el proyecto en Expo Go o en un simulador/emulador. Deberías ver la barra de pestañas con "Home" y "Settings" en la parte inferior (o en la posición propia de la plataforma).

## Qué mostrar al explicar Tabs

- **Estructura**: muestra `app/_layout.tsx` y los archivos en `app/` para explicar el mapeo archivo → ruta.
- **Navegación**: haz clic en las pestañas para cambiar de pantalla y señala que no hace falta enlazar rutas manualmente.
- **Extensiones**: puedes añadir más archivos en `app/` y añadir más `Tabs.Screen` si quieres controlar el orden u opciones.
