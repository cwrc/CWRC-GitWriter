![Picture](http://cwrc.ca/logos/CWRC_logos_2016_versions/CWRCLogo-Horz-FullColour.png)

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

# CWRC-GitWriter

CWRC-GitWriter is an instance of the [CWRC-Writer](http://cwrc.ca/Documentation/project-editor/#DITA_Files-Various_Applications/CWRC-Writer/Embed_Ref_Splash.html), a WYSIWYG text editor for in-browser XML editing and stand-off RDF annotation. CWRC-GitWriter is named as such because it uses GitHub as its document storage system.

The code in this repository serves two purposes:

1.  To back the sandbox deployment: [https://cwrc-writer.cwrc.ca/](https://cwrc-writer.cwrc.ca/)
2.  To provide an example configuration of the CWRC-Writer for those who might like to substitute a different storage or lookup system.

## Table of Contents

1. [Use](#use)
1. [Overview](#overview)
1. [Installation](#installation)
1. [Development](#development)
1. [Authentication](#authentication)
1. [License](#license)

### Use

A running deployment of the code in this repository is available for anyone's use at:

[https://cwrc-writer.cwrc.ca/](https://cwrc-writer.cwrc.ca/)

### Overview

![High Level Overview](/docs/images/cwrc-gitwriter-overview.svg)

As you can see from the overview diagram, CWRC-GitWriter is the parent package which collects and configures the various child packages. While [CWRC-WriterBase](https://github.com/cwrc/CWRC-WriterBase) provides the primary editing functionality, it requires both storage and entity lookup packages, which in this case are [cwrc-git-dialogs](https://github.com/cwrc/cwrc-git-dialogs) and [CWRC-PublicEntityDialogs](https://github.com/cwrc/CWRC-PublicEntityDialogs).

### Installation

Although the sandbox version provides a freely usable instance, you may of course install an instance of the CWRC-GitWriter on your own server.  CWRC-GitWriter also requires a running instance of [CWRC-GitServer](https://github.com/cwrc/CWRC-GitServer), which in turn interacts with GitHub through the [GitHub API](https://developer.github.com/v3/).

Note that if you want to create a new version of the CWRC-Writer that is configured to work with your own document repository (e.g. a database) this repository still provides you with the best example to follow.  You'll also want to look at the [cwrc-git-dialogs](https://github.com/cwrc/cwrc-git-dialogs) repository, which holds the javascript class that handles calls to the backend storage, in this case to GitHub via the [CWRC-GitServer](https://github.com/cwrc/CWRC-GitServer).  This is the class you'd want to replace with your own. To replace the entity lookups you'd need to replace [CWRC-PublicEntityDialogs](https://github.com/cwrc/CWRC-PublicEntityDialogs).

#### Building

This repository contains two JS files: the [app file](src/js/app.js) and the [config file](src/js/config.js). The app file does not contain much code itself; its main purpose to load/require other packages, and then configure and instantiate the CWRC-Writer. It must first be built in order to be useable. To build:

- Download the code for this repository, or clone the repository
- Install all the npm package dependencies: `npm install`
- Browserify the code to package it up for deployment: `npm run build`

The built code resides in the newly created build directory. It contains the app, along with all the necessary CSS, XML, and image files. To deploy the CWRC-GitWriter simply copy the build directory to your server (usually the same server from which you'd serve the [CWRC-GitServer](https://github.com/cwrc/CWRC-GitServer)).

Alternately, if your server has Git and npm support you can clone and build this repository directly on your server.

### Development
#### Using this code as an example to build a CWRC-Writer with a different backend

The code in this repository brings together and configures code from other repositories and wouldn't in itself typically be usefully modified. You could, however, clone this repository as a base from which to create a new configuration of the CWRC-Writer, or simply use the code here as a guide in creating your own configuration. Your configuration might, for example, use Fedora to store documents, rather than GitHub.

#### npm and Browserify

CWRC-GitWriter uses [npm](https://www.npmjs.com) both for dependency management and for running it's main build script. The build script in turn uses [Browserify](https://browserify.org) to bundle all code together into a single file. The [package.json](package.json) file contains the script for invoking Browserify as well as the full list of npm packages required.

The entry point into the CWRC-GitWriter code, on which Browserify is invoked, is [src/js/app.js](src/js/app.js) which uses [node.js module loading](https://nodejs.org/api/modules.html) to `require` (either from the [npm public registry](https://www.npmjs.com) or from local files) the bits and pieces that make up the CWRC-GitWriter, and plug them together.  [Browserify](https://browserify.org) resolves all the `require` statements and bundles all the code, including npm packages and local files, into a single javascript file that is loaded into the web browser.

To develop a new configuration of the CWRC-Writer, you'll therefore need to understand npm and Browserify.  Then you can get into the CWRC-GitWriter npm [package.json](package.json) file and [src/js/app.js](src/js/app.js) and adapt it to your own project.

#### app.js

The [src/js/app.js](src/js/app.js) file imports the following npm CWRC packages:

* [CWRC-WriterBase](https://www.npmjs.com/package/cwrc-writer-base)

   The CWRC-Writer editor

* [cwrc-git-dialogs](https://www.npmjs.com/package/cwrc-git-dialogs)

   The javascript class that handles calls to the storage, in this case to GitHub via the [CWRC-GitServer](https://github.com/cwrc/CWRC-GitServer). This is the class you'd want to replace with your own.

* [cwrc-public-entity-dialogs](https://www.npmjs.com/package/cwrc-public-entity-dialogs)
   
   The javascript class that handles lookups of named entities. You may want to replace this with your own entity lookups.

The app.js file also imports a config file:

* [src/js/config.js](src/js/config.js)
   
   A javascript object that describes the XML schemas supported, and is used to pass in other objects to the CWRC-Writer.

The [src/js/app.js](src/js/app.js) file ties all these together as you would for your own configuration of the CWRC-Writer.

#### npm link

If you are making changes to the npm packages that contribute to the CWRC-GitWriter (or more likely to some custom instance of the CWRC-GitWriter that you've built) and you find yourself repeatedly packaging and publishing the npm packages and re-importing the newly published packages (e.g.`npm i cwrc-writer-base@latest`) then you can instead use [npm link](https://docs.npmjs.com/cli/link) to point the package.json dependencies at the local instances.

For example, when developing cwrc-git-dialogs you would use:
```
cd ~/projects/cwrc-git-dialogs
npm link
cd ~/projects/CWRC-GitWriter
npm link cwrc-git-dialogs
```
This creates a symbolic link between the two packages on your computer. Then, when you run `npm run watch` from CWRC-GitWriter, changes made to cwrc-git-dialogs will cause the CWRC-GitWriter build to update.

After completing the changes to cwrc-git-dialogs and publishing it to npm, you would then use `npm unlink` to remove the symbolic link:
```
cd ~/projects/CWRC-GitWriter
npm unlink cwrc-git-dialogs
npm i cwrc-git-dialogs@latest
```

### Authentication

Authentication is done with GitHub using OAuth, as described in the [GitHub developer docs](https://developer.github.com/apps/building-oauth-apps/).
 
The two relevant steps there are:
1. [Creating an OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/)
2. The section called Web Application Flow in [Authorizing OAuth Apps](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)

After authenticating with GitHub, GitHub returns an OAuth token, which is then submitted on every request to the GitHub API.

We could store this token in a server side session, but instead we store it in a browser cookie that the CWRC-GitWriter submits in the request header (to help guard against [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)) for each request to the CWRC-GitServer.

![OAuth Overview](/docs/images/oauth.svg)

### License

[GNU GPL V2](LICENSE)
