import path from 'path';

let dirname = '';

export const getPatterns = ({ __dirname: _dirname, env, envWorker }) => {
  dirname = _dirname;

  let patterns = [copyConfig, copyImages, copyTinymceCSS, copyEditorCSS];

  if (envWorker === 'production') {
    patterns = [...patterns, copyValidatorWorker];
  }

  return patterns;
};

const copyConfig = {
  //copy config.json
  context: path.resolve(dirname, 'config'),
  from: '*',
  to: 'config',
};

const copyImages = {
  //copy images from Writer-Base
  from: path.resolve(dirname, 'node_modules', 'cwrc-writer-base', 'src', 'images'),
  to: 'images',
};

const copyTinymceCSS = {
  //Copy pre-compiled CSS required by tinyMCE
  from: path.resolve(dirname, 'node_modules', 'cwrc-writer-base', 'src', 'css', 'tinymce', 'skins'),
  to: 'css/tinymce/skins',
};

const copyEditorCSS = {
  //Copy pre-compiled CSS to stylize the editor (must be recompiled after each change)
  context: path.resolve(dirname, 'node_modules', 'cwrc-writer-base', 'src', 'css', 'build'),
  from: 'editor.css',
  to: 'css/editor.css',
  toType: 'file',
};

const copyValidatorWorker = {
  //Copy pre-compiled worker
  context: 'node_modules/cwrc-worker-validator/build/dist/',
  // context: 'node_modules/cwrc-writer-base/node_modules/cwrc-worker-validator/build/dist/',
  from: 'cwrc.worker.js',
  to: 'cwrc.worker.js',
  toType: 'file',
};
