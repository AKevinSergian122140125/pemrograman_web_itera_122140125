# Program Pengelolaan Data Nilai Mahasiswa

# Data mahasiswa
mahasiswa = [
    {"nama": "Budi", "nim": "2021001", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 90},
    {"nama": "Ani", "nim": "2021002", "nilai_uts": 70, "nilai_uas": 75, "nilai_tugas": 80},
    {"nama": "Citra", "nim": "2021003", "nilai_uts": 65, "nilai_uas": 60, "nilai_tugas": 70},
    {"nama": "Dodi", "nim": "2021004", "nilai_uts": 90, "nilai_uas": 95, "nilai_tugas": 85},
    {"nama": "Eka", "nim": "2021005", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 50}
]

# Fungsi untuk menghitung nilai akhir dan grade
def hitung_nilai_akhir(mahasiswa):
    nilai_akhir = (0.3 * mahasiswa["nilai_uts"]) + (0.4 * mahasiswa["nilai_uas"]) + (0.3 * mahasiswa["nilai_tugas"])
    if nilai_akhir >= 80:
        grade = "A"
    elif 70 <= nilai_akhir < 80:
        grade = "B"
    elif 60 <= nilai_akhir < 70:
        grade = "C"
    elif 50 <= nilai_akhir < 60:
        grade = "D"
    else:
        grade = "E"
    return nilai_akhir, grade

# Menampilkan data mahasiswa lengkap
print(f"{'Nama':<10}{'NIM':<10}{'Nilai Akhir':<15}{'Grade':<5}")
print("-" * 40)

for mhs in mahasiswa:
    nilai_akhir, grade = hitung_nilai_akhir(mhs)
    print(f"{mhs['nama']:<10}{mhs['nim']:<10}{nilai_akhir:<15.2f}{grade:<5}")

# Menampilkan mahasiswa dengan nilai tertinggi dan terendah
nilai_akhir_list = [(mhs['nama'], hitung_nilai_akhir(mhs)[0]) for mhs in mahasiswa]
tertinggi = max(nilai_akhir_list, key=lambda x: x[1])
terendah = min(nilai_akhir_list, key=lambda x: x[1])

print(f"\nMahasiswa dengan nilai tertinggi: {tertinggi[0]} - Nilai: {tertinggi[1]:.2f}")
print(f"Mahasiswa dengan nilai terendah: {terendah[0]} - Nilai: {terendah[1]:.2f}")