# Intro

I tried for the first time to use the stack mentioned below.. Previously only use Vue2

Conclusion:

`Vue 3 with Typescript:` Documentation regarding everything needed to properly work is still lacking, but the overall experience is a big improvement from Vue 2 & JS

`Vite:` Awesome tool and so fast!

`Tailwind:` Not a great tool for quick styling, might just as well do inline styling.. Maybe for bigger projects that don't rely on third party component libraries and don't want the flexablitity and functionality of SASS

`Cypress:` I used a very basic test, but would like to explore this for e2e testing more

The lack of styling is due to me wanting to try Tailwind instead of a component/css library which back fired to the time I wanted to work on this.

## Vue 3 + TypeScript + Vite + Tailwind + Cypress

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Running locally

```
yarn

yarn dev

// then open http://localhost:3000
```

## Testing

### Unit Test

Component test uses [vitest](https://vitest.dev/):

```
yarn test
```

### E2E Test

```
yarn test:open-ct

// or

yarn test:run-ct
```