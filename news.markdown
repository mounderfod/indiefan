---
layout: default
description: The latest indie news!
---

# News

{% assign news_list = site.news | reverse %}
{% for news in news_list %}
<hr>
### {{news.title}}
{{news.content | markdownify}} ***{{news.date | date_to_string}}***
{% endfor %}
<hr>