const nhapTenSanPham=document.getElementById("tenSanPham");
const nhapGiaSanPham=document.getElementById("giaSanPham");
const nutThemSanPham=document.getElementById("themSanPham");
const bangThemSanPham=document.querySelector("#bangSanPham tbody");

let soSanPham = [];

nutThemSanPham.addEventListener('click', (e)=>{
    e.preventDefault();
    const tenSanPham=nhapTenSanPham.value.trim();
    const giaSanPham=nhapGiaSanPham.value.trim();

    if(tenSanPham !==""&&giaSanPham!==""){

        const sanPhamMoi={
            id: soSanPham.length +1,
            name: tenSanPham,
            gia: giaSanPham
        };
        soSanPham.push(sanPhamMoi);
        renderbangSanPham();

        nhapTenSanPham.value="";
        nhapGiaSanPham.value="";

    }else{
        alert("vui long nhap day du ten va gia san pham.");
    }
});

function renderbangSanPham(){
    bangThemSanPham.innerHTML='';

    soSanPham.forEach((sanPham, index)=>{
        const tr=document.createElement("tr");

        tr.innerHTML=`
        <td>${index +1}</td>
        <td>${sanPham.name}</td>
        <td>${sanPham.gia}</td>
        <td>
        <button class="xoaBtn" onclick="deletesanPham(${sanPham.id})">xoa</button>
        </td>
        `;
        bangThemSanPham.appendChild(tr);

    });
}
function deletesanPham(productId){
    soSanPham=soSanPham.filter(sanPham=>sanPham.id !==productId);
    renderbangSanPham();
}
