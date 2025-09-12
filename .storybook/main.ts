import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    const tailwindcss = (await import('@tailwindcss/vite')).default;
    const reactPlugin = (await import('@vitejs/plugin-react')).default({
      jsxRuntime: 'automatic',
    });
    return {
      ...config,
      plugins: config.plugins ? [...config.plugins, tailwindcss(), reactPlugin] : [tailwindcss(), reactPlugin],
      esbuild: {
        ...config.esbuild,
        jsxInject: `import React from 'react'`,
      },
    };
  },
};

export default config;