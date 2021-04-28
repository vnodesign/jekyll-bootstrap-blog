---
layout: post
title:  "Hướng Dẫn Sử Dụng Thư Viện DeferJS của Mai Nhựt Tân"
author: tuanducdesign
categories: [ Library ]
tags: [Preload, Font, Script, Style, Lazyload]
image: static/media/user-guide-for-deferjs-library-by-mai-nhut-tan.jpg
description: "Đây là một thư viện hiệu suất nguyên bản siêu nhỏ để tải JS, CSS, hình ảnh, iframe ... Trì hoãn hầu hết mọi thứ, dễ dàng tăng tốc trang web của bạn."
featured: true
hidden: true
rating: 5
---

Tình cờ mình tìm được một thư viện khá hay của bác Mai Nhựt Tân trên GitHub. Trong bài viết ngày hôm nay mình sẽ hướng dẫn các bạn sử dụng thư viện này trên Website của bạn.

{% include image.html src="user-guide-for-deferjs-library-by-mai-nhut-tan.jpg" alt="Hướng Dẫn Sử Dụng Thư Viện DeferJS của Mai Nhựt Tân" %}

Trang chủ thư viện DeferJS trên kho GitHub của Mai Nhựt Tân: [https://github.com/shinsenter/defer.js](https://github.com/shinsenter/defer.js)

## Bắt đầu

Bạn chỉ cần tải thư viện này một lần trên một trang, chèn ngay sau thẻ mở `<head>` như ví dụ dưới đây:

```html
<html>
<head>
  <title>Demo</title>
  <!-- Put defer.min.js here -->
  <script src="https://cdn.jsdelivr.net/npm/@shinsenter/defer.js@2.3.0/dist/defer.min.js"></script>
  <!-- To support older browsers such as Internet Explorer 9 -->
  <!-- You may want to put IntersectionObserver polyfill right after defer.min.js tag -->
  <script>'IntersectionObserver'in window||document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');</script>
</head>
<body>
  ...
</body>
</html>
```

Bởi vì [phiên bản rút gọn của defer.js](https://github.com/shinsenter/defer.js/blob/master/defer_plus.min.js) là siêu nhỏ, bạn có thể đưa nội dung của nó trực tiếp vào tài liệu HTML và tránh yêu cầu mạng.

```html
<html>
<head>
  <title>Demo</title>
  <!-- Put defer_plus.min.js here -->
  <script src="https://cdn.jsdelivr.net/npm/@shinsenter/defer.js@2.3.0/dist/defer_plus.min.js"></script>
  <!-- To support older browsers such as Internet Explorer 9 -->
  <!-- You may want to put IntersectionObserver polyfill right after defer.min.js tag -->
  <script>'IntersectionObserver'in window||document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');</script>
</head>
<body>
  ...
</body>
</html>
```

## Chuyển type="text/javascript" sang type="deferjs"

Trước khi chuyển:

```html
<script type="text/javascript">/* my inline script */</script>
<script type="text/javascript" src="path/to/my/script.js"></script>
```

Sau khi chuyển:

```html
<script type="deferjs">/* my inline script */</script>
<script type="deferjs" src="path/to/my/script.js"></script>
```

Bạn có thể sử dụng Công cụ dành cho nhà phát triển của trình duyệt (nhấn phím F12) để xem các yêu cầu được gửi như thế nào.

Bạn có thể xem demo có sẵn của thư viện này tại đây: [phiên bản demo trên WordPress](https://appseeds.net/defer.js/wp/optimized)

Rồi từ từ cuộn xuống để xem hình ảnh được tải như thế nào.

Trình duyệt của bạn đã tải nó sau 3 giây kể từ khi trang của bạn kích hoạt sự kiện 'tải'. Có một tiện ích Facebook ở dưới cùng. Đây là cách tải chúng mà không chặn tốc độ tải trang:

```html
<script type="text/javascript">
window.fbAsyncInit = function() {
          FB.init({
            xfbml      : true,
            version    : 'v9.0'
          });
        };
        if (/^http/.test(window.location.protocol)) {
        deferscript('https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js', 'customerchat', 5);
        }
</script>
```

Bạn có thể tải lại trang và tự tìm hiểu.

Kết hợp với các chức năng Defer khác. Trì hoãn tải thư viện highlightjs trong 1000ms. Sau đó, khi bạn cuộn đến bất kỳ thẻ mã nào, hãy bật đánh dấu mã cho thẻ đó

```html
<script type="text/javascript">
var base = 'https://cdn.jsdelivr.net/npm/highlightjs@9.12.0';
Defer.css(base + '/styles/rainbow.css', 'hljs-css', 1000);
Defer.js(base + '/highlight.pack.min.js', 'hljs-js', 1000, function () {
    Defer.dom('pre code', 0, 'ide-loaded', function (block) {
        hljs.highlightBlock(block);
    });
});
</script>
```

## Tiến hành lazyload ảnh và video

Cách sử dụng cơ bản: Lazyload tất cả các thẻ `<img>` có class là `lazy`

```html
<script>Defer.dom('img.lazy');</script>
<!-- Here may be a very long content -->
<img class="lazy" alt="Photo 1" data-src="https://picsum.photos/200/300?random=1" width="200" height="300" />
<img class="lazy" alt="Photo 2" data-src="https://picsum.photos/200/300?random=2" width="200" height="300" />
<img class="lazy" alt="Photo 3" data-src="https://picsum.photos/200/300?random=3" width="200" height="300" />
```

Cách sử dụng cơ bản: Lazyload hình nền của thẻ div.

```html
<style>
  #my_div {
    width: 300;
    height: 200;
  }
</style>
<script>
  // Lazy load div tag which has `id="my_div"`
  Defer.dom('#my_div');
</script>
<!-- Here may be a very long content -->
<div id="my_div"
  data-style="background: url(https://img.youtube.com/vi/Uz970DggW7E/hqdefault.jpg) 50% 50% / cover no-repeat;">
  <!-- The content -->
</div>
```

Cách sử dụng nâng cao: Trì hoãn Lazyload thẻ `<img>` 200ms sau khi trang đã tải xong. Sau đó, nó sẽ thêm một class `loaded` vào phần tử hình ảnh được tải lazyload.

```html
<script>Defer.dom('img.lazy-extra', 200, 'loaded');</script>
<!-- Here may be a very long content -->
<img class="lazy-extra" alt="Photo 1" data-src="https://picsum.photos/200/300?random=4" width="200" height="300" />
<img class="lazy-extra" alt="Photo 2" data-src="https://picsum.photos/200/300?random=5" width="200" height="300" />
<img class="lazy-extra" alt="Photo 3" data-src="https://picsum.photos/200/300?random=6" width="200" height="300" />
```

Sử dụng nâng cao: Lazyload với [Intersection observer options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)

```html
<script>
  // Preload images within 200% of the current viewport size.
  Defer.dom("img.lazy-sooner", 200, "loaded", null, {
    rootMargin: "200%"
  });
</script>
<!-- Here may be a very long content -->
<img class="lazy-sooner" alt="Photo 1" data-src="https://picsum.photos/200/300?random=7" width="200" height="300" />
<img class="lazy-sooner" alt="Photo 2" data-src="https://picsum.photos/200/300?random=8" width="200" height="300" />
<img class="lazy-sooner" alt="Photo 3" data-src="https://picsum.photos/200/300?random=9" width="200" height="300" />
```

Chúng ta có thể sử dụng class CSS đã thêm vào phần tử được lazyload để thêm hoạt ảnh vào các phần tử được tải thành công.

```html
<script>Defer.dom('img.fade', 200, 'loaded');</script>
<style>
  img.fade {
    transition: opacity 500ms ease-in-out;
    opacity: 0;
  }
  img.fade.loaded {
    background: none;
    opacity: 1;
  }
</style>
<!-- Here may be a very long content -->
<img class="fade" alt="Photo 1" data-src="https://picsum.photos/200/300?random=10" width="200" height="300" />
<img class="fade" alt="Photo 2" data-src="https://picsum.photos/200/300?random=11" width="200" height="300" />
<img class="fade" alt="Photo 3" data-src="https://picsum.photos/200/300?random=12" width="200" height="300" />
```

Chức năng này có thể được sử dụng tương tự cho các thẻ khác như thẻ `<iframe>`,`<video>`,`<audio>`,`<picture>`

```html
<script>
  // Lazy load all elements which have CSS class `multi-lazy`
  Defer.dom('.multi-lazy', 200, 'loaded');
</script>
<!-- Here may be a very long content -->
<iframe class="multi-lazy" title="Youtube"
  width="400" height="300" allowfullscreen
  allow="accelerometer;autoplay;encrypted-uploads;gyroscope;picture-in-picture"
  data-style="background: url(https://img.youtube.com/vi/Uz970DggW7E/hqdefault.jpg) 50% 50% / cover no-repeat;"
  data-src="https://www.youtube.com/embed/Uz970DggW7E"></iframe>
<picture class="multi-lazy">
  <source uploads="(min-width:800px)" data-srcset="https://picsum.photos/800/1200">
  <source uploads="(min-width:600px)" data-srcset="https://picsum.photos/600/900">
  <img data-src="https://picsum.photos/200/300" alt="Photo" style="width:auto;">
</picture>
<audio class="multi-lazy" controls>
  <source data-src="sound.ogg" type="audio/ogg">
  <source data-src="sound.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
<video class="multi-lazy" width="320" height="240" controls>
  <source data-src="movie.mp4" type="video/mp4">
  <source data-src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

Hoặc thậm chí thực thi một đoạn JavaScript khi người dùng cuộn đến phần tử `#scroll_reveal`

```html
<script>
  // Show an alert when user scrolled to #scroll_reveal
  Defer.dom('#scroll_reveal', null, null, function(element) {
    window.alert('You scrolled to #' + element.id);
  });
</script>
<!-- Here may be a very long content -->
<div id="scroll_reveal">
  This is my content.
</div>
```

Chúc các bạn thành công.
