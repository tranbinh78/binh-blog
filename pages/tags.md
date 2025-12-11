---
layout: page
title: Tags
permalink: /tags/
---
# Tags

{% assign tags = site.tags | sort %}
<ul>
{% for t in tags %}
  <li><a href="{{ '/tags/' | append: t[0] | append: '/' }}">{{ t[0] }} ({{ t[1].size }})</a></li>
{% endfor %}
</ul>
