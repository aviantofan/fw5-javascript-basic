const printSegitiga = 5
if (typeof printSegitiga === "number"){
    for(let i=printSegitiga; i>0; i--){
        let temp = ""
        for(let j=1; j<=x; j++){
            temp += String(y).concat(" ")
        }
        console.log(temp)
    }
}else{
    console.log("Data Harus Number")
}