export function getTwo(items, nameId) {
  const currentItems = [].concat(items);
  let result = [];
  // result = doubleElemination(currentItems, nameId);
  // if(!isSorted(currentItems)) {
  //   result = firstStepPairs(currentItems);
  //   result = getPair(currentItems);
  //   if(isEmptyArray(result)) {
  //     result = finalComparing(currentItems, nameId);
  //   }
  //   return result;
  // }
  // return firstStepPairs(currentItems);
  return [currentItems[0], currentItems[1]];
}

function isEven(arr) {
  return arr.length % 2 === 0;
}

function isEmptyArray(arr) {
  return arr.length === 0;
}

function isDifferent(one, two, nameId) {
  return one[nameId] !== two[nameId];
}

function theSameWins(one, two) {
  return one.wins.length === two.wins.length;
}

function theSameLoses(one, two) {
  return one.loses.length === two.loses.length;
}

function theSameCount(one, two) {
  return one.count === two.count;
}

//wrapper
function shouldBeCompared(el1, el2, nameId) {
  return isDifferent(el1, el2, nameId) && theSameWins(el1, el2) &&
         theSameLoses(el1, el2) && theSameCount(el1, el2);
}

function canCompare(movie1, movie2, nameId) {
  if( movie1.wins.includes(movie2[nameId])  ||
      movie2.wins.includes(movie1[nameId])  ||
      movie1.loses.includes(movie2[nameId]) ||
      movie2.loses.includes(movie1[nameId])
    ) {
    return false;
  }
  return true;
}


function getPair(arr) {
  let result = [];
  arr.forEach(movie1 => {
    arr.forEach(movie2 => {
      if(result.length < 2 && isDifferent(movie1, movie2, 'uid') && canCompare(movie1, movie2, 'uid')) {
        result.push(movie1, movie2);
      }
    });
  });
  console.log('result', result);
  return result;
}


function firstStepPairs(arr) {
  let result = [];
  let innerArr = [].concat(arr);
  if(!isEven(innerArr)) {
    innerArr.pop();
  }

  for(let i = 0; i < innerArr.length; i++) {
    if(result.length < 2 && innerArr[i].count === 0 && innerArr[i + 1].count === 0) {
      result.push(innerArr[i], innerArr[i + 1]);
    }
  }
  return result;
}

function doubleElemination(arr, nameId) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(result.length < 2 && isDifferent(arr[i], arr[j], nameId) && theSameWins(arr[i], arr[j])) {
        result.push(arr[i], arr[j]);
      }
    }
  }
  return result;
}


function finalComparing(arr, nameId) {
  let result = [];
  arr.forEach(movie1 => {
    arr.forEach(movie2 => {
      if(result.length < 2 && isDifferent(movie1, movie2, nameId) && canCompare(movie1, movie2, nameId)) {
        result.push(movie1, movie2);
      }
    })
  });
  return result;
}


function isSorted(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if(!arr[i].wins.includes(arr[i + 1])) {
      return false;
    }
  }
  return true;
}
