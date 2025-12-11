---
layout: page
title: Archives
permalink: /archives/
---
# Archives

{% for post in site.posts %}
- <a href="{{ post.url }}">{{ post.title }}</a> — {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
