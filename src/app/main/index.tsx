import { memo, useCallback, useEffect, useState } from 'react';
import { SplitLayout, ScreenSpinner } from '@vkontakte/vkui';
import Column from '../../components/column';
import Head from '../../components/head';
import ListMap from '../../components/list';
import CardInfo from '../../components/card';
import Total from '../../components/total';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../../store/cart/slice';
import type { RootState } from '../../store/store';
import './index.css';

const Main = () => {
  const item = useSelector((state: RootState) => state.cartSlice.items);
  const [error, setError] = useState(null);
  const [popout, setPopout] = useState<React.ReactNode>(<ScreenSpinner size="large" />);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((obj) => {
        setPopout(null);
        dispatch(addItems(obj), 'Загружены данные с АПИ');
      })
      .catch((err) => {
        setPopout(null);
        setError(err.message);
      });
  }, []);

  const renders = {
    item: useCallback((item: any) => {
      return <CardInfo item={item} />;
    }, []),
  };

  if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <SplitLayout popout={popout} className="SplitLayout">
        {popout && <ScreenSpinner id="spiner" size="large" />}
        <Column>
          <Head mode="secondary" title="В корзине" />
          <ListMap list={item} renderItem={renders.item} />
        </Column>
        <Column>
          <Total />
        </Column>
      </SplitLayout>
    );
  }
};

export default memo(Main);
