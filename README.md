![Picture](http://cwrc.ca/logos/CWRC_logos_2016_versions/CWRCLogo-Horz-FullColour.png)

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

# CWRC-GitWriter

1. [Overview](#overview)
1. [Use](#use)
1. [Installation](#installation)
1. [Development](#development)
1. [Authentication](#authentication)
1. [License](#license)

### Overview

CWRC-GitWriter is an instance of the [CWRC-Writer](http://cwrc.ca/Documentation/project-editor/#DITA_Files-Various_Applications/CWRC-Writer/Embed_Ref_Splash.html), a WYSIWYG text editor for in-browser XML editing and stand-off RDF annotation. CWRC-GitWriter is named as such because it uses GitHub as its document storage system.

The code in this repository serves two purposes:

1.  To back the sandbox deployment: [https://cwrc-writer.cwrc.ca/](https://cwrc-writer.cwrc.ca/)
2.  To provide an example configuration of the CWRC-Writer for those who might like to substitute a different storage or lookup system.

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
- Install all the NPM package dependencies: `npm install`
- Browserify the code to package it up for deployment: `npm run build`

The built code resides in the newly created build directory. It contains the app, along with all the necessary CSS, XML, and image files. To deploy the CWRC-GitWriter simply copy the build directory to your server (usually the same server from which you'd serve the [CWRC-GitServer](https://github.com/cwrc/CWRC-GitServer)).

Alternately, if your server has Git and NPM support you can clone and build this repository directly on your server.

### Development
#### Using this as an example to build a CWRCWriter with a different backend

The code in this repository simply brings together and configures code from other repositories and wouldn't in itself typically be usefully modified.  You could, however, clone this repository as a base from which to create a new configuration of the CWRC-Writer, or simply use the code here as a guide in creating your own configuration.   Your configuration might, for example, use Fedora to store documents, rather than GitHub.

CWRC-GitWriter uses [NPM](https://www.npmjs.com) both for dependency management and for running it's main build script.  The build script in turn uses [Browserify](https://browserify.org) to bundle all code into the single [build/js/app.js](build/js/app.js) file. The [package.json](package.json) file contains the script for invoking Browserify as well as the full list of NPM packages required.  

The entry point into the CWRC-GitWriter code, on which Browserify is invoked, is [src/js/app.js](src/js/app.js) which uses [node.js module loading](https://nodejs.org/api/modules.html) to 'require' - either from the [NPM public registry](https://www.npmjs.com) or from local files - the bits and pieces that make up the CWRC-GitWriter, and plug them together.  [Browserify](https://browserify.org) resolves all the 'require' statements, and bundles all the code, including NPM packages and local files, into a single javascript file that is loaded into the web browser.  

To develop a new configuration of the CWRC-Writer, you'll therefore need to understand NPM and Browserify.  Then you can get into the CWRC-GitWriter NPM [package.json](package.json) file and [src/js/app.js](src/js/app.js) and adapt it to your own project.

The [src/js/app.js](src/js/app.js) is in particular a good example of how to configure a instance of a CWRC-Writer to use a different backend (other than Github, e.g., file system, database).

The app.js file imports ('requires') the following NPM CWRC packages:

* [CWRC-WriterBase](https://www.npmjs.com/package/cwrc-writer-base)

   The base CWRC-Writer

* [cwrc-git-dialogs](https://www.npmjs.com/package/cwrc-git-dialogs)

   The javascript class that handles calls to the backend storage, in this case to Github via the CWRC-GitServer.<sup id="a2">[2](#f2)</sup>  This is the class you'd want to replace with your own.

* [cwrc-public-entity-dialogs](https://www.npmjs.com/package/cwrc-public-entity-dialogs)
   
   The javascript class that handles lookups of named entities.  You may want to replace this with your own entity lookup

The app.js file also imports a config file:

* [src/js/config.js](src/js/config.js)
   
   Javascript object that describes the XML schemas supported, and is used to pass in other objects to the CWRC-Writer.

The [src/js/app.js](src/js/app.js) file ties all these together as you would for your own configuration of the CWRC-Writer.

Note that the authentication for Github is invoked in app.js since it redirects to the GitHub site if the user isn't loaded.  Better to redirect here at the outset before loading up all the other CWRC related code.  Read more about authentication
below in the [Authentication Section](#authentication)

If you are making changes to the npm packages that contribute to the GitWriter (or more likely to some custom instance of the GitWriter that you've built) and you find yourself repeatedly packaging and publishing the NPM packages and reimporting the newly published packages (e.g.,```npm i cwrc-writer-base@latest```) then you can instead point the package.json dependencies at the local instances, like so:

```
"dependencies": {
    "bootstrap": "3.3.7",
    "cwrc-public-entity-dialogs": "file:///Users/jc/Dropbox/cwrc/github/CWRC-PublicEntityDialogs",
    "cwrc-git-dialogs": "file:///Users/jc/Dropbox/cwrc/github/cwrc-git-dialogs",
    "cwrc-writer-base": "file:///Users/jc/Dropbox/cwrc/github/CWRC-WriterBase",
    "jquery": "3.1.0",
    "jquery-ui": "1.12",
    "js-cookie": "2.1.3"
  }
 ```

When doing a new build, first pull in any changes you made to the local packages:

```
rm -rf node_modules/cwrc-public-entity-dialogs && rm -rf node_modules/cwrc-writer-base && rm -rf node_modules/cwrc-git-dialogs && npm install && npm run build
```

Once finished making and testing local changes,  publish the new NPM packages, including the local packages, and remove the dependencies from package.json:

```
"dependencies": {
    "bootstrap": "3.3.7",
    "jquery": "3.1.0",
    "jquery-ui": "1.12",
    "js-cookie": "2.1.3"
  }
```

 and finally reinstall them from NPM:

```
  npm i cwrc-writer-base cwrc-git-dialogs cwrc-public-entity-dialogs -S
```

NOTE:  another alternative to working with local packages is [npm link](https://docs.npmjs.com/cli/link)

### Authentication

Authentication is with GitHub using OAuth, as described in the [GitHub developer docs](https://developer.github.com/apps/building-oauth-apps/).
 
The two relevant steps there are
* [Creating an OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/)
* The section called Web Application Flow in [Authorizing OAuth Apps](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)

After authenticating with GitHub, GitHub returns an OAuth token, which is then submitted on every request to the GitHub API.

We could store this token in a server side session, but instead we store it in a browser cookie that the CWRC-GitWriter submits in the request header (to help with CSRF) for each request to the CWRC-GitServer:

<img width="873" alt="image" src="https://user-images.githubusercontent.com/547165/45240465-cc872100-b2b6-11e8-905a-7b8e08fd640c.png">

### License

[GNU GPL V2](LICENSE)
