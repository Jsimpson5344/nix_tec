(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"nix_tec_banner_atlas_1", frames: [[0,62,158,71],[160,62,158,71],[320,62,158,71],[0,135,158,71],[0,0,468,60],[160,135,183,22],[397,135,79,18],[345,135,50,49]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["nix_tec_banner_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["nix_tec_banner_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["nix_tec_banner_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["nix_tec_banner_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Background = function() {
	this.initialize(ss["nix_tec_banner_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.GamingFilm = function() {
	this.initialize(ss["nix_tec_banner_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NixTec = function() {
	this.initialize(ss["nix_tec_banner_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.nix_tec_logo = function() {
	this.initialize(ss["nix_tec_banner_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Visit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-39.5,-17.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-39.5,-17.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-39.5,-17.75,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(-39.5,-17.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2F8A92").ss(2,1,1,3,true).p("AmPiVIMfAAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAIsfAAQg+AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA+AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmPCWQg+AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA+AAIMfAAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AmPCWQg+AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA+AAIMfAAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-17.7,112,35.5);


(lib.Nix_Tec = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.NixTec();
	this.instance.setTransform(-39.5,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-9,79,18);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.nix_tec_logo();
	this.instance.setTransform(-25,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-24.5,50,49);


(lib.Gaming_Film = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.GamingFilm();
	this.instance.setTransform(-91.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-11,183,22);


// stage content:
(lib.nix_tec_banner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.visit.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://pixabay.com', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Button
	this.visit = new lib.Visit();
	this.visit.name = "visit";
	this.visit.setTransform(390,30);
	this.visit._off = true;
	new cjs.ButtonHelper(this.visit, 0, 1, 2, false, new lib.Visit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.visit).wait(59).to({_off:false},0).wait(1));

	// nix_tec_logo_png
	this.instance = new lib.Logo("synched",0);
	this.instance.setTransform(500,31,1,1,-90);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({rotation:0,x:40,y:30.5},25).wait(21));

	// Nix_Tec_
	this.instance_1 = new lib.Nix_Tec("synched",0);
	this.instance_1.setTransform(576.5,15.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({x:116.5,y:15},25).wait(16));

	// Gaming_Film
	this.instance_2 = new lib.Gaming_Film("synched",0);
	this.instance_2.setTransform(629.5,45.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({x:169.5,y:45},25).wait(11));

	// Background
	this.instance_3 = new lib.Background();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(234,25.8,487,40);
// library properties:
lib.properties = {
	id: '108DDF47F8B14A4483FAA129C537D730',
	width: 468,
	height: 60,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/nix_tec_banner_atlas_1.png?1619458086691", id:"nix_tec_banner_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['108DDF47F8B14A4483FAA129C537D730'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;