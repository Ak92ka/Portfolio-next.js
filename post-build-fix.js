// post-build-fix.js
const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'out');

function removeTrailingSlashFromVoidElements(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      removeTrailingSlashFromVoidElements(filePath);
    } else if (filePath.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf-8');
      content = content.replace(/(<(meta|link|img|input|br|hr|source|embed|param|track|wbr)[^>]*?)\/>/g, '$1>');
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  });
}

removeTrailingSlashFromVoidElements(directory);
