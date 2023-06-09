
var kinetics = function () {
	var elms_block = document.querySelectorAll('[data-fires]');
	var blocks = new Array(elms_block.length);

	var log = console.log;

	var offset = function (elm) {
		var top = 0;
		do {
			if(!isNaN(elm.offsetTop)) top += elm.offsetTop;
			elm  = elm.offsetParent;
		} while(elm);
		return top;
	};

	elms_block.forEach(function (elm, idx) {
		var top = offset(elm);
		blocks[idx] = {
			elm:    elm,
			active: false,
			y1:     top,
			y2:     top + elm.offsetHeight * 0.5,
			y3:     top + elm.offsetHeight,
			fires:  elm.dataset.fires,
		};
	});

	var detect = function () {
		var w  = window;
		var vt = w.scrollY;
		var vm = w.scrollY + w.innerHeight * 0.5;
		var vb = w.scrollY + w.innerHeight;
		blocks.map(function (b, idx) {
			var cla = () => b.elm.classList.add('animate');
			var cwf = w[b.elm.dataset.call] || cla;
			if(!b.active) switch(b.fires) {
				case 'et_vt': if(b.active = (vt>=b.y1)) { cwf(); } break;
				case 'em_vt': if(b.active = (vt>=b.y2)) { cwf(); } break;
				case 'eb_vt': if(b.active = (vt>=b.y3)) { cwf(); } break;
				case 'et_vm': if(b.active = (vm>=b.y1)) { cwf(); } break;
				case 'em_vm': if(b.active = (vm>=b.y2)) { cwf(); } break;
				case 'eb_vm': if(b.active = (vm>=b.y3)) { cwf(); } break;
				case 'et_vb': if(b.active = (vb>=b.y1)) { cwf(); } break;
				case 'em_vb': if(b.active = (vb>=b.y2)) { cwf(); } break;
				case 'eb_vb': if(b.active = (vb>=b.y3)) { cwf(); } break;
			}
		});
	};

	window.addEventListener('scroll', detect, { passive: true });
	detect();
};

// DOMContentLoaded
window.addEventListener('load', function () {
	window.requestIdleCallback ? window.requestIdleCallback(kinetics) : kinetics();
});
