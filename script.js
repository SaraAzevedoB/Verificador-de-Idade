function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.querySelector('input#txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano){
      window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
     /*  window.alert('Tudo OK') */
       var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if(fsex[0].checked){
        genero = 'homem'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'fotobebemenino.jpg')
            //criança
        }else if(idade < 21){
            img.setAttribute('src', 'fotojovemmenino.jpg')
            //jovem
        }else if(idade < 50){
            img.setAttribute('src', 'fotoadultohomem.jpg')
            //adulto
        }else{
            img.setAttribute('src', 'fotoidosohomem.jpg')
            //idoso
        }
    }
      if(fsex[1].checked){
          genero = 'mulher'
          if(idade >= 0 && idade < 10){
              img.setAttribute('src', 'fotobebemenina.jpg')
            //criança
        }else if(idade < 21){
            img.setAttribute('src', 'fotojovemmenina.jpg')
            //jovem
        }else if(idade < 50){
            img.setAttribute('src', 'fotoadultomulher.jpg')
            //adulto
        }else{
            img.setAttribute('src', 'fotoidosomulher.jpg')
            //idoso
        }
      }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  } 

}