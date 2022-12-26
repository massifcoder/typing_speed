document.getElementById('boton').addEventListener('click',()=>{
  document.getElementById('dada').classList.add('hidden');
  document.getElementById('txxt').classList.remove('hidden');
  document.getElementById('txxt').value=''; 
  test_start();
})

document.getElementById('restart').addEventListener('click',()=>{
  document.getElementById('txxt').value='';
  document.getElementById('dada').classList.remove('hidden');
  document.getElementById('txxt').classList.add('hidden');
  document.getElementById('restart').classList.add('hidden');
  document.getElementById('maan').classList.add('hidden');
  document.getElementById('ttt').innerHTML=30;
})

datta = document.getElementById('ttt');

function test_start(){
  timer = setInterval(()=>{
    if(datta.innerHTML==0){
      clearInterval(timer)
      check_answer();
    }
    else{
      datta.innerHTML -=1;
    }
  },1000)
}

function check_answer(){
  typed=document.getElementById('txxt').value;
  to_chk = document.getElementById('to_chk').innerHTML
  const to_check = to_chk.split('');
  const type = typed.split('');
  let count = 0;
  for(let i=0;i<type.length;i++){
    if(typed.at(i)==to_check.at(i)){
      count= count + 1;
    }
  }
  document.getElementById('restart').classList.remove('hidden'); 
  document.getElementById('maan').classList.remove('hidden'); 
  document.getElementById('txxt').value=''
  document.getElementById('speed').innerHTML= (count*2)/5;
  document.getElementById('accuracy').innerHTML= (count*100)/typed.length;
}
