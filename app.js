addTodo = ()=>{
const ul = document.getElementById('ul');
const task = document.getElementById('task').value;
const error = document.getElementById('error');
error.innerHTML='';
if (task=='') {
    error.innerHTML='Please Enter Your Activity First !';
}else{
    const li = document.createElement('li');
    li.textContent = task;

    const a = document.createElement('a');
    a.textContent = "X";
    a.href = "javascript:void(0)";
    li.appendChild(a);
    ul.appendChild(li);
}
document.getElementById('task').value="";
};
const del = document.querySelector('ul');
del.addEventListener('click',function(e){
    const li = e.target.parentNode;
    ul.removeChild(li);
})