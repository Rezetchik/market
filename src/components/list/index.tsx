import { memo } from 'react';
import { List } from '@vkontakte/vkui';
import './style.css';

type ItemInfo = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
};

type ListMapProps = {
  list: ItemInfo[];
  renderItem: React.FC;
};

function ListMap({ list, renderItem }: ListMapProps) {
  return (
    <List className="List">
      {list.map((item: ItemInfo) => (
        <div key={item.id} className="List-item">
          {renderItem(item)}
        </div>
      ))}
    </List>
  );
}

export default memo(ListMap);
