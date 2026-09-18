# Mini Blog Project

A small internal blog platform foundation built with React, TypeScript, and Vite for the Dev Insights team.

The project demonstrates reusable React components, TypeScript interfaces and props, CSS styling, conditional styling, React performance optimization, and a Higher-Order Component (HOC).

## Technologies Used

* React 19
* TypeScript 6
* Vite 8
* React DOM
* Oxlint

The application source code is written in TypeScript and TSX. No JavaScript or JSX source files were used.

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed on your machine.

### Installation

Clone the repository and move into the project directory:

```bash
git clone https://github.com/fiyinalu/Mini-Blog-Project.git
cd Mini-Blog-Project
```

Install the project dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

### Build the Project

To create a production build:

```bash
npm run build
```

The build command runs the TypeScript compiler before creating the Vite production bundle.

### Lint the Project

```bash
npm run lint
```

Oxlint is used to check the project source code for common problems.

### Preview the Production Build

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.css
│   ├── Post/
│   │   ├── Post.tsx
│   │   └── Post.css
│   └── PostList/
│       ├── PostList.tsx
│       └── PostList.css
├── hoc/
│   └── withLogger.tsx
├── types/
│   └── Post.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Components

### Header

The `Header` component provides the Dev Insights branding and a navigation link for creating a new post.

### PostList

`PostList contains three hardcoded sample posts directly within the component, as required by the project specification. Each post is represented using the shared `Post` interface and rendered with a unique `id` as its React key.

### Post

`Post` is a reusable component that displays a post's title, author, content preview, and date.

The component was implemented as a functional component because it only needs to receive props and render content. It does not require local state or class lifecycle methods, so a class component would add unnecessary complexity.

### App

`App` is the root component. It renders the `Header` and `PostList` components.

## TypeScript

The blog post data is described using a TypeScript interface:

```ts
export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
}
```

The `Post` component also defines typed props so that it can only receive a correctly structured post object.

## Styling

The project demonstrates multiple styling approaches.

### External CSS

Component-specific styles are stored in separate CSS files:

* `Header.css`
* `Post.css`
* `PostList.css`

Global and application-level styles are handled by:

* `index.css`
* `App.css`

### Inline Styling

The post date uses an inline style to make the date italic:

```tsx
style={{ fontStyle: 'italic' }}
```

### Conditional Styling

Victor Akin-Oladiran's post receives a highlighted border and background based on the author:

```tsx
const isHighlighted = post.author === 'Victor Akin-Oladiran';
```

The resulting class is applied conditionally to the post card.

## Optimization

The reusable `Post` component is optimized with `React.memo`:

```tsx
export default memo(Post);
```

This allows React to skip rendering the component when its props have not changed.

The post list also uses a unique key for every rendered post:

```tsx
<Post key={post.id} post={post} />
```

Using the post's unique `id` gives React a stable identifier for each list item.

## Higher-Order Component

The project includes a reusable `withLogger` Higher-Order Component.

`withLogger` uses `useEffect` to log when the wrapped component mounts and when it unmounts:

```text
Header mounted
Header unmounted
```

The HOC is applied to the `Header` component:

```tsx
export default withLogger(Header, 'Header');
```

This demonstrates how a Higher-Order Component can add behavior to an existing component without changing its main rendering logic.

## Challenges and Solutions

### Removing the Vite starter content

The initial Vite project included starter assets and example application code that were not needed for the Mini Blog project. These were removed and replaced with the assignment's own component structure.

### TypeScript syntax error while building PostList

During development, the `PostList.tsx` file temporarily contained a missing closing brace, which caused the TypeScript build to fail with an unexpected end-of-file error.

The component was corrected and the production build was run again to verify the fix.

### Keeping the implementation TypeScript-only

Because the assignment specifically requires TypeScript rather than JavaScript, the source implementation was kept in `.ts` and `.tsx` files. The source directory was also checked to ensure that no `.js` or `.jsx` files were present.

## External Packages

The application uses the following packages:

### Runtime dependencies

* `react`
* `react-dom`

### Development dependencies

* `typescript`
* `vite`
* `@vitejs/plugin-react`
* `@types/react`
* `@types/react-dom`
* `@types/node`
* `oxlint`

No additional UI framework or component library was required.

## Verification

The project was verified during development using:

```bash
npm run build
npm run lint
```

The application was also manually checked in the browser to verify the layout, navigation link, post rendering, conditional highlighting, and styling.

There is no separate automated test suite in this project because the assessment does not require one.

## Git Workflow

The project was developed incrementally using Git. Changes were grouped into meaningful commits and pushed to the `main` branch as each major stage was completed.

The repository is available on GitHub:

https://github.com/fiyinalu/Mini-Blog-Project