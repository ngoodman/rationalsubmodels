var mostFrequent = function(vals){
  var hist = {}
  var valkey = {}
  for(var i in vals){
    if(hist[vals[i]] == undefined){hist[vals[i]]=0; valkey[vals[i]]=vals[i]}
    hist[vals[i]]++
  }
  var max
  for(var k in hist){
    max= hist[k]>(hist[max]|0) ? k : max
  }
  return valkey[max]
}

module.exports = {
  mostFrequent : mostFrequent
};
