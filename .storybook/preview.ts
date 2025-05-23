import type { Preview } from '@storybook/react';

import '../src/index.css'; // or wherever your global Tailwind styles are defined


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
