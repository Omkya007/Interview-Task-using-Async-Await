const cl=console.log;


const sweetAlert = (msg,icon)=>{
    Swal.fire({
        title:msg,
        icon:icon,
        timer:3000

    })
}

const hrcall =()=>{
    //api call >>async >> non-blocking
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //res mockup

            let err=Math.random()>=.5 ?false:true;
            if(!err){
                //res=success
                resolve(`Candidate is shortlisted for 1st Tech interview`)
            }else{
                reject(`looking for a candidate`)
            }
            
        }, 1400);
    })



}

const firstTech = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let err=Math.random()>=.5 ? false:true;
            if(!err){
                resolve(`Candidate is shortlisted for 2nd tech`)
            }else{
                reject(`Candidate is poor in basics`)
            }
            
        }, 1500);
    })

}


const secondTech = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let err=Math.random()>=.5 ? false:true;
            if(!err){
                resolve(`Candidate is shortlisted for mgr round`)
            }else{
                reject(`Candidate is poor writing code in basics`)
            }
            
        }, 1500);
    })

}

const mgrRound = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let err=Math.random()>=.5 ? false:true;
            if(!err){
                resolve(`Candidate is selected`)
            }else{
                reject(`Candidate is not able to specify his project`)
            }
            
        }, 1500);
    })
}


const init =async()=>{
    try {
        let res1 = await hrcall()
        cl(res1)

        let res2= await firstTech()
       cl(res2)

       let res3 = await secondTech()
       cl(res3)
       
       let mg = await mgrRound()
       sweetAlert(mg,`success`)
        
    } catch (error) {
        sweetAlert(error,`error`)
        
    }
}

init();