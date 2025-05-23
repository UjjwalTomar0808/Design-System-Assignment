import { Meta, StoryObj } from '@storybook/react';
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
    type: 'info',
    title: 'Informational Alert',
    message: 'This is a helpful piece of information.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success!',
    message: 'Your action was completed successfully.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning!',
    message: 'This action might have unintended consequences.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error!',
    message: 'Something went wrong. Please try again.',
  },
};
