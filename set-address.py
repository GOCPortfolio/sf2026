#!/usr/bin/env python3
"""Sets your final website address everywhere it is needed (link previews + share button).
Usage:  python3 set-address.py https://yourname.github.io/yourrepo/
"""
import sys
if len(sys.argv) != 2 or not sys.argv[1].startswith('http'):
    sys.exit('Usage: python3 set-address.py https://your-final-address/')
url = sys.argv[1].strip()
if not url.endswith('/'):
    url += '/'
for f in ('index.html', 'script.js'):
    s = open(f, encoding='utf-8').read()
    n = s.count('__SITE_URL__')
    open(f, 'w', encoding='utf-8').write(s.replace('__SITE_URL__', url))
    print(f, ': replaced', n)
print('Done. Address is now', url)
