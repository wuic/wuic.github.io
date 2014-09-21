!function(A){A(function(){A.support.transition=(function(){var B=(function(){var E=document.createElement("bootstrap"),D={"WebkitTransition":"webkitTransitionEnd","MozTransition":"transitionend","OTransition":"oTransitionEnd otransitionend","transition":"transitionend"},C;for(C in D){if(E.style[C]!==undefined){return D[C];}}}());return B&&{end:B};})();});}(window.jQuery);!function(D){var C='[data-dismiss="alert"]',B=function(E){D(E).on("click",C,this.close);};B.prototype.close=function(I){var H=D(this),F=H.attr("data-target"),G;if(!F){F=H.attr("href");F=F&&F.replace(/.*(?=#[^\s]*$)/,"");}G=D(F);I&&I.preventDefault();G.length||(G=H.hasClass("alert")?H:H.parent());G.trigger(I=D.Event("close"));if(I.isDefaultPrevented()){return ;}G.removeClass("in");function E(){G.trigger("closed").remove();}D.support.transition&&G.hasClass("fade")?G.on(D.support.transition.end,E):E();};var A=D.fn.alert;D.fn.alert=function(E){return this.each(function(){var G=D(this),F=G.data("alert");if(!F){G.data("alert",(F=new B(this)));}if(typeof E=="string"){F[E].call(G);}});};D.fn.alert.Constructor=B;D.fn.alert.noConflict=function(){D.fn.alert=A;return this;};D(document).on("click.alert.data-api",C,B.prototype.close);}(window.jQuery);!function(C){var B=function(E,D){this.$element=C(E);this.options=C.extend({},C.fn.button.defaults,D);};B.prototype.setState=function(F){var H="disabled",D=this.$element,E=D.data(),G=D.is("input")?"val":"html";F=F+"Text";E.resetText||D.data("resetText",D[G]());D[G](E[F]||this.options[F]);setTimeout(function(){F=="loadingText"?D.addClass(H).attr(H,H):D.removeClass(H).removeAttr(H);},0);};B.prototype.toggle=function(){var D=this.$element.closest('[data-toggle="buttons-radio"]');D&&D.find(".active").removeClass("active");this.$element.toggleClass("active");};var A=C.fn.button;C.fn.button=function(D){return this.each(function(){var G=C(this),F=G.data("button"),E=typeof D=="object"&&D;if(!F){G.data("button",(F=new B(this,E)));}if(D=="toggle"){F.toggle();}else{if(D){F.setState(D);}}});};C.fn.button.defaults={loadingText:"loading..."};C.fn.button.Constructor=B;C.fn.button.noConflict=function(){C.fn.button=A;return this;};C(document).on("click.button.data-api","[data-toggle^=button]",function(E){var D=C(E.target);if(!D.hasClass("btn")){D=D.closest(".btn");}D.button("toggle");});}(window.jQuery);!function(B){var C=function(E,D){this.$element=B(E);this.$indicators=this.$element.find(".carousel-indicators");this.options=D;this.options.pause=="hover"&&this.$element.on("mouseenter",B.proxy(this.pause,this)).on("mouseleave",B.proxy(this.cycle,this));};C.prototype={cycle:function(D){if(!D){this.paused=false;}if(this.interval){clearInterval(this.interval);}this.options.interval&&!this.paused&&(this.interval=setInterval(B.proxy(this.next,this),this.options.interval));return this;},getActiveIndex:function(){this.$active=this.$element.find(".item.active");this.$items=this.$active.parent().children();return this.$items.index(this.$active);},to:function(F){var D=this.getActiveIndex(),E=this;if(F>(this.$items.length-1)||F<0){return ;}if(this.sliding){return this.$element.one("slid",function(){E.to(F);});}if(D==F){return this.pause().cycle();}return this.slide(F>D?"next":"prev",B(this.$items[F]));},pause:function(D){if(!D){this.paused=true;}if(this.$element.find(".next, .prev").length&&B.support.transition.end){this.$element.trigger(B.support.transition.end);this.cycle(true);}clearInterval(this.interval);this.interval=null;return this;},next:function(){if(this.sliding){return ;}return this.slide("next");},prev:function(){if(this.sliding){return ;}return this.slide("prev");},slide:function(J,E){var L=this.$element.find(".item.active"),D=E||L[J](),I=this.interval,K=J=="next"?"left":"right",F=J=="next"?"first":"last",G=this,H;this.sliding=true;I&&this.pause();D=D.length?D:this.$element.find(".item")[F]();H=B.Event("slide",{relatedTarget:D[0],direction:K});if(D.hasClass("active")){return ;}if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");this.$element.one("slid",function(){var M=B(G.$indicators.children()[G.getActiveIndex()]);M&&M.addClass("active");});}if(B.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(H);if(H.isDefaultPrevented()){return ;}D.addClass(J);D[0].offsetWidth;L.addClass(K);D.addClass(K);this.$element.one(B.support.transition.end,function(){D.removeClass([J,K].join(" ")).addClass("active");L.removeClass(["active",K].join(" "));G.sliding=false;setTimeout(function(){G.$element.trigger("slid");},0);});}else{this.$element.trigger(H);if(H.isDefaultPrevented()){return ;}L.removeClass("active");D.addClass("active");this.sliding=false;this.$element.trigger("slid");}I&&this.cycle();return this;}};var A=B.fn.carousel;B.fn.carousel=function(D){return this.each(function(){var H=B(this),G=H.data("carousel"),E=B.extend({},B.fn.carousel.defaults,typeof D=="object"&&D),F=typeof D=="string"?D:E.slide;if(!G){H.data("carousel",(G=new C(this,E)));}if(typeof D=="number"){G.to(D);}else{if(F){G[F]();}else{if(E.interval){G.pause().cycle();}}}});};B.fn.carousel.defaults={interval:5000,pause:"hover"};B.fn.carousel.Constructor=C;B.fn.carousel.noConflict=function(){B.fn.carousel=A;return this;};B(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(I){var H=B(this),E,D=B(H.attr("data-target")||(E=H.attr("href"))&&E.replace(/.*(?=#[^\s]+$)/,"")),F=B.extend({},D.data(),H.data()),G;D.carousel(F);if(G=H.attr("data-slide-to")){D.data("carousel").pause().to(G).cycle();}I.preventDefault();});}(window.jQuery);!function(B){var C=function(E,D){this.$element=B(E);this.options=B.extend({},B.fn.collapse.defaults,D);if(this.options.parent){this.$parent=B(this.options.parent);}this.options.toggle&&this.toggle();};C.prototype={constructor:C,dimension:function(){var D=this.$element.hasClass("width");return D?"width":"height";},show:function(){var G,D,F,E;if(this.transitioning||this.$element.hasClass("in")){return ;}G=this.dimension();D=B.camelCase(["scroll",G].join("-"));F=this.$parent&&this.$parent.find("> .accordion-group > .in");if(F&&F.length){E=F.data("collapse");if(E&&E.transitioning){return ;}F.collapse("hide");E||F.data("collapse",null);}this.$element[G](0);this.transition("addClass",B.Event("show"),"shown");B.support.transition&&this.$element[G](this.$element[0][D]);},hide:function(){var D;if(this.transitioning||!this.$element.hasClass("in")){return ;}D=this.dimension();this.reset(this.$element[D]());this.transition("removeClass",B.Event("hide"),"hidden");this.$element[D](0);},reset:function(D){var E=this.dimension();this.$element.removeClass("collapse")[E](D||"auto")[0].offsetWidth;this.$element[D!==null?"addClass":"removeClass"]("collapse");return this;},transition:function(H,E,F){var G=this,D=function(){if(E.type=="show"){G.reset();}G.transitioning=0;G.$element.trigger(F);};this.$element.trigger(E);if(E.isDefaultPrevented()){return ;}this.transitioning=1;this.$element[H]("in");B.support.transition&&this.$element.hasClass("collapse")?this.$element.one(B.support.transition.end,D):D();},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]();}};var A=B.fn.collapse;B.fn.collapse=function(D){return this.each(function(){var G=B(this),F=G.data("collapse"),E=B.extend({},B.fn.collapse.defaults,G.data(),typeof D=="object"&&D);if(!F){G.data("collapse",(F=new C(this,E)));}if(typeof D=="string"){F[D]();}});};B.fn.collapse.defaults={toggle:true};B.fn.collapse.Constructor=C;B.fn.collapse.noConflict=function(){B.fn.collapse=A;return this;};B(document).on("click.collapse.data-api","[data-toggle=collapse]",function(H){var G=B(this),D,F=G.attr("data-target")||H.preventDefault()||(D=G.attr("href"))&&D.replace(/.*(?=#[^\s]+$)/,""),E=B(F).data("collapse")?"toggle":G.data();G[B(F).hasClass("in")?"addClass":"removeClass"]("collapsed");B(F).collapse(E);});}(window.jQuery);!function(F){var B="[data-toggle=dropdown]",A=function(H){var G=F(H).on("click.dropdown.data-api",this.toggle);F("html").on("click.dropdown.data-api",function(){G.parent().removeClass("open");});};A.prototype={constructor:A,toggle:function(J){var I=F(this),H,G;if(I.is(".disabled, :disabled")){return ;}H=E(I);G=H.hasClass("open");D();if(!G){if("ontouchstart" in document.documentElement){F('<div class="dropdown-backdrop"/>').insertBefore(F(this)).on("click",D);}H.toggleClass("open");}I.focus();return false;},keydown:function(L){var K,M,G,J,I,H;if(!/(38|40|27)/.test(L.keyCode)){return ;}K=F(this);L.preventDefault();L.stopPropagation();if(K.is(".disabled, :disabled")){return ;}J=E(K);I=J.hasClass("open");if(!I||(I&&L.keyCode==27)){if(L.which==27){J.find(B).focus();}return K.click();}M=F("[role=menu] li:not(.divider):visible a",J);if(!M.length){return ;}H=M.index(M.filter(":focus"));if(L.keyCode==38&&H>0){H--;}if(L.keyCode==40&&H<M.length-1){H++;}if(!~H){H=0;}M.eq(H).focus();}};function D(){F(".dropdown-backdrop").remove();F(B).each(function(){E(F(this)).removeClass("open");});}function E(I){var G=I.attr("data-target"),H;if(!G){G=I.attr("href");G=G&&/#/.test(G)&&G.replace(/.*(?=#[^\s]*$)/,"");}H=G&&F(G);if(!H||!H.length){H=I.parent();}return H;}var C=F.fn.dropdown;F.fn.dropdown=function(G){return this.each(function(){var I=F(this),H=I.data("dropdown");if(!H){I.data("dropdown",(H=new A(this)));}if(typeof G=="string"){H[G].call(I);}});};F.fn.dropdown.Constructor=A;F.fn.dropdown.noConflict=function(){F.fn.dropdown=C;return this;};F(document).on("click.dropdown.data-api",D).on("click.dropdown.data-api",".dropdown form",function(G){G.stopPropagation();}).on("click.dropdown.data-api",B,A.prototype.toggle).on("keydown.dropdown.data-api",B+", [role=menu]",A.prototype.keydown);}(window.jQuery);!function(C){var B=function(E,D){this.options=D;this.$element=C(E).delegate('[data-dismiss="modal"]',"click.dismiss.modal",C.proxy(this.hide,this));this.options.remote&&this.$element.find(".modal-body").load(this.options.remote);};B.prototype={constructor:B,toggle:function(){return this[!this.isShown?"show":"hide"]();},show:function(){var D=this,E=C.Event("show");this.$element.trigger(E);if(this.isShown||E.isDefaultPrevented()){return ;}this.isShown=true;this.escape();this.backdrop(function(){var F=C.support.transition&&D.$element.hasClass("fade");if(!D.$element.parent().length){D.$element.appendTo(document.body);}D.$element.show();if(F){D.$element[0].offsetWidth;}D.$element.addClass("in").attr("aria-hidden",false);D.enforceFocus();F?D.$element.one(C.support.transition.end,function(){D.$element.focus().trigger("shown");}):D.$element.focus().trigger("shown");});},hide:function(E){E&&E.preventDefault();var D=this;E=C.Event("hide");this.$element.trigger(E);if(!this.isShown||E.isDefaultPrevented()){return ;}this.isShown=false;this.escape();C(document).off("focusin.modal");this.$element.removeClass("in").attr("aria-hidden",true);C.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal();},enforceFocus:function(){var D=this;C(document).on("focusin.modal",function(E){if(D.$element[0]!==E.target&&!D.$element.has(E.target).length){D.$element.focus();}});},escape:function(){var D=this;if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(E){E.which==27&&D.hide();});}else{if(!this.isShown){this.$element.off("keyup.dismiss.modal");}}},hideWithTransition:function(){var D=this,E=setTimeout(function(){D.$element.off(C.support.transition.end);D.hideModal();},500);this.$element.one(C.support.transition.end,function(){clearTimeout(E);D.hideModal();});},hideModal:function(){var D=this;this.$element.hide();this.backdrop(function(){D.removeBackdrop();D.$element.trigger("hidden");});},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null;},backdrop:function(G){var F=this,E=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var D=C.support.transition&&E;this.$backdrop=C('<div class="modal-backdrop '+E+'" />').appendTo(document.body);this.$backdrop.click(this.options.backdrop=="static"?C.proxy(this.$element[0].focus,this.$element[0]):C.proxy(this.hide,this));if(D){this.$backdrop[0].offsetWidth;}this.$backdrop.addClass("in");if(!G){return ;}D?this.$backdrop.one(C.support.transition.end,G):G();}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");C.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(C.support.transition.end,G):G();}else{if(G){G();}}}}};var A=C.fn.modal;C.fn.modal=function(D){return this.each(function(){var G=C(this),F=G.data("modal"),E=C.extend({},C.fn.modal.defaults,G.data(),typeof D=="object"&&D);if(!F){G.data("modal",(F=new B(this,E)));}if(typeof D=="string"){F[D]();}else{if(E.show){F.show();}}});};C.fn.modal.defaults={backdrop:true,keyboard:true,show:true};C.fn.modal.Constructor=B;C.fn.modal.noConflict=function(){C.fn.modal=A;return this;};C(document).on("click.modal.data-api",'[data-toggle="modal"]',function(H){var G=C(this),E=G.attr("href"),D=C(G.attr("data-target")||(E&&E.replace(/.*(?=#[^\s]+$)/,""))),F=D.data("modal")?"toggle":C.extend({remote:!/#/.test(E)&&E},D.data(),G.data());H.preventDefault();D.modal(F).one("hide",function(){G.focus();});});}(window.jQuery);!function(C){var B=function(E,D){this.init("tooltip",E,D);};B.prototype={constructor:B,init:function(J,H,F){var K,D,I,E,G;this.type=J;this.$element=C(H);this.options=this.getOptions(F);this.enabled=true;I=this.options.trigger.split(" ");for(G=I.length;G--;){E=I[G];if(E=="click"){this.$element.on("click."+this.type,this.options.selector,C.proxy(this.toggle,this));}else{if(E!="manual"){K=E=="hover"?"mouseenter":"focus";D=E=="hover"?"mouseleave":"blur";this.$element.on(K+"."+this.type,this.options.selector,C.proxy(this.enter,this));this.$element.on(D+"."+this.type,this.options.selector,C.proxy(this.leave,this));}}}this.options.selector?(this._options=C.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle();},getOptions:function(D){D=C.extend({},C.fn[this.type].defaults,this.$element.data(),D);if(D.delay&&typeof D.delay=="number"){D.delay={show:D.delay,hide:D.delay};}return D;},enter:function(G){var F=C.fn[this.type].defaults,E={},D;this._options&&C.each(this._options,function(H,I){if(F[H]!=I){E[H]=I;}},this);D=C(G.currentTarget)[this.type](E).data(this.type);if(!D.options.delay||!D.options.delay.show){return D.show();}clearTimeout(this.timeout);D.hoverState="in";this.timeout=setTimeout(function(){if(D.hoverState=="in"){D.show();}},D.options.delay.show);},leave:function(E){var D=C(E.currentTarget)[this.type](this._options).data(this.type);if(this.timeout){clearTimeout(this.timeout);}if(!D.options.delay||!D.options.delay.hide){return D.hide();}D.hoverState="out";this.timeout=setTimeout(function(){if(D.hoverState=="out"){D.hide();}},D.options.delay.hide);},show:function(){var H,J,F,I,D,G,E=C.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(E);if(E.isDefaultPrevented()){return ;}H=this.tip();this.setContent();if(this.options.animation){H.addClass("fade");}D=typeof this.options.placement=="function"?this.options.placement.call(this,H[0],this.$element[0]):this.options.placement;H.detach().css({top:0,left:0,display:"block"});this.options.container?H.appendTo(this.options.container):H.insertAfter(this.$element);J=this.getPosition();F=H[0].offsetWidth;I=H[0].offsetHeight;switch(D){case"bottom":G={top:J.top+J.height,left:J.left+J.width/2-F/2};break;case"top":G={top:J.top-I,left:J.left+J.width/2-F/2};break;case"left":G={top:J.top+J.height/2-I/2,left:J.left-F};break;case"right":G={top:J.top+J.height/2-I/2,left:J.left+J.width};break;}this.applyPlacement(G,D);this.$element.trigger("shown");}},applyPlacement:function(G,H){var I=this.tip(),E=I[0].offsetWidth,L=I[0].offsetHeight,D,J,K,F;I.offset(G).addClass(H).addClass("in");D=I[0].offsetWidth;J=I[0].offsetHeight;if(H=="top"&&J!=L){G.top=G.top+L-J;F=true;}if(H=="bottom"||H=="top"){K=0;if(G.left<0){K=G.left*-2;G.left=0;I.offset(G);D=I[0].offsetWidth;J=I[0].offsetHeight;}this.replaceArrow(K-E+D,D,"left");}else{this.replaceArrow(J-L,J,"top");}if(F){I.offset(G);}},replaceArrow:function(F,E,D){this.arrow().css(D,F?(50*(1-F/E)+"%"):"");},setContent:function(){var E=this.tip(),D=this.getTitle();E.find(".tooltip-inner")[this.options.html?"html":"text"](D);E.removeClass("fade in top bottom left right");},hide:function(){var D=this,F=this.tip(),E=C.Event("hide");this.$element.trigger(E);if(E.isDefaultPrevented()){return ;}F.removeClass("in");function G(){var H=setTimeout(function(){F.off(C.support.transition.end).detach();},500);F.one(C.support.transition.end,function(){clearTimeout(H);F.detach();});}C.support.transition&&this.$tip.hasClass("fade")?G():F.detach();this.$element.trigger("hidden");return this;},fixTitle:function(){var D=this.$element;if(D.attr("title")||typeof (D.attr("data-original-title"))!="string"){D.attr("data-original-title",D.attr("title")||"").attr("title","");}},hasContent:function(){return this.getTitle();},getPosition:function(){var D=this.$element[0];return C.extend({},(typeof D.getBoundingClientRect=="function")?D.getBoundingClientRect():{width:D.offsetWidth,height:D.offsetHeight},this.$element.offset());},getTitle:function(){var F,D=this.$element,E=this.options;F=D.attr("data-original-title")||(typeof E.title=="function"?E.title.call(D[0]):E.title);return F;},tip:function(){return this.$tip=this.$tip||C(this.options.template);},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow");},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null;}},enable:function(){this.enabled=true;},disable:function(){this.enabled=false;},toggleEnabled:function(){this.enabled=!this.enabled;},toggle:function(E){var D=E?C(E.currentTarget)[this.type](this._options).data(this.type):this;D.tip().hasClass("in")?D.hide():D.show();},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type);}};var A=C.fn.tooltip;C.fn.tooltip=function(D){return this.each(function(){var G=C(this),F=G.data("tooltip"),E=typeof D=="object"&&D;if(!F){G.data("tooltip",(F=new B(this,E)));}if(typeof D=="string"){F[D]();}});};C.fn.tooltip.Constructor=B;C.fn.tooltip.defaults={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};C.fn.tooltip.noConflict=function(){C.fn.tooltip=A;return this;};}(window.jQuery);!function(C){var B=function(E,D){this.init("popover",E,D);};B.prototype=C.extend({},C.fn.tooltip.Constructor.prototype,{constructor:B,setContent:function(){var F=this.tip(),E=this.getTitle(),D=this.getContent();F.find(".popover-title")[this.options.html?"html":"text"](E);F.find(".popover-content")[this.options.html?"html":"text"](D);F.removeClass("fade top bottom left right in");},hasContent:function(){return this.getTitle()||this.getContent();},getContent:function(){var E,D=this.$element,F=this.options;E=(typeof F.content=="function"?F.content.call(D[0]):F.content)||D.attr("data-content");return E;},tip:function(){if(!this.$tip){this.$tip=C(this.options.template);}return this.$tip;},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type);}});var A=C.fn.popover;C.fn.popover=function(D){return this.each(function(){var G=C(this),F=G.data("popover"),E=typeof D=="object"&&D;if(!F){G.data("popover",(F=new B(this,E)));}if(typeof D=="string"){F[D]();}});};C.fn.popover.Constructor=B;C.fn.popover.defaults=C.extend({},C.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});C.fn.popover.noConflict=function(){C.fn.popover=A;return this;};}(window.jQuery);!function(C){function B(G,F){var H=C.proxy(this.process,this),D=C(G).is("body")?C(window):C(G),E;this.options=C.extend({},C.fn.scrollspy.defaults,F);this.$scrollElement=D.on("scroll.scroll-spy.data-api",H);this.selector=(this.options.target||((E=C(G).attr("href"))&&E.replace(/.*(?=#[^\s]+$)/,""))||"")+" .nav li > a";this.$body=C("body");this.refresh();this.process();}B.prototype={constructor:B,refresh:function(){var D=this,E;this.offsets=C([]);this.targets=C([]);E=this.$body.find(this.selector).map(function(){var G=C(this),F=G.data("target")||G.attr("href"),H=/^#\w/.test(F)&&C(F);return(H&&H.length&&[[H.position().top+(!C.isWindow(D.$scrollElement.get(0))&&D.$scrollElement.scrollTop()),F]])||null;}).sort(function(G,F){return G[0]-F[0];}).each(function(){D.offsets.push(this[0]);D.targets.push(this[1]);});},process:function(){var I=this.$scrollElement.scrollTop()+this.options.offset,F=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,H=F-this.$scrollElement.height(),G=this.offsets,D=this.targets,J=this.activeTarget,E;if(I>=H){return J!=(E=D.last()[0])&&this.activate(E);}for(E=G.length;E--;){J!=D[E]&&I>=G[E]&&(!G[E+1]||I<=G[E+1])&&this.activate(D[E]);}},activate:function(F){var E,D;this.activeTarget=F;C(this.selector).parent(".active").removeClass("active");D=this.selector+'[data-target="'+F+'"],'+this.selector+'[href="'+F+'"]';E=C(D).parent("li").addClass("active");if(E.parent(".dropdown-menu").length){E=E.closest("li.dropdown").addClass("active");}E.trigger("activate");}};var A=C.fn.scrollspy;C.fn.scrollspy=function(D){return this.each(function(){var G=C(this),F=G.data("scrollspy"),E=typeof D=="object"&&D;if(!F){G.data("scrollspy",(F=new B(this,E)));}if(typeof D=="string"){F[D]();}});};C.fn.scrollspy.Constructor=B;C.fn.scrollspy.defaults={offset:10};C.fn.scrollspy.noConflict=function(){C.fn.scrollspy=A;return this;};C(window).on("load",function(){C('[data-spy="scroll"]').each(function(){var D=C(this);D.scrollspy(D.data());});});}(window.jQuery);!function(C){var B=function(D){this.element=C(D);};B.prototype={constructor:B,show:function(){var I=this.element,F=I.closest("ul:not(.dropdown-menu)"),E=I.attr("data-target"),G,D,H;if(!E){E=I.attr("href");E=E&&E.replace(/.*(?=#[^\s]*$)/,"");}if(I.parent("li").hasClass("active")){return ;}G=F.find(".active:last a")[0];H=C.Event("show",{relatedTarget:G});I.trigger(H);if(H.isDefaultPrevented()){return ;}D=C(E);this.activate(I.parent("li"),F);this.activate(D,D.parent(),function(){I.trigger({type:"shown",relatedTarget:G});});},activate:function(F,E,I){var D=E.find("> .active"),H=I&&C.support.transition&&D.hasClass("fade");function G(){D.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");F.addClass("active");if(H){F[0].offsetWidth;F.addClass("in");}else{F.removeClass("fade");}if(F.parent(".dropdown-menu")){F.closest("li.dropdown").addClass("active");}I&&I();}H?D.one(C.support.transition.end,G):G();D.removeClass("in");}};var A=C.fn.tab;C.fn.tab=function(D){return this.each(function(){var F=C(this),E=F.data("tab");if(!E){F.data("tab",(E=new B(this)));}if(typeof D=="string"){E[D]();}});};C.fn.tab.Constructor=B;C.fn.tab.noConflict=function(){C.fn.tab=A;return this;};C(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(D){D.preventDefault();C(this).tab("show");});}(window.jQuery);!function(B){var C=function(E,D){this.$element=B(E);this.options=B.extend({},B.fn.typeahead.defaults,D);this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.highlighter=this.options.highlighter||this.highlighter;this.updater=this.options.updater||this.updater;this.source=this.options.source;this.$menu=B(this.options.menu);this.shown=false;this.listen();};C.prototype={constructor:C,select:function(){var D=this.$menu.find(".active").attr("data-value");this.$element.val(this.updater(D)).change();return this.hide();},updater:function(D){return D;},show:function(){var D=B.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});this.$menu.insertAfter(this.$element).css({top:D.top+D.height,left:D.left}).show();this.shown=true;return this;},hide:function(){this.$menu.hide();this.shown=false;return this;},lookup:function(E){var D;this.query=this.$element.val();if(!this.query||this.query.length<this.options.minLength){return this.shown?this.hide():this;}D=B.isFunction(this.source)?this.source(this.query,B.proxy(this.process,this)):this.source;return D?this.process(D):this;},process:function(D){var E=this;D=B.grep(D,function(F){return E.matcher(F);});D=this.sorter(D);if(!D.length){return this.shown?this.hide():this;}return this.render(D.slice(0,this.options.items)).show();},matcher:function(D){return ~D.toLowerCase().indexOf(this.query.toLowerCase());},sorter:function(F){var G=[],E=[],D=[],H;while(H=F.shift()){if(!H.toLowerCase().indexOf(this.query.toLowerCase())){G.push(H);}else{if(~H.indexOf(this.query)){E.push(H);}else{D.push(H);}}}return G.concat(E,D);},highlighter:function(D){var E=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return D.replace(new RegExp("("+E+")","ig"),function(F,G){return"<strong>"+G+"</strong>";});},render:function(D){var E=this;D=B(D).map(function(F,G){F=B(E.options.item).attr("data-value",G);F.find("a").html(E.highlighter(G));return F[0];});D.first().addClass("active");this.$menu.html(D);return this;},next:function(E){var F=this.$menu.find(".active").removeClass("active"),D=F.next();if(!D.length){D=B(this.$menu.find("li")[0]);}D.addClass("active");},prev:function(E){var F=this.$menu.find(".active").removeClass("active"),D=F.prev();if(!D.length){D=this.$menu.find("li").last();}D.addClass("active");},listen:function(){this.$element.on("focus",B.proxy(this.focus,this)).on("blur",B.proxy(this.blur,this)).on("keypress",B.proxy(this.keypress,this)).on("keyup",B.proxy(this.keyup,this));if(this.eventSupported("keydown")){this.$element.on("keydown",B.proxy(this.keydown,this));}this.$menu.on("click",B.proxy(this.click,this)).on("mouseenter","li",B.proxy(this.mouseenter,this)).on("mouseleave","li",B.proxy(this.mouseleave,this));},eventSupported:function(D){var E=D in this.$element;if(!E){this.$element.setAttribute(D,"return;");E=typeof this.$element[D]==="function";}return E;},move:function(D){if(!this.shown){return ;}switch(D.keyCode){case 9:case 13:case 27:D.preventDefault();break;case 38:D.preventDefault();this.prev();break;case 40:D.preventDefault();this.next();break;}D.stopPropagation();},keydown:function(D){this.suppressKeyPressRepeat=~B.inArray(D.keyCode,[40,38,9,13,27]);this.move(D);},keypress:function(D){if(this.suppressKeyPressRepeat){return ;}this.move(D);},keyup:function(D){switch(D.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown){return ;}this.select();break;case 27:if(!this.shown){return ;}this.hide();break;default:this.lookup();}D.stopPropagation();D.preventDefault();},focus:function(D){this.focused=true;},blur:function(D){this.focused=false;if(!this.mousedover&&this.shown){this.hide();}},click:function(D){D.stopPropagation();D.preventDefault();this.select();this.$element.focus();},mouseenter:function(D){this.mousedover=true;this.$menu.find(".active").removeClass("active");B(D.currentTarget).addClass("active");},mouseleave:function(D){this.mousedover=false;if(!this.focused&&this.shown){this.hide();}}};var A=B.fn.typeahead;B.fn.typeahead=function(D){return this.each(function(){var G=B(this),F=G.data("typeahead"),E=typeof D=="object"&&D;if(!F){G.data("typeahead",(F=new C(this,E)));}if(typeof D=="string"){F[D]();}});};B.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1};B.fn.typeahead.Constructor=C;B.fn.typeahead.noConflict=function(){B.fn.typeahead=A;return this;};B(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(E){var D=B(this);if(D.data("typeahead")){return ;}D.typeahead(D.data());});}(window.jQuery);!function(C){var B=function(E,D){this.options=C.extend({},C.fn.affix.defaults,D);this.$window=C(window).on("scroll.affix.data-api",C.proxy(this.checkPosition,this)).on("click.affix.data-api",C.proxy(function(){setTimeout(C.proxy(this.checkPosition,this),1);},this));this.$element=C(E);this.checkPosition();};B.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return ;}var H=C(document).height(),J=this.$window.scrollTop(),D=this.$element.offset(),K=this.options.offset,F=K.bottom,G=K.top,I="affix affix-top affix-bottom",E;if(typeof K!="object"){F=G=K;}if(typeof G=="function"){G=K.top();}if(typeof F=="function"){F=K.bottom();}E=this.unpin!=null&&(J+this.unpin<=D.top)?false:F!=null&&(D.top+this.$element.height()>=H-F)?"bottom":G!=null&&J<=G?"top":false;if(this.affixed===E){return ;}this.affixed=E;this.unpin=E=="bottom"?D.top-J:null;this.$element.removeClass(I).addClass("affix"+(E?"-"+E:""));};var A=C.fn.affix;C.fn.affix=function(D){return this.each(function(){var G=C(this),F=G.data("affix"),E=typeof D=="object"&&D;if(!F){G.data("affix",(F=new B(this,E)));}if(typeof D=="string"){F[D]();}});};C.fn.affix.Constructor=B;C.fn.affix.defaults={offset:0};C.fn.affix.noConflict=function(){C.fn.affix=A;return this;};C(window).on("load",function(){C('[data-spy="affix"]').each(function(){var E=C(this),D=E.data();D.offset=D.offset||{};D.offsetBottom&&(D.offset.bottom=D.offsetBottom);D.offsetTop&&(D.offset.top=D.offsetTop);E.affix(D);});});}(window.jQuery);
!function(B){var C=function(E,D){this.$element=B(E);this.$indicators=this.$element.find(".carousel-indicators");this.options=D;this.options.pause=="hover"&&this.$element.on("mouseenter",B.proxy(this.pause,this)).on("mouseleave",B.proxy(this.cycle,this));};C.prototype={cycle:function(D){if(!D){this.paused=false;}if(this.interval){clearInterval(this.interval);}this.options.interval&&!this.paused&&(this.interval=setInterval(B.proxy(this.next,this),this.options.interval));return this;},getActiveIndex:function(){this.$active=this.$element.find(".item.active");this.$items=this.$active.parent().children();return this.$items.index(this.$active);},to:function(F){var D=this.getActiveIndex(),E=this;if(F>(this.$items.length-1)||F<0){return ;}if(this.sliding){return this.$element.one("slid",function(){E.to(F);});}if(D==F){return this.pause().cycle();}return this.slide(F>D?"next":"prev",B(this.$items[F]));},pause:function(D){if(!D){this.paused=true;}if(this.$element.find(".next, .prev").length&&B.support.transition.end){this.$element.trigger(B.support.transition.end);this.cycle(true);}clearInterval(this.interval);this.interval=null;return this;},next:function(){if(this.sliding){return ;}return this.slide("next");},prev:function(){if(this.sliding){return ;}return this.slide("prev");},slide:function(J,E){var L=this.$element.find(".item.active"),D=E||L[J](),I=this.interval,K=J=="next"?"left":"right",F=J=="next"?"first":"last",G=this,H;this.sliding=true;I&&this.pause();D=D.length?D:this.$element.find(".item")[F]();H=B.Event("slide",{relatedTarget:D[0],direction:K});if(D.hasClass("active")){return ;}if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");this.$element.one("slid",function(){var M=B(G.$indicators.children()[G.getActiveIndex()]);M&&M.addClass("active");});}if(B.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(H);if(H.isDefaultPrevented()){return ;}D.addClass(J);D[0].offsetWidth;L.addClass(K);D.addClass(K);this.$element.one(B.support.transition.end,function(){D.removeClass([J,K].join(" ")).addClass("active");L.removeClass(["active",K].join(" "));G.sliding=false;setTimeout(function(){G.$element.trigger("slid");},0);});}else{this.$element.trigger(H);if(H.isDefaultPrevented()){return ;}L.removeClass("active");D.addClass("active");this.sliding=false;this.$element.trigger("slid");}I&&this.cycle();return this;}};var A=B.fn.carousel;B.fn.carousel=function(D){return this.each(function(){var H=B(this),G=H.data("carousel"),E=B.extend({},B.fn.carousel.defaults,typeof D=="object"&&D),F=typeof D=="string"?D:E.slide;if(!G){H.data("carousel",(G=new C(this,E)));}if(typeof D=="number"){G.to(D);}else{if(F){G[F]();}else{if(E.interval){G.pause().cycle();}}}});};B.fn.carousel.defaults={interval:5000,pause:"hover"};B.fn.carousel.Constructor=C;B.fn.carousel.noConflict=function(){B.fn.carousel=A;return this;};B(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(I){var H=B(this),E,D=B(H.attr("data-target")||(E=H.attr("href"))&&E.replace(/.*(?=#[^\s]+$)/,"")),F=B.extend({},D.data(),H.data()),G;D.carousel(F);if(G=H.attr("data-slide-to")){D.data("carousel").pause().to(G).cycle();}I.preventDefault();});}(window.jQuery);