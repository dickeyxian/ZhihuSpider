/**
 * Created by xianda on 15/10/7.
 */

'use strict';

var co = require('co');
var request = require('co-request');
var fs = require('fs');

co(function* () {
  let headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'Host': 'www.zhihu.com',
    'Pragma': 'no-cache',
    'Upgrade-Insecure-Requests': '1',
    'Content-Type': 'application/json',
    'Cookie': Cookie
  };

  let url = 'http://www.zhihu.com/people/excited-vczh';
  //let homePage = yield request({
  //  url: url,
  //  headers: headers
  //});



  let Activties = yield request.post({
    url: 'http://www.zhihu.com/people/kaiserwang730/activities',
    headers: headers,
    json:true,
    form: {
      'start': 1444209536,
      '_xsrf': '13174829c177892ba95331be1a5e2b52'
    }
  });
  //console.log(Activties.body.msg[1])
  fs.writeFileSync('index.html', Activties.body.msg[1])

}).catch(onerror);

function onerror(err) {
  console.error(err.stack);
}
