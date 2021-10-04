---
layout: post
title:  "Tìm hiểu và kích hoạt các chức năng bảo mật trên NextDNS"
permalink: /series/tim-hieu-va-kich-hoat-cac-chuc-nang-bao-mat-tren-nextdns/
author: tuanducdesign
categories: [ Series ]
tags: [bảo mật, NextDNS, tlds, Google, dgas, nrds]
image: static/media/tim-hieu-va-kich-hoat-cac-chuc-nang-bao-mat-tren-nextdns.png
webp: static/media/tim-hieu-va-kich-hoat-cac-chuc-nang-bao-mat-tren-nextdns.webp
description: "Trong bài viết kế tiếp này chúng ta cùng tìm hiểu và kích hoạt các chức năng bảo mật trên NextDNS."
toc: true
---

Ở bài viết trước mình đã hướng dẫn các bạn cấu hình và sử dụng NextDNS trên Modem, ở bài viết kế tiếp này chúng ta cùng tìm hiểu và kích hoạt các chức năng bảo mật trên NextDNS nhé.

Lưu ý: Đây là danh sách hướng dẫn sử dụng NextDNS gồm 10 phần xem danh sách series ở đây: {% include internal-link.html href="series-nextdns/" title="Series hướng dẫn sử dụng NextDNS" %}

{% include image.html src="tim-hieu-va-kich-hoat-cac-chuc-nang-bao-mat-tren-nextdns.png" webp="tim-hieu-va-kich-hoat-cac-chuc-nang-bao-mat-tren-nextdns.webp" type="png" alt="Tìm hiểu và kích hoạt các chức năng bảo mật trên NextDNS" %}

## Các chức năng bảo mật trên NextDNS

Một điểm 10 cho dịch vụ này là ở chức năng bảo mật:

Các chức năng cần thiết đã được NextDNS kích hoạt sẵn rồi, nên bạn chỉ cần tắt hoặc bật một chức năng nào đó khi cần thôi.

### Threat Intelligence Feeds

{% include image.html src="threat-intelligence-feeds.png" webp="threat-intelligence-feeds.webp" type="png" alt="Threat Intelligence Feeds" %}

Nguồn cấp dữ liệu thông minh về mối đe dọa, Chặn các miền được xác định là phân phối phần mềm độc hại, khởi chạy các cuộc tấn công lừa đảo và lưu trữ các máy chủ điều khiển và kiểm soát bằng cách sử dụng hỗn hợp các nguồn cấp thông tin tình báo về mối đe dọa uy tín nhất - tất cả đều được cập nhật theo thời gian thực. Ngoài ra nó còn bảo vệ bạn khỏi lừa đảo COVID-19.

### Google Safe Browsing

{% include image.html src="google-safe-browsing.png" webp="google-safe-browsing.webp" type="png" alt="Google Safe Browsing" %}

Chặn phần mềm độc hại và miền lừa đảo bằng cách sử dụng Chế độ duyệt web an toàn của Google - công nghệ kiểm tra hàng tỷ URL mỗi ngày để tìm kiếm các trang web không an toàn. Không giống như phiên bản được nhúng trong một số trình duyệt, phiên bản này không liên kết địa chỉ IP công cộng của bạn với các mối đe dọa và không cho phép bỏ qua khối.

### Cryptojacking Protection

{% include image.html src="cryptojacking-protection.png" webp="cryptojacking-protection.webp" type="png" alt="Cryptojacking Protection" %}

Ngăn chặn việc sử dụng trái phép các thiết bị của bạn để khai thác tiền điện tử.

### DNS Rebinding Protection

{% include image.html src="dns-debinding-protection.png" webp="dns-debinding-protection.webp" type="png" alt="DNS Rebinding Protection" %}

Ngăn những kẻ tấn công chiếm quyền kiểm soát các thiết bị cục bộ của bạn thông qua Internet bằng cách tự động chặn các phản hồi DNS có chứa địa chỉ IP riêng.

### IDN Homograph Attacks Protection

{% include image.html src="idn-homograph-attacks-protection.png" webp="idn-homograph-attacks-protection.webp" type="png" alt="IDN Homograph Attacks Protection" %}

Chặn các miền mạo danh các miền khác bằng cách lạm dụng bộ ký tự lớn có sẵn với sự xuất hiện của Tên miền được quốc tế hóa (IDN) - ví dụ: thay thế chữ cái Latin "e" bằng chữ cái Cyrillic "е".

### Typosquatting Protection

{% include image.html src="typosquatting-protection.png" webp="typosquatting-protection.webp" type="png" alt="IDN Homograph Attacks Protection" %}

Chặn các miền được đăng ký bởi các tác nhân độc hại nhắm mục tiêu người dùng nhập sai địa chỉ trang web vào trình duyệt của họ - ví dụ: gooogle.com thay vì google.com.

### Domain Generation Algorithms (DGAs) Protection

{% include image.html src="domain-generation-algorithms-dags-protection.png" webp="domain-generation-algorithms-dags-protection.webp" type="png" alt="Domain Generation Algorithms (DGAs) Protection" %}

Chặn các miền được tạo bởi Thuật toán tạo miền (DGAs) được thấy trong các họ phần mềm độc hại khác nhau có thể được sử dụng làm điểm hẹn với các máy chủ điều khiển và chỉ huy của chúng.

### Block Newly Registered Domains (NRDs)

{% include image.html src="block-newly-registered-domain-nrds.png" webp="block-newly-registered-domain-nrds.webp" type="png" alt="Block Newly Registered Domains (NRDs)" %}

Chặn các miền đã đăng ký cách đây chưa đầy 30 ngày. Những miền đó được biết là được các tác nhân đe dọa ưa thích để khởi động các chiến dịch độc hại.

### Block Parked Domains

{% include image.html src="block-parked-domains.png" webp="block-parked-domains.webp" type="png" alt="Block Parked Domains" %}

Tên miền trỏ hướng là các trang web một trang thường chứa đầy quảng cáo và không có bất kỳ giá trị nào. Việc kiếm tiền từ miền trỏ hướng đôi khi có thể bị lẫn với các hoạt động đáng ngờ và nội dung độc hại.

### Block Top-Level Domains (TLDs)

{% include image.html src="block-top-level-domains-tlds.png" webp="block-top-level-domains-tlds.webp" type="png" alt="Block Top-Level Domains (TLDs)" %}

Chặn tất cả các miền và miền phụ thuộc TLDs cụ thể, bạn bấm vào ADD A TLD để tìm hiểu thêm.

{% include image.html src="add-a-tld-from-nextdns.png" webp="add-a-tld-from-nextdns.webp" type="png" alt="Add a TLD from NextDNS" %}

### Block Child Sexual Abuse Material

{% include image.html src="block-child-sexual-abuse-material.png" webp="block-child-sexual-abuse-material.webp" type="png" alt="Block Child Sexual Abuse Material" %}

Chức năng mình rất thích đó là nó chặn được các trang web 18+, chặn các miền lưu trữ tài liệu lạm dụng tình dục trẻ em với sự trợ giúp của Dự án Arachnid, do Trung tâm Bảo vệ Trẻ em Canada điều hành. Không có thông tin nào được truyền trở lại Dự án Arachnid khi miền bị chặn.

## Kích hoạt các chức năng bảo mật

Với cá nhân mình thì bật tất cả lên, vì nhu cầu của mình chủ yếu vẫn là bảo mật.

## Kết

Trong bài viết này chúng ta cũng đã biết cách tắt và bật các chức năng nếu như không cần thiết rồi, trong bài viết tiếp theo mình sẽ hướng dẫn các bạn cách cấu hình các chức năng riêng tư. Để tăng thêm mức độ an toàn khi sử dụng mạng.
