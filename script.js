function validateform() {
    var name = document.myform.name.value.trim();
    var password = document.myform.password.value.trim();

    if (name === '') {
        alert("Name can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }
    return true; // Form is valid
}


