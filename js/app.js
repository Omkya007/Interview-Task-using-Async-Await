const cl=console.log;

const hrcall =(skill)=>{
    setTimeout(() => {
        if(skill.toLowerCase().includes("mean")){
            cl(`Candidate is shortlisted for 1st tech interview`)
            firsttech()
        }else{
            Swal.fire({
                title:`Candidate is not fit for interview`,
                timer:2400,
                icon:`error`
            })
        }
        
    }, 1500);
}

const firsttech =()=>{
    setTimeout(() => {
        let error=Math.random()<.5?true:false;
        if(!error){
            cl(`Candidate is shortlisted for 2nd interview`)
            sectech()
        }
        else{
            Swal.fire({
                title:`Candidate is not having basics`,
                timer:1400,
                icon:'error'
            })
        }
        
    }, 1400);
}

const sectech =()=>{
    setTimeout(() => {
        let error=Math.random()<.5?true:false;
        if(!error){
            cl(`Candidate is shortlisted for 3nd interview`)
            hrtech()
        }
        else{
            Swal.fire({
                title:`Candidate is not having coding  basics`,
                timer:1400,
                icon:'error'
            })
        }
        
    }, 1400);
}

const hrtech =()=>{
    setTimeout(() => {
        let error=Math.random()<.5?true:false;
        if(!error){
            cl(`Candidate is shortlisted `)
        }
        else{
            Swal.fire({
                title:`Candidate is not selected`,
                timer:1400,
                icon:'error'
            })
        }
        
    }, 1400);
}

hrcall("mean");