'use strict';
const React = require("react");

const {h, Component, Text} = require('ink');
const PropTypes = require('prop-types');
const ProgressBar = require('ink-progress-bar');
let child_process = require('child_process');
const { useEffect } = require("react");
let argv = process.argv;

console.log(`the folder' name is: ${argv[2]}`);

const ProgressBarComponent = () => {  
  const [i, setI] = React.useState(0);

  function loading () {
    return new Promise(function (resolve, reject) {
      setInterval(() => {
        setI(preI => preI + 0.1);
        i > 1 ? resolve() : null;
      }, 100);
    })
  }

  async function start () {
    await loading();
    child_process.exec(
      'rm -rf' + ` ${argv[2]} `
      + '&& mkdir' + ` ${argv[2]} `
      + '&& cd' + ` ${argv[2]} `
      + '&& git clone https://github.com/TimRChen/react-webpack.git'
      + '&& rm -rf ./react-webpack/.git'
      + '&& mv ./react-webpack/* ./react-webpack/.[^.]* ./'
      + '&& rm -rf ./react-webpack'
      ,	(error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}\n`);
        return;
      }
      
      console.log(`project was initialized successfully! \n${stdout}`);
      if (stderr) {
        console.log(`error: \n${stderr}`);
      }

      process.exit();
    });
  }

  useEffect(() => {
    start();
  }, []) 

  return (
    <>
      <Text>
        generator a simple react with webpack item...
      </Text>
      <br/>
      <ProgressBar
        char="x"
        percent={i}
        left={5}
        right={0}
        green
      />
      <br/>
      <Text green>
        download...{
          parseInt(i * 100) < 100 ? parseInt(i * 100) : 100
        }%
      </Text>
    </>
  );
}

module.exports = ProgressBarComponent;