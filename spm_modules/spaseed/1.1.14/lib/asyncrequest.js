/**
 * promise
 * @class promise
 * @static
 */
define(function(require, exports, module) {
	var asyncRequest = {
		all:function(requestArray, success, fail){
			if(window.Promise){
				var promiseFunctionArray = [];
				for(var i=0;i<requestArray.length;i++){
					(function(item,index){
						promiseFunctionArray.push(new Promise(function(resolve, reject){
							item.net.request(item.request,item.params,function(data){
								resolve(data);
							},function(err){
								reject(err);
							});
						}));
					})(requestArray[i],i);
				}

				Promise.all(promiseFunctionArray).then(function(values){
		           if(success){
		           		success(values);
		           }
		        }).catch(function(errs){
		        	if(fail){
		        		fail(errs);
		        	}
		        });

			}else{
				var count = requestArray.length;
				var resultsArray = new Array(count);
				//不支持Promise的情况
				for(var i=0;i<count;i++){
					(function(item,index){
						item.net.request(item.request,item.params,function(data){
							resultsArray[index] = data;
							if(!--count){
								if(success){
									success(resultsArray);
								}
							}
						},function(err){
							resultsArray[index] = err;
							if(!--count){
								if(fail){
									fail(resultsArray);
								}
							}
						});
					})(requestArray[i],i);
				}
			}
		}
	};

	module.exports = asyncRequest;
});