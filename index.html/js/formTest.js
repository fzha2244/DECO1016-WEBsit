
    var flag=1;
    function show() {
        if (flag == 1) {
            var First = document.getElementById("First").value;
            var Last = document.getElementById("Last").value;
            var sex = document.getElementById("sex").value;
            var tel = document.getElementById("tel").value;
            var PostalCode = document.getElementById("PostalCode").value;
            var birthday = document.getElementById("birthday").value;
            var country = document.getElementById("country").value;
            var address = document.getElementById("address").value;
            if (First == "" || Last == "" || sex == "" || tel == "" || PostalCode == "" || birthday == "" || country == "" || address == "") {
                alert("Please complete the information before proceeding to the next step");
                return;
            }

            document.getElementById("hidden").style.display='none';
            document.getElementById("middle").style.display="block";
            document.getElementById("progress").classList.add("progress1");
            document.getElementById("basic").style.display='none';
            flag=2;
            return;
        }
        if (flag==2){
            document.getElementById("hidden").style.display='block';
            document.getElementById("basic").style.display='none';
            document.getElementById("middle").style.display="none";
            document.getElementById("progress").classList.add("progress2");
            flag=3;
            return;
        }
        if (flag==3){
            var nike=document.getElementById("nike").value;
            var sex=document.getElementById("sex").value;
            var email=document.getElementById("Email").value;
            var country=document.getElementById("country").value;
            var tel=document.getElementById("tel").value;
            var categorys = [
                { name: "Nike", value: nike },
                { name: "Sex", value: sex },
                { name: "Email", value: email },
                { name: "Country", value: country },
                { name: "Tel", value: tel }];
            localStorage.categorys = JSON.stringify(categorys);
            localStorage.email = email;
            localStorage.pwd = document.getElementById("password").value;
            self.location.href="confirm.html";
        }
    }
