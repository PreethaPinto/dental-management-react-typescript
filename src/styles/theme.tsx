import { createTheme, Theme } from '@mui/material';

import { createContext, useMemo, useState } from 'react';

// const lightTheme = {
//   // palette values for light mode
//   primary: indigo,
//   divider: '#6f0082',
//   text: {
//     primary: grey[900],
//     secondary: grey[800],
//   },
// };

// const darkTheme = {
//   // palette values for dark mode
//   primary: grey,
//   divider: grey[700],
//   background: {
//     default: grey[900],
//     paper: grey[900],
//   },
//   text: {
//     primary: '#fff',
//     secondary: grey[500],
//   },
// };

// const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === 'light' ? lightTheme : darkTheme),
//   },
// });

// export default getDesignTokens;

// export const getDesignTokens = (mode) => ({
//   ...(mode === 'light'
//     ? {
//         purple: {
//           100: '#e2cce6',
//           200: '#c599cd',
//           300: '#a966b4',
//           400: '#8c339b',
//           500: '#6f0082',
//           600: '#590068',
//           700: '#43004e',
//           800: '#2c0034',
//           900: '#16001a',
//         },

//         grey: {
//           100: '#e0e0e0',
//           200: '#c2c2c2',
//           300: '#a3a3a3',
//           400: '#858585',
//           500: '#666666',
//           600: '#525252',
//           700: '#3d3d3d',
//           800: '#292929',
//           900: '#141414',
//         },

//         blue: {
//           100: '#ccd0e1',
//           200: '#99a1c4',
//           300: '#6771a6',
//           400: '#344289',
//           500: '#01136b',
//           600: '#010f56',
//           700: '#010b40',
//           800: '#00082b',
//           900: '#000415',
//         },
//       }
//     : {
//         purple: {
//           100: '#16001a',
//           200: '#2c0034',
//           300: '#43004e',
//           400: '#590068',
//           500: '#6f0082',
//           600: '#8c339b',
//           700: '#a966b4',
//           800: '#c599cd',
//           900: '#e2cce6',
//         },

//         grey: {
//           100: '#141414',
//           200: '#292929',
//           300: '#3d3d3d',
//           400: '#525252',
//           500: '#666666',
//           600: '#858585',
//           700: '#a3a3a3',
//           800: '#c2c2c2',
//           900: '#e0e0e0',
//         },

//         blue: {
//           100: '#000415',
//           200: '#00082b',
//           300: '#010b40',
//           400: '#010f56',
//           500: '#01136b',
//           600: '#344289',
//           700: '#6771a6',
//           800: '#99a1c4',
//           900: '#ccd0e1',
//         },
//       }),
// });

// export const themeSettings = (mode) => {
//   const colors = getDesignTokens(mode);

//   return {
//     palette: {
//       mode: mode,
//       ...(mode === 'light'
//         ? {
//             primary: {
//               main: colors.purple[100],
//             },
//             secondary: {
//               main: colors.blue[500],
//             },
//             neutral: {
//               dark: colors.grey[700],
//               main: colors.grey[500],
//               light: colors.grey[100],
//             },
//             background: {
//               default: '#fcfcfc',
//             },
//           }
//         : {
//             primary: {
//               main: colors.purple[500],
//             },
//             secondary: {
//               main: colors.blue[500],
//             },
//             neutral: {
//               dark: colors.grey[700],
//               main: colors.grey[500],
//               light: colors.grey[100],
//             },
//             background: {
//               default: colors.purple[500],
//             },
//           }),
//       typography: {
//         fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
//         fontSize: 12,
//         h1: {
//           fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
//           fontSize: 40,
//         },
//         h2: {
//           fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
//           fontSize: 32,
//         },
//         h3: {
//           fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
//           fontSize: 24,
//         },
//         h4: {
//           fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
//           fontSize: 20,
//         },
//         h5: {
//           fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
//           fontSize: 16,
//         },
//         h6: {
//           fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
//           fontSize: 14,
//         },
//       },
//     },
//   };
// };

// export const ColorModeContext = createContext({
//   toggleColorMode: () => {},
// });

// export const useMode = () => {
//   const [mode, setMode] = useState('light');

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () =>
//         setMode((prev) => (prev === 'dark' ? 'light' : 'dark')),
//     }),
//     []
//   );

//   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

//   return [theme, colorMode];
// };

interface Colors {
  [key: string]: {
    [key: number]: string;
  };
}

type ColorMode = 'light' | 'dark';

export const tokens = (mode: ColorMode): Colors => ({
  ...(mode === 'light'
    ? {
        purple: {
          100: '#e2cce6',
          200: '#c599cd',
          300: '#a966b4',
          400: '#8c339b',
          500: '#6f0082',
          600: '#590068',
          700: '#43004e',
          800: '#2c0034',
          900: '#16001a',
        },

        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#1d1d1d',
          900: '#141414',
        },

        blue: {
          100: '#ccd0e1',
          200: '#99a1c4',
          300: '#6771a6',
          400: '#344289',
          500: '#01136b',
          600: '#010f56',
          700: '#010b40',
          800: '#00082b',
          900: '#000415',
        },
      }
    : {
        purple: {
          100: '#16001a',
          200: '#2c0034',
          300: '#43004e',
          400: '#590068',
          500: '#6f0082',
          600: '#8c339b',
          700: '#a966b4',
          800: '#c599cd',
          900: '#e2cce6',
        },

        grey: {
          100: '#141414',
          200: '#1d1d1d',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0',
        },

        blue: {
          100: '#000415',
          200: '#00082b',
          300: '#010b40',
          400: '#010f56',
          500: '#01136b',
          600: '#344289',
          700: '#6771a6',
          800: '#99a1c4',
          900: '#ccd0e1',
        },
      }),
});

const themeSettings = (mode: ColorMode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: colors.purple[700],
            },
            secondary: {
              main: colors.blue[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#fcfcfc',
            },
          }
        : {
            primary: {
              main: colors.purple[500],
            },
            secondary: {
              main: colors.blue[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.grey[200],
            },
          }),
      typography: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 12,
        h1: {
          fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
          fontSize: 40,
        },
        h2: {
          fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
          fontSize: 32,
        },
        h3: {
          fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
          fontSize: 24,
        },
        h4: {
          fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
          fontSize: 20,
        },
        h5: {
          fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
          fontSize: 16,
        },
        h6: {
          fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
          fontSize: 14,
        },
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = (): [Theme, { toggleColorMode: () => void }] => {
  const [mode, setMode] = useState<ColorMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark')),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
