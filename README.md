## Running the app

install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project ADR:

1. Frameworks:

-   Next.js and React.
    Low entry point to use and learn, and has a lot of community support.
    Easy to deploy and maintain.

2. Styling: SCSS modules.

-   project is using next-fonts with mapping variables within the main layout (/src/app/layout)
    Modular styles with sass preprocessors support. Allows to create complex styling structures that could be shared across the project. Modularity provides a good developer experience and separation of concerns.

3. State management:

-   React-query.
    Even in this MVP project, mocks has been created to simulate async data flows.
    React-query provides a good developer experience and a lot of features to manage async data including caching, prefetching on the server and more.
    Hooks used for async data fetching are easy to use and understand and handles data refreshing out of the box.

4. Project structure:

-   The project is structured in a way that allows to scale and maintain it easily.
-   Components are splitted to be as small as possible and to be easy to understand and maintain.
-   Main parts of the page represents as separate page modules within /src/components folder.
-   Components are separated in a way that allows to reuse them across the project. Reusable components can be found within the src/components/common folder.
-   services are treated separately and are located in the src/services folder. This allows to separate the business logic from the components and to reuse the services across the project.

5. API:

-   Mocks within public folder (JSON files, /data).
-   HTTP Client decoupling: services utilities (/src/services/utils) are used to handle the data fetching and to provide a consistent way to handle the data across the project. Decouples the HttpClient (fetch) from the components to make it easy to change by providing custom API and error handling.
-   video file served from public folder.

6. Player:

-   Video player is a custom implementation just for MVP and presentation purposes. For production development, it should be investigated and used a third-party library which is well tested and more reliable.

7. Testing:

-   vitest recommended for unit and integration testing. For this MVP, testing has been abandoned. Tests must be provided for the production development.

8. Linting:

-   ESLint and Prettier are used to provide a consistent code style and to catch the errors before the code is executed.

9. Deplyment:

-   github actions pipeline deployment to vercel has been set up.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
