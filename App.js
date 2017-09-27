import React, {Component} from 'react';
import {Container, Header, Body, Left, Right, Title, Content, Text, Item, Icon, Button} from 'native-base';
import CitySearch from './src/components/CitySearch';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySearch: false
    };
    this._toggleSearch = this._toggleSearch.bind(this);
  }

  _toggleSearch() {
    this.setState({displaySearch: !this.state.displaySearch});
  };

  render() {
    let searchBar = this.state.displaySearch ? <CitySearch/> : null;
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
      </Container>
    );
  }
}