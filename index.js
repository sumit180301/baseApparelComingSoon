function handleInputFocus(){
    document.getElementsByClassName('form-input')[0].value='';
    document.getElementsByClassName('form-input')[0].classList.remove('form-input-onError');
    document.getElementsByClassName('errorLogo')[0].classList.remove('display');
    document.getElementsByClassName('error')[0].classList.remove('display');
    document.getElementsByClassName('error')[0].classList.remove('successful');
    // document.getElementsByClassName('error')[0].innerHTML='';
    // document.getElementsByClassName('error')[0].classList.remove('display');
}

function btnClick(){
    document.getElementsByClassName('error')[0].classList.remove('successful');

    // document.getElementById('error').innerHTML='';// this removes the previous error message, if any
    var x = document.getElementsByClassName("form")[0].elements[0].value;
    var a = !(x.includes('@'));// @ is not present
    var b = !(x.includes('@',1));// @ is not present from position '1'. If 'a' is false then it means that '@' is present at position '0'.
    var c = x.includes('@',x.length-1);// @ is present at last position.
    if(a || b || c){
        // document.getElementsByClassName('we_are')[0].innerHTML="yo!";
        document.getElementsByClassName('form-input')[0].classList.add('form-input-onError');
        document.getElementsByClassName('errorLogo')[0].classList.add('display');
        document.getElementsByClassName('error')[0].innerHTML='Please provide a valid email';
        document.getElementsByClassName('error')[0].classList.add('display');
    }else{
        document.getElementsByClassName('error')[0].innerHTML='Added successfully !!!';
        document.getElementsByClassName('error')[0].classList.add('successful');
        // document.getElementsByClassName('error')[0].classList.add('display');
        // document.getElementsByClassName('form-input')[0].value='';
    }
}

document.getElementsByClassName('form-button')[0].addEventListener("click",((e) => {
    
    btnClick();
    e.preventDefault();
    }));

            // document.getElementsByClassName('error')[0].classList.remove("none");
        // document.getElementsByClassName('errorLogo')[0].classList.add("none");
