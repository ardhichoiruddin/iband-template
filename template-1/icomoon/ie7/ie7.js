/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-audiomack': '&#xe900;',
		'icon-call': '&#xe901;',
		'icon-amazon': '&#xe902;',
		'icon-deezer': '&#xe903;',
		'icon-link': '&#xe904;',
		'icon-facebook': '&#xe905;',
		'icon-instagram': '&#xe906;',
		'icon-tone': '&#xe907;',
		'icon-apple-music': '&#xe908;',
		'icon-napster': '&#xe909;',
		'icon-pandora': '&#xe90a;',
		'icon-patreon': '&#xe90b;',
		'icon-paypal': '&#xe90c;',
		'icon-shazam': '&#xe90d;',
		'icon-snapchat': '&#xe90e;',
		'icon-soundcloud': '&#xe90f;',
		'icon-spotify': '&#xe910;',
		'icon-tidal': '&#xe911;',
		'icon-tiktok': '&#xe912;',
		'icon-twitter': '&#xe913;',
		'icon-vk': '&#xe914;',
		'icon-youtube-music': '&#xe915;',
		'icon-youtube': '&#xe916;',
		'icon-itunes': '&#xe917;',
		'icon-joox': '&#xe918;',
		'icon-play': '&#xe919;',
		'icon-resso': '&#xe91a;',
		'icon-whatsapp': '&#xe91b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
