import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    id: 'toast-1',
    duration: 5000,
    onClose: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    title: 'Information',
    message: 'This is an informational toast.',
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    title: 'Success!',
    message: 'Action completed successfully.',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    message: 'This is a warning.',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    title: 'Error',
    message: 'An error occurred.',
    variant: 'error',
  },
};
