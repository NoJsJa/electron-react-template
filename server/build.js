const path = require('path');
const fs = require('fs');
const { copyDirSync, exec, execRealtime, console_log, compress, uncompress } = require('./build.utils');

/*
   * 函数调用list
   * @param setEnvConf 打包前读取设置
   * @param packageResources 打包完成后整理资源文件
   * @param buildBefore 打包前清理环境
   * @param build 执行平台打包
   * @param --help | -h 查看帮助信息
   */
class Builder {
  constructor(platform, conf) {
    this.platform = platform;
    this.conf = conf ? conf.replace('--', '') : null;
    this.packageInfo = require('./package.json');
    const { name, version } = this.packageInfo;
    const resourcesMap = {
      win: () => [`./build/${name}\ Setup\ ${version}.exe`],
      linux: () => ['./build/linux-unpacked'],
      mac: () => [`./build/${name}-${version}.dmg`],
      all: () => resourcesMap['win']().concat(resourcesMap['linux']()).concat(resourcesMap['mac']())
    };
    this.resources = resourcesMap[platform]();
  }

  /* 打包前读取设置 */
  setEnvConf() {
    const choises = ['office', 'edit'];
    const envConf = require('./config.json');
    const officeConf = require('./package.office.json');
    const editConf = require('./package.edit.json');
    let originConf = require('./package.json');
    envConf.work_env = choises.includes(this.conf) ? this.conf : envConf.work_env;
    fs.writeFileSync('./config.json', JSON.stringify(envConf));

    if (envConf.work_env === 'edit') {
      fs.writeFileSync('./package.json', JSON.stringify({
        ...originConf,
        ...editConf
      }));
    } else if (envConf.work_env === 'office') {
      fs.writeFileSync('./package.json', JSON.stringify({
        ...originConf,
        ...officeConf
      }));
    } else {
      console_log(`read env file error! please check path ./config.json.`, 'red');
      process.exit(1);
    }
  }

  /* 打包完成后整理资源文件 */
  packageResources() {
    const { name, version } = this.packageInfo;
    const tmp = `./build/${name}-${version}-${this.platform}`;
    
    if (fs.existsSync(tmp)) fs.rmdirSync(tmp, {recursive: true});
    fs.mkdirSync(tmp, {recursive: true});
    this.resources
    .filter((resource) => fs.existsSync(resource))
    .forEach((resource) => {
      fs.copyFileSync(resource,  `${tmp}/${path.basename(resource)}`);
    });
    return compress(tmp, `${tmp}.zip`);
  }

  /* 打包前清理环境 */
  buildBefore() {
    if (fs.existsSync('./build')) {
      fs.rmdirSync('./build', { recursive: true });
    }
    fs.mkdirSync('./build');
    copyDirSync('./resources', './build');
  }

  /* 打包后清理环境 */
  static async cleanBuild() {
    if (fs.existsSync('./build')) {
      fs.rmdirSync('./build', { recursive: true });
    }
    if (fs.existsSync('./dist')) {
      fs.rmdirSync('./dist', { recursive: true });
    }
    await execRealtime('git checkout -- ./build');
    await execRealtime('git checkout -- ./dist');
  }

  /* 按照平台打包 */
  async build() {
    console_log('>>>>>> set env conf ...');
    this.setEnvConf();

    console_log('>>>>>> build-clean ...');
    this.buildBefore();

    console_log(`>>>>>> build-${this.platform} ...`);
    await execRealtime(`npm run build-${this.platform}`);

    await execRealtime('git checkout -- ./package.json');
    await execRealtime('git checkout -- ./config.json');

    console_log('>>>>>> package installation resources ...');
    await this.packageResources();

    console_log(`>>>>>> build-${this.platform} finished!`);
  }

  /* 显示帮助信息 */
  static help() {
    console_log('\
    \n\
    description: build command for RhinoDisk.\n\
    command: node build.js [action] [config]\n\
    |\n\
    |\n\
    |______ param: [--help | -h ] => show usage info.\n\
    |______ param: [build-win   ] [--edit | --office] => build package for windows, the default conf file is ./config.json.\n\
    |______ param: [build-linux ] [--edit | --office] => build package for linux, the default conf file is ./config.json\n\
    |______ param: [build-mac   ] [--edit | --office] => build package for mac, the default conf file is ./config.json\n\
    |______ param: [build-all   ] [--edit | --office] => build package for all platform, the default conf file is ./config.json\n\
    |______ param: [clean-build ] => clean build directory after build\n\
    |\n\
    |______ example1: node build.js build-win\n\
    |______ example2: node build.js build-linux\n\
    |______ example3: node build.js build-mac\n\
    |______ example4: node build.js build-all\n\
    |______ example5: node build.js build-win --edit\n\
    |______ example6: node build.js build-win --office\n\
    |______ example7: node build.js --help\n\
    |______ example8: node build.js clean-build\n\
    \n\
    ')
  }
}

/* Main */
function Main() {
  const params = process.argv.splice(2);
  let tmp;
  while (params.length) {
    tmp = params.shift();
    switch (tmp) {
      case 'build-win':
        const winBuilder = new Builder('win', params.length ? params.shift() : '');
        winBuilder.build();
        break;
      case 'build-linux':
        const linuxBuilder = new Builder('linux', params.length ? params.shift() : '');
        linuxBuilder.build();
        break;
      case 'build-mac':
        const macBuilder = new Builder('mac', params.length ? params.shift() : '');
        macBuilder.build();
        break;
      case 'build-all':
        const allBuilder = new Builder('all', params.length ? params.shift() : '');
        allBuilder.build();
        break;
      case 'clean-build':
        Builder.cleanBuild();
        break;
      case '--help':
        Builder.help();
        break;
      case '-h':
        break;
      default:
        console_log(`param - ${tmp} is not match any already defined functions!`, 'red');
        process.exit(1);
        break;
    }
  }
}

Main();