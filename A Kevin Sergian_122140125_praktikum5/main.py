from abc import ABC, abstractmethod

# Abstract class LibraryItem
class LibraryItem(ABC):
    def __init__(self, title, item_id):
        self.title = title
        self.item_id = item_id

    @abstractmethod
    def display_info(self):
        pass

    @abstractmethod
    def borrow(self):
        pass

# Class Book
class Book(LibraryItem):
    def __init__(self, title, item_id, author, genre):
        super().__init__(title, item_id)
        self.author = author
        self.genre = genre
        self.is_borrowed = False

    def display_info(self):
        return f"Book Title: {self.title}, Author: {self.author}, Genre: {self.genre}, ID: {self.item_id}"

    def borrow(self):
        if not self.is_borrowed:
            self.is_borrowed = True
            return f"{self.title} has been borrowed."
        else:
            return f"{self.title} is already borrowed."

# Class Magazine
class Magazine(LibraryItem):
    def __init__(self, title, item_id, publisher, issue):
        super().__init__(title, item_id)
        self.publisher = publisher
        self.issue = issue
        self.is_borrowed = False

    def display_info(self):
        return f"Magazine Title: {self.title}, Publisher: {self.publisher}, Issue: {self.issue}, ID: {self.item_id}"

    def borrow(self):
        if not self.is_borrowed:
            self.is_borrowed = True
            return f"{self.title} has been borrowed."
        else:
            return f"{self.title} is already borrowed."

# Class Library
class Library:
    def __init__(self):
        self.items = []

    def add_item(self, item):
        self.items.append(item)

    def display_items(self):
        if not self.items:
            return "No items in the library."
        return "\n".join([item.display_info() for item in self.items])

    def search_item(self, search_term):
        found_items = [item.display_info() for item in self.items if search_term.lower() in item.title.lower() or search_term.lower() in item.item_id.lower()]
        if found_items:
            return "\n".join(found_items)
        else:
            return f"No items found for '{search_term}'."

# Main program to run the library system
library = Library()

book1 = Book("Python Programming", "B001", "John Doe", "Programming")
book2 = Book("Machine Learning", "B002", "Jane Smith", "AI")
magazine1 = Magazine("Tech Today", "M001", "Tech Publishing", "2023-05")

library.add_item(book1)
library.add_item(book2)
library.add_item(magazine1)

# Menampilkan semua item di perpustakaan
print("Daftar item perpustakaan:")
print(library.display_items())

# Mencari item berdasarkan judul
print("\nMencari item 'Python Programming':")
print(library.search_item("Python Programming"))

# Mencari item berdasarkan ID
print("\nMencari item dengan ID 'M001':")
print(library.search_item("M001"))
