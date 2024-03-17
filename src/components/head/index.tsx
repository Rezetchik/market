import React from 'react';
import { Header } from '@vkontakte/vkui';
import './index.css';

type HeadProps = {
  mode: 'primary' | 'secondary' | 'tertiary';
  title: string;
};

const Head = ({ mode, title }: HeadProps) => {
  return <Header mode={mode}>{title}</Header>;
};

export default React.memo(Head);
