# HTML Description List

Danh sách mô tả được sử dụng để tạo danh sách gồm các thuật ngữ và mô tả tương ứng.

Trong HTML, chúng ta sử dụng thẻ `<dl>` để tạo danh sách mô tả.

Ví dụ:

![Ví dụ 1](https://res.cloudinary.com/dvxznuxnp/image/upload/v1740795042/5a83de2a-1145-4f71-bb3a-bd91fa36df53.png)

Đầu ra chương trình:

![Đầu ra](https://res.cloudinary.com/dvxznuxnp/image/upload/v1740795029/b91b05da-9e4a-440e-8217-a50691760a8d.png)

## Cấu trúc danh sách mô tả

Danh sách mô tả HTML gồm hai thành phần chính:

- `<dt>`: Định nghĩa thuật ngữ hoặc tên.
- `<dd>`: Cung cấp mô tả hoặc giá trị tương ứng với thuật ngữ.

Danh sách mô tả có thể được sử dụng để hiển thị dữ liệu theo cặp key/value (khóa/giá trị). Vì nó chứa định nghĩa của một thuật ngữ, nên còn được gọi là danh sách định nghĩa.

## Các cách kết hợp thuật ngữ và mô tả

Dưới đây là ba cách phổ biến để sử dụng danh sách mô tả:

1. **Một thuật ngữ với một mô tả**
2. **Một thuật ngữ với nhiều mô tả**
3. **Nhiều thuật ngữ với một mô tả**

### 1. Một thuật ngữ với một mô tả

![Ví dụ 2](https://res.cloudinary.com/dvxznuxnp/image/upload/v1740796142/443b681f-796a-4e20-88a3-f8a9517c619d.png)

Đầu ra:

![Đầu ra](https://res.cloudinary.com/dvxznuxnp/image/upload/v1740796158/c5a95c8c-aef7-45c8-8d09-dd9ca5c65c01.png)

Mỗi thuật ngữ `<dt>` có một mô tả `<dd>` tương ứng.

### 2. Một thuật ngữ với nhiều mô tả

Một thuật ngữ có thể có nhiều mô tả, chẳng hạn như một sản phẩm có nhiều đặc điểm.

Ví dụ:

![Ví dụ 3](https://res.cloudinary.com/dvxznuxnp/image/upload/v1740796506/32099977-6cdf-4877-b97e-bccdb3e861de.png)

Đầu ra:

![Đầu ra](https://res.cloudinary.com/dvxznuxnp/image/upload/v1740796509/9d28ceff-2bdf-4057-9957-ad92166d9eaf.png)

Ở đây, thuật ngữ `<dt>HTML</dt>` có nhiều mô tả `<dd>` đi kèm.

### 3. Nhiều thuật ngữ với một mô tả

Trong một số trường hợp, nhiều thuật ngữ có cùng một mô tả.

Ví dụ:

![Ví dụ 4](https://res.cloudinary.com/dvxznuxnp/image/upload/v1740797061/a2b29ca1-8aa9-40e3-ac4e-2694b0c032e9.png)

Đầu ra:

![Đầu ra](https://res.cloudinary.com/dvxznuxnp/image/upload/v1740797052/1d7b4780-beb3-4b36-90df-93f91e0ac645.png)

Ở đây, cả `<dt>Python</dt>` và `<dt>Java</dt>` có chung mô tả `<dd>`.

## Khi nào nên sử dụng danh sách mô tả?

Danh sách mô tả là lựa chọn phù hợp khi cần biểu diễn nội dung theo định dạng "tiêu đề - mô tả" trong HTML. Nó giúp tổ chức thông tin một cách rõ ràng và có cấu trúc, đặc biệt hữu ích khi trình bày dữ liệu theo cặp khóa - giá trị.

