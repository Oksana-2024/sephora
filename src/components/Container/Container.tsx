import type { ReactNode } from 'react';
import clsx from 'clsx';
import s from './Container.module.css';

interface Icontainer {
  children: ReactNode;
  className: string;
}
export default function Container({ children, className }: Icontainer) {
  return <div className={clsx(s.container, className)}> {children}</div>;
}
