---
layout: post
title:  "Tìm hiểu và kích hoạt các chức năng bảo mật trên NextDNS"
permalink: /series/tim-hieu-va-kich-hoat-cac-chuc-nang-bao-mat-tren-nextdns.html
author: tuanducdesign
categories: [ Series ]
tags: [bảo mật, NextDNS, tlds, Google, dgas, nrds]
image: static/media/tim-hieu-va-kich-hoat-cac-chuc-nang-bao-mat-tren-nextdns.png
description: "Ở bài viết trước mình đã hướng dẫn các bạn cấu hình và sử dụng NextDNS trên Modem, ở bài viết kế tiếp này chúng ta cùng tìm hiểu và kích hoạt các chức năng bảo mật trên NextDNS nhé."
---

Lưu ý: Đây là danh sách hướng dẫn sử dụng NextDNS gồm 9 phần xem danh sách series ở đây: [Series hướng dẫn sử dụng NextDNS](https://tuanducdesign.com/series-nextdns.html)

## Nội dung bài viết

- [Nội dung bài viết](#nội-dung-bài-viết)
- [Các chức năng bảo mật trên NextDNS](#các-chức-năng-bảo-mật-trên-nextdns)
- [Threat Intelligence Feeds](#threat-intelligence-feeds)
- [Google Safe Browsing](#google-safe-browsing)
- [Cryptojacking Protection](#cryptojacking-protection)
- [DNS Rebinding Protection](#dns-debinding-protection)
- [IDN Homograph Attacks Protection](#idn-homograph-attacks-protection)
- [Typosquatting Protection](#typosquatting-protection)
- [Domain Generation Algorithms (DGAs) Protection](#domain-generation-algorithms-dgas-protection)
- [Block Newly Registered Domains (NRDs)](#block-newly-registered-domains-nrds)
- [Block Parked Domains](#block-parked-domains)
- [Block Top-Level Domains (TLDs)](#block-top--level-domains-tlds)
- [Block Child Sexual Abuse Material](#block-child-sexual-abuse-material)
- [Kích hoạt các chức năng bảo mật](#kích-hoạt-các-chức-năng-bảo-mật)
- [Kết](#kết)

Ở bài viết trước mình đã hướng dẫn các bạn cấu hình và sử dụng NextDNS trên Modem, ở bài viết kế tiếp này chúng ta cùng tìm hiểu và kích hoạt các chức năng bảo mật trên NextDNS nhé.

![Tìm hiểu và kích hoạt các chức năng bảo mật trên NextDNS]({{ site.url }}/static/media/tim-hieu-va-kich-hoat-cac-chuc-nang-bao-mat-tren-nextdns.png)

## Các chức năng bảo mật trên NextDNS

Một điểm 10 cho dịch vụ này là ở chức năng bảo mật:

Các chức năng cần thiết đã được NextDNS kích hoạt sẵn rồi, nên bạn chỉ cần tắt hoặc bật một chức năng nào đó khi cần thôi.

### Threat Intelligence Feeds

![Threat Intelligence Feeds]({{ site.url }}/static/media/threat-intelligence-feeds.png)

Nguồn cấp dữ liệu thông minh về mối đe dọa, Chặn các miền được xác định là phân phối phần mềm độc hại, khởi chạy các cuộc tấn công lừa đảo và lưu trữ các máy chủ điều khiển và kiểm soát bằng cách sử dụng hỗn hợp các nguồn cấp thông tin tình báo về mối đe dọa uy tín nhất - tất cả đều được cập nhật theo thời gian thực. Ngoài ra nó còn bảo vệ bạn khỏi lừa đảo COVID-19.

### Google Safe Browsing

![Google Safe Browsing]({{ site.url }}/static/media/google-safe-browsing.png)

Chặn phần mềm độc hại và miền lừa đảo bằng cách sử dụng Chế độ duyệt web an toàn của Google - công nghệ kiểm tra hàng tỷ URL mỗi ngày để tìm kiếm các trang web không an toàn. Không giống như phiên bản được nhúng trong một số trình duyệt, phiên bản này không liên kết địa chỉ IP công cộng của bạn với các mối đe dọa và không cho phép bỏ qua khối.

### Cryptojacking Protection

![Cryptojacking Protection]({{ site.url }}/static/media/cryptojacking-protection.png)

Ngăn chặn việc sử dụng trái phép các thiết bị của bạn để khai thác tiền điện tử.

### DNS Rebinding Protection

![DNS Rebinding Protection]({{ site.url }}/static/media/dns-debinding-protection.png)

Ngăn những kẻ tấn công chiếm quyền kiểm soát các thiết bị cục bộ của bạn thông qua Internet bằng cách tự động chặn các phản hồi DNS có chứa địa chỉ IP riêng.

### IDN Homograph Attacks Protection

![IDN Homograph Attacks Protection]({{ site.url }}/static/media/idn-homograph-attacks-protection.png)

Chặn các miền mạo danh các miền khác bằng cách lạm dụng bộ ký tự lớn có sẵn với sự xuất hiện của Tên miền được quốc tế hóa (IDN) - ví dụ: thay thế chữ cái Latin "e" bằng chữ cái Cyrillic "е".

### Typosquatting Protection

![Typosquatting Protection]({{ site.url }}/static/media/typosquatting-protection.png)

Chặn các miền được đăng ký bởi các tác nhân độc hại nhắm mục tiêu người dùng nhập sai địa chỉ trang web vào trình duyệt của họ - ví dụ: gooogle.com thay vì google.com.

### Domain Generation Algorithms (DGAs) Protection

![Domain Generation Algorithms (DGAs) Protection]({{ site.url }}/static/media/domain-generation-algorithms-dags-protection.png)

Chặn các miền được tạo bởi Thuật toán tạo miền (DGAs) được thấy trong các họ phần mềm độc hại khác nhau có thể được sử dụng làm điểm hẹn với các máy chủ điều khiển và chỉ huy của chúng.

### Block Newly Registered Domains (NRDs)

![Block Newly Registered Domains (NRDs)]({{ site.url }}/static/media/block-newly-registered-domain-nrds.png)

Chặn các miền đã đăng ký cách đây chưa đầy 30 ngày. Những miền đó được biết là được các tác nhân đe dọa ưa thích để khởi động các chiến dịch độc hại.

### Block Parked Domains

![Block Parked Domains]({{ site.url }}/static/media/block-parked-domains.png)

Tên miền trỏ hướng là các trang web một trang thường chứa đầy quảng cáo và không có bất kỳ giá trị nào. Việc kiếm tiền từ miền trỏ hướng đôi khi có thể bị lẫn với các hoạt động đáng ngờ và nội dung độc hại.

### Block Top-Level Domains (TLDs)

![Block Top-Level Domains (TLDs)]({{ site.url }}/static/media/block-top-level-domains-tlds.png)

Chặn tất cả các miền và miền phụ thuộc TLDs cụ thể, bạn bấm vào ADD A TLD để tìm hiểu thêm.

![Add a TLD from NextDNS]({{ site.url }}/static/media/add-a-tld-from-nextdns.png)

### Block Child Sexual Abuse Material

![Block Child Sexual Abuse Material]({{ site.url }}/static/media/block-child-sexual-abuse-material.png)

Chức năng mình rất thích đó là nó chặn được các trang web 18+, chặn các miền lưu trữ tài liệu lạm dụng tình dục trẻ em với sự trợ giúp của Dự án Arachnid, do Trung tâm Bảo vệ Trẻ em Canada điều hành. Không có thông tin nào được truyền trở lại Dự án Arachnid khi miền bị chặn.

## Kích hoạt các chức năng bảo mật

Với cá nhân mình thì bật tất cả lên, vì nhu cầu của mình chủ yếu vẫn là bảo mật.

## Kết

Trong bài viết này chúng ta cũng đã biết cách tắt và bật các chức năng nếu như không cần thiết rồi, trong bài viết tiếp theo mình sẽ hướng dẫn các bạn cách cấu hình các chức năng riêng tư. Để tăng thêm mức độ an toàn khi sử dụng mạng.
