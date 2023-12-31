import {Button} from '@repo/ui'
import React, { type FC } from 'react';

interface MainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate: FC<MainTemplateProps> = ({children}) => {
  return (
		<>
		<p>This is the header!</p>
		<Button>This is a UI Button</Button>
		{children}
		<p>This is a footer!</p>
		</>
  );
};