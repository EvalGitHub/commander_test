#! /usr/bin/env node 
const program = require('commander');
const download = require('download-git-repo');
const ora = require('ora');
const fs = require('fs');


const {useState, useEffect} = require('react');
const {render, Text} = require('ink');
 
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

program
  .version('1.0.0', '-v, --version')
  // .command('my-cli <path>')
  .option('-u|--update', 'update sommething')
  .option('-r|--remove', 'remove sommething')
  .option('-a|--add <fileName>', 'add a file')
  .action(function(path, cmd) {
		// console.log(path)
  //	console.log(cmd.add)
    render(<Counter />);
    // downloadFileFormGit();
	})
program.parse(process.argv);

console.log('You choose');
if (program.add) console.log('add a file name:' +  program.add);
else console.log('do something');


function downloadFileFormGit() {
  const spinner = ora("copy file init......").start();
  spinner.color = 'green';
  download('github:EvalGitHub/evel_react_cli/#master', './test', function(err) {
    if (err) {
      console.error(err);
      spinner.stop();
      return;
    }
    if (!err) {
      // editFile({ version: '1.1', projectName: 'test'});
      spinner.stop();
    }
  })
}

function editFile({ version, projectName }) {
  // 读取文件
  fs.readFile(`${process.cwd()}/${projectName}/package.json`, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      // 获取json数据并修改项目名称和版本号
      let _data = JSON.parse(data.toString())
      _data.name = projectName
      _data.version = version
      let str = JSON.stringify(_data, null, 4);
      // 写入文件
      fs.writeFile(`${process.cwd()}/${projectName}/package.json`, str, function (err) {
        if (err) {
          console.error(err);
          return;
        }
      })
  });
};