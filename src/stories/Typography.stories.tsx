import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Typography from '../components/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1','h2','h3','h4','h5','h6','body','caption','label'],
    },
    align: {
      control: { type: 'select' },
      options: ['left','center','right','justify'],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
    },
    transform: {
      control: { type: 'select' },
      options: ['none', 'uppercase', 'lowercase', 'capitalize'],
    },
    color: {
      control: { type: 'select' },
      options: ['inherit', 'primary', 'secondary', 'muted', 'error', 'success', 'warning'],
    },
    gutterBottom: { control: 'boolean' },
    noWrap: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: { variant: 'h1', weight: 'extrabold', color: 'primary', gutterBottom: true, children: 'Heading 1 Text' },
};

export const Heading2: Story = {
  args: { variant: 'h2', weight: 'bold', color: 'primary', gutterBottom: true, children: 'Heading 2 Text' },
};

export const BodyText: Story = {
  args: { variant: 'body', weight: 'normal', color: 'secondary', children: 'Body text example.' },
};

export const Caption: Story = {
  args: { variant: 'caption', weight: 'medium', color: 'muted', transform: 'uppercase', gutterBottom: true, children: 'Caption text' },
};

export const Label: Story = {
  args: { variant: 'label', weight: 'semibold', color: 'primary', children: 'Label text' },
};

export const Centered: Story = {
  args: { variant: 'body', align: 'center', weight: 'medium', color: 'primary', gutterBottom: true, children: 'Centered text' },
};

export const NoWrapExample: Story = {
  args: { variant: 'body', noWrap: true, weight: 'normal', color: 'primary', style: { maxWidth: '150px' }, children: 'This is a very long text that should be truncated because of noWrap property.' },
};
