# Welcome to your Expo app 👋

## Stack Navigation Added

This project now includes a minimal "Stack" navigation example implemented with `expo-router` (file-based routing that ships with Expo). The goal is to provide a small, easy-to-explain example you can use to teach how stack navigation works.

- **What I added**:

  - `app/_layout.tsx`: Defines a `Stack` with two screens (`index` and `details`).
  - `app/index.tsx`: A simple Home screen with a button that navigates to the Details screen.
  - `app/details.tsx`: A Details screen with a button that navigates back.

- **How the Stack works (simple explanation you can show others)**:

  - A stack navigator arranges screens in a stack (like a stack of cards).
  - Navigating to a new screen pushes it onto the stack (`router.push('/details')`).
  - Going back pops the top screen off the stack (`router.back()`), revealing the previous screen.
  - The layout (`app/_layout.tsx`) declares which files are part of the stack; each screen file becomes a route.

- **Files to show during an explanation**:

  - `app/_layout.tsx` — shows how the `Stack` and `Stack.Screen` entries are declared.
  - `app/index.tsx` — shows `router.push('/details')` to push a new route.
  - `app/details.tsx` — shows `router.back()` to pop the route.

- **Run the project**:

  ```bash
  npm install
  npx expo start
  ```

  Open on an emulator/device or Expo Go. From the Home screen, press "Go to Details" to push the Details screen; press "Go Back" to pop it.

## Replacements, Nested Stack and Transitions

I replaced the `Pressable` buttons with `Link` components from `expo-router` so navigation is declarative and easier to demonstrate.

- **Nested stack example**:

  - `app/profile/_layout.tsx` declares a nested `Stack` that contains `app/profile/index.tsx` and `app/profile/details.tsx`.
  - From the Home screen you can navigate to `/profile` which opens the nested stack's index. From there you can open `/profile/details` which is configured with `presentation: 'modal'`. That shows a different transition (modal) to illustrate how nested navigators can have their own presentation/animation styles.

- **What to show while explaining**:

  - Root `Stack` (`app/_layout.tsx`) — shows main app stack.
  - Nested `Stack` (`app/profile/_layout.tsx`) — shows nested navigator with modal presentation on one screen.
  - `Link` usage — `app/index.tsx` and the `profile` pages show how to navigate declaratively with `Link`.

- **Notes on animations**:
  - `presentation: 'modal'` (used on `app/profile/details.tsx`) causes the native stack to present the screen modally, producing a distinct transition on iOS/Android.
  - You can further customize transitions using `screenOptions` and React Navigation/native-stack config if you want specific animations like `slide_from_right`, `fade`, etc.
