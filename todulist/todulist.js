window.onload = function () {
    let doingDate = localStorage.doingData?localStorage.doingData.split(","): []
    let doneDate = localStorage.doneData?localStorage.doneData.split(","):[]
    let input = document.querySelector('#input')
    let con1=document.querySelector('.doingson')
    let con2=document.querySelector('.doneson')
    let num1=document.querySelector(".num1")
    let num2=document.querySelector(".num2")
    render()

    input.onkeydown = function (event) {
        if (event.keyCode==13 && this.value!=""){
            doingDate.unshift(this.value)
            localStorage.doingData = doingDate
            localStorage.doneData = doneDate
            render()
            this.value=""
        }

    }

   //数据传递
    function  render() {
        let str=""
        doingDate.forEach((item,index)=>{
            str+=`<div><input type="checkbox"class="change"><p>${item}</p><div class="del">-</div></div>`
        })
        con1.innerHTML=str
        num1.innerHTML=doingDate.length
        let str2 = ""
        doneDate.forEach((item,index)=>{
            str2+=`
        <div>
            <input type="checkbox"class="change" checked>
            <p>${item}</p>
            <div class="del">-</div>
        </div>
    `
        })
        con2.innerHTML=str2
        num2.innerHTML=doneDate.length
    }

    con1.onclick=function (event) {
        let target=event.target
        if(target.className=="change"){
            let value= target.nextElementSibling.innerText;
            let index=doingDate.indexOf(value)
            doneDate.unshift(doingDate.splice(index,1)[0])
            render()
            localStorage.doingData=doingDate
            localStorage.doneData=doneDate
        }
    }
    con2.onclick=function (event) {
         let target=event.target
        if(target.className=="change"){
            let value= target.nextElementSibling.innerText;
            let index=doneDate.indexOf(value)
            doingDate.push(doneDate.splice(index,1)[0])
            render()
            localStorage.doingData=doingDate
            localStorage.doneData=doneDate
        }
    }

    doingDate.forEach((it,index)=>{
        let div=document.querySelector(".doingson > div")
        console.log(div)
        div.ondblclick=function (event) {
            let target=event.target
            if(target.nodeName=="P"&&target.className !="change"&&target.className!="del"){
                changeValue(target)
                console.log(target)
            }
        }
        function changeValue(item) {
            let oldtext=item.innerText
            console.log(oldtext)
            let input=document.createElement("input")
            item.innerText=""
            input.value=oldtext
            console.log(input)
            input.onblur=function(){
                doingDate.splice(index,1,input.value)
                console.log(doingDate)
                render()
            }
             item.appendChild(input)
        input.focus()
        }

    })





    let main = document.querySelector(".main")
    main.onclick=function (event) {
        let target=event.target



        let arr=[]
        let fn=arr.includes
        if(fn.call(target.classList,'del')){
            this.firstElementChild.removeChild(target.parentNode.parentNode)

        }

    }


















}