// vamos usar o nosso código java script para o usuário 
// poder escolher se ele quer ficar 
//na versão em inglês ou na versão em português . 

function tradutor (){
  let user_lang_choise = document.getElementById("lang_button");
  if (user_lang_choise.value == "en"){
        user_lang_choise.value == "pt-br";
        //    window.open ("url da página" , "nome da aba")
        window.open("http://127.0.0.1:3000/professional_resume(en).html",
            "leticia camello - professional resume");
    }
  else if  (user_lang_choise.value == "pt-br"){
        user_lang_choise.value == "en";
        window.open("http://127.0.0.1:3000/curriculo(pt-br).html",
            "leticia Camello - curriculo");
   }
}
tradutor ()
