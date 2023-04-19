function nMes(){
    var mes = document.getElementById("mes").value;
    const meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    var mesL = meses[mes-1];
    var nd = ((mes==2) ? "28" : (mes<8) ? (mes%2==0) ? "30" : "31" : (mes%2==0) ? "31" : "30");
    window.alert("el mes de "+mesL+" tiene "+nd+" dias");
}