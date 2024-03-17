import React from 'react';
import { Button, Counter } from '@vkontakte/vkui';
import { Icon24Add, Icon16Dash, Icon16Delete } from '@vkontakte/icons';
import { useDispatch } from 'react-redux';
import { decrement, increment, removeItem } from '../../store/cart/slice';
import './index.css';

type Actiontype = {
  price: number;
  id: number;
  count: number;
};

const Action = (props: Actiontype) => {
  const dispatch = useDispatch();
  const firstrender = React.useRef(true);

  React.useEffect(() => {
    if (firstrender.current) {
      plus();
      firstrender.current = false;
      return;
    }
  }, []);

  const plus = () => {
    dispatch(increment(props));
  };

  const minus = () => {
    dispatch(decrement(props));
  };

  const deleteItem = () => {
    dispatch(removeItem(props));
  };

  return (
    <div className="Counter">
      <Button appearance="accent" mode="secondary" before={<Icon24Add />} onClick={plus} />
      <Counter className="Counter-point" mode="secondary">
        {props?.count}
      </Counter>
      <Button appearance="accent" mode="secondary" before={<Icon16Dash />} onClick={minus} />
      <Button appearance="accent" mode="secondary" before={<Icon16Delete />} onClick={deleteItem} />
    </div>
  );
};

export default React.memo(Action);
