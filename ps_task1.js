
////////// Income tax //////////////////////

let a=parseInt(prompt("enter money:-"))
if(a<=250000){
    console.log("No-tax")
}
else if(a>250000 && a<=500000){
    console.log((`${a}`-250000)*(1/20))
}
else if(a>500000&& a<=1000000){
    console.log((12500+(`${a}`-500000))*(1/5))
}
else if(a>1000000){
    console.log((112500+(`${a}`-1000000))*(3/10))
}

////////// shipping cost //////////////////////

let wg=parseInt(prompt("enter weight"))
let des=prompt("enter the destination")
if (wg<=1){
    if(des=="local"){
        console.log(wg,"5rs")
    }
    else if(des=="national"){
        console.log(wg,"8rs")
    }
    else{
        console.log(wg,"15rs")
    }
}
else if(wg>1 && wg<=5){
    if(des=="local"){
        console.log(wg,"10rs")
    }
    else if(des=="national"){
        console.log(wg,"15rs")
    }
    else{
        console.log(wg,"30rs")
    }
}
else if(wg>5 && wg<=10){
    if(des=="local"){
        console.log(wg,"20rs")
    }
    else if(des=="national"){
        console.log(wg,"25rs")
    }
    else{
        console.log(wg,"50rs")
    }
}


///////// electricity bill caliculation ////////////////////////////

let ut=parseInt(prompt("enter no of units"))
let a1=1
let b=1.5
let c=2

let x=0
if(ut<=100){
    console.log(ut*a1)
}
else if(ut>100 && ut<=300){
    console.log((100*a1)+(ut-100)*b)
}
else if(ut>300){
    console.log((100*a1)+(200*b)+(ut-300)*c)
}
