$('#registration').on('click', function(){
    var name= $('#nameInput').val();
    var surname = $('#surnameInput').val();
    var birth = $('#birthInput').val();
    var email= $('#emailInput').val();
    var phone = $('#phoneInput').val();
    var pass = $('#passInput').val();
    var clients = new Firebase('https://podviaznikov.firebaseIO.com/clients')
    var newClientRef = clients.push();
    newClientRef.set({name: name, surname: surname, birth: birth, email: email, phone: phone, password: pass});
})