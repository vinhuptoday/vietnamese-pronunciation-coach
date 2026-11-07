# Trang chủ "Nảy Lời Mầm Thanh" – thiết kế lại

Giữ tinh thần ảnh tham khảo (thân thiện, cho trẻ em và phụ huynh), nâng cấp cho hiện đại, cân xứng hơn.

## Phong cách
- Màu: nền kem ấm, xanh lá mầm (chính), cam san hô (nút hành động), vàng nắng điểm nhấn.
- Chữ: Baloo 2 (tiêu đề, tròn trịa, hỗ trợ tiếng Việt) + Be Vietnam Pro (nội dung).
- Bo góc lớn, bóng đổ mềm, chuyển động nhẹ (thẻ nổi lơ lửng, hiện dần khi cuộn).

## Bố cục trang chủ (tiếng Việt)
1. **Thanh điều hướng**: logo mầm cây + menu (Kiểm tra phát âm, Lộ trình, Bài học, Trò chơi, Góc phụ huynh, Nhà trường) + nút Đăng nhập; menu gọn trên điện thoại.
2. **Phần mở đầu** (2 cột cân đối): nhãn nhỏ, tiêu đề "Nói tròn vành rõ chữ, tự tin mỗi ngày", mô tả, 2 nút (Làm bài kiểm tra miễn phí / Xem lộ trình mẫu), 3 dấu tích. Bên phải: hình minh họa bé đang nói (tạo bằng AI) trong vòng tròn, với 3 thẻ nổi: "lúa nếp – đúng âm L, N", "Hôm nay ★ 12 sao", biểu đồ tiến bộ.
3. **Dải số liệu**: số bé đã luyện, bài học, trò chơi, % phụ huynh hài lòng (số mẫu).
4. **Các lỗi thường gặp**: 3 thẻ – phụ âm đầu (l/n, s/x, tr/ch), vần & âm cuối, thanh hỏi/ngã, mỗi thẻ có ví dụ.
5. **Cách hoạt động**: 3 bước – Kiểm tra 5 phút → Nhận lộ trình riêng → Luyện với video khẩu hình & trò chơi.
6. **Tính năng nổi bật**: dạng lưới khối (video khẩu hình, trò chơi, báo cáo cho phụ huynh, công cụ cho nhà trường).
7. **Cảm nhận phụ huynh**: 3 lời nhận xét mẫu.
8. **Kêu gọi hành động** cuối trang + **chân trang**.

Lưu ý: số liệu và lời nhận xét là nội dung mẫu, bạn có thể gửi nội dung thật sau. Các nút trong menu tạm thời cuộn tới phần tương ứng trên trang chủ.

## Chi tiết kỹ thuật
- Viết lại `src/routes/index.tsx`, chia các phần thành component trong `src/components/home/`.
- Token màu oklch + font trong `src/styles.css`; link Google Fonts trong `__root.tsx`; cập nhật tiêu đề/mô tả trang.
- Ảnh minh họa tạo vào `src/assets/`.
