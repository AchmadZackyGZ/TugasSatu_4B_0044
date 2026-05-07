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

  // fiturubah status tugas seperti progress done dll
  const selectStatus = document.createElement("select");
  const optTodo = document.createElement("option");
  const optProgress = document.createElement("option");
  const optDone = document.createElement("option");
  optTodo.text = "To Do";
  optProgress.text = "Progress";
  optDone.text = "Done";

  selectStatus.add(optTodo);
  selectStatus.add(optProgress);
  selectStatus.add(optDone);

  // jika status done maka text di coret langsung
  selectStatus.addEventListener("change", function () {
    if (selectStatus.value === "Done") {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });

  // fitur men edit data tugas
  const btnEdit = document.createElement("button");
  btnEdit.innerHTML = "Edit";
  btnEdit.addEventListener("click", function () {
    // mengedit teks tugas
    const newTask = prompt("Edit teks tugas Anda:", tugasSaatIni);
    if (newTask !== null && newTask.trim() !== "") {
      currentTask = newTask;
      span.innerHTML = `${tugasSaatIni} - ${waktuSaatIni}`;
    }
  });

  // fitur hapus data
  const btnHapus = document.createElement("button");
  btnHapus.innerHTML = "Hapus";
  btnHapus.addEventListener("click", function () {
    listbaru.remove();
  });

  // masukan semua elemen yg di buat ke dalam tag <li>
  listbaru.appendChild(span);
  listbaru.appendChild(selectStatus);
  listbaru.appendChild(btnEdit);
  listbaru.appendChild(btnHapus);

  daftarTugas.appendChild(listbaru);

  inputValue.value = "";
  inputDate.value = "";
  inputValue.focus();
});
