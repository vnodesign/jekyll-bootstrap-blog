---
layout: post
title:  "Cấu hình chức năng cho phép tên miền trên NextDNS"
permalink: /series/cau-hinh-chuc-nang-cho-phep-ten-mien-tren-nextdns/
author: tuanducdesign
categories: [ Series ]
tags: [Allowlist, Analytics, NextDNS]
image: static/media/cau-hinh-chuc-nang-cho-phep-ten-mien-tren-nextdns.png
webp: static/media/cau-hinh-chuc-nang-cho-phep-ten-mien-tren-nextdns.webp
description: "NextDNS ngày càng trở nên phổ biến hơn đặc biết là hỗ trợ khách hàng cho phép và không cho phép một tên miền bất kì được hoạt động và không được hoạt động."
toc: true
---

NextDNS ngày càng trở nên phổ biến hơn đặc biết là hỗ trợ khách hàng cho phép và không cho phép một tên miền bất kì được hoạt động và không được hoạt động.

Lưu ý: Đây là danh sách hướng dẫn sử dụng NextDNS gồm 10 phần xem danh sách series ở đây: {% include internal-link.html href="series-nextdns/" title="Series hướng dẫn sử dụng NextDNS" %}

## Cấu hình cho phép tên miền

Nhập tên miền mà bạn muốn cho phép vào khung Allowlist như hình dưới đây, sau đó bấm phím Enter để tạo.

{% include image.html src="cau-hinh-chuc-nang-cho-phep-ten-mien-tren-nextdns.png" webp="cau-hinh-chuc-nang-cho-phep-ten-mien-tren-nextdns.webp" type="png" alt="Cấu hình chức năng cho phép tên miền trên NextDNS" %}

Bạn phải thật cẩn thận khi sử dụng chức năng này vì nó sẽ tự động cho phép tất cả các miền phụ của nó. Cho phép được ưu tiên hơn mọi thứ khác, bao gồm cả các tính năng bảo mật.

Dưới đây là một số danh sách hữu ích bạn nên bỏ chặn, để tránh ảnh hướng đến công việc của mình. Cái này mà bị block là coi như không vào được trang đó luôn

- Google Analytics (google-analytics.com)
- Google Tag Manager (googletagmanager.com)
- Google Optimize (googleoptimize.com)

## Kết

Bài viết này tuy ngắn, nhưng ít ra cũng giúp cho bạn được cách cho phép một tên miền bất kì, hẹn gặp lại bạn ở các Series tới.
