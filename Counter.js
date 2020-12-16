import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Linking, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import { increment, decrement } from './redux/actions/counterActions';
import { fetchSpace }  from './redux/actions/spaceActions';

const Counter = ({loading, data, fetchSpace, increment, decrement, counter}) => {
	const up = () => {
		increment();
	};
	
	const down = () => {
		decrement();
	};

	const space = () => {
		fetchSpace();
	};

  return (
  	<View>
  	  <TouchableOpacity onPress={up} style={styles.plus}>
  	    <Text style={styles.text}>+</Text>
  	  </TouchableOpacity>
  	  <TouchableOpacity onPress={down} style={styles.minus}>
  	    <Text style={styles.text}>-</Text>
  	  </TouchableOpacity>
  	  <Text style={styles.count}>{counter}</Text>

  	  <TouchableOpacity onPress={space} style={styles.space}>
  	    <Text style={styles.text}>SPACE</Text>
  	  </TouchableOpacity>
  	  
  	  {loading ?
  	  	<ActivityIndicator size="large" />
  	  	:
  	  	<Text style={styles.spaceText}>{data?.data?.explanation}</Text>
  	  }
  	</View>
	)
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    data: state.space.data,
    loading: state.space.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    fetchSpace: () => dispatch(fetchSpace()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
	count: {
	  fontSize: 100,
	  alignSelf: 'center',
	},
	space: {
	  backgroundColor: '#66CD00',
	  width: 200,
	  height: 50,
	  margin: 10,
	  alignSelf: 'center'
	},
	minus: {
	  backgroundColor: '#ffc0b4',
	  width: 200,
	  height: 50,
	  margin: 10,
	  alignSelf: 'center'
	},
	plus: {
	  backgroundColor: '#00cdcd',
	  width: 200,
	  height: 50,
	  margin: 10,
	  alignSelf: 'center'
	},
	text: {
	  alignSelf: 'center',
	  textAlign: 'center',
	  color: 'white',
	  fontSize: 40
	},
});
