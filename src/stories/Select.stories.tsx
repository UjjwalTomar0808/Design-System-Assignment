import { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Country',
    options: ['USA', 'Canada', 'UK'],
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    options: ['USA', 'Canada', 'UK'],
    error: 'Please select a country',
  },
};
