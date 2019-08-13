window.onload = function () {


    let doingson = document.querySelector('.doingson')
    let doneson = document.querySelector('.doneson')

    let data = localStorage.todolist ? JSON.parse(localStorage.todolist) : []
    render()
    function render() {
        let con1 = "" //正在做
        let con2 = "" //做完的
        let num1=0
    let num2=0
        data.forEach((item, index) => {
            if (item.done) {
                con2 += `
        <div class="">
            <input type="checkbox" checked index="${index}"class="change" tp="done" >
            <p index=${index}>${item.title}</p>
            <div index=${index} class="del">-</div>
        </div>
    `
        num2 += 1
            } else {
                con1 += `<div class="">
            <input type="checkbox" checked index="${index}"class="change" tp="doing" >
            <p index=${index}>${item.title}</p>
            <div index=${index} class="del">-</div>
        </div>`
        num1 += 1
            }
        })

        doingson.innerHTML=con1
        doneson.innerHTML=con2
        localStorage.todolist=JSON.stringify(data)
         let number1 = document.querySelector(".num1")
         let number2 = document.querySelector(".num2")
        number1.innerHTML=`${num1}`
        number2.innerHTML=`${num2}`
    }



    let input = document.querySelector('#input')
        input.onkeydown = function (event) {
        if (event.keyCode == 13 && this.value != "") {
            data.unshift({'title':this.value,done:false})
            this.value=""
            render()
        }
    }
    let main =document.querySelector(".main")
    main.onclick = function (event) {
        let target = event.target
        if(target.nodeName=="INPUT" && target.getAttribute("type")=="checkbox"){
            let index = target.getAttribute("index")
            if(target.getAttribute("tp")=="doing"){
                data[index].done = true
            }else{
                data[index].done=false
            }
            render()
        }
        if(target.className=="del"){
            let index = target.getAttribute("index")
            data.splice(index,1)
            render()
        }
    }
    main.ondblclick=function (event) {
        let target = event.target
        if(target.nodeName=="P"){
            let con=target.innerHTML
            let index=target.getAttribute('index')
            target.innerHTML=""
            let input = document.createElement("input")
            input.value=con
            input.onblur=function () {
                data[index].title=this.value
                render()
            }
            target.appendChild(input)
            input.focus()
        }
    }



    // con1.onclick = function (event) {
    //     let target = event.target
    //     if (target.className == "change") {
    //         let value = target.nextElementSibling.innerText;
    //         let index = doingDate.indexOf(value)
    //         doneDate.unshift(doingDate.splice(index, 1)[0])
    //         render()
    //         localStorage.doingData = doingDate
    //         localStorage.doneData = doneDate
    //     }
    // }
    // con2.onclick = function (event) {
    //     let target = event.target
    //     if (target.className == "change") {
    //         let value = target.nextElementSibling.innerText;
    //         let index = doneDate.indexOf(value)
    //         doingDate.push(doneDate.splice(index, 1)[0])
    //         render()
    //         localStorage.doingData = doingDate
    //         localStorage.doneData = doneDate
    //     }
    // }
    //
    // doingDate.forEach((it, index) => {
    //     let ss = document.querySelector(".doingson")
    //     console.log(ss)
    //     ss.ondblclick = function (event) {
    //         let target = event.target
    //         if (target.nodeName == "P" && target.className != "change" && target.className != "del") {
    //             changeValue(target)
    //             console.log(target)
    //         }
    //     }
    //
    //     function changeValue(item) {
    //         let oldtext = item.innerText
    //         console.log(oldtext)
    //         let input = document.createElement("input")
    //         item.innerText = ""
    //         input.value = oldtext
    //         console.log(input)
    //         input.onblur = function () {
    //             doingDate.splice(index, 1, input.value)
    //             console.log(doingDate)
    //             render()
    //         }
    //         item.appendChild(input)
    //         input.focus()
    //     }
    //
    // })


    // let main = document.querySelector(".main")
    // main.onclick=function (event) {
    //     let target=event.target
    //
    //
    //
    //     let arr=[]
    //     let fn=arr.includes
    //     if(fn.call(target.classList,'del')){
    //         this.firstElementChild.removeChild(target.parentNode.parentNode)
    //
    //     }
    //
    // }


}