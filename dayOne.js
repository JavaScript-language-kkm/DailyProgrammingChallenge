//- Given an array, find the integer that appears an odd number of times.
// * There will always be only one integer that appears an odd number of times.

function oddOne(_array){

    for (i=0; i<_array.length; i++) {
         instances_ = 0;
        for(j=0; j<_array.length; j++){
            if(_array[i] == _array[j])
               instances_ +=1; 
        }
    
        if((instances_%2) != 0)
          return _array[i];
    }
   return null;


}

arrayOne =[1,1,3,3,4,4,0,,4,4];

console.log(oddOne(arrayOne));


// best solution
const findOdd2 =(ar)=>ar.reduce((a,b) => a^b);


console.log(findOdd2([2,3,3,1,1,0,2]));

