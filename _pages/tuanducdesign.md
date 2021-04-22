---
title: "Tuan Duc Design"
layout: default
permalink: "/author/tuanducdesign"
---
<div class="row">
  <div class="col-md-12">        
      <div class="row align-items-center mb-5">
          <div class="col-md-2">
              <img alt="{{ site.authors.tuanducdesign.name }}" data-src="{{ site.authors.tuanducdesign.photo }}" class="rounded-circle fade" height="100" width="100" />
          </div>
          <div class="col-md-10">
              <h2 class="font-weight-bold"><a href="https://www.facebook.com/{{ site.authors.tuanducdesign.facebook }}" target="_blank" rel="nofollow noopener" title="{{ site.authors.tuanducdesign.name }}">{{ site.authors.tuanducdesign.name }}</a></span></h2>
              <p><a href="{{ site.authors.tuanducdesign.web }}" title="{{ site.authors.tuanducdesign.web }}" target="_blank" rel="nofollow noopener">{{ site.authors.tuanducdesign.web }}</a></p>
              <p class="excerpt">{{ site.authors.tuanducdesign.description }}</p>
          </div>
      </div>
      <h4 class="font-weight-bold spanborder"><span>Posts by {{ site.authors.tuanducdesign.name }}</span></h4>
  </div>
  <div class="row listrecent">
    {% assign posts = site.posts | where:"author","tuanducdesign" %}
          {% for post in posts %}
          {% include postbox.html %}
    {% endfor %}
  </div>
  </div>
