import React from 'react';

type TextAlign = 'left' | 'center' | 'right' | 'justify';
type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
type TextTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';
type Color = 'primary' | 'secondary' | 'muted' | 'error' | 'success' | 'warning' | 'inherit';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label';
  align?: TextAlign;
  weight?: FontWeight;
  transform?: TextTransform;
  color?: Color;
  gutterBottom?: boolean;
  noWrap?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const variantMap: Record<string, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  caption: 'small',
  label: 'label',
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  align = 'left',
  weight = 'normal',
  transform = 'none',
  color = 'inherit',
  gutterBottom = false,
  noWrap = false,
  children,
  style,
  className = '',
  ...rest
}) => {
  const Component = variantMap[variant] as keyof JSX.IntrinsicElements;

  const styles: React.CSSProperties = {
    marginBottom: gutterBottom ? '0.75rem' : 0,
    textAlign: align,
    fontWeight:
      weight === 'light'
        ? 300
        : weight === 'normal'
        ? 400
        : weight === 'medium'
        ? 500
        : weight === 'semibold'
        ? 600
        : weight === 'bold'
        ? 700
        : weight === 'extrabold'
        ? 800
        : 400,
    textTransform: transform,
    whiteSpace: noWrap ? 'nowrap' : 'normal',
    overflow: noWrap ? 'hidden' : undefined,
    textOverflow: noWrap ? 'ellipsis' : undefined,
    color:
      color === 'primary'
        ? 'var(--color-primary)'
        : color === 'secondary'
        ? 'var(--color-secondary)'
        : color === 'muted'
        ? 'var(--color-muted)'
        : color === 'error'
        ? 'var(--color-error)'
        : color === 'success'
        ? 'var(--color-success)'
        : color === 'warning'
        ? 'var(--color-warning)'
        : 'inherit',
    lineHeight: 1.4,
    ...style,
  };

  const fontSizeMap: Record<string, string> = {
    h1: '2.75rem',
    h2: '2.25rem',
    h3: '1.875rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem',
    body: '1rem',
    caption: '0.75rem',
    label: '0.875rem',
  };

  styles.fontSize = fontSizeMap[variant] || '1rem';

  return React.createElement(
    Component,
    { style: styles, className: `typography ${className}`, ...rest },
    children
  );
};

export default Typography;
