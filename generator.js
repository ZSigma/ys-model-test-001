const fs = require('fs');
const path = require('path');
module.exports = (api, options, rootOptions) => {
    const package = fs.readFileSync((path.join(__dirname, `./template/${options.tempName}/package_1.json`)),'utf-8')
    api.extendPackage(JSON.parse(package));
    console.log('-----------------------------------------------------')
    console.log(options);
    // 复制template模版
    if(options.tempName){
        api.render(`./template/${options.tempName}`);
    }
  };
  
  