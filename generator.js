const fs = require('fs');
const package = fs.readFileSync(`./template/${options.tempName}/package_1.json`,'utf-8')
module.exports = (api, options, rootOptions) => {
    api.extendPackage(package);
    console.log('-----------------------------------------------------')
    console.log(options);
    // 复制template模版
    if(options.tempName){
        api.render(`./template/${options.tempName}`);
    }
  };
  
  