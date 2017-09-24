import React from 'react';
import {StyleSheet, Text, View, ListView, TouchableOpacity} from 'react-native';
import Input from "./src/components/Input";
import {Card} from "./src/components/Card";
import {CardSection} from "./src/components/CardSection";
import Button from "./src/components/Button";

var cities = ['oslo', 'new york', 'london', 'new delhi', 'chennai', 'bergen', 'los angelos', 'san francisco', 'san jose'];

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedCities: [],
      selectedCity: ''
    };
  }

  onChangeText = (searchText) => {
    let searchCities = searchText ? cities.filter(city =>
      city.startsWith(searchText.toLowerCase()) || city.includes(searchText.toLowerCase())) : [];

    this.setState({
      searchedCities: searchCities
    });
  };

  renderCity = (city) => {
    return (
      <View>
        <TouchableOpacity onPress={this.setState({selectedCity: city})}><Text>{city.toUpperCase()}</Text></TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='Search city'
            onChangeText={this.onChangeText}
            value={this.state.selectedCity}
          />
        </CardSection>

        <CardSection>
          <ListView
            dataSource={ds.cloneWithRows(this.state.searchedCities)}
            renderRow={this.renderCity}
            enableEmptySections={true}
          />
        </CardSection>
      </Card>
    );
  }
}