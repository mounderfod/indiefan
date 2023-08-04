---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
description: 2004 Arctic Monkeys demo
---

# Beneath the Boardwalk

(Arctic Monkeys, 2004)


<div>
{% for file in site.static_files %}
    {% if file.path contains 'btb' %}
        <h3>{{file.name}}</h3>

        <audio controls style="width: 100%">
            <source src="https://raw.githubusercontent.com/mounderfod/indiefan/master/assets/audio/btb/{{file.name}}">
        </audio><br><br>
    {% endif %}
{% endfor %}
</div>