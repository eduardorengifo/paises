import React from 'react';
import { Flex, Text } from 'rebass/styled-components';

export interface InfoListProps {
  items: Array<{ name: string; value: string }>;
}

const InfoList: React.FC<InfoListProps> = ({ items }) => (
  <ul data-testid="info-list">
    {items.map(item => (
      <li data-testid="info-list-item" key={item.name}>
        <Flex alignItems="center">
          <Text
            sx={{
              fontWeight: 'bold',
              fontSize: 0,
              mr: 1
            }}
          >{`${item.name}:`}</Text>
          <Text fontSize={0}>{item.value}</Text>
        </Flex>
      </li>
    ))}
  </ul>
);

export default InfoList;
