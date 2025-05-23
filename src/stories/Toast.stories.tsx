import { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    message: 'Action completed successfully!',
    type: 'success',
  },
};

export const Error: Story = {
  args: {
    message: 'Something went wrong.',
    type: 'error',
  },
};
