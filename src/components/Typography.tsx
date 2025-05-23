import React from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'label'
  | 'caption'
  | 'helper';

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClassMap: Record<TypographyVariant, string> = {
  h1: 'text-4xl font-bold text-grayscale-900',
  h2: 'text-3xl font-semibold text-grayscale-900',
  h3: 'text-2xl font-semibold text-grayscale-800',
  h4: 'text-xl font-medium text-grayscale-800',
  h5: 'text-lg font-medium text-grayscale-700',
  h6: 'text-base font-medium text-grayscale-700',
  p: 'text-base text-grayscale-700',
  label: 'text-sm font-medium text-grayscale-800',
  caption: 'text-xs text-grayscale-400',
  helper: 'text-xs italic text-grayscale-400',
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = '',
}) => {
  // Tag must be a valid JSX intrinsic element (like 'h1', 'p', etc.)
  const Tag = (variant.startsWith('h') ? variant : 'p') as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`font-manrope ${variantClassMap[variant]} ${className}`}>
      {children}
    </Tag>
  );
};
