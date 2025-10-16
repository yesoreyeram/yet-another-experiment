import React from 'react';
import { Button as GrafanaButton } from '@grafana/ui';
import type { ButtonProps } from '@grafana/ui';

export type ButtonComponentProps = ButtonProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonComponentProps>((props, ref) => {
  return <GrafanaButton ref={ref} {...props} />;
});
