(function(a,b){if('function'==typeof define&&define.amd)define(['exports','minimist'],b);else if('undefined'!=typeof exports)b(exports,require('minimist'));else{var c={exports:{}};b(c.exports,a.minimist),a.parse=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0}),a.default=function(a,b){Object.assign(this.config,b),this.config.help&&(this.option('help','Output usage information'),this.command('help','Display help',this.showHelp)),this.raw=(0,c.default)(a.slice(1),this.config.minimist),this.config.version&&this.checkVersion(this.parent);var d=this.raw._[1],e=this.raw.h||this.raw.help,f={},g=this.isDefined(d,'commands'),h=this.getOptions(g);return(Object.assign(f,this.raw),f._.shift(),this.sub=f._,g)?(this.runCommand(g,h),{}):(this.config.help&&e&&this.showHelp(),h)};var c=function(a){return a&&a.__esModule?a:{default:a}}(b)});
//# sourceMappingURL=parse.js.map