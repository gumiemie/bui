/**
 * @fileOverview 全屏容器，一般情况下用于布局
 * @ignore
 */

define('bui/layout/viewport',function (require) {

	var BUI = require('bui/common'),
		win = window;

	/**
	 * @class BUI.Layout.Viewport
	 * 窗口试图控件，通常使用布局插件
	 * @extends BUI.Component.Controller
	 */
	var Viewport = BUI.Component.Controller.extend({
		renderUI : function(){
			this.reset();
		},
		bindUI : function(){
			var _self = this;
			$(win).on('resize',BUI.wrapBehavior(_self,'onResize'));
		},
		onResize : function(){
			this.reset();
		},
		/**
		 * 重新适应窗口大小
		 */
		reset : function(){
			var _self = this,
				el = _self.get('el'),
				viewportHeight = BUI.viewportHeight(),
				viewportWidth = BUI.viewportWidth(),
				appendWidth = _self.getAppendWidth(),
				appendHeight = _self.getAppendHeight();
			_self.set('width',viewportWidth - appendWidth);
			_self.set('height',viewportHeight - appendHeight);
		},
		destructor : function(){
			$(win).off('resize',BUI.getWrapBehavior(this,'onResize'));
		}
	},{
		ATTRS : {
			render : {
				value : 'body'
			}
		}
	},{
		xclass : 'view-port'
	});

	return Viewport;

});

