
function tampilantanggal () {
    const tgl = new Date ();
    document.getElementById("tanggal").innerHTML="📅"+ tgl.toLocaleString("id-ID");
}
setInterval(tampilantanggal, 1000)

const tombolDetail = document.querySelectorAll(".detail-btn");
tombolDetail.forEach((btn) => {
    btn.addEventListener("click", function (){
        const detail = this.nextElementSibling; 
        detail.style.display = detail.style.display === "block" ? "none" : "block" ;
    });
});






