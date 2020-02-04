var arrProduct = [
    { id: 1579581080923, category: 'Fast Food', name: 'Noodle', price: 3500, stock: 9},
    { id: 1579581081130, category: 'Electronic', name: 'Headphone', price: 4300000, stock: 8},
    { id: 1579581081342, category: 'Cloth', name: 'Hoodie', price: 300000, stock: 7},
    { id: 1579581080913, category: 'Fruit', name: 'Apple', price: 10000, stock: 8},
]

var arrCategory = ['All', 'Fast Food', 'Electronic', 'Cloth', 'Fruit']

var showMenu = (idProduct) => {
    var listMenu = arrProduct.map((elem, index) => {
        if(elem.id !== idProduct){
            return (
                `
                    <tr>
                        <td>${elem.id}</td>
                        <td>${elem.name}</td>
                        <td>${elem.category}</td>
                        <td>${elem.price}</td>
                        <td>${elem.stock}</td>
                        <td><input type="button" value="Add" onclick="buyMenu(${elem.id})"></td>
                        <td><input type="button" value="Delete" onclick="deleteData(${elem.id})"></td>
                        <td><input type="button" value="Edit" onclick="editData(${elem.id})"></td>
                    </tr>
                `
            )
        }
        console.log(index)
        return(
            `
                <tr>
                    <td>${elem.id}</td>
                    <td><input type="text" value="${elem.name}" id="editNama"></td>
                    <td>${elem.category}</td>
                    <td><input type="number" value="${elem.price}" id="editPrice"></td>
                    <td><input type="number" value="${elem.stock}" id="editStock"></td>
                    <td></td>
                    <td><input type="button" value="Cancel" onclick="showMenu()"></td>
                    <td><input type="button" value="Save" onclick="saveData(${index})"></td>
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
    var result = hasilFilter.map((val, index) => {
        return (
            `
                 <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.category}</td>
                    <td>${val.price}</td>
                    <td>${val.stock}</td>
                    <td><input type="button" value="Add" onclick="buyMenu(${val.id})"></td>
                    <td><input type="button" value="Delete" onclick="deleteData(${val.id})"></td>
                    <td><input type="button" value="Edit" onclick="editData(${val.id})"></td>
                </tr>
            `
        )
    })
    return document.getElementById('output').innerHTML = result.join('')
}

var filterNama = () => {
    var namaInput =  document.querySelector('#namaFilter').value
    // console.log(namaInput)
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
            if(val.price >= hargaMin && val.price <= hargaMax){
                return true
            }else{
                return false
            }
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

var deleteData = (idProduct) => {
    arrProduct = arrProduct.filter((val) => {
        if(val.id === idProduct){
            return false
        }else{
            return true
        }
    })
    showFilterResult(arrProduct)
}

var editData = (id) => {
    showMenu(id)
}

var saveData = (id) => {
    arrProduct[id].name = document.querySelector('#editNama').value
    arrProduct[id].price = document.querySelector('#editPrice').value
    arrProduct[id].stock = document.querySelector('#editStock').value
    
    // ... spread operator agar tidak menjadi array dalam array. berlaku juga untuk object. mengeluarkan value dari pembukngkusnya.
    // nama = document.querySelector('#editNama').value
    // price = document.querySelector('#editPrice').value
    // stock= document.querySelector('#editStock').value
    // arrProduct[id] = {
    //     ...arrProduct[id],
    //     name: nama,
    //     price,
    //     stock
    // }
    
    
    showMenu()
}

var showCart = (arr) => {
    var cartMenu = arr.map((elem, index) => {
        return (
            `
                 <tr>
                    <td>${elem.id}</td>
                    <td>${elem.name}</td>
                    <td>${elem.category}</td>
                    <td>${elem.price}</td>
                    <td><input type="button" value="Remove" onclick="deleteCart(${index})"></td>
                </tr>
            `
        )
    })
    return document.getElementById('cart').innerHTML = cartMenu.join('')
}

var buyProduct = []

var buyMenu = (idProduk) => {
    for(i=0;i<arrProduct.length;i++)
        if(arrProduct[i].id === idProduk){
            buyProduct.push(arrProduct[i])
        }
    showCart(buyProduct)
}

var deleteCart = (id) => {
    buyProduct.splice(id, 1)
    showCart(buyProduct)
}

var resetFilter = () => {
    document.querySelector('#namaFilter').value = ''
    document.querySelector('#hargaMax').value = ''
    document.querySelector('#hargaMin').value = ''
    document.querySelector('#categoryInput2').value = 'All'
    showMenu()
}

showMenu()