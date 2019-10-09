/**
 * customization of
 * https://github.com/reactjs/react-docgen/blob/master/example/buildDocs.sh
 *
 */

var fs = require('fs');
var generateMarkdown = require('./generateMarkdown');
var path = require('path');

var json = '';
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    json += chunk;
  }
});

process.stdin.on('end', function() {
  buildDocs(JSON.parse(json))
});

/**
 * Add my custom tags from description of components to json object.
 */
function addDesriptionTags(api) {
  Object.keys(api).map(component => {
    let description = api[component].description;
    let regex = /^\s?@(.*)\b/gm;
    let matchSlices = [];

    while(match = regex.exec(description)) {
      matchSlices.push({tag: match[1], value: description.slice(match.index)})
    }

    matchSlices.map((m, i) => {
      if (i < matchSlices.length - 1){
        m.value = m.value.replace(matchSlices[i+1].value, '');
      }
      m.value = m.value.replace(`@${m.tag}`, '').trim();
    })

    let tagsObj = {};
    matchSlices.map(m => {
      tagsObj[m.tag] = m.value;
    })

    api[component].docTags = tagsObj;
  })

  return api;
}


function buildDocs(api) {
  api = addDesriptionTags(api);
  for (var filepath in api) {
    // console.log('\n');
    // console.log('\n');
    // console.log('\n');
    // console.log('\n');
    // console.log(filepath);
    // console.log(api[filepath].docTags);

    if (api[filepath].description.indexOf('@docIgnore') === -1){
      var name = getComponentName(filepath);
      var markdown = generateMarkdown(name, api[filepath]);
      fs.writeFileSync('docs/' + name + '.md', markdown);
      process.stdout.write(filepath + ' -> ' + 'docs/' + name + '.md\n');
    }
  }
}

function getComponentName(filepath) {
  var name = path.basename(filepath);
  if (name === 'index.js') {
    const dirs = path.dirname(filepath).split('/');
    name = dirs[dirs.length - 1];
  }
  var ext;
  while ((ext = path.extname(name))) {
    name = name.substring(0, name.length - ext.length);
  }
  return name;
}
