import babelLoaderExcludeNodeModulesExcept from 'babel-loader-exclude-node-modules-except';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const getRules = ({ env, envWorker }) => {
  let rules = [
    typescriptRule(env, envWorker),
    babelRule(env, envWorker),
    cssRule,
    fontRule,
    imageRule,
    svgRule,
  ];

  if (envWorker === 'development') {
    rules = [workerRule, ...rules]; //workeLoader must come first
  }
  return rules;
};

const typescriptRule = (env, envWorker) => {
  let include = ['cwrc-writer-base'];
  if (env === 'development' && envWorker === 'development') {
    include = [...include, 'cwrc-worker-validator'];
  }

  return {
    test: /\.tsx?$/,
    exclude: babelLoaderExcludeNodeModulesExcept(include),
    use: [
      {
        loader: 'ts-loader',
        options: {
          allowTsInNodeModules: true,
          compilerOptions: {
            module: 'esnext',
          },
        },
      },
    ],
  };
};

const babelRule = (env, envWorker) => {
  let include = [
    'cwrc-writer-base',
    'cwrc-git-dialogs',
    'cwrc-public-entity-dialogs',
    'dbpedia-entity-lookup',
    'geonames-entity-lookup',
    'getty-entity-lookup',
    'lgpn-entity-lookup',
    'viaf-entity-lookup',
    'wikidata-entity-lookup',
  ];

  if (env === 'development' && envWorker === 'development') {
    include = [...include, 'cwrc-worker-validator'];
  }

  return {
    test: /\.jsx?$/,
    //exclude `node_modules` except CWRC modules
    exclude: babelLoaderExcludeNodeModulesExcept(include),
    use: ['babel-loader'],
  };
};

const cssRule = {
  test: /\.(le|c)ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { publicPath: '../' },
    },
    { loader: 'css-loader' },
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          relativeUrls: 'local',
          globalVars: { parentId: '#cwrcWriterContainer' },
        },
      },
    },
  ],
};

const fontRule = {
  test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
  type: 'asset',
  generator: {
    filename: 'fonts/[name][ext][query]',
  },
};

const imageRule = {
  test: /\.(png|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'images/[name][ext][query]',
  },
};

const svgRule = {
  test: /\.svg$/,
  loader: 'svg-inline-loader',
  options: {
    removeSVGTagAttrs: false,
  },
};

const workerRule = {
  test: /\.worker\.(ts|js)$/,
  exclude: babelLoaderExcludeNodeModulesExcept(['cwrc-worker-validator']),
  use: { loader: 'worker-loader' },
};
