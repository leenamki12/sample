<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="index, follow">

    <title inertia>{{ config('app.name', 'THE GLOW 2024') }}</title>

    {{-- <!-- <link rel="icon" href="data:image/gif;base64,R0lGODlhLgAuAPefACWN+SeO+fz+//D3/368+zSV+f3+/+jz/ufy/pvL/O32/0+j+jCT+fr8/5jJ/Mbh/fX6/+nz/jGU+fb6/7zc/cfi/bja/ZfJ/CyR+YK+/CiP+TaW+Umg+jOV+anS/VWm+qrT/UWe+kOd+na3++/3/6/V/TqZ+vz9//b7/2Gt+z+b+ieP+ZnK/FOm+pHG/DmY+tPo/rvc/fL4/3m5+0Cc+kuh+rTY/ZrK/Gew+/P5/8nj/rna/fj7/3K2+3G1+4XA/Eqh+kyi+imQ+fv9/4vD/H+8+yuR+S2R+VSm+l2r+7nb/YC9/Or0/sji/dzt/t7u/nC1+zKU+bPY/VCk+nS3+7fZ/Xa4+87m/iqQ+cXh/ajS/bPX/ZLG/E2i+ni5+y+T+XO2+zWW+Wqx+6HO/HW3+1yq+06j+kSe+mmx+9Hn/ofA/Nvs/uby/vn8/8zl/orC/Oz1/onC/JzM/He4+67V/crj/tfq/jiX+miw+/f7/2uy+y2S+YbA/IjB/D6a+tDm/s3l/mWv+6fR/ev1/nC0+2Kt+22z+5bI/M/m/myz+zeX+oO//LHW/avT/aDN/LLX/X27+7XZ/bbZ/dLo/lGk+mSv+6zU/UGc+sTg/ZXI/Fio+lan+luq+2+0+ySN+f///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjgxNjEwMTYzMkM5MTFFQUFBNThFNUVBODU3MUNDMkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjgxNjEwMTczMkM5MTFFQUFBNThFNUVBODU3MUNDMkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCODE2MTAxNDMyQzkxMUVBQUE1OEU1RUE4NTcxQ0MyRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCODE2MTAxNTMyQzkxMUVBQUE1OEU1RUE4NTcxQ0MyRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAJ8ALAAAAAAuAC4AAAj/AD8JHEjwE5sLVAhUOVGw4acTVQhQucDGocWGJTB42uhpAYKLnxAs4OgJQwmQFx8E8LTCjImNIhRYVCBiowkzKzwFeIDS4QdPBdYITLBxgYyGMkZ6SiBwTQFPH3oWlAFgKUEuG5PwIMgjyUYXBIkCyCF1IJONOwoS2IhDgEABODYSKGhhI5Oybzt4MlTQQI+NXgR62djDQEE9njq4xfvpx0YWBRsU2kiEyMZCDQqy2PhD6oQIiyHU8AQAxAHDAlG0INkCxUADBzxUrQHhbYQJDR98qNohQ20ETzcyIDBA4AAaG2kU/zSAAAOOYT5CyKAXwIcKA0usJAnkAIiqJEPI/6SwPQCFTwpCkCRtGsj6AHQ+HdD4YkwkxJ7CVC3AQooVwg8c4ckGG3hyRAVQbDSHJBdEQVqBnkAhxRgvlBSBAyw5MZAc4BXwxEBraSCBJxJMAsOIEmjgSQYDPREcAHIMZEdODozgSRcFebDRDQT9wZEQPH3ygBAcuUHQZp54UFAXnoywlgkFRbBRFQTVpdN5A5G3UQxVbhRBQSp4QoANGzH12nNWDDQAB6QpmWNVHCz3yX8MLCbQIRtZcMIUG3FBUBEbZVCHBWx64oBFGHrCgQV1ZLBREQS5UJRbCKjnyRKokVDTen2ApMZ6npxBgkAGLLFRCB8JBAefEWaGng8qkv8G2RCANIHbJxM0AcgQnzgAngY+yPRJA4RsNAUcBeVQxkYp3KrDcwGA8MkVfmwUhRSMjOiJH4h8AsJKEugg0AQpbFQGWQ3xIMZGSAxAgRGeGKEEc8FtBAB4GxVQnBJYxEvBAKt5IkYbFwkww0YqrMQAdp8IQtoWTYTpiQo6PFKVIAJVAC1ynsxg50VvcHQHDANd4MkemSGABBIHDLuHJxcMBIMiHL1RVhwcbUCyQJhsBAavAw0BxkZZyAyhJ3H0JMBgE6/0BcOf4LFRIK59gkIlG+Ex0ANf6MSxxxfxgAa77sKLRVqf5BHIRpoMMMAmbOUh0A79YvBvwGhs1VAOnDD/6yy0bp5AxkZBjNYkQ59osVIU4uJarifnFjSIUlC4qgCs9sYsEB8k8VHyr8EKRGxRgwyEwBkbYSqQpqB2KtAF9x4q0KfriTDqJ6We+tGefRK01opXKFGo7J9kUbRAiXIQwxWLbARJpJOSadVAAjw3gppsAuAmQVrAKaeNX3yMpycWPBnlRjZ0qROXA8WwHfsCSf8lQWESYCOO3O/Y449BDlnkkRvZnkCC0CQMrUBDQ+nQhwQSIhSlIQ0oUhGLBOIie5npEzMy1Hw8UR8prCs/+3HAFgbnCTBUQEAEMlAFfKAgG2TCQQCAUCe24Ig7WOgT2llPd76zHvF8QktXQo+l1jhSmgO4hyTw2dpuEuObkNRrOMshAccucbvmPCdf0qEOaa7TkM+EZjQAsMRpBqIa1lQNdwdoxGxq8wkB3EYqjpneQBrwuMowy1UDuQFnGNNGvfCFIAL4S8cEcjBP9OBjn0hEYhCJkrN4Yl6+Y8ti4CIXutiFMRCoygU/ISlPJAGPn2iDVzwBloGIhY14+ckLEKhHT1DiKFNRCo8+4YQKRYWPFVhJAILwEk/EZCabMkEQdNkEPgokIyTxCEhEQhKTGHMgB0BIEXaAGpAYYAdFIEMCWgaSgAAAOw==" data-rh="true"> -->--}}
    <meta name="subject" content="THE GLOW 2024 - 등장부터 활약까지 새로운 음악 페스티벌의 탄생" />
    <meta name="title" content="THE GLOW 2024 - 등장부터 활약까지 새로운 음악 페스티벌의 탄생" />
    <meta name="description" content="2024. 04.13 -14 at KINTEX" />
    <meta name="keywords" content="더글로우, theglow, theglow2024, 글로우페스티벌, 더글로우페스티벌, 음악페스티벌, 락페, 킨텍스"/>

	<meta property="og:title" content="THE GLOW 2024 - 등장부터 활약까지 새로운 음악 페스티벌의 탄생"/>
	<meta property="og:description" content="2024. 04.13 -14 at KINTEX"/>
	<meta property="og:url" content="http://theglowseoul.com"/>
	<meta property="og:type" content="website"/>
    <meta property="og:image" content="{{ asset('link_logo.jpg') }}" />
    <!-- Fonts -->
    <link rel="stylesheet" href="https://use.typekit.net/aoi2pcm.css">

    <!-- Fonts -->
    <link rel="stylesheet" type="text/css"
        href="https://cdn.jsdelivr.net/gh/eunchurn/NanumSquareNeo@0.0.6/nanumsquareneo.css" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead

    <!-- Meta Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1125289318903386');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=1125289318903386&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Meta Pixel Code -->
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
