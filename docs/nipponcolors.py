# -*- encoding: utf-8 -*-

import re

html = 'nipponcolors.html'
css = 'nipponcolors.css'

name_re = re.compile('<li id="([^"]*)"><div><a href="javascript:void\(0\);">([^<]*)')
color_re = re.compile('a{\-webkit\-tap\-highlight\-color:([^}]*)}#([a-z0-9]*)')

def resolve_html():
    names = {}
    with open(html, 'r') as f:
        line = f.readline()
        while line:
            match = name_re.search(line)
            if match:
                names[match.group(1)] = match.group(2)
            line = f.readline()
    return names

def resolve_css():
    colors = {}
    with open(css, 'r') as f:
        line = f.readline()
        while line:
            match = color_re.search(line)
            if match:
                colors[match.group(2)] = match.group(1)
            line = f.readline()
    return colors

def ana():
    color_names = resolve_html()
    colors = resolve_css()
    for k in color_names:
        print '%s,%s' %(color_names[k].replace(', ', ','), colors[k])

if __name__ == '__main__':
    ana()
