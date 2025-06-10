// 객체에 사용
const person2 = {
    name: '김달순',
    age: 23,
    languages: ['한국어', '영어', '프랑스어'],
    education: {
        school: '한국대',
        major: ['컴퓨터공학', '전자공학'],
        graduated: true
    }
};
for(const item in person2) {
    console.log(item);
}
console.log('--------------------------')
// 응용력을 활용하여 key : value 출력해주세요.
/*
name: 김달순
age: 23
languages: ['한국어', '영어', '프랑스어']
education: {
        school: '한국대',
        major: ['컴퓨터공학', '전자공학'],
        graduated: true
*/
// console.log() 이렇게 말고, for in을 활용하기

for(const item in person2) {
    console.log(item, ':', person2[item]);
}