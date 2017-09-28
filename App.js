import React, {Component} from 'react';
import {Container, Header, Body, Left, Right, Title, Content, Text, Item, Icon, Button} from 'native-base';
import CitySearch from './src/components/CitySearch';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySearch: false,
      city: ''
    };
    this._toggleSearch = this._toggleSearch.bind(this);
    this._setCity = this._setCity.bind(this);
  }

  _toggleSearch() {
    this.setState({displaySearch: !this.state.displaySearch});
  };

  _setCity(city) {
    this.setState({city: city});
  }

  render() {
    let searchBar = this.state.displaySearch ? <CitySearch setCity={this._setCity} toggleSearch={this._toggleSearch}/> : null;
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Weather App</Title>
          </Body>
          <Right>
            <Button onPress={this._toggleSearch} transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        {searchBar}
        <Content>
          <Text>
            {this.state.city}
          </Text>
        </Content>
      </Container>
    );
  }
}