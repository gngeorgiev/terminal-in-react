(function(a,b){if('function'==typeof define&&define.amd)define(['exports','camelcase','string-similarity'],b);else if('undefined'!=typeof exports)b(exports,require('camelcase'),require('string-similarity'));else{var c={exports:{}};b(c.exports,a.camelcase,a.stringSimilarity),a.utils=c.exports}})(this,function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}function e(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}Object.defineProperty(a,'__esModule',{value:!0});var f=d(b),g=d(c),h='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};a.default={handleType:function handleType(a){var b=a;return'function'!=typeof a&&(b=a.constructor),b===String?['[value]']:b===Array?['<list>']:b===Number||b===parseInt?['<n>',parseInt]:['']},readOption:function readOption(a){var b=a.defaultValue,c={},d=!0,e=!1,g=void 0;try{for(var i,j=a.usage[Symbol.iterator]();!(d=(i=j.next()).done);d=!0){var r=i.value,s=this.raw[r];'undefined'!=typeof s&&(b=s)}}catch(a){e=!0,g=a}finally{try{!d&&j.return&&j.return()}finally{if(e)throw g}}var k=-1,l=!0,m=!1,n=void 0;try{for(var o,p,q=a.usage[Symbol.iterator]();!(l=(o=q.next()).done);l=!0){p=o.value,k+=1;var t=b;Array.isArray(a.defaultValue)&&('undefined'==typeof t?'undefined':h(t))!==h(a.defaultValue)&&(0==k&&this.raw._.push(t),t=[t]),'undefined'!=typeof a.defaultValue&&('undefined'==typeof t?'undefined':h(t))!==h(a.defaultValue)&&(0==k&&this.raw._.push(t),t=a.defaultValue);var u=!0;a.init&&(a.init===toString&&(u=t.constructor===Number),u&&(t=a.init(t))),1<p.length&&(p=(0,f.default)(p)),c[p]=t}}catch(a){m=!0,n=a}finally{try{!l&&q.return&&q.return()}finally{if(m)throw n}}return c},getOptions:function getOptions(a){var b=this,c={},d={},f=!0,h=!1,i=void 0;try{for(var j,k,l=this.details.options[Symbol.iterator]();!(f=(j=l.next()).done);f=!0)(k=j.value,'undefined'!=typeof k.defaultValue)&&Object.assign(c,this.readOption(k))}catch(a){h=!0,i=a}finally{try{!f&&l.return&&l.return()}finally{if(h)throw i}}Object.assign(d,this.raw);var m=[].concat(e(d._));for(var o in delete d._,d)if({}.hasOwnProperty.call(d,o)){var n=this.isDefined(o,'options');if(n){var p=this.readOption(n);Object.assign(c,p)}n||a||function(){var a=[];b.details.options.forEach(function(b){a.push.apply(a,e(b.usage))});var c=g.default.findBestMatch(o,a);if(console.log('The option "'+o+'" is unknown.'),0.5<=c.bestMatch.rating){console.log(' Did you mean the following one?\n');var d=b.details.options.filter(function(a){var b=!0,d=!1,e=void 0;try{for(var f,g,h=a.usage[Symbol.iterator]();!(b=(f=h.next()).done);b=!0)if(g=f.value,g===c.bestMatch.target)return!0}catch(a){d=!0,e=a}finally{try{!b&&h.return&&h.return()}finally{if(d)throw e}}return!1});console.log(b.generateDetails(d)[0].trim()+'\n')}else console.log(' Here\'s a list of all available options: \n'),b.showHelp()}()}return c._=m,c},generateExamples:function generateExamples(){var a=this.details.examples,b=[];for(var e in a)if({}.hasOwnProperty.call(a,e)){var c=this.printSubColor('$ '+a[e].usage),d=this.printMainColor('- '+a[e].description);b.push('  '+d+'\n\n    '+c+'\n\n')}return b},generateDetails:function generateDetails(a){var b='string'==typeof a?[].concat(e(this.details[a])):[].concat(e(a)),c=[],d='commands'===a;for(var n in b.sort(function(c,a){var b=d?c.usage:c.usage[1],e=d?a.usage:a.usage[1];switch(!0){case b<e:return-1;case b>e:return 1;default:return 0;}}),b)if({}.hasOwnProperty.call(b,n)){var f=b[n].usage,g=b[n].defaultValue;if(f.constructor===Array)if(d)f=f.join(', ');else{var o=f.indexOf('v');f='-'+f[0]+', --'+f[1],g||(g=b[n].init),f+=g&&-1===o?' '+this.handleType(g)[0]:''}b[n].usage=f}var h=b.slice().sort(function(c,a){return a.usage.length-c.usage.length})[0].usage.length,i=!0,j=!1,k=void 0;try{for(var l,m=b[Symbol.iterator]();!(i=(l=m.next()).done);i=!0){var p=l.value,q=p.usage,r=p.description,s=p.defaultValue,t=h-q.length;q+=' '.repeat(t),'undefined'!=typeof s&&('boolean'==typeof s?r+=' ('+(s?'enabled':'disabled')+' by default)':r+=' (defaults to '+JSON.stringify(s)+')'),c.push('  '+this.printMainColor(q)+'  '+this.printSubColor(r))}}catch(a){j=!0,k=a}finally{try{!i&&m.return&&m.return()}finally{if(j)throw k}}return c},runCommand:function runCommand(a,b){if('help'!==a.usage||this.config.help||(a.init=!1),a.init){var c=[].concat(this.sub);return c.shift(),a.init.bind(this)(a.usage,c,b)}return''},isDefined:function isDefined(a,b){var c=this.details[b],d=!0,e=!1,f=void 0;try{for(var g,h=c[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var i=g.value,j=i.usage,k=j.constructor;if(k===Array&&-1<j.indexOf(a))return i;if(k===String&&j===a)return i}}catch(a){e=!0,f=a}finally{try{!d&&h.return&&h.return()}finally{if(e)throw f}}return!1}}});
//# sourceMappingURL=utils.js.map