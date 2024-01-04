const my_list = [10, 20, "salam", "hello"];
for (const item of my_list){
    console.log("item is", item);
}

// for (let i =0; i< my_list.length; i++){
//     console.log("i is", i, my_list[i])
// }
for (let i = 0; i< my_list.length; i+=1){
    console.log(i, my_list[i])
}