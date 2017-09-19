module.exports = function multiply(first, second) {

	var arr1 = arrify(first),
			arr2 = arrify(second),
			resultArr = [];

	for (var l = 0; l < resultLength(arr1,arr2); l++) {
		resultArr[l] = 0;
	}

	var product = 0,
			memo = 0,
			memo2 = 0;

	for (var i = arr1.length-1; i >= 0; i--) {

		for (var j = arr2.length-1; j >= 0; j--) {

			product = arr1[i]*arr2[j];
			product += memo;

			if (product >= 10) {

				memo = Math.floor(product/10);
				product -= (memo*10);

			}	else 	{memo = 0;}

			resultArr[i+j]+= product;

			if (resultArr[i+j]>=10) {

				memo2=Math.floor(resultArr[i+j]/10);
				resultArr[i+j] -= memo2*10;
				memo+=memo2;

			}

			if (j==0 && memo !==0) {

				if (i===0) {

					resultArr.unshift(memo);
					memo = 0;
					resultArr.pop();

				}else {

					resultArr[i+j-1]+=memo;
					memo=0;

				}
			}
		}
	}
	return resultArr.join('');
}


function arrify (str) {
	
	var arr = [];
	
	for (var i = 0; i < str.length; i++) {
		
		arr.push(str[i]);
		
	}
	return arr;
}

function resultLength(arr1,arr2) {
	var i = 1;

	while(i<5) {

		var firstProd = arr1.join('').slice(0,i) * arr2.join('').slice(0,i),
				powerP = Math.pow(10,(2*i-1)); 

		if (firstProd < (powerP - powerP/10)) {

			if (i === 1 && firstProd >5) {
				i++
			} else 	return arr1.length+arr2.length - 1;

		}else if (firstProd > (powerP - powerP/10) && firstProd < powerP) {

			i++;

		}else if (firstProd >= powerP)  {

			return arr1.length+arr2.length;

		}

	}
	return arr1.length+arr2.length - 1;
}
