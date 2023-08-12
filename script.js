// const students = ["Ramin","Cefer","Mikayil","Revan"];
// let myName = students.indexOf("Mikayil");
// console.log(myName);
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
// const multiple = numbers.map((numbers) =>numbers* 5);
// console.log(multiple);

// students.pop()
// students.pop()

// console.log(students);

// students.push('Mikayil')
//  console.log(students);
// function sum (a,b,c){
//     return a+b+c

// }
// console.log(sum(3,4,3));

// const users = [
    // {id: 1, username: "Mikayil", gender: "Male",age:23},
    // {id: 2, username: "Ramin", gender: "Male",age:23},
    // {id: 3, usename: "Azerin", gender: "Famale",age:21},
    // {id: 4, username: "Aysu", gender: "Famale",age:21}
// ]
// function sumOfAge(){
// const result = users.filter((user) => user.gender.toLocaleLowerCase() === 'Male')
// return result.reduce((sum,user) => sum * user.age 1)
// }
// console.log(sumOfAge());
// const mult=function(){
//     return users.map((user)=>user.age*3)
// }
// console.log(sumOfAge);

// const names = [
//     {id: 1, username: "Mikayil", gender: "Male",age:23},
//     {id: 2, username: "Ramin", gender: "Male",age:23},
//     {id: 3, usename: "Azerin", gender: "Famale",age:21},
//     {id: 4, username: "Aysu", gender: "Famale",age:21}
// ] 
// function sumOfAge(){
//     let sum = 0
//     for (let i = 0; i<names.length; i++){
//         if(names[i].gender.toLocaleLowerCase() === 'male') sum += names[i].age
//     }
//     return sum 
// }
// console.log(sumOfAge())
// 1 ci sual 
// let fullName = 'Mikayil Xelilov'
// let deyisen = fullName.split('');
// console.log(deyisen);








// let fullName = 'Mikayil Xelilov Ibrahim'
// let arr = fullName.split
// let newArr = [arr[1], arr[0],arr[2]]
// console.log(newArr);


// for array
// const [lname, fname, faname] = arr
// console.log(fname, lname,faname);

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// // 4
// count = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] == 5) count ++
// } 
// console.log(count);

// 5
// const result = arr.reduce((sum, number) => sum + number, 0)
// console.log(result);

// // 6
// arr.sort((a, b) => a - b)
// const uniqueNum = arr.filter((item, i) => arr.indefOf(item) === i)
// let uniqueNum2 = [...new Set(arr)]
// console.log(uniqueNum2);

// 7
// let largestNumber = Math.max.apply(null,arr)
// const result =arr.reduce((total,value)=> value=== largestNumber?++total:total,0)
// console.log(result);

// 8
// let nameLength = 'Mikayil'.length
// let check= arr.some(item=>item== nameLength)
// console.log(check);

// let num = arr.findIndex(item => item %3 ==2 && item > 3)
// console.log(num);

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
  
// 10
// let maxsum = Math.max(...arr)
// let indexs = maxsum .valueOf()
// console.log(indexs);
 
// 11
// let a = []
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === 4) {
//         a.push(i)
//     }
// }
// console.log(a);

// 12
// let smallIndexOffive = arr.indexOf(5)
// let largeIndexOffive = arr.lastIndexOf(5)
// console.log('smallest index of five: ${smallIndexOffive}',largeIndexOffive);

// 13
// let newArr =[]
// for (let i=0; i<arr.length;i++)
// if (arr[i]>2){
//     newArr.push(arr[i])
// }
// console.log(arr.length-newArr.length);

// let newArr2 = arr.filter(item=>item>2)
// console.log(arr.length-newArr2.length);

// 14
// let indefOfSeven = arr.reduce((total,value,index)=>value == 7 ? total+index : total ,0)
// console.log(indefOfSeven);

let arr2 = [
        {
            name: 'test',
            key: 1
        },
        {
            name: 'task',
            key: 2
        },
        {
            name: 'tanqo',
            key: 3
        },
        {
            name: 'like',
            key: 4
        },
        {
            name: 'task',
            key: 5
        },
        {
            name: 'trust',
            key: 6
        },
        {
            name: 'test',
            key: 7
        },
        {
            name: 'last',
            key: 8
        },
        {
            name: 'tanqo',
            key: 9
        },
        {
            name: 'elephant',
            key: 10
        },
        {
            name: 'love',
            key: 11
        },
        {
            name: 'small',
            key: 12
        },
        {
            name: 'little',
            key: 13
        },
    ]
    // 16
    // for (let i = 0; i < arr2.length; i++) {
    //         if (arr2[i].name[0].toLocaleLowerCase() === 't') {
    //             newArr.push(arr2[i])
        //     }
        // }
    //     console.log(newArr);
    
    // 17
    // function arr_tt() {
    //     return arr2.filter(item => item.name.toLocateLowerCase().starsWith("t") && item.name.toLocateLowerCase().endaWith("t"))
    // }
    // console.log(arr_tt());

    // 18
    // let name = arr2.filter((item)=> item.name.startsWith('t') && item.name.endsWith('t'))
    // let key = name.reduce((total,value) => total + value.key,0)
    // console.log(keyy);
    // console.log(name);

    // 19
// let name = arr2.map((item) => item.name.endsWith('e') ? { ...item, name: "SuperDev" } : item)
// console.log(name);

// 20
// let longest = arr2.reduce((max,item)=>max.name.length>item.name.length ? max : item).key
// console.log(longest);

// 21
// let longest = arr2.reduce((max,item,) =>(item.name.length > max.name.length ? item : max),arr2[0]);
// let index = arr2.indexOf(longest);
// console.log(index);

// 23
// let longest = arr2.reduce((max,item,) => (max.key.length > item.key.length ? max : item), arr2[0]);
// console.log(longest);

// 24
// let sorch = arr2.findIndex((item) => item.name.includes('||'));
// console.log(sorch);
 
// 25
// let sorch = arr2.filter((item) => item.name.match('tt'));
// let sorch1 =arr2.filter((item) => item.name.startsWith('t') && item.name.endsWith('t'));
// let key1 = sorch1.map((item) => item.key);
// let key = sorch.map((max) => max.key);
// console.log(sorch);
// console.log(sorch1);
// console.log(key);
// console.log(key1);