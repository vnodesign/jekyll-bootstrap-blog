---
layout: null
sitemap: false
---

{% assign counter = 0 %}
var documents = [{% for page in site.pages %}{% if page.url contains '.xml' or page.url contains 'assets' or page.url contains 'category' or page.url contains 'tag' %}{% else %}{
    "id": {{ counter }},
    "url": "{{ site.url }}{{site.baseurl}}{{ page.url }}",
    "title": "{{ page.title }}",
    "body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
    }, {% endif %}{% endfor %}{% for page in site.without-plugin %}{
    "id": {{ counter }},
    "url": "{{ site.url }}{{site.baseurl}}{{ page.url }}",
    "title": "{{ page.title }}",
    "body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
    }, {% endfor %}{% for page in site.posts %}{
    "id": {{ counter }},
    "url": "{{ site.url }}{{site.baseurl}}{{ page.url }}",
    "title": "{{ page.title }}",
    "body": "{{ page.date | date: "%Y/%m/%d" }} - {{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
    }{% if forloop.last %}{% else %}, {% endif %}{% endfor %}];
var idx=lunr((function(){this.ref("id"),this.field("title"),this.field("body"),documents.forEach((function(e){this.add(e)}),this)}));function lunr_search(e){if(document.getElementById("lunrsearchresults").innerHTML="<ul></ul>",e){document.getElementById("lunrsearchresults").innerHTML="<p>Search results for '"+e+"'</p>"+document.getElementById("lunrsearchresults").innerHTML;var l=idx.search(e);if(l.length>0)for(var s=0;s<l.length;s++){var r=l[s].ref,t=documents[r].url,n=documents[r].title,a=documents[r].body.substring(0,160)+"...";document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML=document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML+"<li class='lunrsearchresult'><a href='"+t+"'><span class='title'>"+n+"</span><br /><span class='body'>"+a+"</span><br /><span class='url'>"+t+"</span></a></li>"}else document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML="<li class='lunrsearchresult'>No results found...</li>"}return!1}function lunr_search(e){if($("#lunrsearchresults").show(400),$("body").addClass("modal-open"),document.getElementById("lunrsearchresults").innerHTML='<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>',e){document.getElementById("modtit").innerHTML="<h5 class='modal-title'>Search results for '"+e+"'</h5>"+document.getElementById("modtit").innerHTML;var l=idx.search(e);if(l.length>0)for(var s=0;s<l.length;s++){var r=l[s].ref,t=documents[r].url,n=documents[r].title,a=documents[r].body.substring(0,160)+"...";document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML=document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML+"<li class='lunrsearchresult'><a href='"+t+"'><span class='title'>"+n+"</span><br /><small><span class='body'>"+a+"</span><br /><span class='url'>"+t+"</span></small></a></li>"}else document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML="<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>"}return!1}$((function(){$("#lunrsearchresults").on("click","#btnx",(function(){$("#lunrsearchresults").hide(5),$("body").removeClass("modal-open")}))}));