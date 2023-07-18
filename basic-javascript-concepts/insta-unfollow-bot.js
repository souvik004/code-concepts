(() => {
    let i = 0
    let count = 0

    const unfollowId = setInterval(() => {
        if(count > 2){
            clearInterval(unfollowId)
            return
        }
        let btnList = document.querySelectorAll('button')
        for(let btn of btnList) {
            // console.log(btn.innerText)
            if(btn.innerText === 'Unfollow') {
                btn.click()
                count++
            }
        }
        if(btnList[i].innerText === 'Following'){
            btnList[i].click()
        }
        i++
    }, 5000);
})()
