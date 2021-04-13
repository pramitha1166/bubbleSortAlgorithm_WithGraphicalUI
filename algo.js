"use strict";

(function(){

    let values = [];
    const bars = document.querySelectorAll('.block');
    const upperArray = document.querySelectorAll('.item');
    const statBtn = document.getElementById('start');
    const resetBtn = document.getElementById('reset')
    /** adding values to array */

    for(let i=0;i<40;i++) {
        values.push(Math.ceil(Math.random()*100))
    }

    console.log(values)
    /** create bar*/
    bars.forEach((bar,index) => {
        let per = values[index]
        setTimeout(() => {
            bar.style.backgroundImage = `-webkit-linear-gradient(bottom, #ff00c8, blue ${per}%, transparent 0%, transparent 100%)`;
        },per) 
    })

    upperArray.forEach((item,index) => {
        setTimeout(() => {
            item.innerHTML = values[index]
        },1)
    })

    async function bubbleSort(arr) {
        let n = arr.length;
       
        for(let i=0;i<n-1;i++) {
            for(let j=0;j<n-i-1;j++) {
                if(arr[j]>arr[j+1]) {
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
                //  await sortElementArray(arr)
                
            }
            await sortElementArray(arr)
            upperArray[0].style.border = "1px solid red"
            upperArray[i+1].style.border = "1px solid red"
            await sortAnimation(arr)
        }
        console.log(arr)
           
    }

    function sortAnimation(arr) {

        return new Promise((res,rej) => {
            bars.forEach((bar,index) => {
                let per = arr[index]
                setTimeout(() => {
                    bar.style.backgroundImage = `-webkit-linear-gradient(bottom, #ff00c8, blue ${per}%, transparent 0%, transparent 100%)`;
                    res('ok')
                },200)
            })
        })

    }

    function sortElementArray(arr) {
        return new Promise((res,rej) => {
            setTimeout(() => {
                upperArray.forEach((item,index) => {
                    item.innerHTML = arr[index]
                })
                res('ok')
            },200)
        })
    }

    function delay() {
        return new Promise((res,rej) => {
            setTimeout(() => {

            },100)
        })
    }

   // bubbleSort(values)

    statBtn.addEventListener('click',(event) => {
        bubbleSort(values)
        console.log('event called')
    })

  //  bubbleSort(values)

  resetBtn.addEventListener('click',() => {
      window.location.reload()
  })

})();