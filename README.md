# Nén và Phát hiện Bất thường bằng Trie và Phân tích Thống kê

Dự án thuộc học phần **Cấu trúc Dữ liệu và Giải thuật (CO2003)** - Học kỳ 251.

## 🌐 Trải nghiệm Dự án
*   **Trang giới thiệu:** [ptn1ne.github.io/VPTREETEST/](https://ptn1ne.github.io/VPTREETEST/)
    *   *Trang web cung cấp thông tin chi tiết về nhóm, đề tài và nút **"Run Program"** để dẫn trực tiếp đến môi trường chạy mã nguồn.*

---

## 📖 Giới thiệu Đề tài
Dự án xây dựng hệ thống **LogDrainTrie** - một giải pháp tối ưu để nén và phát hiện các điểm bất thường trong luồng log hệ thống bằng cách kết hợp cấu trúc dữ liệu **Trie lai (Hybrid Trie)** và các chỉ số thống kê.

**Các kết quả nổi bật:**
- **Nén dữ liệu:** Giảm dung lượng lên đến **13 lần** so với văn bản thô.
- **Độ chính xác:** Đạt F1-Score **92.9%** trong việc phát hiện các lỗi cấu trúc và tham số.
- **Hiệu năng:** Tốc độ xử lý ấn tượng đạt **12,000 dòng log/giây**.

---

## 📂 Cấu trúc Repository

| Thư mục | Nội dung |
| :--- | :--- |
| [**`source/`**](./source/) | Chứa mã nguồn chương trình (file `.ipynb` chạy trên Google Colab). |
| [**`data/`**](./data/) | Chứa các tập dữ liệu log mẫu (SSH logs) dùng để chạy thử nghiệm. |
| [**`report/`**](./report/) | File báo cáo chi tiết (PDF) về thuật toán và kết quả thực nghiệm. |
| [**`docs/`**](./docs/) | Mã nguồn của trang web giới thiệu dự án (GitHub Pages). |

---

## 🚀 Hướng dẫn Sử dụng
1. Truy cập trang web giới thiệu hoặc mở trực tiếp file trong thư mục `source/`.
2. Nhấn nút **Run Program** (link Google Colab) để mở môi trường thực thi.
3. Tải các file dữ liệu từ thư mục `data/` lên Colab để tiến hành kiểm thử.

---

## 👥 Đội ngũ thực hiện (Nhóm 15 - Lớp TN01)
*   **Giảng viên hướng dẫn:** TS. Lê Thành Sách
*   **Thành viên nhóm:**
    1. **Phạm Đoàn Gia Cát** - MSSV: 2410369
    2. **Trần Quốc Huy** - MSSV: 2411283
    3. **Phạm Trường Chính** - MSSV: 2410407

---
*Khoa Kỹ thuật Hóa học - Trường Đại học Bách Khoa - ĐHQG TP.HCM*
