;
(function() {
	'use strict';

	var userData = [];

	// Update table according to data
	var updateTable = function() {
		var dataTable = document.getElementById('table1'),
		tableHead = document.getElementById('table-head'),
		tbody = document.createElement('tbody');

		while (dataTable.firstChild) {
			dataTable.removeChild(dataTable.firstChild);
		}

		dataTable.appendChild(tableHead);

		for (var i = 0; i < userData.length; i++) {
			var tr = document.createElement('tr'),
			td0 = document.createElement('td'),
			td1 = document.createElement('td'),
			td2 = document.createElement('td'),
			td3 = document.createElement('td'),
			td4 = document.createElement('td'),
			btnDelete = document.createElement('input'),
			btnEdit = document.createElement('input');

			btnDelete.setAttribute('type', 'button');
			btnDelete.setAttribute('class', 'btn waves-effect waves-light red darken-3');
			btnDelete.setAttribute('value', 'Delete');
			btnDelete.setAttribute('id', i);

			btnEdit.setAttribute('type', 'button');
			btnEdit.setAttribute('class', 'btn waves-effect waves-light');
			btnEdit.setAttribute('value', 'Edit');
			btnEdit.setAttribute('id', i);

			tr.appendChild(td0);
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);

			td0.innerHTML = i + 1;
			td1.innerHTML = userData[i].name;
			td2.innerHTML = userData[i].phone;
			td3.appendChild(btnEdit);
			td4.appendChild(btnDelete);


			btnDelete.onclick = (function() {
				return function() {
					var deleteId = this.getAttribute('id');
					userData.splice(deleteId, 1);
					updateTable();
					refreshForm();
					
				};
			})();

			btnEdit.addEventListener('click', function() {
				var editId = this.getAttribute('id');
				updateForm(editId);
			}, false);

			tbody.appendChild(tr);
		}
		dataTable.appendChild(tbody);
	}

	var updateForm = function(id) {
		var nameField = document.getElementById('name'),
		phoneField = document.getElementById('phone'),
		saveButton = document.getElementById('btnSave');

		nameField.value = userData[id].name;
		phoneField.value = userData[id].phone;
		saveButton.value = 'Update';
		saveButton.setAttribute('data-update', id);
	}

	// Save new data
	var saveData = function() {
		var newName = document.getElementById('name').value,
		newPhone = document.getElementById('phone').value,
		datatoAdd = {
			name: newName,
			phone: newPhone
		};
		
		if (newName != "" && newPhone != "") {
			userData.push(datatoAdd);
			updateTable();
		}
	}

	// Update data
	var updateData = function(id) {
		var upName = document.getElementById('name').value,
		upPhone = document.getElementById('phone').value;

		userData[id].name = upName;
		userData[id].phone = upPhone;
		updateTable();
	}

	// Reset the form
	var refreshForm = function() {
		var nameField = document.getElementById('name'),
		phoneField = document.getElementById('phone'),
		saveButton = document.getElementById('btnSave');

		nameField.value = '';
		phoneField.value = '';
		saveButton.value = 'Save';
		saveButton.removeAttribute('data-update');
	}

	// Main function
	var init = function() {
		updateTable();

		var btnSave = document.getElementById('btnSave'),
		btnRefresh = document.getElementById('btnRefresh');

		btnSave.onclick = function() {
			if (btnSave.getAttribute('data-update')) {
				updateData(btnSave.getAttribute('data-update'));
			} else {
				saveData();
			}
			refreshForm();
		};

		btnRefresh.onclick = function() {
			refreshForm();
		};
	};

	init(); //Intialize the table
})();