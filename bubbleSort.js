let list = [7,9,2,1,3]

for(let j = 1 ; j < list.length; j++){
    for(let i = 0; i < list.length; i++) {
        if(list[i] >= list [i+1]){
            let temp = list[i]
            list[i] = list [i+1]
            list[i+1] = temp
        }
    }
}

console.log(list)
