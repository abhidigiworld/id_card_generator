const formdata=document.getElementById('iddata');
formdata.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name=document.getElementById('fname').value;
    let clgname=document.getElementById('clgname').value;
    let location=document.getElementById('locate').value;
    let imag=document.getElementById('pic').value;
    if(name=='' || clgname=='' || location==''){
        document.getElementsByClassName('two')[0].style.visibility='hidden';
        alert("PLEASE ENTER THE DETAIL AND THEN PRESS GENERATE ID CARD");
        
    }
    else{
        document.getElementsByClassName('two')[0].style.visibility='visible';
        document.getElementById('text2').innerText=name;
        document.getElementById('text3').innerText=clgname;
        document.getElementById('text4').innerText=location;
        document.getElementById('fname').value="";
        document.getElementById('clgname').value="";
        document.getElementById('locate').value=""
        document.getElementById('pic').value="";
    }

});

function loadImage(event){
    document.getElementsByClassName('two')[0].style.visibility='hidden';
    document.getElementById('photo').src=URL.createObjectURL(event.target.files[0]);
}
