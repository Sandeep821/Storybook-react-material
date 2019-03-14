## Storybook for React app using Material UI

--

### Features

- **React Storybook Addons**:

     🔋 [React Storybook Info Addon](https://github.com/storybooks/react-storybook-addon-info) - *show additional <b>information</b> for your stories*

     🔋 [Storybook Addon Notes](https://github.com/storybooks/storybook-addon-notes) - *allows you to write <b>notes</b> for your stories*

     🔋 [Storybook Addon Actions](https://github.com/storybooks/storybook-addon-actions) (included by default) - *the <b>Action Logger</b> addon can be used to display data received by event handlers*

     🔋 [Storybook Addon Knobs ](https://github.com/storybooks/storybook-addon-knobs) - *allows you to <b>edit</b> React props dynamically*

     🔋 [Storybook Addon Material-UI](https://github.com/sm-react/storybook-addon-material-ui) - *provides live <b>theme</b> creating environment to React Storybook*

- **Testing**:

     [<img src="doc/msm.png" alt="Milestone" width="22">](#roadmap) [StoryShots](https://github.com/storybooks/storyshots) - *provides [Snapshot Testing](https://facebook.github.io/jest/blog/2016/07/27/jest-14.html) for React Storybook*
 
     🔋 [Mocha](https://github.com/mochajs/mocha) and [Enzyme](https://github.com/airbnb/enzyme)

- **React ecosystem**:

     🔋 [Material-UI](http://www.material-ui.com/#/) - *via [Storybook Addon Material-UI](https://github.com/sm-react/storybook-addon-material-ui)*
 
     🔋 [React Theme Provider](https://github.com/sm-react/react-theme-provider)

- **Workflow *(via NPM scripts command)*:**

     🔋 Support for Linux, macOS, and Windows

     [<img src="doc/msm.png" alt="Milestone" width="22">](#roadmap) Build your App with [Webpack](https://github.com/webpack/webpack) and [Babel](https://github.com/babel/babel)
 
     🔋 Publish transpiled code into NPM
 
     🔋 Run tests

     🔋 [ESLint](https://github.com/eslint/eslint) with the [Airbnb style guide](https://github.com/airbnb/javascript)
 
     🔋 Deploy your storybook to GitHub Pages

---

### Scripts

All scripts are avalible via `npm run <script_name>`. Mostly executable scripts are located in the '.scripts' folder of your project. In oder to keep it "transparent and friendly" we display a full CLI command which will be executed.

You can list all scripts by `npm run`

<details>
  <summary>
    <b>Linting</b> <br> `npm lint` - lints your code within `src` folder <br> `npm lintfix` - tries to fix linting errors <br>
  </summary>
  
  This project uses [ESLint](https://github.com/eslint/eslint) with the [Airbnb style guide](https://github.com/airbnb/javascript). It has some minor overrides as well. I'll [find](https://github.com/sm-react/storybook-boilerplate/blob/master/.eslintrc) all ESLint settings in `.eslintrc` file located in the root of your project. 
  
  [<img src="doc/npm-lint.png" align="right" class="logo" width="486" title="linting"/>](https://raw.githubusercontent.com/sm-react/storybook-boilerplate/master/doc/npm-lint.png)
  
  This linting scripts will check your code in `*.js` and `*.jsx` files within the `src` folder.
    
  If your IDE supports the linting settings from `.eslintrc` you'll be able to see same issues bouth from IDE and CLI.
  
  **Note**: Some [files](https://github.com/sm-react/storybook-boilerplate/blob/master/src/Intro.jsx#L1-L2) in `src` use the comments to suppress linting errors. It's up to you to continue using them or remove and change code style appropriately.

</details>

--

<details>
  <summary>
    <b>Publish to NPM</b> <br> `npm publish` - publish your code to NPM<br>
  </summary>
  
The publish script first transpille your code to ES5 and put it to `dist` folder, which is cleared before each transpillation.

[<img src="doc/npm-publish.png" align="right" class="logo" width="560" title="publish to NPM"/>](https://raw.githubusercontent.com/sm-react/storybook-boilerplate/master/doc/npm-publish.png)

This project uses [Babel](https://github.com/babel/babel) for transpilling your code with following presets:

- [es2015](http://babeljs.io/docs/plugins/preset-es2015/)

- [stage-0](http://babeljs.io/docs/plugins/preset-stage-0/)

- [react](http://babeljs.io/docs/plugins/preset-react/)

>be careful with stage-0 features because they are far from the final stage!

It's setted up to transpille all `*.js` and `*.jsx` files in your `src` folder, exept `test` and `stories` folders and `*.story.jsx` files.

You'll [find](https://github.com/sm-react/storybook-boilerplate/blob/master/.babelrc) your transpillation settings in the `.babelrc` file located in the root of your project.

In some cases you need only transpille your code, not publish. So use `npm run prepublish` and get you ES5 code in the `dist` folder.

>Transplling your code to ES5 helps to use it in any other projects without warring about babel settings of these projects.
 
**Note**: you need to set at least your own [name](https://github.com/sm-react/storybook-boilerplate/blob/master/package.json#L2) and [version](https://github.com/sm-react/storybook-boilerplate/blob/master/package.json#L3) in `package.json` before publishing. You might want to set other [fields](https://docs.npmjs.com/files/package.json) as well. 
  
  
</details>

--

<details>
  <summary>
    <b>Deploy Storybook</b> <br> `npm run deploy` - deploys your storybook to Github Pages<br>
  </summary>

Now it supports only Github Pages.

[<img src="doc/npm-deploy.png" align="right" class="logo" width="646" title="deploy to Github"/>](https://raw.githubusercontent.com/sm-react/storybook-boilerplate/master/doc/npm-deploy.png)
 
This script uses your `git` remote `origin` url to get your repo. You can check it out by `git remote get-url origin`.
 
**Note** if you get this project by `git clone` command, you need to remove current git settings and add your own repo. If you've already created your Github repo you could setup git this way:

```
rm -rf .git
git init
git remote add origin https://github.com/UserName/RepoName.git
```

You'll find your repo's adress pressing `Clone or download` button at your github repo page.

</details>

--

<details>
  <summary>
    <b>Test</b> <br> `npm run testonly` - runs mocha tests<br> `npm run test-watch` - runs tests continuously<br>
  </summary>

It will find `tests` folder within `src` and run them once.

[<img src="doc/npm-testonly.png" align="right" class="logo" width="613" title="run tests"/>](https://raw.githubusercontent.com/sm-react/storybook-boilerplate/master/doc/npm-testonly.png)
 
**Note**: we have a `svg` file imported in `<Header />` component. This script is [setted up](.scripts/run_tests/mocha_runner.js) to ignore images with such extensions.

`npm run test-watch` - starts to monitor changes in your `js`, `jsx` and `json` files

</details>

--

<details>
  <summary>
    <b>Info</b> <br> `npm run status` - displays summary information about NPM package, linting errors and mocha tests
  </summary>

#### [<img src="doc/npm-status.png" align="right" class="logo" width="764" title="run status"/>](https://raw.githubusercontent.com/sm-react/storybook-boilerplate/master/doc/npm-status.png)

</details>

---

### Contribute

We'll appreciate any help, ideas, issues and feedback!
