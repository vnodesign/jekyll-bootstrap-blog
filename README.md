![Blog](/assets/images/screen-my-website.png)

- Production: https://tuanducdesign.com/

#### Access Locally

```
$ git clone https://github.com/tuanducteam/blog && cd blog
```

To test the CMS locally, you'll need run a production build of the site:

```
$ bundle install
$ bundle exec jekyll serve
```

## Mediumish Jekyll Template - Features

- [x] Built for Jekyll
- [x] Featured Posts
- [x] Index Pagination
- [x] Post Share
- [x] Post Categories
- [x] Prev/Next Link
- [x] Turbolinks
- [x] Category Archives (this is not yet compatible with github pages though)
- [x] Disqus Comments
- [x] Facebook Customize Chat
- [x] Google Analytics
- [x] Used Bootstrap v4.3.1 and Jquery v3.6.0

## Using Mediumish In Jekyll

In your local project, open ``_config.yml``. If your site is in root, for ``url``, make sure this is set to ``url: Your domain name.``. Also, change your Google Analytics code, disqus username, authors, Facebook Customize chat list etc.

Mediumish requires 2 plugins:

```
gem install jekyll-paginate
```
And
```
gem install jekyll-archives
```

Edit the menu and footer copyrights in folder ``_includes/navigation.html`` and ``_includes/footer.html``.

Start by adding your ``.md`` files in ``_posts``. Mediumish already has a few as an example.

YAML front matter:

Post featured - ``featured:true``

Post featured image - ``image: static/media/lazyload-facebook-customize-chat.jpg``

Post featured image (version webp) - ``webp: static/media/lazyload-facebook-customize-chat.webp``

Post toc+ - ``toc: true``

Post hidden from recent posts - ``hidden: true``

Post rating move from 1 to 5 - ``rating: 1``

### YAML Post Example:

```
---
layout: post
title:  "List of awesome CSS frameworks"
author: tuanducdesign
categories: [ CSS ]
tags: [Frameworks, CSS, SCSS, Sass, Stylus, LESS, PostCSS]
image: static/media/css-frameworks.jpg
webp: static/media/css-frameworks.webp
description: "In this article I would like to share with you the list of CSS Frameworks that support Website design."
featured: true
hidden: true
rating: 5
toc: true
---
```

### YAML Page Example:

```
---
layout: page
title: Contacts
permalink: /pages/contacts
---
```

## Credits
Redesign by [Tuan Duc Tran](https://www.facebook.com/tuanduc.support) | Original design by [Sal](https://www.wowthemes.net) and it is *free* under MIT license.

## License
The MIT License (MIT)

Copyright (c) 2021 Tuan Duc Tran

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
