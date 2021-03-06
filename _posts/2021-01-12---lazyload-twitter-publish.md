---
layout: post
title:  "Lazyload Twitter Publish"
author: tuanducdesign
categories: [ Javascript ]
tags: [Lazyload, Twitter, Javascript]
image: static/media/lazyload-twitter-publish.jpg
webp: static/media/lazyload-twitter-publish.webp
description: "Trong bài viết tiếp theo của ngày hôm nay mình sẽ hướng dẫn các bạn cách Lazyload script của Twitter để tải trang nhanh hơn."
toc: false
---

Ở bài viết trước thì chúng ta đã tìm hiểu về cách Lazy Load Facebook Customize Chat. Thì ở bài viết tiếp theo mình sẽ hướng dẫn các bạn cách Lazyload Twitter Publish để trang tải nhanh hơn.

{% include image.html src="lazyload-twitter-publish.jpg" webp="lazyload-twitter-publish.webp" type="jpg" alt="Lazyload Twitter Publish" %}

Đầu tiên các bạn truy cập vào trang: {% include external-link.html href="https://publish.twitter.com" title="https://publish.twitter.com" %}

Tiếp theo các bạn nhập đường dẫn đến trang profile của mình trên Twitter.

{% include image.html src="twitter-publish.jpg" webp="twitter-publish.webp" type="jpg" alt="Twitter Publish" %}

Sau đó chọn loại bố cục mà bạn cần dùng sau đó lấy mã.

{% include image.html src="twitter-layout.jpg" webp="twitter-layout.webp" type="jpg" alt="Twitter Layout" %}

Rồi bây giờ chúng ta cùng xem cấu trúc đoạn code nó như nào nhé!

Với Timeline

```html
<a class="twitter-timeline" href="https://twitter.com/tuanducdesigner?ref_src=twsrc%5Etfw">Tweets by tuanducdesigner</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

Với Follow

```html
<a href="https://twitter.com/tuanducdesigner?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @tuanducdesigner</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

Với Mention

```html
<a href="https://twitter.com/intent/tweet?screen_name=tuanducdesigner&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @tuanducdesigner</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

Với Hashtag

```html
<a href="https://twitter.com/intent/tweet?button_hashtag=tuanducdesigner&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #tuanducdesigner</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

Đoạn đầu là thành phần chính nơi sẽ trả ra các thuộc tính và giá trị sau khi script load xong, đoạn tiếp theo là các script của Twitter. Đây sẽ là đoạn mà chúng ta cần quan tâm nhất để có thể tải trang được nhanh.

Tiếp theo chúng ta cùng xem đoạn Javascript của Twitter đã được rút ngắn lại để load trang nhanh hơn.

```javascript
function td_twitterpublish(){var t=document.createElement("script");t.async=!0,t.defer=!0,t.src="https://platform.twitter.com/widgets.js",document.body.appendChild(t)}window.addEventListener?window.addEventListener("load",td_twitterpublish,!1):window.attachEvent?window.attachEvent("onload",td_twitterpublish):window.onload=td_twitterpublish;
```

Chúc các bạn thành công.
