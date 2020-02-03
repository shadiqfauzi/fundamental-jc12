let products = []

function addNewProduct() {
    let namaBaru = document.querySelector('#namaBaru').value
    let hargaBaru = document.querySelector('#hargaBaru').value
    let stockBaru = document.querySelector('#stockBaru').value
    let kategori = document.querySelector('#category').value
    let condition = document.querySelector('input[name=condition]:checked').value

    let obj = {
        namaBaru,
        hargaBaru,
        stockBaru,
        kategori,
        condition
    }
    
    products.push(obj)
    console.log(products)
    showList()
}

function showList(){
    let list = products.map(function(element){
        return(
            `
                <tr>
                    <td>${element.namaBaru}</td>
                    <td>${element.hargaBaru}</td>
                    <td>${element.stockBaru}</td>
                    <td>${element.kategori}</td>
                    <td>${element.condition}</td>
                </tr>
            `
        )
    })

    // .join gunanya untuk mengubah array jadi string agar bisa di render oleh HTML
    document.getElementById('hasil').innerHTML = list.join('')
}

showList()