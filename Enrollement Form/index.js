let section = document.getElementById('output')
let submit = document.getElementById('submit')
let namez = document.getElementById('name')
let gender = document.getElementsByName('gender')
let email = document.getElementById('email')
let web = document.getElementById('web')
let image = document.getElementById('img')
let skillz = document.getElementsByName('Skills')
const addInfo = (event) =>{
    event.preventDefault();
    let gen = ''
    let Skill = ''
for(let i =0;i<gender.length;i++){
    if(gender[i].checked){
       gen = gender[i].value
    }
}
let skill  = ''
for(let i =0;i<skillz.length;i++){
    if(skillz[i].checked){
      skill +=skillz[i].value + " "
    }
}
let table = document.createElement('table')

if(namez.value && email.value && web.value && gender && email.value && web.value && image.value  != '')
{
table.innerHTML = `
  
    <tr>
        <td>
            <h3>${namez.value}</h3>
            <p>Sex : ${gen}</p>
            <p>Email : ${email.value}</p>
            <p>Website : <a href="">${web.value}</a></p>
            <p>Skills : ${skill}</p>
        </td>
        <td>
        <img style="width: 140px; border: 1px sold cyan;" src="${image.value}" alt="Invalid Url">
        </td>
    </tr> 
    <br>
    `
    let btn = document.createElement('button')
    btn.innerHTML = 'Remove User'
    btn.className = 'btn'
    table.appendChild(btn)
   section.appendChild(table)
   btn.addEventListener('click',()=>{
    table.remove()
   })
}
else{
    alert("All fields are Required!")
}
namez.value = ''
    email.value = ''
    web.value = ''
    image.value = ''
    for(let i =0;i<skillz.length;i++){
        skillz[i].checked = false
    }
    for(let i =0;i<gender.length;i++){
        gender[i].checked = false
    }

}
submit.addEventListener('click',addInfo)

