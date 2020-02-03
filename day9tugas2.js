var produk = []
var hewan = []

function addNewProduct(){
    var namaProduk = document.querySelector('#namaProduk').value
    var hargaProduk = document.querySelector('#hargaProduk').value
    var condition = document.querySelector('input[name=condition]:checked').value
    var kategori = document.querySelector('#kategori').value

    var objProduk = {
        namaProduk,
        hargaProduk,
        condition,
        kategori
    }
    produk.push(objProduk)
    showProduct()
    resetProduk()
}

function showProduct(){
    let list = produk.map(function(element){
        return(
            `
                <tr>
                    <td>${element.namaProduk}</td>
                    <td>${element.hargaProduk}</td>
                    <td>${element.condition}</td>
                    <td>${element.kategori}</td>
                </tr>
            `
        )
    })
    document.getElementById('kontenProduk').innerHTML = list.join('')
}

function addNewAnimal(){
    var namaHewan = document.querySelector('#namaHewan').value
    var umurHewan = document.querySelector('#umurHewan').value
    var kelaminHewan = document.querySelector('input[name=kelamin]:checked').value
    var kategoriHewan = document.querySelector('input[name=status]:checked').value

    var objHewan = {
        namaHewan,
        umurHewan,
        kelaminHewan,
        kategoriHewan
    }
    hewan.push(objHewan)
    showAnimal()
    resetHewan()
}

function showAnimal(){
    let list = hewan.map(function(element){
        return(
            `
                <tr>
                    <td>${element.namaHewan}</td>
                    <td>${element.umurHewan}</td>
                    <td>${element.kelaminHewan}</td>
                    <td>${element.kategoriHewan}</td>
                </tr>
            `
        )
    })
    document.getElementById('kontenHewan').innerHTML = list.join('')
}

function resetProduk(){
    document.querySelector('#namaProduk').value = ''
    document.querySelector('#hargaProduk').value = ''
    document.querySelector('#kategori').selectedIndex = 0
    var ele = document.getElementsByName("condition");
    for(var i=0;i<ele.length;i++){
        ele[i].checked = false;
    }
}

function resetHewan(){
    document.querySelector('#namaHewan').value = ''
    document.querySelector('#umurHewan').value = ''
    var ele = document.getElementsByName("kelamin");
    for(var i=0;i<ele.length;i++){
        ele[i].checked = false;
    }
    var ele1 = document.getElementsByName("status");
    for(var i=0;i<ele1.length;i++){
        ele1[i].checked = false;
    }

}