const printSegitiga = 5
if (typeof printSegitiga === "number"){
    for(let x=printSegitiga; x>0; x--){
        let temp = ""
        for(let y=1; y<=x; y++){
            temp += String(y).concat(" ")
        }
        console.log(temp)
    }
}else{
    console.log("Data Harus Number")
}