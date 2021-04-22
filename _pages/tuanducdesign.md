---
title: "Tuan Duc Design"
layout: default
permalink: "/author/tuanducdesign"
---

<div class="container">
<div class="row justify-content-center">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="{{ site.url }}/" title="Home">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">{{ page.title }}</li>
                </ol>
            </nav>
    <div class="col-md-8">        
        <div class="row align-items-center mb-5">
            <div class="col-md-9">
                <h2 class="font-weight-bold">{{page.title}} <span class="small btn btn-outline-success btn-sm btn-round"><a href="https://www.facebook.com/{{ site.authors.tuanducdesign.facebook }}" target="_blank" rel="nofollow noopener" title="Follow">Follow</a></span></h2>
                <p><a href="{{ site.authors.tuanducdesign.web }}" title="{{ site.authors.tuanducdesign.web }}" target="_blank" rel="nofollow noopener">{{ site.authors.tuanducdesign.web }}</a></p>
                <p class="excerpt">{{ site.authors.tuanducdesign.description }}</p>
            </div>
            <div class="col-md-3 text-right">
                <img alt="{{ site.authors.tuanducdesign.name }}" data-src="{{ site.authors.tuanducdesign.photo }}" class="author-thumb fade" height="100" width="100" />
            </div>
        </div>
        <h4 class="font-weight-bold spanborder"><span>Posts by {{page.title}}</span></h4>
            {% assign posts = site.posts | where:"author","tuanducdesign" %}
            {% for post in posts %}
            {% include postbox.html %}
            {% endfor %}
    </div>
</div>
</div>
