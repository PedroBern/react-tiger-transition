# Contributing

Thanks for helping improve React Tiger Transition!

All kinds of contributions are welcome:

- Bug fixes
- Documentation improvements
- More transitions
- More examples
- New features
- Refactoring

## Getting started

If you have a specific contribution in mind, be sure to check the [issues](https://github.com/PedroBern/react-tiger-transition/issues) and [projects](https://github.com/PedroBern/react-tiger-transition/projects) in progress - someone could already be working on something similar and you can help out.

## Project setup

Fork the repository, clone the fork to your local machine and install dependencies:

```bash
git clone https://github.com/<your_github_username>/react-tiger-transition.git
cd react-tiger-transition
npm install
```

## Running tests

After developing, you can run tests with:

```bash
npm run test
npm run cover
npm run test:watch
```

## Documentation

You can create new documentation files to be consumed by the website with:

```bash
npm run doc
```

The files inside the `assets` folder are available as `docsAssets/<filename>.md` on the website.

## Website

Install dependencies:

```bash
cd website
npm install
```

Run local server:

```bash
npm run start
```

Build:

```bash
npm run build:server
```

### New examples

Create your example in a single file, you can use the [codesandbox](https://codesandbox.io/).

Copy the file and paste it inside the `documentation/examples/` folder.

Then on the website `src/pages/exanoles/assets` file add it to the `assets` variable following the pattern.
