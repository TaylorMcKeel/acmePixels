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


const renderColors = () =>{
    let colorArray = colorGrid(hex)
    let html = colorArray.map((color)=>{
        return `<div style="background-color: ${color};" ></div>`;

    }).join('')
    colorList.innerHTML = html
    colorList.children[0].classList.add('selected')
}

renderColors()