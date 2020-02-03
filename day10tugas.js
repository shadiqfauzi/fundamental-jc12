var arrProduct = [
    { id: 1579581080923, category: 'Fast Food', name: 'Noodle', price: 3500, stock: 9},
    { id: 1579581081130, category: 'Electronic', name: 'Headphone', price: 4300000, stock: 8},
    { id: 1579581081342, category: 'Cloth', name: 'Hoodie', price: 300000, stock: 7},
    { id: 1579581080923, category: 'Fruit', name: 'Apple', price: 10000, stock: 8},
]

var arrCategory = ['All', 'Fast Food', 'Electronic', 'Cloth', 'Fruit']

var showMenu = () => {
    var listMenu = arrProduct.map((elem) => {
        return (
            `
                <tr>
                    <td>${elem.id}</td>
                    <td>${elem.name}</td>
                    <td>${elem.category}</td>
                    <td>${elem.price}</td>
                    <td>${elem.stock}</td>
                </tr>
            `
        )
    })
    // list menu masih array, guna join adalah mengubah array menjadi string
    document.querySelector('#output').innerHTML = listMenu.join('')

    var listOption = arrCategory.map((elem) => {
        return (
            `
                <option value="${elem}">${elem}</option>
            `
        )
    })
    document.querySelector('#categoryInput').innerHTML = listOption.join('')
    document.querySelector('#categoryInput2').innerHTML = listOption.join('')
}

var addData = () => {
    var nama = document.querySelector('#nama').value;
    var harga = document.querySelector('#harga').value;
    var stock = document.querySelector('#stock').value;
    var category = document.querySelector('#categoryInput').value;
    var time = new Date()

    var newProduct = {
        id: time.getTime(),
        name: nama,
        price: harga,
        stock,
        category
    }

    arrProduct.push(newProduct)
    showMenu()
}

var showFilterResult = (hasilFilter) => {
    var result = hasilFilter.map((val) => {
        return (
            `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.category}</td>
                    <td>${val.price}</td>
                    <td>${val.stock}</td>
                </tr>
            `
        )
    })
    return document.getElementById('output').innerHTML = result.join('')
}

var filterNama = () => {
    var namaInput =  document.querySelector('#namaFilter').value
    console.log(namaInput)
    var output = arrProduct.filter((val) => {
        return val.name.toUpperCase().includes(namaInput.toUpperCase())
    })
    showFilterResult(output)
}


var filterHarga = () => {
    if(document.querySelector('#hargaMin').value && document.querySelector('#hargaMax').value){
        var hargaMin = document.querySelector('#hargaMin').value
        var hargaMax = document.querySelector('#hargaMax').value
        var output = arrProduct.filter((val) => {
            return val.price >= hargaMin && val.price <= hargaMax
        })
    showFilterResult(output)
    }
}

var filterCategory = () => {
    var category = document.querySelector('#categoryInput2').value
    if(category === 'All'){
        showMenu()
    }else{
        var output = arrProduct.filter((val) => {
            return val.category === category
        })
        showFilterResult(output)
    }
}

showMenu()