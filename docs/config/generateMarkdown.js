/**
 * customization of
 * https://github.com/reactjs/react-docgen/blob/master/example/generateMarkdown.js
 *
 */

function generateTitle(name) {
  const title = '# ' + name ;
  return title + '\n';
}

function generateDesciption(description) {
  return description + '\n';
}

function generatePropType(type) {
  let values;
  if (Array.isArray(type.value)) {
    values =
      '(' +
      type.value
        .map(function(typeValue) {
          return typeValue.name || typeValue.value;
        })
        .join('|') +
      ')';
  } else {
    values = type.value;
  }

  return 'type: `' + type.name + (values ? values : '') + '`\n';
}

function generatePropDefaultValue(value) {
  return 'defaultValue: `' + value.value + '`\n';
}

function generateProp(propName, prop) {
  return (
    '### `' +
    propName +
    '`' +
    (prop.required ? ' (required)' : '') +
    '\n' +
    '\n' +
    (prop.description ? prop.description + '\n\n' : '') +
    (prop.type ? generatePropType(prop.type) : '') +
    (prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : '') +
    '\n'
  );
}

function generateProps(props) {
  if (!props) return '\n';
  const title = '## Props';
  return (
    title +
    '\n' +
    Object.keys(props)
      .sort()
      .map(function(propName) {
        return generateProp(propName, props[propName]);
      })
      .join('\n')
  );
}

function generateAfterProps(text) {
  if (!text) return '';
  else return text + '\n';
}

function generateExample(example) {
  if (!example) return '';
  else {
    const title = '## Example';
    return (
      title +
      '\n' +
      '```javascript\n' + example + '\n```' +
      '\n'
    )
  }
}

function generateFooter(text) {
  if (!text) return '';
  else return text + '\n';
}

function generateMarkdown(name, reactAPI) {

  const markdownString =
    generateTitle(name) +
    '\n' +
    generateDesciption(reactAPI.docTags.description) +
    '\n' +
    generateProps(reactAPI.props) +
    '\n' +
    generateAfterProps(reactAPI.docTags.afterProps) +
    '\n' +
    generateExample(reactAPI.docTags.example) +
    '\n' +
    generateFooter(reactAPI.docTags.footer);

  return markdownString;
}

module.exports = generateMarkdown;
