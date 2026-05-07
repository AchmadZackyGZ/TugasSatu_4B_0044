const inputValue = document.getElementById("inputTask");
const inputDate = document.getElementById("inputDate");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function () {
  if (inputValue.value === "") {
    alert("Input tidak boleh kosong!");
    return;
  }

  const listbaru = document.createElement("li");
  // Menyimpan teks tugas dan tanggal ke dalam variabel
  let tugasSaatIni = inputValue.value;
  let waktuSaatIni = inputDate.value;

  const span = document.createElement("span");
  span.innerHTML = `${tugasSaatIni} - ${waktuSaatIni}`;

  // ubah status tugas seperti progress done dll
  const selectStatus = document.createElement("select");
  const optTodo = document.createElement("option");
  const optProgress = document.createElement("option");
  const optDone = document.createElement("option");
  optTodo.text = "To Do";
  optProgress.text = "Progress";
  optDone.text = "Done";

  listbaru.appendChild(span);
  daftarTugas.appendChild(listbaru);

  inputValue.value = "";
  inputValue.focus();
});
