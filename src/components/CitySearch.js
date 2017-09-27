import React, {Component} from 'react';
import {Content, Item, Icon, Input, List, ListItem, Text} from 'native-base';

var cities = ['oslo', 'new york', 'london', 'new delhi', 'chennai', 'bergen', 'los angelos', 'san francisco', 'san jose'];

class CitySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedCities: [],
      selectedCity: ''
    }
  }

  _onChangeText = (searchText) => {
    let searchCities = searchText ? cities.filter(city =>
      city.startsWith(searchText.toLowerCase()) || city.includes(searchText.toLowerCase())) : [];

    this.setState({
      searchedCities: searchCities
    });
    let list = searchCities.map(city => <ListItem>{city}</ListItem>);
  };

  _titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
  }

  render() {
    let listOfCities = this.state.searchedCities.map(
      city => <ListItem key={city}><Text key={city}>{this._titleCase(city)}</Text></ListItem>
    );
    return(
      <Content searchbar>
        <Item>
          <Icon style={{paddingLeft: 15}} name="ios-search" />
          <Input
            placeholder="Search"
            onChangeText={this._onChangeText}
          />
        </Item>
        <List>
          {listOfCities}
        </List>
      </Content>
    );
  }
}

export default CitySearch;