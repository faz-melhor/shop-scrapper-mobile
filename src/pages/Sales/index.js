import React, { Component } from 'react';

import { Linking } from 'react-native';

import { Container, List, Sale, Description, Divider } from './styles';

export default class Sales extends Component {
  state = {
    sales: [],
  };

  async componentDidMount() {
    this.setState({
      sales: [
        {
          url:
            'https://www.hardmob.com.br/threads/735662-Carrefour-Samsung-Galaxy-S10-Plus-R-2899-Frete-AME-faz-melhor?s=fded6acf96452b08a0cdb5e69a81cb4f',
          description:
            '[Carrefour] Samsung Galaxy S10 Plus R$ 2899+ Frete (#AME faz melhor?)',
        },
        {
          url:
            'https://www.hardmob.com.br/threads/735667-SHOPTIME-Sofa-4-lugares-connect-R-127415-em-1x-no-cartao-shoptime-Ame-R-99802',
          description:
            ' (SHOPTIME) Sofa 4 lugares connect R$ 1.274,15 em 1x no cartão shoptime + Ame R$ 998.02',
        },
        {
          url:
            'https://www.hardmob.com.br/threads/731339-SHOPTIME-TV-LG-55SM8100PSA-55-LG-43um7300-43-285047-a-vista',
          description:
            'SHOPTIME - TV LG 55SM8100PSA 55" + LG 43um7300 43" - 2850,47 á vista',
        },
        {
          url:
            '[Ponto Frio] Iphone 11 128Gb - 10% Cupom - Milhas Latam Pass 8x1 = R$ 4.784,00 (10x)',
          description:
            '[Ponto Frio] Iphone 11 128Gb - 10% Cupom - Milhas Latam Pass 8x1 = R$ 4.784,00 (10x)',
        },
        {
          url:
            'https://www.hardmob.com.br/threads/735131-Ame-R-569-Marketplace-s-Zenfone-Max-Pro-M1-64gb4gb-Tela-60-Camera-Dual-16mp5mp-Prata',
          description:
            '(Ame R$ 569) Marketplace s Zenfone Max Pro M1 64gb/4gb Tela 6.0 Camera Dual 16mp+5mp Prata',
        },
      ],
    });
  }

  openSaleLink = link => {
    Linking.openURL(link);
  };

  render() {
    const { sales } = this.state;

    return (
      <Container>
        <List
          data={sales}
          keyExtractor={sale => sale.url}
          renderItem={({ item }) => (
            <>
              <Sale onPress={() => this.openSaleLink(item.url)}>
                <Description>{item.description}</Description>
              </Sale>
              <Divider />
            </>
          )}
        />
      </Container>
    );
  }
}

Sales.navigationOptions = {
  title: 'Promoções',
};
