// Ini SCRIPT JS
function countButtonKeliling() {
  var sisiA = parseFloat(document.getElementById("SisiA").value)
  var sisiB = parseFloat(document.getElementById("SisiB").value)
  var sisiC = parseFloat(document.getElementById("SisiC").value)

  var keliling = sisiA + sisiB + sisiC

  document.getElementById("keliling").innerHTML = keliling
}

function resetButtonKeliling (){
    document.getElementById('SisiA').value=''
    document.getElementById('SisiB').value=''
    document.getElementById('SisiC').value=''
    document.getElementById('keliling').innerHTML = ''
}

function countButtonLuas() {
    var alas = document.getElementById('alas').value
    var tinggi = document.getElementById('tinggi').value
    var luas = alas * tinggi * 0.5

    document.getElementById('luas').innerHTML = luas
}

function resetButtonLuas (){
     document.getElementById('alas').value=''
     document.getElementById('tinggi').value=''
     document.getElementById('luas').innerHTML = ''
}
