let textarea = document.getElementById('textarea');
let what_totype = document.getElementById('hdiv');

textarea.disabled = true;
what_totype.style.display = "none"
let btn = document.getElementById('btn1')

const typeStart = () => {
    textarea.disabled = false;
    what_totype.style.display = "block"
    let date = new Date()
    startTiem = date.getTime()
    let random_num = Math.floor((Math.random() * 7) + 0);
    console.log(random_num)
    what_totype.innerText = sentences[random_num]

}

const typeEnd = () => {
    // textarea.disabled = true;
    // what_totype.style.display = "none"
    let date = new Date()
    endtTime = date.getTime()
    let totalTime = ((endtTime - startTiem) / 1000);
    console.log(totalTime)
    let text = textarea.value
    let wordcount = wordcounter(text)
    let speed = Math.round((wordcount / totalTime) * 60)
    let finalOutput = "Your typing speed is " + speed + " words per min "
    finalOutput += checkError(what_totype.innerText, text)
    what_totype.innerText = finalOutput
}

const checkError = (str1, str2) => {
    let word_1 = str1.split(" ")
    let word_2 = str2.split(" ")
    let count = 0;

    word_1.forEach((item, index) => {
        if (item == word_2[index]) {
            count++
            // console.log(item)
            // console.log(word_2[index])
        }
    });
    // word_1.foreach(function (item1, index) {
    //     if (item1 == word_2[index]) {
    //         count++
    //     }
    // })

    let errorwords = (word_1.length - count)
    return ("/ number of correct words out of " + word_1.length + " is " + count + " and number of error is " + errorwords)
}


const wordcounter = (str) => {
    let inputs = str.split(" ").length  //split() function is used to find a pattern
    console.log(inputs)
    return inputs
}

btn.addEventListener("click", () => {
    if (btn.innerText == "Start") {
        typeStart();
        btn.innerText = "Done"
        starttimer()
    } else {
        typeEnd();
        btn.innerText = "Start"
        timeelement.innerText=a
        //   starttimer()
        // window.location.reload()
    }
})

let starttime
let timeelement=document.getElementById('timestam')
function starttimer(){
    timeelement.innerText="0"
    starttime=new Date()
    setInterval(()=>{
        timestam.innerText=getTimerTime()
    },1000)
}

function getTimerTime(){
    let a= Math.floor((new Date()-starttime)/1000)
    return a
}


let btn2 = document.getElementById('btn2')
btn2.addEventListener("click", () => {
    window.location.reload()
})
setInterval(() => {
    let datenew = new Date()
    Timesec = datenew.getSeconds()
    // console.log(Timesec)
    // document.getElementById("timestam").innerText=Timesec
}, 1000)


const sentences = ["closing the barn door after the horse escapes.", "the grass is always greener on the other side.", " friends are flowers in the garden of life.", "just staying one day ahead of yesterday.", "closing the barn door after the horse escapes.", "your car is out of date as soon as it is paid for.", " you can lead a horse to water but you can't make him drink"]

