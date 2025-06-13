const arr = [ 10, 20, 30, 40, 55 ]; // 5개의 함수 호출을 하고 싶다.
console.log('length:' , arr.length);
arr.forEach(function(item, idx) {
    console.log(`item: ${item}, idx: ${idx}`);
});

//forEach를 이용하여 arr의 모든 값들을 더한 결과값을 구하시오.
let sum = 0;
for(let i=0; i<arr.length; i++) {
    const item = arr[i];
    sum += item;
}
console.log('sum:', sum);


const myArr = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    4: 50,
    length: 5,
    forEach: function(cb) {
        for(let i=0; i<this.length; i++ ){
            cb(this[i], i);
        }
    }
};
console.log('my-length:', myArr.length);
myArr.forEach(function(item, idx) {
    console.log(`item: ${item}, idx: ${idx}`);
});

myArr.forEach();