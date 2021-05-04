---
layout: post
title:  "Tại sao theme trên WordPress không được tối ưu sẵn"
author: tuanducdesign
categories: [ Website ]
tags: [WordPress, Theme, Tối ưu, PageSpeed]
image: static/media/tai-sao-theme-tren-wordpress-khong-duoc-toi-uu-san.jpg
description: "Có thể nói mã nguồn WordPress giờ quá phổ biến với người dùng từ các dự án từ bé đến lớn như bán hàng, blog, dịch vụ, công ty."
---

Có thể nói mã nguồn WordPress giờ quá phổ biến với người dùng từ các dự án từ bé đến lớn như bán hàng, blog, dịch vụ, công ty.

{% include image.html src="tai-sao-theme-tren-wordpress-khong-duoc-toi-uu-san.jpg" alt="Tại sao theme trên WordPress không được tối ưu sẵn" %}

## Code chuẩn

Khi design ra một giao diện cho WordPress các lập trình viên đều biết sắp xếp sao cho hợp lý hết cả rồi. Ví dụ như thành phần nào cần bật thành phần nào cần tắt dựa trên các options có sẵn trong giao diện.

## Nhiều CSS và Javascript

Đa số các theme cao cấp hiện nay thì rất nhiều CSS và Javascript đặc biết là mấy theme cao cấp kèm theo các plugin build giao diện

Có thể kể đến như :

- Plugins Elementor (Thằng này cực kỳ nặng vì nó chính là thủ phạm gây ra dom)
- Plugins WooCommerce (Thằng này chuyên về bán hàng nhưng nó có một điểm yếu là cực nặng nếu dùng với theme cao cấp vì mấy theme cao cấp hiện này đều có css cho thằng WooCommerce này)

## Cách đơn giản nhất để tối ưu

Mình có hai cách đơn giản nhất để giúp bạn tối ưu website của bạn khi sử dụng mã nguồn WordPress:

- Sử dụng Plugins {% include external-link.html href="https://wordpress.org/plugins/shins-pageload-magic/" title="An efficient lazy loader (defer.js)" %} của tác giả Mai Nhựt Tân và Plugins {% include external-link.html href="https://wp-rocket.me/" title="WP-Rocket" %} của nhóm phát triển {% include external-link.html href="https://wp-media.me/" title="WP-Media" %}
- Sử dụng VPS Nginx kèm với {% include external-link.html href="https://www.modpagespeed.com/doc/" title="Module Pagespeed" %} kết hợp với Plugins {% include external-link.html href="https://wp-rocket.me/" title="WP-Rocket" %} và {% include external-link.html href="https://github.com/SatelliteWP/rocket-nginx" title="Rocket Nginx" %}

Chúc các bạn thành công.
