import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select';
import React, { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Current selected value',
    },
    onChange: {
      action: 'value changed',
    },
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    errorText: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry', disabled: true },
  { value: 'date', label: 'Date' },
];

export const Default: Story = {
  args: {
    id: 'default-select',
    label: 'Choose a fruit',
    placeholder: 'Select one...',
    options,
  },
};

export const WithInitialValue: Story = {
  args: {
    id: 'preselected',
    label: 'Choose a fruit',
    value: 'banana',
    options,
    placeholder: 'Pick a fruit...',
    helperText: 'Banana is preselected',
  },
};

export const WithError: Story = {
  args: {
    id: 'error-select',
    label: 'Required Field',
    options,
    placeholder: 'Make a selection',
    errorText: 'Selection is required',
  },
};

export const DisabledSelect: Story = {
  args: {
    id: 'disabled-select',
    label: 'Disabled Dropdown',
    placeholder: 'Unavailable',
    options,
    disabled: true,
  },
};

export const WithControlledValue: Story = {
  render: () => {
    const [value, setValue] = useState('apple');

    return (
      <div className="w-80 space-y-4">
        <Select
          id="controlled-select"
          label="Controlled Select"
          value={value}
          onChange={(val) => setValue(val)}
          options={options}
          helperText="This is a controlled select"
        />
        <p className="text-sm text-gray-700">Selected value: {value}</p>
      </div>
    );
  },
};
