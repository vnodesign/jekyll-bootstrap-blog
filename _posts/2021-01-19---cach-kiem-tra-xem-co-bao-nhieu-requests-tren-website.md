---
layout: post
title:  "Cách Kiểm Tra Xem Có Bao Nhiêu Requests Trên Website"
author: tuanducdesign
categories: [ Website ]
tags: [Requests, Tăng tốc]
image: static/media/cach-kiem-tra-xem-co-bao-nhieu-requests-tren-website.jpg
description: "Về vấn đề dùng nhiều scripts bên ba thì bạn sẽ không tránh khỏi được có nhiều requests được tải cùng website."
---

Về vấn đề dùng nhiều scripts bên ba thì bạn sẽ không tránh khỏi được có nhiều requests được tải cùng website, Bài viết ngày hôm nay mình sẽ hướng dẫn các bạn cách kiểm tra xem có bao nhiêu requests trên Website.

## Nội dung bài viết

- [Requests là gì](#requests-là-gì)
- [Cách kiểm tra xem có bao nhiêu requests đang hoạt động](#cách-kiểm-tra-xem-có-bao-nhiêu-requests-đang-hoạt-động)
- [Tìm kiếm và tối ưu các requests](#tìm-kiếm-và-tối-ưu-các-requests)

![Cách Kiểm Tra Xem Có Bao Nhiêu Requests Trên Website]({{ site.url }}/static/media/cach-kiem-tra-xem-co-bao-nhieu-requests-tren-website.jpg)

## Requests là gì

Request có thể hiểu nhanh là thông tin gửi từ client lên server. Khi bạn lên trình duyệt browser gõ một địa chỉ nào đó, ví dụ bạn gõ là [https://tuanducdesign.com/](https://tuanducdesign.com/) thì ngay lập tức trình duyệt sẽ dựa vào tên domain để gửi yêu cầu truy cập đến địa chỉ IP mà domain này đang trỏ tới, lúc này phía server sẽ phân tích yêu cầu và sẽ gửi luồng xử lý tới vị trí vị trí lưu trữ của mã nguồn và nhiệm vụ của các mã nguồn là tiếp nhận yêu cầu, phân tích request đó và trả kết quả lại cho client.

## Cách kiểm tra xem có bao nhiêu requests đang hoạt động

Để kiểm tra xem có bao nhiêu requests đang hoạt động thì bạn ra trang chủ.

Sau đó bấm chuột phải chọn kiểm tra phần tử, tiếp theo chuyển qua tab Network.

Kế tiếp bạn reload lại trang để trình duyệt có thể load lại được một số thông tin.

Sau khi trang load lại xong thì sẽ có một đoạn text tương tự như sau ở phía dưới bên trái :

```text
272 requests
1.9 MB transferred
10.1 MB resources
Finish: 7.63 s
DOMContentLoaded: 1.12 s
```

![Số Requests Trên Website]({{ site.url }}/static/media/so-requests-tren-website.jpg)

## Tìm kiếm và tối ưu các requests

Bên trên có khung Fillter bạn gõ vào đó tên domain hoặc đuôi mở rộng mà bạn cần check để kiểm tra.

Ở đây mình sẽ check với Google Fonts để kiểm tra xem Google Fonts load những thành phần nào ra.

![Kiểm Tra Số Requests Từ Google Fonts]({{ site.url }}/static/media/kiem-tra-so-requests-tu-google-fonts.jpg)

Kết quả hiển thị ra như vậy là bạn đã biết là có bao nhiêu requests trên Website rồi nhé.

Bây giờ chúng ta tiến hành áp dụng các kiến thức từ bài [Tăng Tốc Website Từ Preload](https://tuanducdesign.com/2021/01/tang-toc-website-tu-preload.html) để áp dụng vào bài này.

Cú pháp quen thuộc mà mình muốn nhắc đến đó chính là:

``` <link rel="preload" ``` kèm với cú pháp ``` as="font" ```

Để tìm cú pháp phù hợp với ``` as= ``` thì bạn đọc nội dung sau:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content#what_types_of_content_can_be_preloaded](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content#what_types_of_content_can_be_preloaded)

Chúc các bạn thành công.
