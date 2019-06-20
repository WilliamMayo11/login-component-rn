import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
	View,
	Button,
} from 'react-native';
import { blue } from 'ansi-colors';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	};

	render() {
		return(
			<View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>
            Welcome!
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
						style={styles.input}
						onChangeText={(text) => this.handleEmail(text)}
          />
					<TextInput
						placeholder="Password"
						secureTextEntry={true}
						style={styles.input}
						onChangeText={(text) => this.handlePassword(text)}
          />
					<View style={styles.buttonContainer}>
						<Button
							onPress={() => this.props.onSubmit(this.state.email, this.state.password)}
							title="Log In"
							color={'white'}
						/>
					</View>
					<Text>{this.state.text}</Text>
      	</View>
    	</View>
		)
	}

	handleEmail(text) {
		this.setState({
			email: text,
		});
	}
	handlePassword(text) {
		this.setState({
			password: text,
		});
	}
}

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
		borderRadius: 3,
		color: '#43464b',
		marginTop: 10,
		padding: 10,
		fontFamily: 'Helvetica',
		fontSize: 16,
  },
  container: {
    alignItems: 'center',
	},
	inputContainer: {
		padding: 0,
		margin: 0,
	},
	title: {
		marginTop: 200,
		fontSize: 50,
		color: 'white',
		fontFamily: 'Helvetica Neue',
	},
	buttonContainer: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		height: 50,
		width: 100,
		marginTop: 50,
		backgroundColor: 'blue',
		borderColor: 'grey',
    borderWidth: 1,
		borderRadius: 3,
	},
});

export default Login;