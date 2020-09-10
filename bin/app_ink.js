// #!/usr/bin/env node

const React = require("react");
const importJsx = require('import-jsx');
const { render } = require('ink');
const { Text, Box} = require('ink');

const TestUi = importJsx('../ui/test.js');
const ProgressComponent = importJsx('../ui/progress_download.js');

render(React.createElement(ProgressComponent));  
 