const printSegitiga = 5
if (typeof printSegitiga === "number"){
    for(let i=printSegitiga; i>0; i--){
        let temp = ""
        for(let j=1; j<=i; j++){
            temp += String(j).concat(" ")
        }
        console.log(temp)
    }
}else{
    console.log("Data Harus Number")
}