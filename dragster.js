const groups= document.getElementsByClassName('task__group')
const cards= document.getElementsByClassName('task__card')
console.dir(groups)
console.dir(cards)
let returnNode

for (let i = 0; i < cards.length; i++) {
    
    cards[i].setAttribute('id', `dragster_${i}`)
    cards[i].setAttribute('draggable', 'true')
    cards[i].ondragstart=Drag
    
}


function AllowDrop(e) {
    console.log('отработал AllowDrop')
    e.preventDefault()
} 
function Click(e) {
    console.dir(e)
    e.preventDefault()
    e.target.style.transform = "rotate(45deg)";  
} 

function Drag(event) {
    setTimeout(() => {
        this.style.display='none'     
    }, 0);
    console.log('отработал Drag')
    returnNode = this.parentNode    
    event.dataTransfer.setData('id', event.target.id)
} 

function Drop(event) {
    console.log('отработал Drop')
    let itemid=event.dataTransfer.getData('id')
    let draggableElement=document.getElementById(itemid)
    let droptarget=event.target
    console.log(itemid)
    console.log( droptarget.classList.contains('task__group'))
    if (droptarget.classList.contains('task__group')){
        //droptarget.append(draggableElement)
        console.log('returnNode: '+returnNode)
    }else{
        droptarget=returnNode
        //returnNode.append(draggableElement)
        console.log('отработал else')
        console.dir(returnNode)
    }
    draggableElement.style.display="block"
    droptarget.append(draggableElement)
    for (let i = 0; i < cards.length; i++) {
        let element = cards[i];
        element.style.display='block'
        console.log('asascsac')
        
    }
    
} 




for (let i = 0; i < groups.length; i++) {
    const element = groups[i];

    element.addEventListener('dragover', AllowDrop)
    element.addEventListener('drop', Drop)
    element.addEventListener('click', Click)
}

