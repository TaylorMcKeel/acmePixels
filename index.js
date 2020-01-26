const hex = [
    '00',
    '33',
    '66',
    '99',
    'CC',
    'FF'
]

const colorGrid = (arr)=>{
    let colorGrid = []
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            for(let k =0;k<arr.length;k++){
                colorGrid.push('#' + arr[i] + arr[j] + arr[k])
            }
        }
    }
    return colorGrid;
}

const colorList = document.querySelector('.colors')
const gridBox = document.querySelector('.grid');
const form = document.querySelector('form')
const create = document.querySelector('button')


const createGrid = () => {
    const width = form.querySelector('[name="width"]')
    const height = form.querySelector('[name= "height"]')
    console.log(width, height)
    let grid =[]
 
    for(let i=0;i<height.value;i++){
        let row =[]
        for(let j=0;j<width.value;j++){
            row.push(`<div class="gridBox" style= "width: calc(100%/${width.value})"></div>`)
        }
        grid.push(row.join(''))
    }

    gridBox.innerHTML = grid.join('')
}
createGrid()

create.addEventListener('click',(ev)=>{
    ev.preventDefault()
    createGrid()
})


const renderColors = () =>{
    let colorArray = colorGrid(hex)
    let html = colorArray.map((color)=>{
        return `<div style="background-color: ${color};" ></div>`;

    }).join('')
    colorList.innerHTML = html
    colorList.children[0].classList.add('selected')
}

renderColors()