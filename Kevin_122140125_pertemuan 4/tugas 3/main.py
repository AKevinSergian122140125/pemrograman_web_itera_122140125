# Mengimpor modul
import math_operations as mo # type: ignore
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin # type: ignore

# Menggunakan fungsi dari modul
print("Menghitung Luas dan Keliling Geometri:")
print(f"Luas Persegi (sisi 5): {mo.hitung_luas_persegi(5)}")
print(f"Keliling Persegi (sisi 5): {mo.hitung_keliling_persegi(5)}")
print(f"Luas Lingkaran (radius 7): {mo.hitung_luas_lingkaran(7)}")
print(f"Keliling Lingkaran (radius 7): {mo.hitung_keliling_lingkaran(7)}")
print(f"Luas Persegi Panjang (panjang 8, lebar 5): {mo.hitung_luas_persegi_panjang(8, 5)}")
print(f"Keliling Persegi Panjang (panjang 8, lebar 5): {mo.hitung_keliling_persegi_panjang(8, 5)}")

# Menggunakan fungsi konversi suhu
celsius = 25
fahrenheit = celsius_ke_fahrenheit(celsius)
kelvin = celsius_ke_kelvin(celsius)

print(f"\n{celsius}°C = {fahrenheit}°F")
print(f"{celsius}°C = {kelvin}K")