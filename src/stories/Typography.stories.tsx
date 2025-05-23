import { Meta, StoryObj } from '@storybook/react';
import { Typography, TypographyVariant } from '../components/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Typography>;

const variants: TypographyVariant[] = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p', 'label', 'caption', 'helper',
];

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      {variants.map((v) => (
        <Typography key={v} variant={v}>
          {v.toUpperCase()} — The quick brown fox jumps over the lazy dog.
        </Typography>
      ))}
    </div>
  ),
};
