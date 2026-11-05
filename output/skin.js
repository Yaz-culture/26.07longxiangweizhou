// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: navigation.ggsk
// Generated 2026-11-05T16:55:59

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 18px;';
		hs+='height : 455px;';
		hs+='position : absolute;';
		hs+='right : -486px;';
		hs+='visibility : inherit;';
		hs+='width : 532px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.onmouseenter=function (e) {
			me._container_1.style.transition='none';
			me._container_1.ggParameter.rx+=-488;me._container_1.ggParameter.ry+=0;
			me._container_1.style.transform=parameterToTransform(me._container_1.ggParameter);
			me.elementMouseOver['container_1']=true;
		}
		me._container_1.onmouseleave=function (e) {
			me._container_1.style.transition='none';
			me._container_1.ggParameter.rx=0;me._container_1.ggParameter.ry=0;
			me._container_1.style.transform=parameterToTransform(me._container_1.ggParameter);
			me.elementMouseOver['container_1']=false;
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='bottom : 180px;';
		hs+='color : #000000;';
		hs+='height : 131px;';
		hs+='position : absolute;';
		hs+='right : 483px;';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\n\u5bfc\n\n\u822a\n\n\u56fe\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._text_1);
		el=me._map_4f=document.createElement('div');
		els=me._map_4f__img=document.createElement('img');
		els.className='ggskin ggskin_map_4f';
		hs=basePath + 'images/map_4f.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map 4F";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 455px;';
		hs+='left : 47px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 488px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_4f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_4f.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4foyers=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-FOYER-S";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 422px;';
		hs+='position : absolute;';
		hs+='top : 248px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4foyers.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4foyers.onclick=function (e) {
			player.openNext('{node6}');
		}
		me.__4foyers.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4foyers);
		el=me.__4foyern=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-FOYER-N";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 422px;';
		hs+='position : absolute;';
		hs+='top : 167px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4foyern.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4foyern.onclick=function (e) {
			player.openNext('{node5}');
		}
		me.__4foyern.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4foyern);
		el=me.__4sr01=document.createElement('div');
		el.ggMarkerNodeId='{node59}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-SR-01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 328px;';
		hs+='position : absolute;';
		hs+='top : 167px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4sr01.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4sr01.onclick=function (e) {
			player.openNext('{node59}');
		}
		me.__4sr01.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4sr01);
		el=me.__4sr02=document.createElement('div');
		el.ggMarkerNodeId='{node8}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-SR-02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : 167px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4sr02.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4sr02.onclick=function (e) {
			player.openNext('{node8}');
		}
		me.__4sr02.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4sr02);
		el=me.__4sr03=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-SR-03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 141px;';
		hs+='position : absolute;';
		hs+='top : 167px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4sr03.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4sr03.onclick=function (e) {
			player.openNext('{node9}');
		}
		me.__4sr03.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4sr03);
		el=me.__4sr04=document.createElement('div');
		el.ggMarkerNodeId='{node10}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-SR-04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 167px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4sr04.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4sr04.onclick=function (e) {
			player.openNext('{node10}');
		}
		me.__4sr04.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4sr04);
		el=me.__4sr05=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-SR-05";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 73px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4sr05.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4sr05.onclick=function (e) {
			player.openNext('{node11}');
		}
		me.__4sr05.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4sr05);
		el=me.__4sr06=document.createElement('div');
		el.ggMarkerNodeId='{node12}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-SR-06";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 141px;';
		hs+='position : absolute;';
		hs+='top : 73px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4sr06.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4sr06.onclick=function (e) {
			player.openNext('{node12}');
		}
		me.__4sr06.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4sr06);
		el=me.__4sr07=document.createElement('div');
		el.ggMarkerNodeId='{node13}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-SR-07";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : 73px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4sr07.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4sr07.onclick=function (e) {
			player.openNext('{node13}');
		}
		me.__4sr07.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4sr07);
		el=me.__4sr08=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-SR-08";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 328px;';
		hs+='position : absolute;';
		hs+='top : 73px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4sr08.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4sr08.onclick=function (e) {
			player.openNext('{node14}');
		}
		me.__4sr08.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4sr08);
		el=me.__4lr01=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-LR-01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 328px;';
		hs+='position : absolute;';
		hs+='top : 266px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4lr01.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4lr01.onclick=function (e) {
			player.openNext('{node1}');
		}
		me.__4lr01.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4lr01);
		el=me.__4lr02=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-LR-02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : 266px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4lr02.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4lr02.onclick=function (e) {
			player.openNext('{node2}');
		}
		me.__4lr02.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4lr02);
		el=me.__4lr03=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-LR-03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 328px;';
		hs+='position : absolute;';
		hs+='top : 358px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4lr03.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4lr03.onclick=function (e) {
			player.openNext('{node3}');
		}
		me.__4lr03.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4lr03);
		el=me.__4lr04=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4-LR-04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 141px;';
		hs+='position : absolute;';
		hs+='top : 268px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4lr04.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4lr04.onclick=function (e) {
			player.openNext('{node4}');
		}
		me.__4lr04.ggUpdatePosition=function (useTransition) {
		}
		me._map_4f.appendChild(me.__4lr04);
		me._container_1.appendChild(me._map_4f);
		el=me._map_5f=document.createElement('div');
		els=me._map_5f__img=document.createElement('img');
		els.className='ggskin ggskin_map_5f';
		hs=basePath + 'images/map_5f.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map 5F";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 455px;';
		hs+='position : absolute;';
		hs+='right : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 488px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_5f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_5f.ggUpdatePosition=function (useTransition) {
		}
		el=me._entracne5f=document.createElement('div');
		el.ggMarkerNodeId='{node16}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="entracne5f";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 356px;';
		hs+='position : absolute;';
		hs+='top : 117px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._entracne5f.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._entracne5f.onclick=function (e) {
			player.openNext('{node16}');
		}
		me._entracne5f.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._entracne5f);
		el=me._dh01=document.createElement('div');
		el.ggMarkerNodeId='{node15}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="DH-01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 391px;';
		hs+='position : absolute;';
		hs+='top : 134px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dh01.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._dh01.onclick=function (e) {
			player.openNext('{node15}');
		}
		me._dh01.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._dh01);
		el=me._foreword5f=document.createElement('div');
		el.ggMarkerNodeId='{node27}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="FOREWORD5f";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 343px;';
		hs+='position : absolute;';
		hs+='top : 85px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._foreword5f.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._foreword5f.onclick=function (e) {
			player.openNext('{node27}');
		}
		me._foreword5f.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._foreword5f);
		el=me._wr01=document.createElement('div');
		el.ggMarkerNodeId='{node55}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="WR-01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 395px;';
		hs+='position : absolute;';
		hs+='top : 167px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._wr01.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._wr01.onclick=function (e) {
			player.openNext('{node55}');
		}
		me._wr01.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._wr01);
		el=me._er04=document.createElement('div');
		el.ggMarkerNodeId='{node20}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="ER-04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 452px;';
		hs+='position : absolute;';
		hs+='top : 88px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._er04.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._er04.onclick=function (e) {
			player.openNext('{node20}');
		}
		me._er04.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._er04);
		el=me._er03=document.createElement('div');
		el.ggMarkerNodeId='{node19}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="ER-03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 452px;';
		hs+='position : absolute;';
		hs+='top : 117px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._er03.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._er03.onclick=function (e) {
			player.openNext('{node19}');
		}
		me._er03.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._er03);
		el=me._er02=document.createElement('div');
		el.ggMarkerNodeId='{node18}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="ER-02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 452px;';
		hs+='position : absolute;';
		hs+='top : 141px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._er02.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._er02.onclick=function (e) {
			player.openNext('{node18}');
		}
		me._er02.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._er02);
		el=me._er01=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="ER-01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 452px;';
		hs+='position : absolute;';
		hs+='top : 170px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._er01.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._er01.onclick=function (e) {
			player.openNext('{node17}');
		}
		me._er01.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._er01);
		el=me._es03=document.createElement('div');
		el.ggMarkerNodeId='{node23}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="ES-03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 429px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._es03.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._es03.onclick=function (e) {
			player.openNext('{node23}');
		}
		me._es03.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._es03);
		el=me._es02=document.createElement('div');
		el.ggMarkerNodeId='{node22}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="ES-02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 380px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._es02.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._es02.onclick=function (e) {
			player.openNext('{node22}');
		}
		me._es02.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._es02);
		el=me._es01=document.createElement('div');
		el.ggMarkerNodeId='{node21}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="ES-01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 338px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._es01.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._es01.onclick=function (e) {
			player.openNext('{node21}');
		}
		me._es01.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._es01);
		el=me._es06=document.createElement('div');
		el.ggMarkerNodeId='{node26}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="ES-06";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 357px;';
		hs+='position : absolute;';
		hs+='top : 52px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._es06.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._es06.onclick=function (e) {
			player.openNext('{node26}');
		}
		me._es06.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._es06);
		el=me._es04=document.createElement('div');
		el.ggMarkerNodeId='{node24}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="ES-04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 402px;';
		hs+='position : absolute;';
		hs+='top : 52px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._es04.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._es04.onclick=function (e) {
			player.openNext('{node24}');
		}
		me._es04.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._es04);
		el=me._es05=document.createElement('div');
		el.ggMarkerNodeId='{node25}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="ES-05";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 379px;';
		hs+='position : absolute;';
		hs+='top : 53px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._es05.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._es05.onclick=function (e) {
			player.openNext('{node25}');
		}
		me._es05.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._es05);
		el=me._sr01=document.createElement('div');
		el.ggMarkerNodeId='{node39}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="SR-01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 124px;';
		hs+='position : absolute;';
		hs+='top : 86px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr01.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._sr01.onclick=function (e) {
			player.openNext('{node39}');
		}
		me._sr01.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._sr01);
		el=me._sr02=document.createElement('div');
		el.ggMarkerNodeId='{node40}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="SR-02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 149px;';
		hs+='position : absolute;';
		hs+='top : 86px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr02.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._sr02.onclick=function (e) {
			player.openNext('{node40}');
		}
		me._sr02.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._sr02);
		el=me._sr03=document.createElement('div');
		el.ggMarkerNodeId='{node41}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="SR-03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 174px;';
		hs+='position : absolute;';
		hs+='top : 86px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr03.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._sr03.onclick=function (e) {
			player.openNext('{node41}');
		}
		me._sr03.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._sr03);
		el=me._sr04=document.createElement('div');
		el.ggMarkerNodeId='{node65}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="SR-04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 86px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr04.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._sr04.onclick=function (e) {
			player.openNext('{node65}');
		}
		me._sr04.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._sr04);
		el=me._sr05=document.createElement('div');
		el.ggMarkerNodeId='{node66}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="SR-05";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 226px;';
		hs+='position : absolute;';
		hs+='top : 86px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr05.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._sr05.onclick=function (e) {
			player.openNext('{node66}');
		}
		me._sr05.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._sr05);
		el=me._sr06=document.createElement('div');
		el.ggMarkerNodeId='{node67}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="SR-06";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 251px;';
		hs+='position : absolute;';
		hs+='top : 86px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr06.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._sr06.onclick=function (e) {
			player.openNext('{node67}');
		}
		me._sr06.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._sr06);
		el=me._sr07=document.createElement('div');
		el.ggMarkerNodeId='{node68}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="SR-07";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 275px;';
		hs+='position : absolute;';
		hs+='top : 86px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr07.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._sr07.onclick=function (e) {
			player.openNext('{node68}');
		}
		me._sr07.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._sr07);
		el=me._sr08=document.createElement('div');
		el.ggMarkerNodeId='{node69}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="SR-08";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 86px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr08.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._sr08.onclick=function (e) {
			player.openNext('{node69}');
		}
		me._sr08.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._sr08);
		el=me._nr01=document.createElement('div');
		el.ggMarkerNodeId='{node31}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="NR-01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 124px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nr01.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._nr01.onclick=function (e) {
			player.openNext('{node31}');
		}
		me._nr01.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._nr01);
		el=me._nr02=document.createElement('div');
		el.ggMarkerNodeId='{node32}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="NR-02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 149px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nr02.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._nr02.onclick=function (e) {
			player.openNext('{node32}');
		}
		me._nr02.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._nr02);
		el=me._nr03=document.createElement('div');
		el.ggMarkerNodeId='{node33}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="NR-03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 174px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nr03.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._nr03.onclick=function (e) {
			player.openNext('{node33}');
		}
		me._nr03.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._nr03);
		el=me._nr04=document.createElement('div');
		el.ggMarkerNodeId='{node60}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="NR-04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nr04.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._nr04.onclick=function (e) {
			player.openNext('{node60}');
		}
		me._nr04.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._nr04);
		el=me._nr05=document.createElement('div');
		el.ggMarkerNodeId='{node61}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="NR-05";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 226px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nr05.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._nr05.onclick=function (e) {
			player.openNext('{node61}');
		}
		me._nr05.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._nr05);
		el=me._nr06=document.createElement('div');
		el.ggMarkerNodeId='{node62}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="NR-06";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 251px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nr06.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._nr06.onclick=function (e) {
			player.openNext('{node62}');
		}
		me._nr06.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._nr06);
		el=me._nr07=document.createElement('div');
		el.ggMarkerNodeId='{node63}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="NR-07";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 275px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nr07.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._nr07.onclick=function (e) {
			player.openNext('{node63}');
		}
		me._nr07.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._nr07);
		el=me._nr08=document.createElement('div');
		el.ggMarkerNodeId='{node64}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="NR-08";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nr08.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._nr08.onclick=function (e) {
			player.openNext('{node64}');
		}
		me._nr08.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._nr08);
		el=me._ws01=document.createElement('div');
		el.ggMarkerNodeId='{node56}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="WS-01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ws01.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._ws01.onclick=function (e) {
			player.openNext('{node56}');
		}
		me._ws01.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._ws01);
		el=me._ws02=document.createElement('div');
		el.ggMarkerNodeId='{node57}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="WS-02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 95px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ws02.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._ws02.onclick=function (e) {
			player.openNext('{node57}');
		}
		me._ws02.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._ws02);
		el=me._ws03=document.createElement('div');
		el.ggMarkerNodeId='{node58}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="WS-03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 82px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ws03.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._ws03.onclick=function (e) {
			player.openNext('{node58}');
		}
		me._ws03.ggUpdatePosition=function (useTransition) {
		}
		me._map_5f.appendChild(me._ws03);
		me._container_1.appendChild(me._map_5f);
		el=me._switch4f=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="switch4F";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 368px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._switch4f.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._switch4f.onclick=function (e) {
			me._map_5f.style.transition='none';
			me._map_5f.style.opacity='1';
			me._map_5f.style.visibility=me._map_5f.ggVisible?'inherit':'hidden';
			me._switch5f.style.transition='none';
			me._switch5f.style.visibility=(Number(me._switch5f.style.opacity)>0||!me._switch5f.style.opacity)?'inherit':'hidden';
			me._switch5f.ggVisible=true;
			me._switch4f.style.transition='none';
			me._switch4f.style.visibility='hidden';
			me._switch4f.ggVisible=false;
		}
		me._switch4f.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._switch4f);
		el=me._switch5f=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="switch5F";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 368px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._switch5f.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._switch5f.onclick=function (e) {
			me._map_5f.style.transition='none';
			me._map_5f.style.opacity='0';
			me._map_5f.style.visibility='hidden';
			me._switch4f.style.transition='none';
			me._switch4f.style.visibility=(Number(me._switch4f.style.opacity)>0||!me._switch4f.style.opacity)?'inherit':'hidden';
			me._switch4f.ggVisible=true;
			me._switch5f.style.transition='none';
			me._switch5f.style.visibility='hidden';
			me._switch5f.ggVisible=false;
		}
		me._switch5f.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._switch5f);
		me.divSkin.appendChild(me._container_1);
		me.elementMouseOver['container_1']=false;
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4foyers);
		me.__4foyers__normal = clonedNormalElement._image_2;
		me.__4foyers__normalInst = clonedNormalElement;
		me.__4foyers__normal.style.visibility='inherit';
		me.__4foyers__normal.style.left='0px';
		me.__4foyers__normal.style.top='0px';
		me.__4foyers.ggMarkerNormal=me.__4foyers__normal;
		me.__4foyers.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4foyers);
		me.__4foyers__active = clonedActiveElement._image_3;
		me.__4foyers__activeInst = clonedActiveElement;
		me.__4foyers__active.style.visibility='hidden';
		me.__4foyers__active.style.left='0px';
		me.__4foyers__active.style.top='0px';
		me.__4foyers.ggMarkerActive=me.__4foyers__active;
		me.__4foyers.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4foyers.firstChild) {
			me.__4foyers.insertBefore(me.__4foyers__active,me.__4foyers.firstChild);
		} else {
			me.__4foyers.appendChild(me.__4foyers__active);
		}
		if (me.__4foyers.firstChild) {
			me.__4foyers.insertBefore(me.__4foyers__normal,me.__4foyers.firstChild);
		} else {
			me.__4foyers.appendChild(me.__4foyers__normal);
		}
		for (var i = 0; i < me.__4foyers.childNodes.length; i++) {
			me.__4foyers.ggMarkerInstances.push(me.__4foyers.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4foyern);
		me.__4foyern__normal = clonedNormalElement._image_2;
		me.__4foyern__normalInst = clonedNormalElement;
		me.__4foyern__normal.style.visibility='inherit';
		me.__4foyern__normal.style.left='0px';
		me.__4foyern__normal.style.top='0px';
		me.__4foyern.ggMarkerNormal=me.__4foyern__normal;
		me.__4foyern.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4foyern);
		me.__4foyern__active = clonedActiveElement._image_3;
		me.__4foyern__activeInst = clonedActiveElement;
		me.__4foyern__active.style.visibility='hidden';
		me.__4foyern__active.style.left='0px';
		me.__4foyern__active.style.top='0px';
		me.__4foyern.ggMarkerActive=me.__4foyern__active;
		me.__4foyern.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4foyern.firstChild) {
			me.__4foyern.insertBefore(me.__4foyern__active,me.__4foyern.firstChild);
		} else {
			me.__4foyern.appendChild(me.__4foyern__active);
		}
		if (me.__4foyern.firstChild) {
			me.__4foyern.insertBefore(me.__4foyern__normal,me.__4foyern.firstChild);
		} else {
			me.__4foyern.appendChild(me.__4foyern__normal);
		}
		for (var i = 0; i < me.__4foyern.childNodes.length; i++) {
			me.__4foyern.ggMarkerInstances.push(me.__4foyern.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4sr01);
		me.__4sr01__normal = clonedNormalElement._image_2;
		me.__4sr01__normalInst = clonedNormalElement;
		me.__4sr01__normal.style.visibility='inherit';
		me.__4sr01__normal.style.left='0px';
		me.__4sr01__normal.style.top='0px';
		me.__4sr01.ggMarkerNormal=me.__4sr01__normal;
		me.__4sr01.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4sr01);
		me.__4sr01__active = clonedActiveElement._image_3;
		me.__4sr01__activeInst = clonedActiveElement;
		me.__4sr01__active.style.visibility='hidden';
		me.__4sr01__active.style.left='0px';
		me.__4sr01__active.style.top='0px';
		me.__4sr01.ggMarkerActive=me.__4sr01__active;
		me.__4sr01.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4sr01.firstChild) {
			me.__4sr01.insertBefore(me.__4sr01__active,me.__4sr01.firstChild);
		} else {
			me.__4sr01.appendChild(me.__4sr01__active);
		}
		if (me.__4sr01.firstChild) {
			me.__4sr01.insertBefore(me.__4sr01__normal,me.__4sr01.firstChild);
		} else {
			me.__4sr01.appendChild(me.__4sr01__normal);
		}
		for (var i = 0; i < me.__4sr01.childNodes.length; i++) {
			me.__4sr01.ggMarkerInstances.push(me.__4sr01.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4sr02);
		me.__4sr02__normal = clonedNormalElement._image_2;
		me.__4sr02__normalInst = clonedNormalElement;
		me.__4sr02__normal.style.visibility='inherit';
		me.__4sr02__normal.style.left='0px';
		me.__4sr02__normal.style.top='0px';
		me.__4sr02.ggMarkerNormal=me.__4sr02__normal;
		me.__4sr02.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4sr02);
		me.__4sr02__active = clonedActiveElement._image_3;
		me.__4sr02__activeInst = clonedActiveElement;
		me.__4sr02__active.style.visibility='hidden';
		me.__4sr02__active.style.left='0px';
		me.__4sr02__active.style.top='0px';
		me.__4sr02.ggMarkerActive=me.__4sr02__active;
		me.__4sr02.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4sr02.firstChild) {
			me.__4sr02.insertBefore(me.__4sr02__active,me.__4sr02.firstChild);
		} else {
			me.__4sr02.appendChild(me.__4sr02__active);
		}
		if (me.__4sr02.firstChild) {
			me.__4sr02.insertBefore(me.__4sr02__normal,me.__4sr02.firstChild);
		} else {
			me.__4sr02.appendChild(me.__4sr02__normal);
		}
		for (var i = 0; i < me.__4sr02.childNodes.length; i++) {
			me.__4sr02.ggMarkerInstances.push(me.__4sr02.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4sr03);
		me.__4sr03__normal = clonedNormalElement._image_2;
		me.__4sr03__normalInst = clonedNormalElement;
		me.__4sr03__normal.style.visibility='inherit';
		me.__4sr03__normal.style.left='0px';
		me.__4sr03__normal.style.top='0px';
		me.__4sr03.ggMarkerNormal=me.__4sr03__normal;
		me.__4sr03.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4sr03);
		me.__4sr03__active = clonedActiveElement._image_3;
		me.__4sr03__activeInst = clonedActiveElement;
		me.__4sr03__active.style.visibility='hidden';
		me.__4sr03__active.style.left='0px';
		me.__4sr03__active.style.top='0px';
		me.__4sr03.ggMarkerActive=me.__4sr03__active;
		me.__4sr03.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4sr03.firstChild) {
			me.__4sr03.insertBefore(me.__4sr03__active,me.__4sr03.firstChild);
		} else {
			me.__4sr03.appendChild(me.__4sr03__active);
		}
		if (me.__4sr03.firstChild) {
			me.__4sr03.insertBefore(me.__4sr03__normal,me.__4sr03.firstChild);
		} else {
			me.__4sr03.appendChild(me.__4sr03__normal);
		}
		for (var i = 0; i < me.__4sr03.childNodes.length; i++) {
			me.__4sr03.ggMarkerInstances.push(me.__4sr03.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4sr04);
		me.__4sr04__normal = clonedNormalElement._image_2;
		me.__4sr04__normalInst = clonedNormalElement;
		me.__4sr04__normal.style.visibility='inherit';
		me.__4sr04__normal.style.left='0px';
		me.__4sr04__normal.style.top='0px';
		me.__4sr04.ggMarkerNormal=me.__4sr04__normal;
		me.__4sr04.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4sr04);
		me.__4sr04__active = clonedActiveElement._image_3;
		me.__4sr04__activeInst = clonedActiveElement;
		me.__4sr04__active.style.visibility='hidden';
		me.__4sr04__active.style.left='0px';
		me.__4sr04__active.style.top='0px';
		me.__4sr04.ggMarkerActive=me.__4sr04__active;
		me.__4sr04.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4sr04.firstChild) {
			me.__4sr04.insertBefore(me.__4sr04__active,me.__4sr04.firstChild);
		} else {
			me.__4sr04.appendChild(me.__4sr04__active);
		}
		if (me.__4sr04.firstChild) {
			me.__4sr04.insertBefore(me.__4sr04__normal,me.__4sr04.firstChild);
		} else {
			me.__4sr04.appendChild(me.__4sr04__normal);
		}
		for (var i = 0; i < me.__4sr04.childNodes.length; i++) {
			me.__4sr04.ggMarkerInstances.push(me.__4sr04.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4sr05);
		me.__4sr05__normal = clonedNormalElement._image_2;
		me.__4sr05__normalInst = clonedNormalElement;
		me.__4sr05__normal.style.visibility='inherit';
		me.__4sr05__normal.style.left='0px';
		me.__4sr05__normal.style.top='0px';
		me.__4sr05.ggMarkerNormal=me.__4sr05__normal;
		me.__4sr05.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4sr05);
		me.__4sr05__active = clonedActiveElement._image_3;
		me.__4sr05__activeInst = clonedActiveElement;
		me.__4sr05__active.style.visibility='hidden';
		me.__4sr05__active.style.left='0px';
		me.__4sr05__active.style.top='0px';
		me.__4sr05.ggMarkerActive=me.__4sr05__active;
		me.__4sr05.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4sr05.firstChild) {
			me.__4sr05.insertBefore(me.__4sr05__active,me.__4sr05.firstChild);
		} else {
			me.__4sr05.appendChild(me.__4sr05__active);
		}
		if (me.__4sr05.firstChild) {
			me.__4sr05.insertBefore(me.__4sr05__normal,me.__4sr05.firstChild);
		} else {
			me.__4sr05.appendChild(me.__4sr05__normal);
		}
		for (var i = 0; i < me.__4sr05.childNodes.length; i++) {
			me.__4sr05.ggMarkerInstances.push(me.__4sr05.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4sr06);
		me.__4sr06__normal = clonedNormalElement._image_2;
		me.__4sr06__normalInst = clonedNormalElement;
		me.__4sr06__normal.style.visibility='inherit';
		me.__4sr06__normal.style.left='0px';
		me.__4sr06__normal.style.top='0px';
		me.__4sr06.ggMarkerNormal=me.__4sr06__normal;
		me.__4sr06.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4sr06);
		me.__4sr06__active = clonedActiveElement._image_3;
		me.__4sr06__activeInst = clonedActiveElement;
		me.__4sr06__active.style.visibility='hidden';
		me.__4sr06__active.style.left='0px';
		me.__4sr06__active.style.top='0px';
		me.__4sr06.ggMarkerActive=me.__4sr06__active;
		me.__4sr06.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4sr06.firstChild) {
			me.__4sr06.insertBefore(me.__4sr06__active,me.__4sr06.firstChild);
		} else {
			me.__4sr06.appendChild(me.__4sr06__active);
		}
		if (me.__4sr06.firstChild) {
			me.__4sr06.insertBefore(me.__4sr06__normal,me.__4sr06.firstChild);
		} else {
			me.__4sr06.appendChild(me.__4sr06__normal);
		}
		for (var i = 0; i < me.__4sr06.childNodes.length; i++) {
			me.__4sr06.ggMarkerInstances.push(me.__4sr06.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4sr07);
		me.__4sr07__normal = clonedNormalElement._image_2;
		me.__4sr07__normalInst = clonedNormalElement;
		me.__4sr07__normal.style.visibility='inherit';
		me.__4sr07__normal.style.left='0px';
		me.__4sr07__normal.style.top='0px';
		me.__4sr07.ggMarkerNormal=me.__4sr07__normal;
		me.__4sr07.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4sr07);
		me.__4sr07__active = clonedActiveElement._image_3;
		me.__4sr07__activeInst = clonedActiveElement;
		me.__4sr07__active.style.visibility='hidden';
		me.__4sr07__active.style.left='0px';
		me.__4sr07__active.style.top='0px';
		me.__4sr07.ggMarkerActive=me.__4sr07__active;
		me.__4sr07.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4sr07.firstChild) {
			me.__4sr07.insertBefore(me.__4sr07__active,me.__4sr07.firstChild);
		} else {
			me.__4sr07.appendChild(me.__4sr07__active);
		}
		if (me.__4sr07.firstChild) {
			me.__4sr07.insertBefore(me.__4sr07__normal,me.__4sr07.firstChild);
		} else {
			me.__4sr07.appendChild(me.__4sr07__normal);
		}
		for (var i = 0; i < me.__4sr07.childNodes.length; i++) {
			me.__4sr07.ggMarkerInstances.push(me.__4sr07.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4sr08);
		me.__4sr08__normal = clonedNormalElement._image_2;
		me.__4sr08__normalInst = clonedNormalElement;
		me.__4sr08__normal.style.visibility='inherit';
		me.__4sr08__normal.style.left='0px';
		me.__4sr08__normal.style.top='0px';
		me.__4sr08.ggMarkerNormal=me.__4sr08__normal;
		me.__4sr08.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4sr08);
		me.__4sr08__active = clonedActiveElement._image_3;
		me.__4sr08__activeInst = clonedActiveElement;
		me.__4sr08__active.style.visibility='hidden';
		me.__4sr08__active.style.left='0px';
		me.__4sr08__active.style.top='0px';
		me.__4sr08.ggMarkerActive=me.__4sr08__active;
		me.__4sr08.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4sr08.firstChild) {
			me.__4sr08.insertBefore(me.__4sr08__active,me.__4sr08.firstChild);
		} else {
			me.__4sr08.appendChild(me.__4sr08__active);
		}
		if (me.__4sr08.firstChild) {
			me.__4sr08.insertBefore(me.__4sr08__normal,me.__4sr08.firstChild);
		} else {
			me.__4sr08.appendChild(me.__4sr08__normal);
		}
		for (var i = 0; i < me.__4sr08.childNodes.length; i++) {
			me.__4sr08.ggMarkerInstances.push(me.__4sr08.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4lr01);
		me.__4lr01__normal = clonedNormalElement._image_2;
		me.__4lr01__normalInst = clonedNormalElement;
		me.__4lr01__normal.style.visibility='inherit';
		me.__4lr01__normal.style.left='0px';
		me.__4lr01__normal.style.top='0px';
		me.__4lr01.ggMarkerNormal=me.__4lr01__normal;
		me.__4lr01.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4lr01);
		me.__4lr01__active = clonedActiveElement._image_3;
		me.__4lr01__activeInst = clonedActiveElement;
		me.__4lr01__active.style.visibility='hidden';
		me.__4lr01__active.style.left='0px';
		me.__4lr01__active.style.top='0px';
		me.__4lr01.ggMarkerActive=me.__4lr01__active;
		me.__4lr01.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4lr01.firstChild) {
			me.__4lr01.insertBefore(me.__4lr01__active,me.__4lr01.firstChild);
		} else {
			me.__4lr01.appendChild(me.__4lr01__active);
		}
		if (me.__4lr01.firstChild) {
			me.__4lr01.insertBefore(me.__4lr01__normal,me.__4lr01.firstChild);
		} else {
			me.__4lr01.appendChild(me.__4lr01__normal);
		}
		for (var i = 0; i < me.__4lr01.childNodes.length; i++) {
			me.__4lr01.ggMarkerInstances.push(me.__4lr01.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4lr02);
		me.__4lr02__normal = clonedNormalElement._image_2;
		me.__4lr02__normalInst = clonedNormalElement;
		me.__4lr02__normal.style.visibility='inherit';
		me.__4lr02__normal.style.left='0px';
		me.__4lr02__normal.style.top='0px';
		me.__4lr02.ggMarkerNormal=me.__4lr02__normal;
		me.__4lr02.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4lr02);
		me.__4lr02__active = clonedActiveElement._image_3;
		me.__4lr02__activeInst = clonedActiveElement;
		me.__4lr02__active.style.visibility='hidden';
		me.__4lr02__active.style.left='0px';
		me.__4lr02__active.style.top='0px';
		me.__4lr02.ggMarkerActive=me.__4lr02__active;
		me.__4lr02.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4lr02.firstChild) {
			me.__4lr02.insertBefore(me.__4lr02__active,me.__4lr02.firstChild);
		} else {
			me.__4lr02.appendChild(me.__4lr02__active);
		}
		if (me.__4lr02.firstChild) {
			me.__4lr02.insertBefore(me.__4lr02__normal,me.__4lr02.firstChild);
		} else {
			me.__4lr02.appendChild(me.__4lr02__normal);
		}
		for (var i = 0; i < me.__4lr02.childNodes.length; i++) {
			me.__4lr02.ggMarkerInstances.push(me.__4lr02.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4lr03);
		me.__4lr03__normal = clonedNormalElement._image_2;
		me.__4lr03__normalInst = clonedNormalElement;
		me.__4lr03__normal.style.visibility='inherit';
		me.__4lr03__normal.style.left='0px';
		me.__4lr03__normal.style.top='0px';
		me.__4lr03.ggMarkerNormal=me.__4lr03__normal;
		me.__4lr03.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4lr03);
		me.__4lr03__active = clonedActiveElement._image_3;
		me.__4lr03__activeInst = clonedActiveElement;
		me.__4lr03__active.style.visibility='hidden';
		me.__4lr03__active.style.left='0px';
		me.__4lr03__active.style.top='0px';
		me.__4lr03.ggMarkerActive=me.__4lr03__active;
		me.__4lr03.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4lr03.firstChild) {
			me.__4lr03.insertBefore(me.__4lr03__active,me.__4lr03.firstChild);
		} else {
			me.__4lr03.appendChild(me.__4lr03__active);
		}
		if (me.__4lr03.firstChild) {
			me.__4lr03.insertBefore(me.__4lr03__normal,me.__4lr03.firstChild);
		} else {
			me.__4lr03.appendChild(me.__4lr03__normal);
		}
		for (var i = 0; i < me.__4lr03.childNodes.length; i++) {
			me.__4lr03.ggMarkerInstances.push(me.__4lr03.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me.__4lr04);
		me.__4lr04__normal = clonedNormalElement._image_2;
		me.__4lr04__normalInst = clonedNormalElement;
		me.__4lr04__normal.style.visibility='inherit';
		me.__4lr04__normal.style.left='0px';
		me.__4lr04__normal.style.top='0px';
		me.__4lr04.ggMarkerNormal=me.__4lr04__normal;
		me.__4lr04.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me.__4lr04);
		me.__4lr04__active = clonedActiveElement._image_3;
		me.__4lr04__activeInst = clonedActiveElement;
		me.__4lr04__active.style.visibility='hidden';
		me.__4lr04__active.style.left='0px';
		me.__4lr04__active.style.top='0px';
		me.__4lr04.ggMarkerActive=me.__4lr04__active;
		me.__4lr04.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4lr04.firstChild) {
			me.__4lr04.insertBefore(me.__4lr04__active,me.__4lr04.firstChild);
		} else {
			me.__4lr04.appendChild(me.__4lr04__active);
		}
		if (me.__4lr04.firstChild) {
			me.__4lr04.insertBefore(me.__4lr04__normal,me.__4lr04.firstChild);
		} else {
			me.__4lr04.appendChild(me.__4lr04__normal);
		}
		for (var i = 0; i < me.__4lr04.childNodes.length; i++) {
			me.__4lr04.ggMarkerInstances.push(me.__4lr04.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._entracne5f);
		me._entracne5f__normal = clonedNormalElement._image_2;
		me._entracne5f__normalInst = clonedNormalElement;
		me._entracne5f__normal.style.visibility='inherit';
		me._entracne5f__normal.style.left='0px';
		me._entracne5f__normal.style.top='0px';
		me._entracne5f.ggMarkerNormal=me._entracne5f__normal;
		me._entracne5f.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._entracne5f);
		me._entracne5f__active = clonedActiveElement._image_3;
		me._entracne5f__activeInst = clonedActiveElement;
		me._entracne5f__active.style.visibility='hidden';
		me._entracne5f__active.style.left='0px';
		me._entracne5f__active.style.top='0px';
		me._entracne5f.ggMarkerActive=me._entracne5f__active;
		me._entracne5f.ggMarkerInstances.push(clonedActiveElement);
		if (me._entracne5f.firstChild) {
			me._entracne5f.insertBefore(me._entracne5f__active,me._entracne5f.firstChild);
		} else {
			me._entracne5f.appendChild(me._entracne5f__active);
		}
		if (me._entracne5f.firstChild) {
			me._entracne5f.insertBefore(me._entracne5f__normal,me._entracne5f.firstChild);
		} else {
			me._entracne5f.appendChild(me._entracne5f__normal);
		}
		for (var i = 0; i < me._entracne5f.childNodes.length; i++) {
			me._entracne5f.ggMarkerInstances.push(me._entracne5f.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._dh01);
		me._dh01__normal = clonedNormalElement._image_2;
		me._dh01__normalInst = clonedNormalElement;
		me._dh01__normal.style.visibility='inherit';
		me._dh01__normal.style.left='0px';
		me._dh01__normal.style.top='0px';
		me._dh01.ggMarkerNormal=me._dh01__normal;
		me._dh01.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._dh01);
		me._dh01__active = clonedActiveElement._image_3;
		me._dh01__activeInst = clonedActiveElement;
		me._dh01__active.style.visibility='hidden';
		me._dh01__active.style.left='0px';
		me._dh01__active.style.top='0px';
		me._dh01.ggMarkerActive=me._dh01__active;
		me._dh01.ggMarkerInstances.push(clonedActiveElement);
		if (me._dh01.firstChild) {
			me._dh01.insertBefore(me._dh01__active,me._dh01.firstChild);
		} else {
			me._dh01.appendChild(me._dh01__active);
		}
		if (me._dh01.firstChild) {
			me._dh01.insertBefore(me._dh01__normal,me._dh01.firstChild);
		} else {
			me._dh01.appendChild(me._dh01__normal);
		}
		for (var i = 0; i < me._dh01.childNodes.length; i++) {
			me._dh01.ggMarkerInstances.push(me._dh01.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._foreword5f);
		me._foreword5f__normal = clonedNormalElement._image_2;
		me._foreword5f__normalInst = clonedNormalElement;
		me._foreword5f__normal.style.visibility='inherit';
		me._foreword5f__normal.style.left='0px';
		me._foreword5f__normal.style.top='0px';
		me._foreword5f.ggMarkerNormal=me._foreword5f__normal;
		me._foreword5f.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._foreword5f);
		me._foreword5f__active = clonedActiveElement._image_3;
		me._foreword5f__activeInst = clonedActiveElement;
		me._foreword5f__active.style.visibility='hidden';
		me._foreword5f__active.style.left='0px';
		me._foreword5f__active.style.top='0px';
		me._foreword5f.ggMarkerActive=me._foreword5f__active;
		me._foreword5f.ggMarkerInstances.push(clonedActiveElement);
		if (me._foreword5f.firstChild) {
			me._foreword5f.insertBefore(me._foreword5f__active,me._foreword5f.firstChild);
		} else {
			me._foreword5f.appendChild(me._foreword5f__active);
		}
		if (me._foreword5f.firstChild) {
			me._foreword5f.insertBefore(me._foreword5f__normal,me._foreword5f.firstChild);
		} else {
			me._foreword5f.appendChild(me._foreword5f__normal);
		}
		for (var i = 0; i < me._foreword5f.childNodes.length; i++) {
			me._foreword5f.ggMarkerInstances.push(me._foreword5f.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._wr01);
		me._wr01__normal = clonedNormalElement._image_2;
		me._wr01__normalInst = clonedNormalElement;
		me._wr01__normal.style.visibility='inherit';
		me._wr01__normal.style.left='0px';
		me._wr01__normal.style.top='0px';
		me._wr01.ggMarkerNormal=me._wr01__normal;
		me._wr01.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._wr01);
		me._wr01__active = clonedActiveElement._image_3;
		me._wr01__activeInst = clonedActiveElement;
		me._wr01__active.style.visibility='hidden';
		me._wr01__active.style.left='0px';
		me._wr01__active.style.top='0px';
		me._wr01.ggMarkerActive=me._wr01__active;
		me._wr01.ggMarkerInstances.push(clonedActiveElement);
		if (me._wr01.firstChild) {
			me._wr01.insertBefore(me._wr01__active,me._wr01.firstChild);
		} else {
			me._wr01.appendChild(me._wr01__active);
		}
		if (me._wr01.firstChild) {
			me._wr01.insertBefore(me._wr01__normal,me._wr01.firstChild);
		} else {
			me._wr01.appendChild(me._wr01__normal);
		}
		for (var i = 0; i < me._wr01.childNodes.length; i++) {
			me._wr01.ggMarkerInstances.push(me._wr01.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._er04);
		me._er04__normal = clonedNormalElement._image_2;
		me._er04__normalInst = clonedNormalElement;
		me._er04__normal.style.visibility='inherit';
		me._er04__normal.style.left='0px';
		me._er04__normal.style.top='0px';
		me._er04.ggMarkerNormal=me._er04__normal;
		me._er04.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._er04);
		me._er04__active = clonedActiveElement._image_3;
		me._er04__activeInst = clonedActiveElement;
		me._er04__active.style.visibility='hidden';
		me._er04__active.style.left='0px';
		me._er04__active.style.top='0px';
		me._er04.ggMarkerActive=me._er04__active;
		me._er04.ggMarkerInstances.push(clonedActiveElement);
		if (me._er04.firstChild) {
			me._er04.insertBefore(me._er04__active,me._er04.firstChild);
		} else {
			me._er04.appendChild(me._er04__active);
		}
		if (me._er04.firstChild) {
			me._er04.insertBefore(me._er04__normal,me._er04.firstChild);
		} else {
			me._er04.appendChild(me._er04__normal);
		}
		for (var i = 0; i < me._er04.childNodes.length; i++) {
			me._er04.ggMarkerInstances.push(me._er04.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._er03);
		me._er03__normal = clonedNormalElement._image_2;
		me._er03__normalInst = clonedNormalElement;
		me._er03__normal.style.visibility='inherit';
		me._er03__normal.style.left='0px';
		me._er03__normal.style.top='0px';
		me._er03.ggMarkerNormal=me._er03__normal;
		me._er03.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._er03);
		me._er03__active = clonedActiveElement._image_3;
		me._er03__activeInst = clonedActiveElement;
		me._er03__active.style.visibility='hidden';
		me._er03__active.style.left='0px';
		me._er03__active.style.top='0px';
		me._er03.ggMarkerActive=me._er03__active;
		me._er03.ggMarkerInstances.push(clonedActiveElement);
		if (me._er03.firstChild) {
			me._er03.insertBefore(me._er03__active,me._er03.firstChild);
		} else {
			me._er03.appendChild(me._er03__active);
		}
		if (me._er03.firstChild) {
			me._er03.insertBefore(me._er03__normal,me._er03.firstChild);
		} else {
			me._er03.appendChild(me._er03__normal);
		}
		for (var i = 0; i < me._er03.childNodes.length; i++) {
			me._er03.ggMarkerInstances.push(me._er03.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._er02);
		me._er02__normal = clonedNormalElement._image_2;
		me._er02__normalInst = clonedNormalElement;
		me._er02__normal.style.visibility='inherit';
		me._er02__normal.style.left='0px';
		me._er02__normal.style.top='0px';
		me._er02.ggMarkerNormal=me._er02__normal;
		me._er02.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._er02);
		me._er02__active = clonedActiveElement._image_3;
		me._er02__activeInst = clonedActiveElement;
		me._er02__active.style.visibility='hidden';
		me._er02__active.style.left='0px';
		me._er02__active.style.top='0px';
		me._er02.ggMarkerActive=me._er02__active;
		me._er02.ggMarkerInstances.push(clonedActiveElement);
		if (me._er02.firstChild) {
			me._er02.insertBefore(me._er02__active,me._er02.firstChild);
		} else {
			me._er02.appendChild(me._er02__active);
		}
		if (me._er02.firstChild) {
			me._er02.insertBefore(me._er02__normal,me._er02.firstChild);
		} else {
			me._er02.appendChild(me._er02__normal);
		}
		for (var i = 0; i < me._er02.childNodes.length; i++) {
			me._er02.ggMarkerInstances.push(me._er02.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._er01);
		me._er01__normal = clonedNormalElement._image_2;
		me._er01__normalInst = clonedNormalElement;
		me._er01__normal.style.visibility='inherit';
		me._er01__normal.style.left='0px';
		me._er01__normal.style.top='0px';
		me._er01.ggMarkerNormal=me._er01__normal;
		me._er01.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._er01);
		me._er01__active = clonedActiveElement._image_3;
		me._er01__activeInst = clonedActiveElement;
		me._er01__active.style.visibility='hidden';
		me._er01__active.style.left='0px';
		me._er01__active.style.top='0px';
		me._er01.ggMarkerActive=me._er01__active;
		me._er01.ggMarkerInstances.push(clonedActiveElement);
		if (me._er01.firstChild) {
			me._er01.insertBefore(me._er01__active,me._er01.firstChild);
		} else {
			me._er01.appendChild(me._er01__active);
		}
		if (me._er01.firstChild) {
			me._er01.insertBefore(me._er01__normal,me._er01.firstChild);
		} else {
			me._er01.appendChild(me._er01__normal);
		}
		for (var i = 0; i < me._er01.childNodes.length; i++) {
			me._er01.ggMarkerInstances.push(me._er01.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._es03);
		me._es03__normal = clonedNormalElement._image_2;
		me._es03__normalInst = clonedNormalElement;
		me._es03__normal.style.visibility='inherit';
		me._es03__normal.style.left='0px';
		me._es03__normal.style.top='0px';
		me._es03.ggMarkerNormal=me._es03__normal;
		me._es03.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._es03);
		me._es03__active = clonedActiveElement._image_3;
		me._es03__activeInst = clonedActiveElement;
		me._es03__active.style.visibility='hidden';
		me._es03__active.style.left='0px';
		me._es03__active.style.top='0px';
		me._es03.ggMarkerActive=me._es03__active;
		me._es03.ggMarkerInstances.push(clonedActiveElement);
		if (me._es03.firstChild) {
			me._es03.insertBefore(me._es03__active,me._es03.firstChild);
		} else {
			me._es03.appendChild(me._es03__active);
		}
		if (me._es03.firstChild) {
			me._es03.insertBefore(me._es03__normal,me._es03.firstChild);
		} else {
			me._es03.appendChild(me._es03__normal);
		}
		for (var i = 0; i < me._es03.childNodes.length; i++) {
			me._es03.ggMarkerInstances.push(me._es03.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._es02);
		me._es02__normal = clonedNormalElement._image_2;
		me._es02__normalInst = clonedNormalElement;
		me._es02__normal.style.visibility='inherit';
		me._es02__normal.style.left='0px';
		me._es02__normal.style.top='0px';
		me._es02.ggMarkerNormal=me._es02__normal;
		me._es02.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._es02);
		me._es02__active = clonedActiveElement._image_3;
		me._es02__activeInst = clonedActiveElement;
		me._es02__active.style.visibility='hidden';
		me._es02__active.style.left='0px';
		me._es02__active.style.top='0px';
		me._es02.ggMarkerActive=me._es02__active;
		me._es02.ggMarkerInstances.push(clonedActiveElement);
		if (me._es02.firstChild) {
			me._es02.insertBefore(me._es02__active,me._es02.firstChild);
		} else {
			me._es02.appendChild(me._es02__active);
		}
		if (me._es02.firstChild) {
			me._es02.insertBefore(me._es02__normal,me._es02.firstChild);
		} else {
			me._es02.appendChild(me._es02__normal);
		}
		for (var i = 0; i < me._es02.childNodes.length; i++) {
			me._es02.ggMarkerInstances.push(me._es02.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._es01);
		me._es01__normal = clonedNormalElement._image_2;
		me._es01__normalInst = clonedNormalElement;
		me._es01__normal.style.visibility='inherit';
		me._es01__normal.style.left='0px';
		me._es01__normal.style.top='0px';
		me._es01.ggMarkerNormal=me._es01__normal;
		me._es01.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._es01);
		me._es01__active = clonedActiveElement._image_3;
		me._es01__activeInst = clonedActiveElement;
		me._es01__active.style.visibility='hidden';
		me._es01__active.style.left='0px';
		me._es01__active.style.top='0px';
		me._es01.ggMarkerActive=me._es01__active;
		me._es01.ggMarkerInstances.push(clonedActiveElement);
		if (me._es01.firstChild) {
			me._es01.insertBefore(me._es01__active,me._es01.firstChild);
		} else {
			me._es01.appendChild(me._es01__active);
		}
		if (me._es01.firstChild) {
			me._es01.insertBefore(me._es01__normal,me._es01.firstChild);
		} else {
			me._es01.appendChild(me._es01__normal);
		}
		for (var i = 0; i < me._es01.childNodes.length; i++) {
			me._es01.ggMarkerInstances.push(me._es01.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._es06);
		me._es06__normal = clonedNormalElement._image_2;
		me._es06__normalInst = clonedNormalElement;
		me._es06__normal.style.visibility='inherit';
		me._es06__normal.style.left='0px';
		me._es06__normal.style.top='0px';
		me._es06.ggMarkerNormal=me._es06__normal;
		me._es06.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._es06);
		me._es06__active = clonedActiveElement._image_3;
		me._es06__activeInst = clonedActiveElement;
		me._es06__active.style.visibility='hidden';
		me._es06__active.style.left='0px';
		me._es06__active.style.top='0px';
		me._es06.ggMarkerActive=me._es06__active;
		me._es06.ggMarkerInstances.push(clonedActiveElement);
		if (me._es06.firstChild) {
			me._es06.insertBefore(me._es06__active,me._es06.firstChild);
		} else {
			me._es06.appendChild(me._es06__active);
		}
		if (me._es06.firstChild) {
			me._es06.insertBefore(me._es06__normal,me._es06.firstChild);
		} else {
			me._es06.appendChild(me._es06__normal);
		}
		for (var i = 0; i < me._es06.childNodes.length; i++) {
			me._es06.ggMarkerInstances.push(me._es06.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._es04);
		me._es04__normal = clonedNormalElement._image_2;
		me._es04__normalInst = clonedNormalElement;
		me._es04__normal.style.visibility='inherit';
		me._es04__normal.style.left='0px';
		me._es04__normal.style.top='0px';
		me._es04.ggMarkerNormal=me._es04__normal;
		me._es04.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._es04);
		me._es04__active = clonedActiveElement._image_3;
		me._es04__activeInst = clonedActiveElement;
		me._es04__active.style.visibility='hidden';
		me._es04__active.style.left='0px';
		me._es04__active.style.top='0px';
		me._es04.ggMarkerActive=me._es04__active;
		me._es04.ggMarkerInstances.push(clonedActiveElement);
		if (me._es04.firstChild) {
			me._es04.insertBefore(me._es04__active,me._es04.firstChild);
		} else {
			me._es04.appendChild(me._es04__active);
		}
		if (me._es04.firstChild) {
			me._es04.insertBefore(me._es04__normal,me._es04.firstChild);
		} else {
			me._es04.appendChild(me._es04__normal);
		}
		for (var i = 0; i < me._es04.childNodes.length; i++) {
			me._es04.ggMarkerInstances.push(me._es04.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._es05);
		me._es05__normal = clonedNormalElement._image_2;
		me._es05__normalInst = clonedNormalElement;
		me._es05__normal.style.visibility='inherit';
		me._es05__normal.style.left='0px';
		me._es05__normal.style.top='0px';
		me._es05.ggMarkerNormal=me._es05__normal;
		me._es05.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._es05);
		me._es05__active = clonedActiveElement._image_3;
		me._es05__activeInst = clonedActiveElement;
		me._es05__active.style.visibility='hidden';
		me._es05__active.style.left='0px';
		me._es05__active.style.top='0px';
		me._es05.ggMarkerActive=me._es05__active;
		me._es05.ggMarkerInstances.push(clonedActiveElement);
		if (me._es05.firstChild) {
			me._es05.insertBefore(me._es05__active,me._es05.firstChild);
		} else {
			me._es05.appendChild(me._es05__active);
		}
		if (me._es05.firstChild) {
			me._es05.insertBefore(me._es05__normal,me._es05.firstChild);
		} else {
			me._es05.appendChild(me._es05__normal);
		}
		for (var i = 0; i < me._es05.childNodes.length; i++) {
			me._es05.ggMarkerInstances.push(me._es05.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._sr01);
		me._sr01__normal = clonedNormalElement._image_2;
		me._sr01__normalInst = clonedNormalElement;
		me._sr01__normal.style.visibility='inherit';
		me._sr01__normal.style.left='0px';
		me._sr01__normal.style.top='0px';
		me._sr01.ggMarkerNormal=me._sr01__normal;
		me._sr01.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._sr01);
		me._sr01__active = clonedActiveElement._image_3;
		me._sr01__activeInst = clonedActiveElement;
		me._sr01__active.style.visibility='hidden';
		me._sr01__active.style.left='0px';
		me._sr01__active.style.top='0px';
		me._sr01.ggMarkerActive=me._sr01__active;
		me._sr01.ggMarkerInstances.push(clonedActiveElement);
		if (me._sr01.firstChild) {
			me._sr01.insertBefore(me._sr01__active,me._sr01.firstChild);
		} else {
			me._sr01.appendChild(me._sr01__active);
		}
		if (me._sr01.firstChild) {
			me._sr01.insertBefore(me._sr01__normal,me._sr01.firstChild);
		} else {
			me._sr01.appendChild(me._sr01__normal);
		}
		for (var i = 0; i < me._sr01.childNodes.length; i++) {
			me._sr01.ggMarkerInstances.push(me._sr01.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._sr02);
		me._sr02__normal = clonedNormalElement._image_2;
		me._sr02__normalInst = clonedNormalElement;
		me._sr02__normal.style.visibility='inherit';
		me._sr02__normal.style.left='0px';
		me._sr02__normal.style.top='0px';
		me._sr02.ggMarkerNormal=me._sr02__normal;
		me._sr02.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._sr02);
		me._sr02__active = clonedActiveElement._image_3;
		me._sr02__activeInst = clonedActiveElement;
		me._sr02__active.style.visibility='hidden';
		me._sr02__active.style.left='0px';
		me._sr02__active.style.top='0px';
		me._sr02.ggMarkerActive=me._sr02__active;
		me._sr02.ggMarkerInstances.push(clonedActiveElement);
		if (me._sr02.firstChild) {
			me._sr02.insertBefore(me._sr02__active,me._sr02.firstChild);
		} else {
			me._sr02.appendChild(me._sr02__active);
		}
		if (me._sr02.firstChild) {
			me._sr02.insertBefore(me._sr02__normal,me._sr02.firstChild);
		} else {
			me._sr02.appendChild(me._sr02__normal);
		}
		for (var i = 0; i < me._sr02.childNodes.length; i++) {
			me._sr02.ggMarkerInstances.push(me._sr02.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._sr03);
		me._sr03__normal = clonedNormalElement._image_2;
		me._sr03__normalInst = clonedNormalElement;
		me._sr03__normal.style.visibility='inherit';
		me._sr03__normal.style.left='0px';
		me._sr03__normal.style.top='0px';
		me._sr03.ggMarkerNormal=me._sr03__normal;
		me._sr03.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._sr03);
		me._sr03__active = clonedActiveElement._image_3;
		me._sr03__activeInst = clonedActiveElement;
		me._sr03__active.style.visibility='hidden';
		me._sr03__active.style.left='0px';
		me._sr03__active.style.top='0px';
		me._sr03.ggMarkerActive=me._sr03__active;
		me._sr03.ggMarkerInstances.push(clonedActiveElement);
		if (me._sr03.firstChild) {
			me._sr03.insertBefore(me._sr03__active,me._sr03.firstChild);
		} else {
			me._sr03.appendChild(me._sr03__active);
		}
		if (me._sr03.firstChild) {
			me._sr03.insertBefore(me._sr03__normal,me._sr03.firstChild);
		} else {
			me._sr03.appendChild(me._sr03__normal);
		}
		for (var i = 0; i < me._sr03.childNodes.length; i++) {
			me._sr03.ggMarkerInstances.push(me._sr03.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._sr04);
		me._sr04__normal = clonedNormalElement._image_2;
		me._sr04__normalInst = clonedNormalElement;
		me._sr04__normal.style.visibility='inherit';
		me._sr04__normal.style.left='0px';
		me._sr04__normal.style.top='0px';
		me._sr04.ggMarkerNormal=me._sr04__normal;
		me._sr04.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._sr04);
		me._sr04__active = clonedActiveElement._image_3;
		me._sr04__activeInst = clonedActiveElement;
		me._sr04__active.style.visibility='hidden';
		me._sr04__active.style.left='0px';
		me._sr04__active.style.top='0px';
		me._sr04.ggMarkerActive=me._sr04__active;
		me._sr04.ggMarkerInstances.push(clonedActiveElement);
		if (me._sr04.firstChild) {
			me._sr04.insertBefore(me._sr04__active,me._sr04.firstChild);
		} else {
			me._sr04.appendChild(me._sr04__active);
		}
		if (me._sr04.firstChild) {
			me._sr04.insertBefore(me._sr04__normal,me._sr04.firstChild);
		} else {
			me._sr04.appendChild(me._sr04__normal);
		}
		for (var i = 0; i < me._sr04.childNodes.length; i++) {
			me._sr04.ggMarkerInstances.push(me._sr04.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._sr05);
		me._sr05__normal = clonedNormalElement._image_2;
		me._sr05__normalInst = clonedNormalElement;
		me._sr05__normal.style.visibility='inherit';
		me._sr05__normal.style.left='0px';
		me._sr05__normal.style.top='0px';
		me._sr05.ggMarkerNormal=me._sr05__normal;
		me._sr05.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._sr05);
		me._sr05__active = clonedActiveElement._image_3;
		me._sr05__activeInst = clonedActiveElement;
		me._sr05__active.style.visibility='hidden';
		me._sr05__active.style.left='0px';
		me._sr05__active.style.top='0px';
		me._sr05.ggMarkerActive=me._sr05__active;
		me._sr05.ggMarkerInstances.push(clonedActiveElement);
		if (me._sr05.firstChild) {
			me._sr05.insertBefore(me._sr05__active,me._sr05.firstChild);
		} else {
			me._sr05.appendChild(me._sr05__active);
		}
		if (me._sr05.firstChild) {
			me._sr05.insertBefore(me._sr05__normal,me._sr05.firstChild);
		} else {
			me._sr05.appendChild(me._sr05__normal);
		}
		for (var i = 0; i < me._sr05.childNodes.length; i++) {
			me._sr05.ggMarkerInstances.push(me._sr05.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._sr06);
		me._sr06__normal = clonedNormalElement._image_2;
		me._sr06__normalInst = clonedNormalElement;
		me._sr06__normal.style.visibility='inherit';
		me._sr06__normal.style.left='0px';
		me._sr06__normal.style.top='0px';
		me._sr06.ggMarkerNormal=me._sr06__normal;
		me._sr06.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._sr06);
		me._sr06__active = clonedActiveElement._image_3;
		me._sr06__activeInst = clonedActiveElement;
		me._sr06__active.style.visibility='hidden';
		me._sr06__active.style.left='0px';
		me._sr06__active.style.top='0px';
		me._sr06.ggMarkerActive=me._sr06__active;
		me._sr06.ggMarkerInstances.push(clonedActiveElement);
		if (me._sr06.firstChild) {
			me._sr06.insertBefore(me._sr06__active,me._sr06.firstChild);
		} else {
			me._sr06.appendChild(me._sr06__active);
		}
		if (me._sr06.firstChild) {
			me._sr06.insertBefore(me._sr06__normal,me._sr06.firstChild);
		} else {
			me._sr06.appendChild(me._sr06__normal);
		}
		for (var i = 0; i < me._sr06.childNodes.length; i++) {
			me._sr06.ggMarkerInstances.push(me._sr06.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._sr07);
		me._sr07__normal = clonedNormalElement._image_2;
		me._sr07__normalInst = clonedNormalElement;
		me._sr07__normal.style.visibility='inherit';
		me._sr07__normal.style.left='0px';
		me._sr07__normal.style.top='0px';
		me._sr07.ggMarkerNormal=me._sr07__normal;
		me._sr07.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._sr07);
		me._sr07__active = clonedActiveElement._image_3;
		me._sr07__activeInst = clonedActiveElement;
		me._sr07__active.style.visibility='hidden';
		me._sr07__active.style.left='0px';
		me._sr07__active.style.top='0px';
		me._sr07.ggMarkerActive=me._sr07__active;
		me._sr07.ggMarkerInstances.push(clonedActiveElement);
		if (me._sr07.firstChild) {
			me._sr07.insertBefore(me._sr07__active,me._sr07.firstChild);
		} else {
			me._sr07.appendChild(me._sr07__active);
		}
		if (me._sr07.firstChild) {
			me._sr07.insertBefore(me._sr07__normal,me._sr07.firstChild);
		} else {
			me._sr07.appendChild(me._sr07__normal);
		}
		for (var i = 0; i < me._sr07.childNodes.length; i++) {
			me._sr07.ggMarkerInstances.push(me._sr07.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._sr08);
		me._sr08__normal = clonedNormalElement._image_2;
		me._sr08__normalInst = clonedNormalElement;
		me._sr08__normal.style.visibility='inherit';
		me._sr08__normal.style.left='0px';
		me._sr08__normal.style.top='0px';
		me._sr08.ggMarkerNormal=me._sr08__normal;
		me._sr08.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._sr08);
		me._sr08__active = clonedActiveElement._image_3;
		me._sr08__activeInst = clonedActiveElement;
		me._sr08__active.style.visibility='hidden';
		me._sr08__active.style.left='0px';
		me._sr08__active.style.top='0px';
		me._sr08.ggMarkerActive=me._sr08__active;
		me._sr08.ggMarkerInstances.push(clonedActiveElement);
		if (me._sr08.firstChild) {
			me._sr08.insertBefore(me._sr08__active,me._sr08.firstChild);
		} else {
			me._sr08.appendChild(me._sr08__active);
		}
		if (me._sr08.firstChild) {
			me._sr08.insertBefore(me._sr08__normal,me._sr08.firstChild);
		} else {
			me._sr08.appendChild(me._sr08__normal);
		}
		for (var i = 0; i < me._sr08.childNodes.length; i++) {
			me._sr08.ggMarkerInstances.push(me._sr08.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._nr01);
		me._nr01__normal = clonedNormalElement._image_2;
		me._nr01__normalInst = clonedNormalElement;
		me._nr01__normal.style.visibility='inherit';
		me._nr01__normal.style.left='0px';
		me._nr01__normal.style.top='0px';
		me._nr01.ggMarkerNormal=me._nr01__normal;
		me._nr01.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._nr01);
		me._nr01__active = clonedActiveElement._image_3;
		me._nr01__activeInst = clonedActiveElement;
		me._nr01__active.style.visibility='hidden';
		me._nr01__active.style.left='0px';
		me._nr01__active.style.top='0px';
		me._nr01.ggMarkerActive=me._nr01__active;
		me._nr01.ggMarkerInstances.push(clonedActiveElement);
		if (me._nr01.firstChild) {
			me._nr01.insertBefore(me._nr01__active,me._nr01.firstChild);
		} else {
			me._nr01.appendChild(me._nr01__active);
		}
		if (me._nr01.firstChild) {
			me._nr01.insertBefore(me._nr01__normal,me._nr01.firstChild);
		} else {
			me._nr01.appendChild(me._nr01__normal);
		}
		for (var i = 0; i < me._nr01.childNodes.length; i++) {
			me._nr01.ggMarkerInstances.push(me._nr01.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._nr02);
		me._nr02__normal = clonedNormalElement._image_2;
		me._nr02__normalInst = clonedNormalElement;
		me._nr02__normal.style.visibility='inherit';
		me._nr02__normal.style.left='0px';
		me._nr02__normal.style.top='0px';
		me._nr02.ggMarkerNormal=me._nr02__normal;
		me._nr02.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._nr02);
		me._nr02__active = clonedActiveElement._image_3;
		me._nr02__activeInst = clonedActiveElement;
		me._nr02__active.style.visibility='hidden';
		me._nr02__active.style.left='0px';
		me._nr02__active.style.top='0px';
		me._nr02.ggMarkerActive=me._nr02__active;
		me._nr02.ggMarkerInstances.push(clonedActiveElement);
		if (me._nr02.firstChild) {
			me._nr02.insertBefore(me._nr02__active,me._nr02.firstChild);
		} else {
			me._nr02.appendChild(me._nr02__active);
		}
		if (me._nr02.firstChild) {
			me._nr02.insertBefore(me._nr02__normal,me._nr02.firstChild);
		} else {
			me._nr02.appendChild(me._nr02__normal);
		}
		for (var i = 0; i < me._nr02.childNodes.length; i++) {
			me._nr02.ggMarkerInstances.push(me._nr02.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._nr03);
		me._nr03__normal = clonedNormalElement._image_2;
		me._nr03__normalInst = clonedNormalElement;
		me._nr03__normal.style.visibility='inherit';
		me._nr03__normal.style.left='0px';
		me._nr03__normal.style.top='0px';
		me._nr03.ggMarkerNormal=me._nr03__normal;
		me._nr03.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._nr03);
		me._nr03__active = clonedActiveElement._image_3;
		me._nr03__activeInst = clonedActiveElement;
		me._nr03__active.style.visibility='hidden';
		me._nr03__active.style.left='0px';
		me._nr03__active.style.top='0px';
		me._nr03.ggMarkerActive=me._nr03__active;
		me._nr03.ggMarkerInstances.push(clonedActiveElement);
		if (me._nr03.firstChild) {
			me._nr03.insertBefore(me._nr03__active,me._nr03.firstChild);
		} else {
			me._nr03.appendChild(me._nr03__active);
		}
		if (me._nr03.firstChild) {
			me._nr03.insertBefore(me._nr03__normal,me._nr03.firstChild);
		} else {
			me._nr03.appendChild(me._nr03__normal);
		}
		for (var i = 0; i < me._nr03.childNodes.length; i++) {
			me._nr03.ggMarkerInstances.push(me._nr03.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._nr04);
		me._nr04__normal = clonedNormalElement._image_2;
		me._nr04__normalInst = clonedNormalElement;
		me._nr04__normal.style.visibility='inherit';
		me._nr04__normal.style.left='0px';
		me._nr04__normal.style.top='0px';
		me._nr04.ggMarkerNormal=me._nr04__normal;
		me._nr04.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._nr04);
		me._nr04__active = clonedActiveElement._image_3;
		me._nr04__activeInst = clonedActiveElement;
		me._nr04__active.style.visibility='hidden';
		me._nr04__active.style.left='0px';
		me._nr04__active.style.top='0px';
		me._nr04.ggMarkerActive=me._nr04__active;
		me._nr04.ggMarkerInstances.push(clonedActiveElement);
		if (me._nr04.firstChild) {
			me._nr04.insertBefore(me._nr04__active,me._nr04.firstChild);
		} else {
			me._nr04.appendChild(me._nr04__active);
		}
		if (me._nr04.firstChild) {
			me._nr04.insertBefore(me._nr04__normal,me._nr04.firstChild);
		} else {
			me._nr04.appendChild(me._nr04__normal);
		}
		for (var i = 0; i < me._nr04.childNodes.length; i++) {
			me._nr04.ggMarkerInstances.push(me._nr04.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._nr05);
		me._nr05__normal = clonedNormalElement._image_2;
		me._nr05__normalInst = clonedNormalElement;
		me._nr05__normal.style.visibility='inherit';
		me._nr05__normal.style.left='0px';
		me._nr05__normal.style.top='0px';
		me._nr05.ggMarkerNormal=me._nr05__normal;
		me._nr05.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._nr05);
		me._nr05__active = clonedActiveElement._image_3;
		me._nr05__activeInst = clonedActiveElement;
		me._nr05__active.style.visibility='hidden';
		me._nr05__active.style.left='0px';
		me._nr05__active.style.top='0px';
		me._nr05.ggMarkerActive=me._nr05__active;
		me._nr05.ggMarkerInstances.push(clonedActiveElement);
		if (me._nr05.firstChild) {
			me._nr05.insertBefore(me._nr05__active,me._nr05.firstChild);
		} else {
			me._nr05.appendChild(me._nr05__active);
		}
		if (me._nr05.firstChild) {
			me._nr05.insertBefore(me._nr05__normal,me._nr05.firstChild);
		} else {
			me._nr05.appendChild(me._nr05__normal);
		}
		for (var i = 0; i < me._nr05.childNodes.length; i++) {
			me._nr05.ggMarkerInstances.push(me._nr05.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._nr06);
		me._nr06__normal = clonedNormalElement._image_2;
		me._nr06__normalInst = clonedNormalElement;
		me._nr06__normal.style.visibility='inherit';
		me._nr06__normal.style.left='0px';
		me._nr06__normal.style.top='0px';
		me._nr06.ggMarkerNormal=me._nr06__normal;
		me._nr06.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._nr06);
		me._nr06__active = clonedActiveElement._image_3;
		me._nr06__activeInst = clonedActiveElement;
		me._nr06__active.style.visibility='hidden';
		me._nr06__active.style.left='0px';
		me._nr06__active.style.top='0px';
		me._nr06.ggMarkerActive=me._nr06__active;
		me._nr06.ggMarkerInstances.push(clonedActiveElement);
		if (me._nr06.firstChild) {
			me._nr06.insertBefore(me._nr06__active,me._nr06.firstChild);
		} else {
			me._nr06.appendChild(me._nr06__active);
		}
		if (me._nr06.firstChild) {
			me._nr06.insertBefore(me._nr06__normal,me._nr06.firstChild);
		} else {
			me._nr06.appendChild(me._nr06__normal);
		}
		for (var i = 0; i < me._nr06.childNodes.length; i++) {
			me._nr06.ggMarkerInstances.push(me._nr06.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._nr07);
		me._nr07__normal = clonedNormalElement._image_2;
		me._nr07__normalInst = clonedNormalElement;
		me._nr07__normal.style.visibility='inherit';
		me._nr07__normal.style.left='0px';
		me._nr07__normal.style.top='0px';
		me._nr07.ggMarkerNormal=me._nr07__normal;
		me._nr07.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._nr07);
		me._nr07__active = clonedActiveElement._image_3;
		me._nr07__activeInst = clonedActiveElement;
		me._nr07__active.style.visibility='hidden';
		me._nr07__active.style.left='0px';
		me._nr07__active.style.top='0px';
		me._nr07.ggMarkerActive=me._nr07__active;
		me._nr07.ggMarkerInstances.push(clonedActiveElement);
		if (me._nr07.firstChild) {
			me._nr07.insertBefore(me._nr07__active,me._nr07.firstChild);
		} else {
			me._nr07.appendChild(me._nr07__active);
		}
		if (me._nr07.firstChild) {
			me._nr07.insertBefore(me._nr07__normal,me._nr07.firstChild);
		} else {
			me._nr07.appendChild(me._nr07__normal);
		}
		for (var i = 0; i < me._nr07.childNodes.length; i++) {
			me._nr07.ggMarkerInstances.push(me._nr07.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._nr08);
		me._nr08__normal = clonedNormalElement._image_2;
		me._nr08__normalInst = clonedNormalElement;
		me._nr08__normal.style.visibility='inherit';
		me._nr08__normal.style.left='0px';
		me._nr08__normal.style.top='0px';
		me._nr08.ggMarkerNormal=me._nr08__normal;
		me._nr08.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._nr08);
		me._nr08__active = clonedActiveElement._image_3;
		me._nr08__activeInst = clonedActiveElement;
		me._nr08__active.style.visibility='hidden';
		me._nr08__active.style.left='0px';
		me._nr08__active.style.top='0px';
		me._nr08.ggMarkerActive=me._nr08__active;
		me._nr08.ggMarkerInstances.push(clonedActiveElement);
		if (me._nr08.firstChild) {
			me._nr08.insertBefore(me._nr08__active,me._nr08.firstChild);
		} else {
			me._nr08.appendChild(me._nr08__active);
		}
		if (me._nr08.firstChild) {
			me._nr08.insertBefore(me._nr08__normal,me._nr08.firstChild);
		} else {
			me._nr08.appendChild(me._nr08__normal);
		}
		for (var i = 0; i < me._nr08.childNodes.length; i++) {
			me._nr08.ggMarkerInstances.push(me._nr08.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._ws01);
		me._ws01__normal = clonedNormalElement._image_2;
		me._ws01__normalInst = clonedNormalElement;
		me._ws01__normal.style.visibility='inherit';
		me._ws01__normal.style.left='0px';
		me._ws01__normal.style.top='0px';
		me._ws01.ggMarkerNormal=me._ws01__normal;
		me._ws01.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._ws01);
		me._ws01__active = clonedActiveElement._image_3;
		me._ws01__activeInst = clonedActiveElement;
		me._ws01__active.style.visibility='hidden';
		me._ws01__active.style.left='0px';
		me._ws01__active.style.top='0px';
		me._ws01.ggMarkerActive=me._ws01__active;
		me._ws01.ggMarkerInstances.push(clonedActiveElement);
		if (me._ws01.firstChild) {
			me._ws01.insertBefore(me._ws01__active,me._ws01.firstChild);
		} else {
			me._ws01.appendChild(me._ws01__active);
		}
		if (me._ws01.firstChild) {
			me._ws01.insertBefore(me._ws01__normal,me._ws01.firstChild);
		} else {
			me._ws01.appendChild(me._ws01__normal);
		}
		for (var i = 0; i < me._ws01.childNodes.length; i++) {
			me._ws01.ggMarkerInstances.push(me._ws01.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._ws02);
		me._ws02__normal = clonedNormalElement._image_2;
		me._ws02__normalInst = clonedNormalElement;
		me._ws02__normal.style.visibility='inherit';
		me._ws02__normal.style.left='0px';
		me._ws02__normal.style.top='0px';
		me._ws02.ggMarkerNormal=me._ws02__normal;
		me._ws02.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._ws02);
		me._ws02__active = clonedActiveElement._image_3;
		me._ws02__activeInst = clonedActiveElement;
		me._ws02__active.style.visibility='hidden';
		me._ws02__active.style.left='0px';
		me._ws02__active.style.top='0px';
		me._ws02.ggMarkerActive=me._ws02__active;
		me._ws02.ggMarkerInstances.push(clonedActiveElement);
		if (me._ws02.firstChild) {
			me._ws02.insertBefore(me._ws02__active,me._ws02.firstChild);
		} else {
			me._ws02.appendChild(me._ws02__active);
		}
		if (me._ws02.firstChild) {
			me._ws02.insertBefore(me._ws02__normal,me._ws02.firstChild);
		} else {
			me._ws02.appendChild(me._ws02__normal);
		}
		for (var i = 0; i < me._ws02.childNodes.length; i++) {
			me._ws02.ggMarkerInstances.push(me._ws02.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._ws03);
		me._ws03__normal = clonedNormalElement._image_2;
		me._ws03__normalInst = clonedNormalElement;
		me._ws03__normal.style.visibility='inherit';
		me._ws03__normal.style.left='0px';
		me._ws03__normal.style.top='0px';
		me._ws03.ggMarkerNormal=me._ws03__normal;
		me._ws03.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._ws03);
		me._ws03__active = clonedActiveElement._image_3;
		me._ws03__activeInst = clonedActiveElement;
		me._ws03__active.style.visibility='hidden';
		me._ws03__active.style.left='0px';
		me._ws03__active.style.top='0px';
		me._ws03.ggMarkerActive=me._ws03__active;
		me._ws03.ggMarkerInstances.push(clonedActiveElement);
		if (me._ws03.firstChild) {
			me._ws03.insertBefore(me._ws03__active,me._ws03.firstChild);
		} else {
			me._ws03.appendChild(me._ws03__active);
		}
		if (me._ws03.firstChild) {
			me._ws03.insertBefore(me._ws03__normal,me._ws03.firstChild);
		} else {
			me._ws03.appendChild(me._ws03__normal);
		}
		for (var i = 0; i < me._ws03.childNodes.length; i++) {
			me._ws03.ggMarkerInstances.push(me._ws03.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__4f_Class(this,me._switch4f);
		me._switch4f__normal = clonedNormalElement.__4f;
		me._switch4f__normalInst = clonedNormalElement;
		me._switch4f__normal.style.visibility='inherit';
		me._switch4f__normal.style.left='0px';
		me._switch4f__normal.style.top='0px';
		me._switch4f.ggMarkerNormal=me._switch4f__normal;
		me._switch4f.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__4f_Class(this,me._switch4f);
		me._switch4f__active = clonedActiveElement.__4f;
		me._switch4f__activeInst = clonedActiveElement;
		me._switch4f__active.style.visibility='hidden';
		me._switch4f__active.style.left='0px';
		me._switch4f__active.style.top='0px';
		me._switch4f.ggMarkerActive=me._switch4f__active;
		me._switch4f.ggMarkerInstances.push(clonedActiveElement);
		if (me._switch4f.firstChild) {
			me._switch4f.insertBefore(me._switch4f__active,me._switch4f.firstChild);
		} else {
			me._switch4f.appendChild(me._switch4f__active);
		}
		if (me._switch4f.firstChild) {
			me._switch4f.insertBefore(me._switch4f__normal,me._switch4f.firstChild);
		} else {
			me._switch4f.appendChild(me._switch4f__normal);
		}
		for (var i = 0; i < me._switch4f.childNodes.length; i++) {
			me._switch4f.ggMarkerInstances.push(me._switch4f.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__5f_Class(this,me._switch5f);
		me._switch5f__normal = clonedNormalElement.__5f;
		me._switch5f__normalInst = clonedNormalElement;
		me._switch5f__normal.style.visibility='inherit';
		me._switch5f__normal.style.left='0px';
		me._switch5f__normal.style.top='0px';
		me._switch5f.ggMarkerNormal=me._switch5f__normal;
		me._switch5f.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__5f_Class(this,me._switch5f);
		me._switch5f__active = clonedActiveElement.__5f;
		me._switch5f__activeInst = clonedActiveElement;
		me._switch5f__active.style.visibility='hidden';
		me._switch5f__active.style.left='0px';
		me._switch5f__active.style.top='0px';
		me._switch5f.ggMarkerActive=me._switch5f__active;
		me._switch5f.ggMarkerInstances.push(clonedActiveElement);
		if (me._switch5f.firstChild) {
			me._switch5f.insertBefore(me._switch5f__active,me._switch5f.firstChild);
		} else {
			me._switch5f.appendChild(me._switch5f__active);
		}
		if (me._switch5f.firstChild) {
			me._switch5f.insertBefore(me._switch5f__normal,me._switch5f.firstChild);
		} else {
			me._switch5f.appendChild(me._switch5f__normal);
		}
		for (var i = 0; i < me._switch5f.childNodes.length; i++) {
			me._switch5f.ggMarkerInstances.push(me._switch5f.childNodes[i]);
		}
	};
	function SkinHotspotClass_click_here(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._click_here=document.createElement('div');
		el.ggId="click here";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 157px;';
		hs+='position : absolute;';
		hs+='top : 172px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._click_here.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._click_here.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._click_here.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._click_here.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['click_here']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._click_here.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['click_here']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._click_here.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -41px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 84px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._click_here.appendChild(me._image_1);
		me.elementMouseOver['click_here']=false;
			me.__div = me._click_here;
	};
	function SkinElement__4f_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__4f=document.createElement('div');
		els=me.__4f__img=document.createElement('img');
		els.className='ggskin ggskin__4f';
		hs=basePath + 'images/_4f.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4F";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 191px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4f.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__4f.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__5f_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__5f=document.createElement('div');
		els=me.__5f__img=document.createElement('img');
		els.className='ggskin ggskin__5f';
		hs=basePath + 'images/_5f.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5F";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 190px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5f.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__5f.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinHotspotClass_right(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._right=document.createElement('div');
		el.ggId="right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._right.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._right.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._right.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['right']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._right.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['right']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._right.ggUpdatePosition=function (useTransition) {
		}
		el=me._arrow_3=document.createElement('div');
		els=me._arrow_3__img=document.createElement('img');
		els.className='ggskin ggskin_arrow_3';
		hs=basePath + 'images/arrow_3.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="arrow 3";
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 101px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._arrow_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._arrow_3.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._arrow_3.ggUpdatePosition=function (useTransition) {
		}
		me._right.appendChild(me._arrow_3);
		me.elementMouseOver['right']=false;
			me.__div = me._right;
	};
	function SkinHotspotClass_left(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._left=document.createElement('div');
		el.ggId="left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 97px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._left.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._left.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._left.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['left']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._left.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['left']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._left.ggUpdatePosition=function (useTransition) {
		}
		el=me._arrow_2=document.createElement('div');
		els=me._arrow_2__img=document.createElement('img');
		els.className='ggskin ggskin_arrow_2';
		hs=basePath + 'images/arrow_2.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="arrow 2";
		el.ggParameter={ rx:0,ry:0,a:270,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 101px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._arrow_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._arrow_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._arrow_2.ggUpdatePosition=function (useTransition) {
		}
		me._left.appendChild(me._arrow_2);
		me.elementMouseOver['left']=false;
			me.__div = me._left;
	};
	function SkinHotspotClass_forward(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._forward=document.createElement('div');
		el.ggId="forward";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 42px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._forward.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._forward.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._forward.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._forward.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['forward']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._forward.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['forward']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._forward.ggUpdatePosition=function (useTransition) {
		}
		el=me._arrow_1=document.createElement('div');
		els=me._arrow_1__img=document.createElement('img');
		els.className='ggskin ggskin_arrow_1';
		hs=basePath + 'images/arrow_1.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="arrow 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 101px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._arrow_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._arrow_1.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._arrow_1.ggUpdatePosition=function (useTransition) {
		}
		me._forward.appendChild(me._arrow_1);
		me.elementMouseOver['forward']=false;
			me.__div = me._forward;
	};
	function SkinElement_image_3_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 53px;';
		hs+='position : absolute;';
		hs+='top : 152px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement_image_2_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='left : 29px;';
		hs+='position : absolute;';
		hs+='top : 158px;';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='forward') {
				hotspot.skinid = 'forward';
				hsinst = new SkinHotspotClass_forward(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='left') {
				hotspot.skinid = 'left';
				hsinst = new SkinHotspotClass_left(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='right') {
				hotspot.skinid = 'right';
				hsinst = new SkinHotspotClass_right(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'click here';
				hsinst = new SkinHotspotClass_click_here(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};