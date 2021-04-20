---
layout: post
title:  "Cách Tối Ưu Website Khi Sử Dụng CSS và Javascript"
author: tuanducdesign
categories: [ Website ]
tags: [CSS, Javascript, PageSpeed]
image: static/media/cach-toi-uu-website-khi-su-dung-css-va-javascript.jpg
description: "Khi lập trình một trang web chắc hẳn bạn đã từng nghe đến thuật toán tối ưu CSS và Javascript rồi chứ."
---

## Nội dung bài viết

- [Nội dung bài viết](#nội-dung-bài-viết)
- [Tại sao phải tối ưu CSS và Javascript](#tại-sao-phải-tối-ưu-css-và-javascript)
- [Bắt đầu code lại CSS và Javascript](#bắt-đầu-code-lại-css-và-javascript)
- [Đặt tên các file CSS và Javascript cho dễ phân biệt](#đặt-tên-các-file-css-và-javascript-cho-dễ-phân-biệt)
- [Chèn vào mã nguồn](#chèn-vào-mã-nguồn)
- [Xem thành lại thành quả mình vừa làm](#xem-thành-lại-thành-quả-mình-vừa-làm)

Khi lập trình một trang web chắc hẳn bạn đã từng nghe đến thuật toán tối ưu CSS và Javascript rồi chứ? Bài viết tiếp theo của ngày hôm nay mình sẽ hướng dẫn các bạn tối ưu CSS và Javascript trên từng trang.

![Cách Tối Ưu Website Khi Sử Dụng CSS và Javascript]({{ site.url }}/static/media/cach-toi-uu-website-khi-su-dung-css-va-javascript.jpg)

## Tại sao phải tối ưu CSS và Javascript

Theo khảo sát từ phía người dùng. Đa phần người dùng khi truy cập một website bắt buộc website đó phải đầy đủ các tiêu chí như :

- Tải nhanh
- Nội dung dễ nhìn
- Bố cục gọn gàng
- Ít quảng cáo,flash và popup

Bên cạnh đó đối với một website muốn nhanh không phải cứ chọn host khỏe vps khỏe là sẽ nhanh được, nó phụ thuộc vào cấu trúc mã nguồn của website đó.

## Bắt đầu code lại CSS và Javascript

Trước khi bắt đầu code lại CSS và Javascript bạn phải xác định xem trang chủ nên dùng CSS và Javascript như nào cho phù hợp.

Mình sẽ lấy ví dụ ra trang chính :

- Trang chủ của bạn menu là responsive thì tất nhiên phải cần có Jquery và CSS cho responsive đó
- Tương tự với menu có Jquery thì với slider cũng vậy
- Với các thông tin khác như tin tức hay sản phẩm nếu bạn có tích hợp popup xem trước nội dung thì bắt buộc vẫn phải cần tới Jquery

CSS và Javascript bạn code càng đơn giản càng tốt, vì nguyên mỗi cái trang chủ một cái file CSS và Javascript đâu cần gì nhiều đâu.

Sau khi đã xác định đầy đủ được các yêu cầu phía trên thì chúng ta bắt đầu vào vấn đề chính.

Mình lấy ví dụ ra một trang bán hàng sử dụng PHP thuần.

Thành phần đầu tiên trong CSS của mình là owl carousel.

```html
<html>
    <head>
        <title>Demo</title>
        <link rel="stylesheet" href="https://lytshop.net/static/owl-carousel/owl.carousel.2.3.4.min.css" />
    </head>
    <body>
    ...
    </body>
</html>
```

Thành phần tiếp theo là css chính cho giao diện.

```html
<html>
    <head>
        <title>Demo</title>
        <link rel="stylesheet" href="https://lytshop.net/static/css/style.css" />
    </head>
    <body>
    ...
    </body>
</html>
```

Cuối cùng là css của home.

```html
<html>
    <head>
        <title>Demo</title>
        <link rel="stylesheet" href="https://lytshop.net/static/css/index.css" />
    </head>
    <body>
    ...
    </body>
</html>
```

Code JS cho phần Jquery

```html
<html>
    <head>
        <title>Demo</title>
    </head>
    <body>
    ...
    <script src="https://lytshop.net/static/js/jquery.min.1.8.3.js"></script>
    </body>
</html>
```

Các thành phần khác của Jquery

```html
<html>
    <head>
        <title>Demo</title>
    </head>
    <body>
    ...
    <script src="https://lytshop.net/static/js/plugins.js"></script>
    </body>
</html>
```

Các thành phần khác

```html
<html>
    <head>
        <title>Demo</title>
    </head>
    <body>
    ...
    <script src="https://lytshop.net/static/js/global.js"></script>
    </body>
</html>
```

```html
<html>
    <head>
        <title>Demo</title>
    </head>
    <body>
    ...
    <script src="https://lytshop.net/static/owl-carousel/owl.carousel.2.3.4.min.js"></script>
    </body>
</html>
```

```html
<html>
    <head>
        <title>Demo</title>
    </head>
    <body>
    ...
    <script src="https://lytshop.net/static/js/init.js"></script>
    </body>
</html>
```

## Đặt tên các file CSS và Javascript cho dễ phân biệt

Với các đoạn css mình sẽ đặt như sau :

- Đoạn css đầu tiên mình đặt là owl.carousel.min.css
- Đoạn css thứ hai là đoạn css chính nên mình đặt là style.min.css
- Đoạn css cuối cùng là đoạn css của home nên mình đặt là home.min.css

Với các đoạn Javascript thì mình sẽ phân loại ra và đặt tên bạn xem qua ví dụ dưới đây để hiểu :

- Đoạn Javascript đầu tiên là Jquery, jQuery JSON, jQuery lightbox, jQuery Color Animations, Tipsy, jQuery Star Rating, Cloud Zoom, Countdown, Tabiy, Jquery owl carousel với jQuery Cookie và các đoạn Jquery còn lại, mình đặt riêng nó ra hai file rồi đặt tên cho nó là jquery.min.1.8.3.js và plugins.js

Sau khi đã đặt xong tên bạn tiến hành save lại để chuyển qua bước kế tiếp.

## Chèn vào mã nguồn

Mẫu code mình biên soạn như sau cho các bạn dễ hiểu :

```html
<html>
    <head>
        <title>Demo</title>
        <style>
        /* dán toàn bộ đoạn css dành cho trang chủ vào đây */
        </style>
        <link rel="preload" href="https://lytshop.net/static/js/jquery.min.1.8.3.js" as="script"/>
        <link rel="preload" href="https://lytshop.net/static/js/plugins.js" as="script"/>
        <link rel="preload" href="https://lytshop.net/static/js/global.js" as="script"/>
        <link rel="preload" href="https://lytshop.net/static/owl-carousel/owl.carousel.2.3.4.min.js" as="script"/>
    </head>
    <body>
    ...
    <script src="https://lytshop.net/static/js/jquery.min.1.8.3.js"></script>
    <script src="https://lytshop.net/static/js/plugins.js" defer></script>
    <script src="https://lytshop.net/static/js/global.js" defer></script>
    <script src="https://lytshop.net/static/owl-carousel/owl.carousel.2.3.4.min.js" defer></script>
    <script src="https://lytshop.net/static/js/init.js" defer></script>
    </body>
</html> 
```

Nếu dự án của bạn là PHP thì bạn áp dụng kiến thức về PHP của mình để insert css qua php rồi chèn qua html.

```php
<html>
    <head>
        <title>Demo</title>
        <style>
        <?php
        $owl_carousel = file_get_contents('css/owl.carousel.min.css'); // gọi ra hàm $owl_carousel
        echo $owl_carousel; // sau đó trả ra giá trị nội dung của file css
        ?>
        <?php
        $main_style = file_get_contents('css/style.min.css'); // gọi ra hàm $main_style
        echo $main_style; // sau đó trả ra giá trị nội dung của file css
        ?>
        <?php
        $home_style = file_get_contents('css/home.min.css'); // gọi ra hàm $home_style
        echo $home_style; // sau đó trả ra giá trị nội dung của file css
        ?>
        </style>
        <link rel="preload" href="https://lytshop.net/static/js/jquery.min.1.8.3.js" as="script"/>
        <link rel="preload" href="https://lytshop.net/static/js/plugins.js" as="script"/>
        <link rel="preload" href="https://lytshop.net/static/js/global.js" as="script"/>
        <link rel="preload" href="https://lytshop.net/static/owl-carousel/owl.carousel.2.3.4.min.js" as="script"/>
    </head>
    <body>
    ...
    <script src="https://lytshop.net/static/js/jquery.min.1.8.3.js"></script>
    <script src="https://lytshop.net/static/js/plugins.js" defer></script>
    <script src="https://lytshop.net/static/js/global.js" defer></script>
    <script src="https://lytshop.net/static/owl-carousel/owl.carousel.2.3.4.min.js" defer></script>
    <script src="https://lytshop.net/static/js/init.js" defer></script>
    </body>
</html>
```

Bạn tùy chỉnh lại sao cho phù hợp với cấu trúc thư mục của file css, sở dĩ mình làm kiểu này là để css load thẳng ra ngoài màn hình để tránh tình trạng dính cache file css nó không load được nội dung mới

## Xem thành lại thành quả mình vừa làm

Bây giờ bạn quay ra trang chủ rồi kiểm tra xem nhanh hơn không nhé.

Xem demo [LYTSHOP](https://lytshop.net)

Chúc các bạn thành công.
