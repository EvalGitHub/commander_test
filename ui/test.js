'use strict';
// import React, {useState, useEffect} from 'react';
const { Text} = require('ink');
const React = require('react');
const {useState, useEffect} = React;
const Image = require('ink-image');

const Example = () => (
  <>
    <Text color="green">I am green</Text>
    <Text color="black" backgroundColor="white">
        I am black on white
    </Text>
    <Text color="#ffffff">I am white</Text>
    <Text bold>I am bold</Text>
    <Text italic>I am italic</Text>
    <Text underline>I am underline</Text>
    <Text strikethrough>I am strikethrough</Text>
    <Text inverse>I am inversed</Text>
    {/* <Image preserveAspectRatio src='https://kn-cdn.codemao.cn/nemoy/assets/magic_miaofc702edf.jpg' width='50%'/> */}
  </>
);

const Counter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter(previousCounter => previousCounter + 1);
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return <Text color="green">{counter} tests passed</Text>;
};

const TestUi = () => {
  return <>
    <Example/>
    <Counter/>
  </>
}

module.exports = TestUi;
