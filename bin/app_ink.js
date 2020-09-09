// #!/usr/bin/env node

const importJsx = require('import-jsx');
const {useState, useEffect} = require('react');
const { h, render, Text, Component} = require('ink');
const Counter = importJsx('../ui/test.jsx');
 
render(h(Counter));  
 