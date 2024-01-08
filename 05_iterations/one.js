
//for

//for (let index = 0; index <= 10; index++) {
  //  const element = index
   // console.log(element)
//}

// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop: ${i}`)
//     for (let j = 0; j <=10; j++) {
//         console.log(`inner loop: ${j} and outer loop: ${i}`)
    
//     }
// }

// let arr = ["abc","mno","xyz"]
// for(let i = 0; i < arr.length ; i++){
//     const element = arr[i]
//     console.log(element);
// }

//break and continue

// for (let index = 1; index <= 20; index++) {
//   if(index == 5){
//     console.log(`detected 5`);
//     break
//   }
//   console.log(`value of index is ${index}`);
  
// }

for (let index = 1; index <= 20; index++) {
  if(index == 5){
    console.log(`detected 5`);
    continue
  }
  console.log(`value of index is ${index}`);
  
}
