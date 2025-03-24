// ✅ Aplikasi To-Do List
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const addTodoButton = document.getElementById("add-todo");

// Muat data dari localStorage saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.forEach(todo => tambahItem(todo.text, todo.completed));
});

// Tambah item baru
addTodoButton.addEventListener("click", () => {
  if (todoInput.value.trim() !== "") {
    tambahItem(todoInput.value);
    simpanKeLocalStorage();
    todoInput.value = "";
  }
});

function tambahItem(text, completed = false) {
  const li = document.createElement("li");
  li.className = `p-2 border rounded flex justify-between items-center ${completed ? "line-through" : ""}`;
  li.innerHTML = `
    <span>${text}</span>
    <button class="text-red-500 ml-4" onclick="hapusItem(this)">Hapus</button>
  `;

  li.addEventListener("click", () => {
    li.classList.toggle("line-through");
    simpanKeLocalStorage();
  });

  todoList.appendChild(li);
  simpanKeLocalStorage();
}

function hapusItem(button) {
  button.parentElement.remove();
  simpanKeLocalStorage();
}

function simpanKeLocalStorage() {
  const todos = [];
  todoList.querySelectorAll("li").forEach(li => {
    todos.push({ text: li.textContent.replace("Hapus", "").trim(), completed: li.classList.contains("line-through") });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

// ✅ Kalkulator dengan Operasi Tambahan
const kalkulatorButtons = {
  tambah: "+",
  kurang: "-",
  kali: "*",
  bagi: "/",
  pangkat: "**",
  akar: "sqrt",
  modulus: "%"
};

Object.keys(kalkulatorButtons).forEach(op => {
  document.getElementById(`btn-${op}`).addEventListener("click", () => hitung(op));
});

function hitung(operasi) {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  let hasil;

  if (isNaN(angka1) || (operasi !== "akar" && isNaN(angka2))) {
    alert("Masukkan angka yang valid!");
    return;
  }

  switch (operasi) {
    case "tambah":
      hasil = angka1 + angka2;
      break;
    case "kurang":
      hasil = angka1 - angka2;
      break;
    case "kali":
      hasil = angka1 * angka2;
      break;
    case "bagi":
      hasil = angka2 !== 0 ? angka1 / angka2 : "Error: Pembagian oleh nol!";
      break;
    case "pangkat":
      hasil = Math.pow(angka1, angka2);
      break;
    case "akar":
      hasil = Math.sqrt(angka1);
      break;
    case "modulus":
      hasil = angka1 % angka2;
      break;
    default:
      hasil = "Operasi tidak valid";
  }

  document.getElementById("hasil-kalkulator").innerText = `Hasil: ${hasil}`;
}

// ✅ Validasi Form Input
document.getElementById("form-validasi").addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const hasilValidasi = document.getElementById("hasil-validasi");

  if (nama.length < 3) {
    hasilValidasi.innerText = "Nama harus lebih dari 3 karakter.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    hasilValidasi.innerText = "Email tidak valid.";
  } else if (password.length < 8) {
    hasilValidasi.innerText = "Password minimal 8 karakter.";
  } else {
    hasilValidasi.innerText = "Form berhasil divalidasi!";
  }
});
