# Contributing to Lesesalen

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of pointers, guidelines and guides to help you contribute
to [lesesalen.com](https://lesesalen.com).

## Table of Contents

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [Contributing to Lesesalen](#contributing-to-lesesalen)
  - [Table of Contents](#table-of-contents)
  - [Getting started](#getting-started)
    - [How can I contribute?](#how-can-i-contribute)
  - [Learning Gatsby](#learning-gatsby)
    - [🚀 Quick start](#🚀-quick-start)
    - [🧐 What's inside?](#🧐-whats-inside)
    - [🎓 Learning Gatsby](#🎓-learning-gatsby)
    - [💫 Deploy](#💫-deploy)

<!-- markdown-toc end -->

## Getting started

Lesesalen is a community project where we try to gather news, guides and notes
from courses. It's a React webapplication written using a framework called
Gatsby, using TypeScript, Markdown/MDX and styled-components. To get started,
you should be somewhat familiar with React and JavaScript, if you're not you can
get started with the official [React
Tutorial](https://reactjs.org/tutorial/tutorial.html) to get a feel for how it
works.

### How can I contribute?

You can either report issues that you find by browsing the website, or by
attempting to fix those issues, adding or updating content that already exists
or reaching out to any of the members of the `@lesesalen` organization. If you
are looking for good starting points, issues marked with [`good first issue`](https://github.com/lesesalen/lesesalen/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+issue%22)
are a good way to get started as these are often quick and easy fixes.

## Learning Gatsby

### 🚀 Quick start

1.  **Start developing.**

    Fork this repository, pull the code, then run:

    ```shell
    cd lesesalen/
    yarn
    yarn start
    ```

1.  **Open the source code and start editing!**

    Your site is now running at [`http://localhost:8000`](http://localhost:8000)!

    _Note: You'll also see a second link: _[`http://localhost:8000/___graphql`](http://localhost:8000/___graphql)_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `lesesalen` directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!

### 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

### 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

### 💫 Deploy

Once a pull request is opened, netlify will automatically build a snapshot so you can view the changes you made. Sometimes the build breaks even though it works on the dev server, so it's always worth checking and fix it yourself before someone else tells you to.
