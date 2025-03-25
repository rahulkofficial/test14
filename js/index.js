document.addEventListener('DOMContentLoaded',()=>{
    const inp=document.getElementById('inp');
    const btn=document.getElementById('btn')
    const list=document.getElementById('list')
    const error=document.getElementById('error')

    if(list.innerHTML===''){
        error.textContent="There is no tasks yet!..."
    }

    btn.addEventListener('click',()=>{
        if(inp.value===''){
            error.textContent='Please enter a task'
        }
        else{
            error.textContent=''
            const li=document.createElement('li')
            li.innerHTML=`<button class="com">Complete</button><span>${inp.value}</span><button class="del">delete</button>`
            list.appendChild(li)
            inp.value=''
        }

        const dels=document.querySelectorAll('button.del')
        
        dels.forEach((item)=>{
            item.addEventListener('click',()=>{
                const parent=item.parentNode
                parent.remove()
            })
        })

        const coms=document.querySelectorAll('button.com')
        
        coms.forEach((item)=>{
            item.addEventListener('click',()=>{
                const parent=item.parentNode
                parent.classList.add('co')
            })
        })



    })
    
})