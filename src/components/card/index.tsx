import React from 'react';
import { SimpleCell, Card, Image } from '@vkontakte/vkui';
import Action from '../action';
import './index.css';

type ItemInfo = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  count: number;
};

type CardInfoProps = {
  item: ItemInfo;
};

const CardInfo = (props: CardInfoProps) => {
  return (
    <Card className="Card" mode="shadow">
      <SimpleCell className="Card-cell" before={<Image src={props.item.image} />}>
        {props.item.title}
      </SimpleCell>
      <SimpleCell className="Card-cell">{props.item.description}</SimpleCell>
      <div className="Card-cell">
        <div className="Card-footer">
          <div className="Card-point">
            <b>Стоимость:</b> {props.item.price} руб.
          </div>
          <Action id={props.item.id} price={props.item.price} count={props.item?.count} />
        </div>
      </div>
    </Card>
  );
};

export default React.memo(CardInfo);
