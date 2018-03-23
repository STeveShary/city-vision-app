import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class SettingsToggle extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            toggled: false,
        }
        this.toggle = this.toggle.bind(this);
        this.init = this.init.bind(this);
        this.buildKey = this.buildKey.bind(this);
        this.init();
    }

    async init() {
        const toggledVal = await AsyncStorage.getItem(this.buildKey());
        const toggled = toggledVal === "true";
        this.setState({toggled});

    }

    buildKey() {
        return "@setting:" + this.props.storageKey;
    }

    toggle() {
        const storageValue = !this.state.toggled ? "true": "false";
        AsyncStorage.setItem(this.buildKey(), storageValue);
        this.setState({ toggled: !this.state.toggled });
        if(this.props.toggleOnAction && storageValue === "true") {
            this.props.toggleOnAction();
        } else if(this.props.toggleOffAction && storageValue === "false") {
            this.props.toggleOffAction();
        }
    }

    render() {
        return (
            <View style={styles.container}>
             <TouchableWithoutFeedback  onPress={this.toggle}>
                <View style={styles.toggleContainer}>
                     {this.state.toggled ?
                        <FontAwesome name="toggle-on" size={50} color="green" /> :
                        <FontAwesome name="toggle-off" size={50} color="black" />}
                    <Text style={styles.toggleText}>{this.props.text}</Text>
                 </View>
              </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toggleText: {
        fontSize: 16,
        paddingLeft: 10
    },
    toggleContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    }
});