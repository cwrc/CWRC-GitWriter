![Picture](http://www.cwrc.ca/wp-content/uploads/2010/12/CWRC_Dec-2-10_smaller.png)

# CWRC-GitWriter

The CWRC-GitWriter is an instance of the [CWRC-Writer](https://github.com/cwrc/CWRC-Writer) configured to interact with an installed instance of the [CWRC-GithubServer](https://github.com/cwrc/CWRC-GithubServer) to in turn use Github for so called ‘back-end’ services:  document, annotation, and schema storage.

An instance of the CWRC-Writer is configured to interact with different backends by creating a javascript class that satisfies the CWRC [Delegator API](https://github.com/cwrc/CWRC-Writer#delegate-to-your-services).  The delegator to interact with the [CWRC-GithubServer](https://github.com/cwrc/CWRC-GithubServer) is in it's own repository: [CWRC-GitDelegator](https://github.com/cwrc/CWRC-GithubServer).<sup id="a1">[1](#f1)</sup>

The code in this repository essentially, therefore:

- imports the [CWRC-GitDelegator](https://github.com/cwrc/CWRC-GithubServer) that makes HTTP calls to the [CWRC-GithubServer](https://github.com/cwrc/CWRC-GithubServer)
- imports the CWRC-Writer NPM module, and registers the [CWRC-GitDelegator](https://github.com/cwrc/CWRC-GithubServer) with it

All put together, the flow runs a bit like this:

![Picture](docs/images/flow.png)

This repository is organized as follows:

src/index.htm - imports the main.js file.

src/js/app.js - imports the CWRC-Writer npm module and initializes the editor.  Also registers the Github Delegator with the editor.

docs/images/ - folder of images for README

tests/ - jasmine tests

package.json - lists required npm packages, in particular the CWRC-WRiter and the CWRC-GitDelegator and defines build scripts including browserify, which bundles the entire application into a single javascript file that it puts in build/main.js

README - the README that are reading right now

<b id="f1">1</b> The [CWRC-GitDelegator](https://github.com/cwrc/CWRC-GithubServer) is in it's own github repository, and distributed as it's own NPM module, to [keep separate things separate](https://en.wikipedia.org/wiki/Separation_of_concerns).  Packaging it separately allows us, for example, to package the tests for the delegator with the delegator itself (and makes writing the tests easier) as well making it perfectly clear that the delegator is a self contained chunck of code, and maybe more importantly enforces it's self-containedness (by preventing us from sneaking in a call to some internal part of the module, which we would probably end up doing if the delegator was part of this repository. [↩](#a1)