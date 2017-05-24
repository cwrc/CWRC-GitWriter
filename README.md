![Picture](http://www.cwrc.ca/wp-content/uploads/2010/12/CWRC_Dec-2-10_smaller.png)

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

# CWRC-GitWriter

1. [Overview](#overview)
1. [Use](#use)
1. [Installation](#installation)
1. [Repository Organization](#repository-organization)
1. [Development](#development)
1. [Contributing](#contributing)
1. [License](#license)

### Overview

CWRC-GitWriter is an instance of the [CWRC-Writer](http://cwrc.ca/Documentation/project-editor/#DITA_Files-Various_Applications/CWRC-Writer/Embed_Ref_Splash.html), a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) text editor for in-browser simultaneous XML editing and stand-off RDF annotation using the [Open Annotation Data Model](http://www.openannotation.org/spec/core/). CWRC-GitWriter stores documents, annotations, templates, and XML schemas in GitHub.

The code in this repository serves two purposes:

1.  To back the sandbox deployment [http://208.75.74.217](http://208.75.74.217)
2.  To provide an example configuration of the CWRC-Writer for those who might like to substitute a different backend (e.g., database, file system on server, different entity lookup.)

### Use

A running deployment of the code in this repository is available for anyone's use at:

[http://208.75.74.217](http://208.75.74.217)

### Installation

Although the sandbox version provides a freely usable instance, you may of course install an instance of the CWRC-GitWriter on your own server.  CWRC-GitWriter also requires a running instance<sup id="a1">[1](#f1)</sup> of [CWRC-GitServer](https://github.com/cwrc/CWRC-GitServer), which in turn interacts with GitHub through the [GitHub API](https://developer.github.com/v3/).

Note that if you want to create a new version of the CWRC-Writer that is configured to work with your own document repository (e.g., a database), this repository still provides you with the best example to follow.  You'll also want to look at the [cwrc-git-dialogs](https://www.npmjs.com/package/cwrc-git-dialogs) repository, which holds
the javascript class that handles calls to the backend storage, in this case to Github via the CWRC-GitServer.  This is the class you'd want to replace with your own.  To replace the entity lookups you'd replace [cwrc-public-entity-dialogs](https://www.npmjs.com/package/cwrc-public-entity-dialogs)

CWRC-GitWriter is a web application with an HTML file [build/index.html](build/index.html) that imports a single javascript file, [build/js/app.js](build/js/app.js) and a few CSS files. 

To deploy the CWRC-GitWriter you might therefore simply copy the build directory to your server, probably the same server from which you'd serve the [CWRC-GitServer](https://github.com/cwrc/CWRC-GitServer).

First, though, you'll have to build the application:

- Download the code for this repository, or clone the repository.
- install all the NPM package dependencies:
	```` npm install ````
- IMPORTANT:  YOU *MUST* AFTER THE INSTALL COMPLETES, edit:

```node_modules/jquery-ui/package.json```

and add the following:

```
"browserify": {
  "transform": [
	"deamdify"
  ]
}
```

- browserify the code to package it up for deployment:
	``npm build``

Now you can deploy the app by copying the generated build directory to your web server.  You might choose to use ftp, scp, rsync, etc.  An example rsync command might be:

```
rsync -azvh -e ssh build/ jchartrand@1.1.1.1:cwrc
```
where you'd subsitute your own userid (for jchartrand), ip address (for 1.1.1.1) and directory on server (for 'cwrc')

Another alternative would be to fork this repository, adjust the configuration as needed, and deploy to a host that allows git deployment.

### Using this as an example to build a CWRCWriter with a different backend

The code in this repository simply brings together and configures code from other repositories and wouldn't in itself typically be usefully modified.  You could, however, clone this repository as a base from which to create a new configuration of the CWRC-Writer, or simply use the code here as a guide in creating your own configuration.   Your configuration might, for example, use Fedora to store documents, rather than GitHub.

CWRC-GitWriter uses [NPM](https://www.npmjs.com) both for dependency management and for running it's main build script.  The build script in turn uses [Browserify](https://browserify.org) to bundle all code into the single [build/js/app.js](build/js/app.js) file. The [package.json](package.json) file contains the script for invoking Browserify as well as the full list of NPM packages required.  

The entry point into the CWRC-GitWriter code, on which Browserify is invoked, is [src/js/app.js](src/js/app.js) which uses [node.js module loading](https://nodejs.org/api/modules.html) to 'require' - either from the [NPM public registry](https://www.npmjs.com) or from local files - the bits and pieces that make up the CWRC-GitWriter, and plug them together.  [Browserify](https://browserify.org) resolves all the 'require' statements, and bundles all the code, including NPM packages and local files, into a single javascript file that is loaded into the web browser.  

To develop a new configuration of the CWRC-Writer, you'll therefore need to understand NPM and Browserify.  Then you can get into the CWRC-GitWriter NPM [package.json](package.json) file and [src/js/app.js](src/js/app.js) and adapt it to your own project.

The [src/js/app.js](src/js/app.js) is in particular a good example of how to configure a instance of a CWRC-Writer to use a different backend (other than Github, e.g., file system, database). The app.js file imorts ('requires') the following NPM CWRC packages:

[CWRC-WriterBase](https://www.npmjs.com/package/cwrc-writer-base)
The base CWRC-Writer

[cwrc-git-dialogs](https://www.npmjs.com/package/cwrc-git-dialogs)
The javascript class that handles calls to the backend storage, in this case to Github via the CWRC-GitServer.<sup id="a2">[2](#f2)</sup>  This is the class you'd want to replace with your own.

[cwrc-public-entity-dialogs](https://www.npmjs.com/package/cwrc-public-entity-dialogs)
The javascript class that handles lookups of named entities.  You may want to replace this with your own entity lookup

and two config files:

[src/js/config.js](src/js/config.js)

Javascript object that describes the XML schemas supported, and is used to pass in other objects to the CWRC-Writer.

[src/js/layout-config.js](src/js/layout-config.js)

Sets up the specific layout of the CWRC-Writer.  

The [src/js/app.js](src/js/app.js) file ties all these together as you would for your own configuration of the CWRC-Writer.

Note that the authentication for Github is invoked in app.js since it redirects to the GitHub site if the user isn't loaded.  Better to redirect here at the outset before loading up all the other CWRC related code.

If you are making changes to the npm packages that contribute to the GitWriter (or more likely to some custom instance of the GitWriter that you've built) and you find yourself repeatedly packaging and publishing the NPM packages and reimporting the newly published packages (e.g.,```npm i cwrc-writer-base@latest cwrc-git-delegator@latest -S```) then you can instead point the package.json dependencies at the local instances, like so:

```
"dependencies": {
    "bootstrap": "3.3.7",
    "cwrc-public-entity-dialogs": "file:///Users/jc/Dropbox/cwrc/github/cwrc-public-entity-dialogs",
    "cwrc-git-dialogs": "file:///Users/jc/Dropbox/cwrc/github/cwrc-git-dialogs",
    "cwrc-writer-base": "file:///Users/jc/Dropbox/cwrc/github/CWRC-WriterBase",
    "jquery": "3.1.0",
    "jquery-ui": "1.12",
    "js-cookie": "2.1.3"
  }
 ```

To rebuild at anytime, first pulling in modified packages:


```
rm -rf node_modules/cwrc-git-delegator && rm -rf node_modules/cwrc-writer-base && rm -rf node_modules/cwrc-git-dialogs && npm install && npm run build
```

Once finished making and testing local changes to the delegator or cwrc-writer-base (or any other package), then publish the new NPM packages, and remove the dependencies from package.json:

```
"dependencies": {
    "bootstrap": "3.3.7",
    "cwrc-writer-layout": "1.0.5",
    "jquery": "3.1.0",
    "jquery-ui": "1.12",
    "js-cookie": "2.1.3"
  }
```

 and finally reinstall them from NPM:

```
  npm i cwrc-writer-base cwrc-git-dialogs cwrc-public-entity-dialogs -S
```



### Contributing

As explained in the development section you wouldn't typically usefully modify anything here for use by others.  Nevertheless, if there is something we've missed, please submit an Issue.  If you are interested, however, please take a look at our [Development Docs](https://github.com/jchartrand/CWRC-Writer-Dev-Docs)

### License

[GNU GPL V2](LICENSE)


<b id="f1">1.</b> Instructions for installing the CWRC-GitServer are here: [CWRC-GitServer](https://github.com/jchartrand/CWRC-GitServer). [↩](#a1)

