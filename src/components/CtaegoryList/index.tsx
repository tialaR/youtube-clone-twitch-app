import React from 'react';

import data from './data';

import { List, CategoryContainer, CategoryImage, CategoryName, CategoryStatus, RedCircle, Info } from './styles';

interface ItemProps {
  item: typeof data[0]; //item é do tipo de qualquer item que está dentro do array data
}

function CtaegoryList() {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9k</Info>
      </CategoryStatus>
    </CategoryContainer>
  )

  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CtaegoryList;
