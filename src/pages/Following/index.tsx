import React, { ReactNode, useMemo } from 'react';
import { FlatList, View } from 'react-native';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CtaegoryList from '../../components/CtaegoryList';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';

import { Container, Wrapper, Main } from './styles';

interface FollowingProps {
  children: ReactNode;
}

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

function Following({ children }: FollowingProps) {
  const { data, indices } = useMemo(() => {
    //Criando estrutura do componente
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => (<Heading>Following</Heading>),
      },

      {
        key: 'FOLLOWED_CATEGORIES', 
        render: () => <Title>Followed Categorioes</Title>,
        isTitle: true,
      },
      {
        key: 'COMPONENT_1', 
        render: () => <CtaegoryList />
      },

      {
        key: 'LIVE_CHANNELS', 
        render: () => <Title>Live Channes</Title>,
        isTitle: true,
      },
      {
        key: 'COMPONENT_2', 
        render: () => <StreamList/>
      },

      {
        key: 'CONTINUE_WATCHING', 
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      {
        key: 'COMPONENT_3', 
        render: () => <StreamList/>,
      },

      {
        key: 'OFFLINE_CHANELS', 
        render: () => <Title>Offline Chanels</Title>,
        isTitle: true,
      },
      {
        key: 'COMPONENT_4', 
        render: () => <ChannelList />
      }
    ]

    //Array que contem apenas os indíces dos elementos que são títulos
    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    }
  }, []);
  
  return (
    <Wrapper>
    <Container>
      <Header />

      <Main>
        <FlatList
          data={data}
          renderItem={({ item }) => item.render()}
          keyExtractor={(item) => item.key}
          stickyHeaderIndices={indices}
          // Refresh Effect
          onRefresh={() => {}}
          refreshing={false}
        />
      </Main>
    </Container>
  </Wrapper>
  );
};

export default Following;
