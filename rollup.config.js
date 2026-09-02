import resolve from '@rollup/plugin-node-resolve';

import typescript from '@rollup/plugin-typescript';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import postcss from 'rollup-plugin-postcss';


export default {

  input: 'lib/index.ts',

  output: [

    {

      file: 'dist/index.js',

      format: 'cjs',

      sourcemap: true,

      exports: 'named'

    },

    {

      file: 'dist/index.esm.js',

      format: 'esm',

      sourcemap: true

    }

  ],

  external: (id) => {

    return (

      id === 'react' ||

      id === 'react-dom' ||

      id.startsWith('react/') ||

      id.startsWith('react-dom/') ||

      id.startsWith('primereact') ||

      id.startsWith('primeicons') ||

      id.startsWith('lucide-react')

    );

  },

  plugins: [

    peerDepsExternal(),

    resolve(),

    postcss({

      modules: true,

      extract: false

    }),

    typescript({

      tsconfig: './tsconfig.json'

    })

  ]

};