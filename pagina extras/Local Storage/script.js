var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["Description"] = document.getElementById("Description").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    formData["nameshop"] = document.getElementById("nameshop").value;
    formData["caduciddate"] = document.getElementById("caduciddate").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productCode;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Description;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.qty;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.perPrice;
    cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.nameshop;
    cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.caduciddate;
    cell8 = newRow.insertCell(7);
        cell8.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
    document.getElementById("nameshop").value = selectedRow.cells[4].innerHTML;
    document.getElementById("caduciddate").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
    selectedRow.cells[4].innerHTML = formData.nameshop;
    selectedRow.cells[5].innerHTML = formData.caduciddate;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("productCode").value = '';
    document.getElementById("product").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("perPrice").value = '';
    document.getElementById("nameshop").value = '';
    document.getElementById("caduciddate").value = '';
    selectedRow = null;
}
