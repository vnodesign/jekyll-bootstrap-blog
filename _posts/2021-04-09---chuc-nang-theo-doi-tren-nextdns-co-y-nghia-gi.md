---
layout: post
title:  "Chức năng theo dõi trên NextDNS có ý nghĩa gì"
permalink: /series/chuc-nang-theo-doi-tren-nextdns-co-y-nghia-gi.html
author: tuanducdesign
categories: [ Series ]
tags: [Queries, Resolved Domains, Blocked Domains, Blocked Reasons, Devices, IPs, Root Domains, GAFAM Dominance, Encrypted DNS, Traffic Destination, NextDNS]
image: static/media/chuc-nang-theo-doi-tren-nextdns-co-y-nghia-gi.png
description: "Với chức năng theo dõi trên NextDNS, thì bạn có thể theo dõi được các hoạt động đang diễn ra trên các trình chặn quảng cáo mà bạn đã thêm."
---

Với chức năng theo dõi trên NextDNS, thì bạn có thể theo dõi được các hoạt động đang diễn ra trên các trình chặn quảng cáo mà bạn đã thêm.

Lưu ý: Đây là danh sách hướng dẫn sử dụng NextDNS gồm 9 phần xem danh sách series ở đây: {% include internal-link.html href="series-nextdns.html" title="Series hướng dẫn sử dụng NextDNS" %}

## Các chức năng theo dõi trên NextDNS

{% include image.html src="chuc-nang-theo-doi-tren-nextdns-co-y-nghia-gi.png" alt="Chức năng theo dõi trên NextDNS có ý nghĩa gì" %}

Tại đây thì bạn có một số chức năng như:

- All Devices (theo dõi theo thiết bị của bạn.)
- Last 30 days (theo dõi từ ngày đến tháng.)
- Queries (theo dõi số truy vấn đang có.)
- Blocked queries (theo dõi số truy vấn đã chặn.)
- Of blocked queries (đã chặn được bao nhiêu truy vấn được tính ra dạng %.)

### Queries

{% include image.html src="queries.png" alt="Queries" %}

Biểu đồ giúp kiểm tra số truy vấn theo ngày.

### Resolved Domains

{% include image.html src="resolved-domains.png" alt="Resolved Domains" %}

Số miền được loại ra khỏi trình chặn quảng cáo, đây là các miền đã được giải quyết mà không bị chặn bởi bất kỳ cài đặt nào hoặc do chúng được cho phép theo cách thủ công.

### Blocked Domains

![Blocked Domains]({{ site.url }}/static/media/blocked-domains.png)

{% include image.html src="blocked-domains.png" alt="Blocked Domains" %}

Số miền được chặn từ trình chặn quảng cáo, đây là các miền bị chặn bởi cài đặt Bảo mật, Quyền riêng tư và / hoặc Kiểm soát của phụ huynh hoặc do chúng bị từ chối theo cách thủ công.

### Blocked Reasons

{% include image.html src="blocked-reasons.png" alt="Blocked Reasons" %}

Các cài đặt Bảo mật, Quyền riêng tư và / hoặc Kiểm soát của phụ huynh đã chặn hầu hết các truy vấn từ trình chặn quảng cáo này.

### Devices

{% include image.html src="devices.png" alt="Devices" %}

Danh sách được chặn theo thiết bị, đây là danh sách các thiết bị thực hiện các truy vấn.

### IPs

{% include image.html src="ips.png" alt="Ips" %}

Danh sách địa chỉ IP thực hiện các truy vấn.

### Root Domains

{% include image.html src="root-domains.png" alt="Root Domains" %}

Đây là danh sách tổng hợp tất cả các truy vấn được thực hiện cho các miền gốc và tất cả các miền phụ của chúng.

### GAFAM Dominance

{% include image.html src="gafam-dominance.png" alt="GAFAM Dominance" %}

"GAFAM" (Google, Amazon, Facebook, Apple và Microsoft) là 5 công ty Internet thống trị sở hữu nhiều dịch vụ phổ biến, thường hoạt động dưới một tên khác, ví dụ: WhatsApp và Instagram cho Facebook. Đây là danh sách các truy vấn theo từng website.

### Encrypted DNS

{% include image.html src="encrypted-dns.png" alt="Encrypted DNS" %}

Phần trăm truy vấn được thực hiện bằng cách sử dụng phương tiện truyền tải được mã hóa (DNS-over-HTTPS, DNS-over-TLS hoặc các ứng dụng chính thức từ NextDNS).

### DNSSEC

{% include image.html src="dnssec.png" alt="DNSSEC" %}

Phần trăm truy vấn được xác thực bằng DNSSEC.

### Traffic Destination

{% include image.html src="traffic-destination.png" alt="Traffic Destination" %}

Đây là bản đồ danh sách các quốc gia có lưu lượng truy cập Internet của bạn.

## Kết

Bài viết này tuy ngắn, nhưng ít ra cũng giúp cho bạn được cách cho phép một tên miền bất kì, hẹn gặp lại bạn ở các Series tới.
