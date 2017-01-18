![Picture](http://www.cwrc.ca/wp-content/uploads/2010/12/CWRC_Dec-2-10_smaller.png)

# CWRC-GitWriter

The CWRC-GitWriter is an instance of the [CWRC-Writer](https://github.com/cwrc/CWRC-Writer) configured to interact with the [CWRC-GithubServer](https://github.com/cwrc/CWRC-GithubServer) to in turn use Github for so called ‘back-end’ services:  document, annotation, and schema storage.  

The CWRC-Writer is configured to interact with different backends by creating a javascript class that satisfies the CWRC [Delegator API](https://github.com/cwrc/CWRC-Writer#delegate-to-your-services).

The code in this repository essentially:

- defines a new ‘Delegator’ that makes HTTP calls to the [CWRC-GithubServer](https://github.com/cwrc/CWRC-GithubServer)
- imports the CWRC-Writer NPM module, and registers the Delegator with it

which looks a bit like this:

![Picture](docs/images/flow.png)

This repository is organized as follows:

src/index.htm - imports the main.js file.

src/js/index.js - imports the CWRC-Writer npm module and initializes the editor

docs/images/ - folder of images for README

tests/ - jasmine tests

package.json - lists required npm packages, and defines build scripts including browserify, which bundles the entire application into a single javascript file.

README - the README that are reading right now