# math_operations.py

# Konstanta
PI = 3.14159

# Fungsi untuk menghitung luas dan keliling geometri
def hitung_luas_persegi(sisi):
    return sisi * sisi

def hitung_keliling_persegi(sisi):
    return 4 * sisi

def hitung_luas_lingkaran(radius):
    return PI * radius * radius

def hitung_keliling_lingkaran(radius):
    return 2 * PI * radius

def hitung_luas_persegi_panjang(panjang, lebar):
    return panjang * lebar

def hitung_keliling_persegi_panjang(panjang, lebar):
    return 2 * (panjang + lebar)

# Fungsi konversi suhu
def celsius_ke_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def celsius_ke_kelvin(celsius):
    return celsius + 273.15