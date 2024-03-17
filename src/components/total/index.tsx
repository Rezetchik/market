import React from 'react';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { SimpleCell } from '@vkontakte/vkui';

import './index.css';

const Total = () => {
  const count = useSelector((state: RootState) => state.cartSlice.value);
  const price = Math.round(count * 100) / 100;

  return (
    <div className="Total">
      <SimpleCell>
        <b>Итого:</b> {price} руб.
      </SimpleCell>
    </div>
  );
};

export default React.memo(Total);
