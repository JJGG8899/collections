var cheerio = require('cheerio')
var superagent = require('superagent')

module.exports = {
  scrape: function(html, props){
    // var props = ['og:title','og:description','og:image']
    // 最后想返回一个metaData Obj 这里就先准备个obj 然后往里面添东西就好了
    var metaData = {}
    // $ 这个是有点类似jQuery 的东东
    $ = cheerio.load(html)
    // $('meta') 是个obj list 拿到html 里面所有<meta xxx>的东东
    $('meta').each(function(i, meta){
      if(meta.attribs != null){
        var attribs = meta.attribs
        if(attribs.property != null){
          var prop = attribs.property
          if(props.indexOf(prop) != -1){
            var key = prop.replace('og:', '')
            metaData[key] = attribs.content
          }
        }
      }
    })
    // 再给这个metaData Obj 添加一个当前url 的 属性
    // metaData['url'] = url

    return metaData
  }
}
