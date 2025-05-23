import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../components/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    title: 'Information Alert',
    message: 'This is an informational message.',
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    title: 'Success!',
    message: 'Your action was successful.',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning!',
    message: 'Be careful with this operation.',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    title: 'Error!',
    message: 'Something went wrong.',
    variant: 'error',
  },
};

export const NoMessage: Story = {
  args: {
    title: 'Heads up!',
    variant: 'info',
  },
};
