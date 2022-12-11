
for(var i = 1; i<=20; i++) {    
    if(i<10) {
        document.getElementById("imagem").innerHTML += "<a href='img/imagem0"+i+".jpg' data-lightbox='mygallery' data-title='2º período'><img src='img/imagem0"+i+".jpg' alt='Foto 0"+i+"'>";      
    }else {
        document.getElementById("imagem").innerHTML += "<a href='img/imagem"+i+".jpg' data-lightbox='mygallery' data-title='2º período'><img src='img/imagem"+i+".jpg' alt='Foto "+i+"'>";
    }
    document.getElementById("imagem").innerHTML += "</a>";
}