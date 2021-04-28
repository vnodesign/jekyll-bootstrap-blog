---
layout: post
title:  "Cách theo dõi nhật ký trên NextDNS"
permalink: /series/cach-theo-doi-nhat-ky-tren-nextdns.html
author: tuanducdesign
categories: [ Series ]
tags: [Logs, Ads, NextDNS]
image: static/media/cach-theo-doi-nhat-ky-tren-nextdns.png
description: "Cách theo dõi nhật ký trên NextDNS để kiểm tra xem tên miền nào đang bị chặn, và nguyên nhân nó bị chặn do trình chặn quảng cáo nào."
---

Cách theo dõi nhật ký trên NextDNS để kiểm tra xem tên miền nào đang bị chặn, và nguyên nhân nó bị chặn do trình chặn quảng cáo nào.

Lưu ý: Đây là danh sách hướng dẫn sử dụng NextDNS gồm 9 phần xem danh sách series ở đây: [Series hướng dẫn sử dụng NextDNS]({{ site.url }}/series-nextdns.html)

## Cách theo dõi nhật ký trên NextDNS

{% include image.html src="cach-theo-doi-nhat-ky-tren-nextdns.png" alt="Cách theo dõi nhật ký trên NextDNS" %}

### Tìm kiếm nhật ký

Ở đây bạn có thể tìm kiếm một tên miền mà bạn nghi là nó bị trình chặn quảng cáo chặn, sau khi đã tìm ra được rồi thì bạn kiểm tra xem nó có bị như hình dưới không nhé!

{% include image.html src="ten-mien-bi-trinh-chan-quang-cao-chan.png" alt="Tên miền bị trình chặn quảng cáo chặn" %}

Bạn đi chuột vào ⓘ để biết trình chặn quảng cáo nào đang chặn nó nhé.

### Bộ lọc nhật ký

Đây là chức năng rất hay giúp bạn lọc ra các tên miền bị chặn và các tên miền đang được cho phép, ngoài ra bạn cũng có thể xem được nhật ký DNS.

{% include image.html src="bo-loc-nhat-ky.png" alt="Bộ lọc nhật ký" %}

- Blocked Queries Only (Chỉ xem truy vấn bị chặn)
- Raw DNS logs (Xem nhật ký DNS)

### Kiểm tra lại nhật ký

Trong quá trình sử dụng nếu muốn kiểm tra lại nhật ký, thì bạn bấm vào biểu tượng reload tiếp theo là bạn kiểm tra danh sách tên miền.

### Danh sách tên miền

Sau khi đã thực hiện đủ các bước trên, bạn xem lại ảnh ở nội dung [Cách theo dõi nhật ký trên NextDNS](#cách-theo-dõi-nhật-ký-trên-nextdns) để kiểm tra xem có tên miền nào mới không.

## Kết

Qua bài viết này bạn cũng đã biết cách kiểm tra, theo dõi nhật ký tên miền trên NextDNS. Ở phần sau cũng là phần cuối của series này, mình sẽ hướng dẫn các bạn cấu hình một số chức năng trong cài đặt nhé.
