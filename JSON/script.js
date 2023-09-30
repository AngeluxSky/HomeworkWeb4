const jsonData = {
    "surname": "Иванов",
    "name": "Иван",
    "patronymic": "Иванович",
    "birthdate": "01.01.1990",
    "birthplace": "Москва",
    "phone": "8 926 766 48 48"
};

function fillProfileData() {
    document.getElementById('surname').textContent = jsonData.surname;
    document.getElementById('name').textContent = jsonData.name;
    document.getElementById('patronymic').textContent = jsonData.patronymic;
    document.getElementById('birthdate').textContent = jsonData.birthdate;
    document.getElementById('birthplace').textContent = jsonData.birthplace;
    document.getElementById('phone').textContent = jsonData.phone;
}

fillProfileData();