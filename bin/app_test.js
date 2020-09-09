#! /usr/bin/env node 
const program = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')

program
  .command('module')
  .alias('m')
  .description('创建新的模块')
  .option('-a, --add <moduleName>', '模块名称')
  .action(function(path, cmd) {
      // console.log(path)
      // console.log(cmd)
      console.log('do something');
      //为什么是Hello World 给你个眼神，自己去体会...
  })
    
program.parse(process.argv)