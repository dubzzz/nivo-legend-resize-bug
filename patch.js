// Taken from: https://github.com/plouc/nivo/blob/c35b4e96c6f7103f3400ff02fc2b423eb741081b/scripts/patch-react-spring.js
// Related issue: https://github.com/plouc/nivo/issues/1290

const fs = require('fs');
const path = require('path');

const packagesToPatch = ['animated', 'core', 'konva', 'native', 'shared', 'three', 'web', 'zdog'];

packagesToPatch.forEach(patchPackage);

function patchPackage(package) {
  const packageJsonPath = path.join('node_modules', '@react-spring', package, 'package.json');
  const packageJson = fs.readFileSync(packageJsonPath, 'utf-8');
  const modifiedPackageJson = packageJson.replace('"sideEffects": false,', '');
  fs.writeFileSync(packageJsonPath, modifiedPackageJson, {
    encoding: 'utf-8',
  });
}
