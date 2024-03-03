/** @type {import('next').NextConfig} */

const config = {
    productionBrowserSourceMaps: true,
    reactStrictMode: false,
    eslint: {
        dirs: ['./'],
    },
    webpack: (webpackConfig, { dev }) => {
        const rules = webpackConfig.module.rules
            .find((rule) => typeof rule.oneOf === 'object')
            .oneOf.filter((rule) => Array.isArray(rule.use));

        rules.forEach((rule) => {
            rule.use.forEach((moduleLoader) => {
                if (moduleLoader.loader?.includes('css-loader') && typeof moduleLoader.options.modules === 'object') {
                    moduleLoader.options = {
                        ...moduleLoader.options,
                        modules: {
                            ...moduleLoader.options.modules,
                            mode: 'global',
                            exportGlobals: true,
                            exportLocalsConvention: 'camelCase',
                            localIdentName: dev ? '[path][name]__[local]' : '[name]__[local]--[hash:base64:5]',
                        },
                    };
                }
            });
        });

        return webpackConfig;
    },
};
export default config;
