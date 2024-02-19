(function (f, e, g) {
	var a = e.z7 = {};
	a.mobile = {
		android: function () {
			return navigator.userAgent.match(/Android/i) ? !0 : !1
		},
		blackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i) ? !0 : !1
		},
		ios: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? !0 : !1
		},
		windows: function () {
			return navigator.userAgent.match(/IEMobile/i) ? !0 : !1
		},
		any: function () {
			return a.mobile.android() || a.mobile.blackBerry() || a.mobile.ios() || a.mobile.windows()
		},
		pc: function () {
			for (var a = navigator.userAgent, c = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"), d = !0, b = 0; b < c.length; b++)
				if (0 < a.indexOf(c[b])) {
					d = !1;
					break
				}
			return d
		},
		wechat: function () {
			return "micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) ? !0 : !1
		}
	}
})(jQuery, window, document);
$(function () {

});

//打开新窗口（防止window.open被拦截）
function openNewWindow(url, id) {
	var a = document.createElement('a');
	a.setAttribute('href', url);
	a.setAttribute('target', '_blank');
	a.setAttribute('id', id);
	// 防止反复添加
	if (!document.getElementById(id)) {
		document.body.appendChild(a);
	}
	a.click();
}
function browser_down() {
	/* if(null == IOS_DownLoad_URL || "undefine" == IOS_DownLoad_URL || "" == IOS_DownLoad_URL){
	   alert("\u6ca1\u6709\u914d\u7f6eIOS\u4e0b\u8f7d\u5730\u5740");
	}else  */
	if (null == AZ_DownLoad_URL || "undefine" == AZ_DownLoad_URL || "" == AZ_DownLoad_URL) {
		alert("\u6ca1\u6709\u914d\u7f6e\u5b89\u5353\u4e0b\u8f7d\u5730\u5740");
	} else {
		if (z7.mobile.ios()) {
			//location.href = IOS_DownLoad_URL
			const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
				navigator.userAgent &&
				navigator.userAgent.indexOf('CriOS') === -1 &&
				navigator.userAgent.indexOf('FxiOS') === -1;
			if ( /* isIphone &&  */ !isSafari) {
				// 弹出自定义的提示框
				$(".popup").removeClass('hidden');
			} else {
        location.href = "https://OtSwcb.391714.com/2IlO3";
							
			}
    }else {
      location.href = '/download/GameVault.apk'
    }
  }
};
