---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
description: 2004 Arctic Monkeys demo
---

# Demo

(Interpol, 1998)


<div>
{% for file in site.static_files %}
    {% if file.path contains 'interpol' %}
        <h3>{{file.name}}</h3>

        <audio controls style="width: 100%">
            <source src="https://raw.githubusercontent.com/mounderfod/indiefan/master/assets/audio/interpol/{{file.name}}">
        </audio><br><br>
    {% endif %}
{% endfor %}
</div>