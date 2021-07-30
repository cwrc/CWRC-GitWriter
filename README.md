# CWRC-GitWriter

![Picture](http://cwrc.ca/logos/CWRC_logos_2016_versions/CWRCLogo-Horz-FullColour.png)

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

The code in this repository serves two purposes:

1. To back the sandbox deployment: [https://cwrc-writer.cwrc.ca/](https://cwrc-writer.cwrc.ca/)

2. To provide an example configuration of the CWRC-Writer for those who might like to substitute a different storage or lookup system.

## Table of Contents  

1. [Overview](#overview)
2. [Use](#use)
3. [Installation](#installation)
4. [Development](#development)
5. [Authentication](#authentication)
6. [Contributing](#contributing)
7. [License](#license)

### Overview

![High Level Overview](/docs/images/cwrc-gitwriter-overview.svg)

As you can see from the overview diagram, CWRC-GitWriter is the parent package which collects and configures the various child packages. While [CWRC-WriterBase](https://github.com/cwrc/CWRC-WriterBase) provides the primary editing functionality, it requires both storage and entity lookup packages, which in this case are [cwrc-git-dialogs](https://github.com/cwrc/cwrc-git-dialogs) and [CWRC-PublicEntityDialogs](https://github.com/cwrc/CWRC-PublicEntityDialogs).

Although the sandbox version provides a freely usable instance, you may of course install an instance of the CWRC-GitWriter on your own server. CWRC-GitWriter also requires a running instance of [CWRC-GitServer](https://github.com/cwrc/CWRC-GitServer), which in turn interacts with GitHub through the [GitHub API](https://developer.github.com/v3/).

Note that if you want to create a new version of the CWRC-Writer that is configured to work with your own document repository (e.g., a database), this repository still provides you with the best example to follow. You'll also want to look at the [cwrc-git-dialogs](https://www.npmjs.com/package/cwrc-git-dialogs) repository, which holds

The javascript class that handles calls to the backend storage, in this case to Github via the CWRC-GitServer. This is the class you'd want to replace with your own. To replace the entity lookups you'd replace [cwrc-public-entity-dialogs](https://www.npmjs.com/package/cwrc-public-entity-dialogs)

## Use

A running deployment of the code in this repository is available for anyone's use at: [https://cwrc-writer.cwrc.ca](https://cwrc-writer.cwrc.ca)

## Building

There are two approached to install the [sandbox version of the CWRC-GitWriter](https://cwrc-writer.cwrc.ca).

1. Install the dockerized verion of Git-Server/Git-Writer (**recommended**). The instruction for this approach is descibed in the [CWRC-GitWriter-Docker repo](https://github.com/cwrc/CWRC-GitWriter-Docker).
2. Manually install each component. Instruction is down below:

This repository contains a JS file — the [app file](src/js/app.js), and a JSON file — the [config file](config/config.json). The app file does not contain much code itself; it's main purpose to load/require other code bases, and then configure and instantiate the CWRC-Writer. It must first be built in order to be useable. To build:

- Download the code for this repository, or clone the repository
- Install all the NPM package dependencies: `npm install`
- Check the `config.json file`. Provide the necessary information/customization. See below.
- Use Webpack to package it up for deployment: `npm run build`

The built code resides in the newly created build directory. It contains the app, along with all the necessary CSS, XML, and image files. To deploy the CWRC-GitWriter simply copy the build directory to your server, probably the same server from which you'd serve the [CWRC-GitServer](https://github.com/cwrc/CWRC-GitServer). You might choose to use ftp, scp, rsync, etc. An example rsync command might be:

Alternately, if your server has Git and npm support you can clone and build this repository directly on your server.

### Config file

#### cwrcRootUrl

The path where CWRC-GitWriter is located on the server. Default `""`

#### nerveUrl

Nerve url. Default `"https://localhost/nerve/"`

#### validationUrl

Validator url. Default `"https://localhost/validator/validate.html"`

#### helpUrl

Help url. Default `"https://cwrc.ca/Documentation/CWRC-Writer"`

#### lookups

##### geonames

Provide a GeoNames username. Default `""`
Note that if a username is not provided, CWRC-Git-Writer will throw an error when trying to access GeoNames.

You can create a free user account here account: [https://www.geonames.org/login](https://www.geonames.org/login)

#### schema

#### proxyXmlEndpoint

The endpoint path to make call request for schemas xml files. Default: `"./schema/xml/"`
The schema is requested as the 'xml' parameter. eg. `"./schema/xml/:url"`

#### proxyCssEndpoint

The endpoint path to make call request for schemas css files. Default: `"./schema/css/"`
The schema is requested as the 'css' parameter. eg. `"./schema/css/:url"`

##### schemas

A list of schemas made available on CWRC-Writer. **Default list of schemas**: CWRC Basic TEI, Events, Biography, Writing, CWRC Entry, EpiDoc, TEI All, TEI Corpus, TEI Manuscript, TEI Speech, TEI Lite, Moravian Lives (TEI).

Each schema is am object with the following information:

```js
{
  id:  `${uniqueID}`,
  name:  `${name}`,
  schemaMappingsId: `${one_of_the_following['tei', 'orlando', 'cwrcEntry', 'teiLite']}`,
  xmlUrl: [`${list_of_URI}`],
  cssUrl: [`${list_of_URI}`]
}
```

## Development

### Using this code as an example to build a CWRC-Writer with a different backend

The code in this repository brings together and configures code from other repositories and wouldn't in itself typically be usefully modified. You could, however, clone this repository as a base from which to create a new configuration of the CWRC-Writer, or simply use the code here as a guide in creating your own configuration. Your configuration might, for example, use Fedora to store documents, rather than GitHub.

### npm and webapack

The code in this repository simply brings together and configures code from other repositories and wouldn't in itself typically be usefully modified. You could, however, clone this repository as a base from which to create a new configuration of the CWRC-Writer, or simply use the code here as a guide in creating your own configuration. Your configuration might, for example, use Fedora to store documents, rather than GitHub.

CWRC-GitWriter uses [NPM](https://www.npmjs.com) both for dependency management and for running it's main build script. The build script in turn uses [Webpack](https://webpack.js.org/) to bundle all code into the single [build/js/app.js](build/js/app.js) file. The [package.json](package.json) file contains the script for invoking Webpack as well as the full list of NPM packages required.

The entry point into the CWRC-GitWriter code, on which Webpack is invoked, is [src/js/app.js](src/js/app.js) which uses [node.js module loading](https://nodejs.org/api/modules.html) to 'require' - either from the [NPM public registry](https://www.npmjs.com) or from local files - the bits and pieces that make up the CWRC-GitWriter, and plug them together. [Webpack](https://webpack.js.org/) resolves all the 'require' statements, and bundles all the code, including NPM packages and local files, into a single javascript file that is loaded into the web browser.

To develop a new configuration of the CWRC-Writer, you'll therefore need to understand NPM and Webpack. Then you can get into the CWRC-GitWriter NPM [package.json](package.json) file and [src/js/app.js](src/js/app.js) and adapt it to your own project.

The [src/js/app.js](src/js/app.js) file imports the following npm CWRC packages:

- [CWRC-WriterBase](https://www.npmjs.com/package/cwrc-writer-base)
The CWRC-Writer editor

- [cwrc-git-dialogs](https://www.npmjs.com/package/cwrc-git-dialogs)
The javascript class that handles calls to the backend storage, in this case to Github via the CWRC-GitServer. This is the class you'd want to replace with your own.

- [cwrc-public-entity-dialogs](https://www.npmjs.com/package/cwrc-public-entity-dialogs)
The javascript class that handles lookups of named entities. You may want to replace this with your own entity lookup

The app.js file also imports a config file:

- [src/js/config/config.json](src/js/config/config.json)

A JSON file that provides the basic configurations to CWRC-GitWriter. It also describes the XML schemas supported.

- The [src/js/app.js](src/js/app.js) file ties all these together as you would for your own configuration of the CWRC-Writer.

Note that the authentication for Github is invoked in app.js since it redirects to the GitHub site if the user isn't loaded. Better to redirect here at the outset before loading up all the other CWRC related code. Read more about authentication below in the [Authentication Section](#authentication)

#### npm link

If you are making changes to the npm packages that contribute to the CWRC-GitWriter (or more likely to some custom instance of the CWRC-GitWriter that you've built) and you find yourself repeatedly packaging and publishing the npm packages and re-importing the newly published packages (e.g.`npm i cwrc-writer-base@latest`) then you can instead use [npm link](https://docs.npmjs.com/cli/link) to point the package.json dependencies at the local instances.

For example, when developing cwrc-git-dialogs you would use:

```bash
cd  ~/projects/cwrc-git-dialogs
npm link
cd  ~/projects/CWRC-GitWriter
npm link cwrc-git-dialogs
```

This creates a symbolic link between the two packages on your computer. Then, when you run `npm run watch` from CWRC-GitWriter, changes made to cwrc-git-dialogs will cause the CWRC-GitWriter build to update.

Once finished making and testing local changes, publish the new NPM packages, including the local packages, and remove the dependencies from package.json:

```bash
cd  ~/projects/CWRC-GitWriter
npm unlink cwrc-git-dialogs
npm i cwrc-git-dialogs@latest
```

## Authentication

Authentication is with Github using OAuth, as described in the Github API docs: [Github - building oauth apps](https://developer.github.com/apps/building-oauth-apps/)

The two relevant steps there are:

1. [Creating an OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/)

2. The section called Web Application Flow in [Authorizing OAuth Apps](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)

After authenticating with GitHub, GitHub returns an OAuth token, which is then submitted on every request to the GitHub API.

We could store this token in a server side session, but instead we store it in a browser cookie that the CWRC-GitWriter submits in the request header (to help guard against [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)) for each request to the CWRC-GitServer.

As explained in the development section you wouldn't typically usefully modify anything here for use by others. Nevertheless, if there is something we've missed, please submit an Issue. If you are interested, however, please take a look at our [Development Docs](https://github.com/cwrc/CWRC-Writer-Dev-Docs)

![Auththentication Process](https://github.com/cwrc/CWRC-GitWriter/blob/master/docs/images/oauth.svg)
  
## License

[GNU GPL V2](LICENSE)
