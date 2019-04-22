class SortedList {
  constructor(items) {
  this.items = [];
  this.length = this.items.length;
  }
  add(x) {
    return this.items.push(x);
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    let maxNum = 0;
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    
    for (let i = 0; i < this.length; i++) {
      if (this.items[i] > counter) {
        maxNum = this.items[i];
      }
    }
  
    return maxNum;

  }
  min() {
    let counter = 0;
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
  

    
    for (let i = 0; i < this.length; i++) {
      if (this.items[i] < counter) {
        counter = this.items[i];
      }
    }
  
    return counter;
    
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    var totalAvg;
    for (let i = 0; i < this.items.length; i++) {
      totalAvg += this.items[i];
  
    }
    return totalAvg / this.items.length;
  }


  sum() {
    if (this.items.length === 0) {
      return 0;
    }
   var totalSum;
  for (let i = 0; i < this.items.length; i++) {
    totalSum += this.items[i];

  }
  return totalSum;
  }
};

module.exports = SortedList;
