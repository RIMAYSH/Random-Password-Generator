
        const passwordBox = document.getElementById("password");
        const length = 12;

        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789"
        const symbol = "!@#$%&(){}[]_=+-~></";

        const allChars = upperCase + lowerCase + symbol + number;

        function createPassword() {
            let passowrd = "";
            passowrd += upperCase[Math.floor(Math.random() * upperCase.length)];
            passowrd += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            passowrd += number[Math.floor(Math.random() * number.length)];
            passowrd += symbol[Math.floor(Math.random() * symbol.length)];

            while (length > passowrd.length) {
                passowrd += allChars[Math.floor(Math.random() * allChars.length)];
            }
            //here a generated password display in password input box
            passwordBox.value = passowrd;
        }
        //Create a function to copy a password
        function copyPassword() {
            passwordBox.select();
            document.execCommand("copy")
        }
  
