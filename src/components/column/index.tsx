import React from 'react';
import { SplitCol, Group } from '@vkontakte/vkui';
import './index.css';

type СolumnProps = {
  header?: React.ReactNode;
  children?: React.ReactNode;
};

const Сolumn = ({ header, children }: СolumnProps) => {
  return (
    <SplitCol className="Column">
      <Group mode="card" header={header}>
        {children}
      </Group>
    </SplitCol>
  );
};

export default React.memo(Сolumn);
