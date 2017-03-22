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

CWRC-GitWriter is an instance of the [CWRC-Writer](http://cwrc.ca/Documentation/project-editor/#DITA_Files-Various_Applications/CWRC-Writer/Embed_Ref_Splash.html), a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) text editor for in-browser XML editing and stand-off RDF annotation using the [Open Annotation Data Model](http://www.openannotation.org/spec/core/). CWRC-GitWriter stores documents, annotations, templates, and XML schemas in GitHub.

The code in this repository serves two purposes:

1.  To back the sandbox deployment [http://208.75.74.217](http://208.75.74.217)
2.  To provide an example configuration of the CWRC-Writer for those who might like to substitute a different backend (e.g., database, file system on server)

### Use

A running deployment of the code in this repository is available for anyone's use at:

[http://208.75.74.217](http://208.75.74.217)

### Installation

Although the sandbox version provides a freely usable instance, you may of course install an instance of the CWRC-GitWriter on your own server.  CWRC-GitWriter also requires a running instance<sup id="a1">[1](#f1)</sup> of [CWRC-GitServer](https://github.com/cwrc/CWRC-GitServer), which in turn interacts with GitHub through the [GitHub API](https://developer.github.com/v3/).

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

Now you can deploy the app by copying the generated build directory to your web server.  You might choose to use ftp, scp, rsync, etc.  Or you might choose to fork this repository, adjust the configuration as needed, and deploy to a host that allows git deployment

### Development

The code in this repository simply brings together and configures code from other repositories and wouldn't in itself typically be usefully modified.  You could, however, clone this repository as a base from which to create a new configuration of the CWRC-Writer, or simply use the code here as a guide in creating your own configuration.  

CWRC-GitWriter uses [NPM](https://www.npmjs.com) both for dependency management and for running it's main build script.  The build script in turn uses [Browserify](https://browserify.org) to bundle all code into the single [build/js/app.js](build/js/app.js) file. The [package.json](package.json) file contains the script for invoking Browserify as well as the full list of NPM packages required.  

The entry point into the CWRC-GitWriter code, on which Browserify is invoked, is [src/js/app.js](src/js/app.js) which uses [node.js module loading](https://nodejs.org/api/modules.html) to 'require' - either from the [NPM public registry](https://www.npmjs.com) or from local files - the bits and pieces that make up the CWRC-GitWriter, and plug them together.  [Browserify](https://browserify.org) resolves all the 'require' statements, and bundles all the code, including NPM packages and local files, into a single javascript file that is loaded into the web browser.  

To develop with the CWRC-GitWriter, you'll therefore need to understand NPM and Browserify.  Then you can get into the CWRC-GitWriter NPM [package.json](package.json) file and [src/js/app.js](src/js/app.js).  

The [src/js/app.js](src/js/app.js) is also a good example of how to configure a instance of a CWRC-Writer to use a different backend (other than Github, e.g., file system, database). The app.js file imorts ('requires') the following NPM CWRC packages:

<dl>

<dt>[CWRC-WriterBase](https://www.npmjs.com/package/cwrc-writer-base)</dt>
<dd>The base CWRC-Writer</dd>

<dt>[CWRC-GitDelegator](https://www.npmjs.com/package/cwrc-git-delegator)</dt>
<dd> The javascript class that handles calls to the backend, in this case to Github via the CWRC-GitServer.<sup id="a2">[2](#f2)</sup></dd>

<dd>[CWRC-PublicEntityDialogs](https://www.npmjs.com/package/cwrc-public-entity-dialogs)</dd>
<dt> The javascript class that handles lookups of named entities.</dt>

</dl>

and two config files:

<dl>
  <dt>[src/js/config.js](src/js/config.js)</dt>
  <dd>Javascript object that describes the XML schemas supported, and is used to pass in other objects to the CWRC-Writer.</dd>

  <dt>[src/js/layout-config.js](src/js/layout-config.js)</dt>
  <dd>Sets up the specific layout of the CWRC-Writer.  This file in turn 'requires' the [CWRC-WriterLayout](https://www.npmjs.com/package/cwrc-writer-layout) which provides functions for setting up the layout.</dd>
</dl>

The [src/js/app.js](src/js/app.js) file ties all these together as you would for your own configuration of the CWRC-Writer.

Note that the authentication for Github is invoked here in app.js since it redirects to the GitHub site if the user isn't loaded.  Better to redirect here at the outset before loading up all the other CWRC related code.

### Contributing

As explained in the development section you wouldn't typically usefully modify anything here for use by others.  Nevertheless, if there is something we've missed, please submit an Issue.

### License

[GNU GPL V2](LICENSE)


<b id="f1">1.</b> Instructions for installing the CWRC-GitServer are here: [CWRC-GitServer](https://github.com/cwrc/CWRC-GithubServer). [↩](#a1)

<b id="f2">2.</b> The [CWRC-GitDelegator](https://github.com/cwrc/CWRC-GithubServer) is in it's own github repository, and distributed as a discrete NPM module, to [keep separate things separate](https://en.wikipedia.org/wiki/Separation_of_concerns).  Packaging it separately allows us, for example, to package the tests for the delegator with the delegator itself (and makes writing the tests easier) as well making it perfectly clear that the delegator is a self contained chunck of code, and maybe more importantly enforces it's self-containedness (by preventing us from sneaking in a call to some internal part of the module, which we would probably end up doing if the delegator was part of this repository. [↩](#a2)