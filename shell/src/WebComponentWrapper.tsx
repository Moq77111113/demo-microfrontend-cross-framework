import React from 'react';

interface WebComponentProps extends React.HTMLAttributes<HTMLElement> {
  tag: string;
}

export const WrapWebComponent: React.FC<WebComponentProps> = ({
  tag,
  ...props
}) => {
  const Compo = tag as React.ElementType;
  //   return <Compo {...props} />;
  return <Compo {...props} />;
};
