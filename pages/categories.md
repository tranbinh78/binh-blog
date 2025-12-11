---
layout: page
title: Categories
permalink: /categories/
---
# Categories

{% for c in site.categories %}
- [{{ c[0] }}]({{ '/categories/' | append: c[0] | append: '/' }})
{% endfor %}
