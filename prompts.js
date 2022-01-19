const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
// 读取template文件夹下子文件夹名，一个子文件夹即是一个模板
const tempList = fs.readdirSync(path.join(__dirname, './template/'), 'utf-8')
module.exports = [
{
    type: 'rawlist',
    name: 'tempName',
    message: '请选择模板',
    choices: tempList
}]
