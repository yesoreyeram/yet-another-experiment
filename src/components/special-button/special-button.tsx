import React from 'react';
import { Button } from '@/components/button';
import type { ButtonComponentProps } from '@/components/button';
import type { ButtonVariant, IconName } from '@grafana/ui';

export type SpecialButtonProps = Omit<ButtonComponentProps, 'variant' | 'icon'> & {
  special?: boolean;
};

export const SpecialButton = React.forwardRef<HTMLButtonElement, SpecialButtonProps>(
  ({ special = true, ...props }, ref) => {
    const variant: ButtonVariant = special ? 'primary' : 'secondary';
    const icon: IconName | undefined = special ? 'star' : undefined;
    
    const buttonProps = {
      ...props,
      variant,
      icon,
    } as ButtonComponentProps;
    
    return <Button ref={ref} {...buttonProps} />;
  }
);
