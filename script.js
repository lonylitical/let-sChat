const sendBtn=document.querySelector('#sendBtn');
const messageIn=document.querySelector('#messageIn');
const messageOut=document.querySelector('#messageOut');
const sendBtnR=document.querySelector('#sendBtn-r');
const messageInR=document.querySelector('#messageIn-r');
const messageOutR=document.querySelector('#messageOut-r');
const contain2=document.querySelector('.container-2');
const contain=document.querySelector('.container');
const letus=document.querySelector('#letus');

letus.addEventListener('click',sendMsgok)

window.i=0;
function sendMsgok()
{
  if((window.i % 2) ===0)
   {
    	contain.style.display="block";
		contain2.style.display="none";
		sendBtn.addEventListener('click',sndMsg)
		function sndMsg()
		{ 
			let content=messageIn.value;
			if (content === ' ') {
			   alert('please enter a valid value.Current input is empty');
			}
			else{	
			   messageOut.innerHTML= content;
			   messageIn.value ='';
			   document.getElementById('letus').innerHTML="press to reply";
			   document.getElementById('deliver').style.display= "block";
			}
			window.i++;	   
	    }
	    
	}

    else
	{    
	    contain.style.display="none";
	    contain2.style.display="block";
	    sendBtnR.addEventListener('click',replyy)
	    function replyy()
		{	
			let rep=messageInR.value;
			if (rep === ' ') {
				alert('please enter a valid value.Current input is empty');
			}
			else{
				messageOutR.innerHTML= rep;
				messageInR.value='';
				document.getElementById('said').style.display= "block";
				document.getElementById('letus').innerHTML="send msg";
		    }
		    window.i++;
	    }
	    
	}
}