(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"/gQ+":function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n("E3F+"),t)},"11I5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0,t.defaultOptions={maxSize:720,type:"image/jpeg"}},"E3F+":function(e,t,n){"use strict";var r=n("o0o1"),a=n("yXPU");Object.defineProperty(t,"__esModule",{value:!0}),t.getBase64Strings=void 0;var i=n("vfit"),o=n("11I5"),s=n("dUH+");t.getBase64Strings=function(){var e=a(r.mark((function e(t){var n,a,u,l,c,d,f,g,p,h,m,A=arguments;return r.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=A.length>1&&void 0!==A[1]?A[1]:{},a=n.maxSize,u=void 0===a?o.defaultOptions.maxSize:a,l=n.type,c=void 0===l?o.defaultOptions.type:l,d=document.createElement("canvas"),f=d.getContext("2d"),f){e.next=5;break}throw new Error("canvas can not created");case 5:return e.next=7,i.getImages(t);case 7:return g=e.sent,e.next=10,s.getBrowserOrientation();case 10:if(p=e.sent,!p){e.next=14;break}return h=g.map((function(e){var t=i.getSize(e.width,e.height,u),n=t.width,r=t.height;return d.setAttribute("width","".concat(n,"px")),d.setAttribute("height","".concat(r,"px")),f.drawImage(e,0,0,n,r),d.toDataURL(c)})),e.abrupt("return",h);case 14:return m=g.map((function(e){var t=i.getOrientation(e),n=i.getSize(t>4?e.height:e.width,t>4?e.width:e.height,u),r=n.width,a=n.height;d.setAttribute("width","".concat(r,"px")),d.setAttribute("height","".concat(a,"px"));var o=i.getCanvasOptions(r,a,t),s=o.translate,l=o.scale,g=o.rotate;return f.translate(s.x,s.y),f.scale(l.x,l.y),f.rotate(g.angle),t>4?f.drawImage(e,0,0,a,r):f.drawImage(e,0,0,r,a),d.toDataURL(c)})),e.abrupt("return",m);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},KgEb:function(e,t,n){"use strict";function r(e){var t=new Image;return new Promise((function(n,r){t.onload=function(){return n(t)},t.onerror=function(e){return r(e)},t.src=e}))}Object.defineProperty(t,"__esModule",{value:!0}),t.readImage=void 0,t.readImage=r},LCAA:function(e,t,n){"use strict";var r=n("o0o1"),a=n("yXPU");function i(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(e){return t(e.target.result)},r.onerror=function(e){return n(e)},r.readAsDataURL(e)}))}function o(e){return s.apply(this,arguments)}function s(){return s=a(r.mark((function e(t){return r.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(Array.from(t).map((function(e){return i(e)})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0}),t.getDataFromReadFile=t.readFile=void 0,t.readFile=i,t.getDataFromReadFile=o},b0Xh:function(e,t,r){var a,i;(function(){var r=!1,o=function e(t){return t instanceof e?t:this instanceof e?void(this.EXIFwrapped=t):new e(t)};e.exports&&(t=e.exports=o),t.EXIF=o;var s=o.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},u=o.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},l=o.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},c=o.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},d=o.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function f(e){return!!e.exifdata}function g(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,a=new ArrayBuffer(r),i=new Uint8Array(a),o=0;o<r;o++)i[o]=n.charCodeAt(o);return a}function p(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}function h(e,t){function n(n){var r=m(n);e.exifdata=r||{};var a=A(n);if(e.iptcdata=a||{},o.isXmpEnabled){var i=F(n);e.xmpdata=i||{}}t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var a=g(e.src);n(a)}else if(/^blob\:/i.test(e.src)){var i=new FileReader;i.onload=function(e){n(e.target.result)},p(e.src,(function(e){i.readAsArrayBuffer(e)}))}else{var s=new XMLHttpRequest;s.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";n(s.response),s=null},s.open("GET",e.src,!0),s.responseType="arraybuffer",s.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){i=new FileReader;i.onload=function(e){r&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},i.readAsArrayBuffer(e)}}function m(e){var t=new DataView(e);if(r&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return r&&console.log("Not a valid JPEG"),!1;var n,a=2,i=e.byteLength;while(a<i){if(255!=t.getUint8(a))return r&&console.log("Not a valid marker at offset "+a+", found: "+t.getUint8(a)),!1;if(n=t.getUint8(a+1),r&&console.log(n),225==n)return r&&console.log("Found 0xFFE1 marker"),E(t,a+4,t.getUint16(a+2)-2);a+=2+t.getUint16(a+2)}}function A(e){var t=new DataView(e);if(r&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return r&&console.log("Not a valid JPEG"),!1;var n=2,a=e.byteLength,i=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};while(n<a){if(i(t,n)){var o=t.getUint8(n+7);o%2!==0&&(o+=1),0===o&&(o=4);var s=n+8+o,u=t.getUint16(n+6+o);return S(e,s,u)}n++}}var v={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function S(e,t,n){var r,a,i,o,s=new DataView(e),u={},l=t;while(l<t+n)28===s.getUint8(l)&&2===s.getUint8(l+1)&&(o=s.getUint8(l+2),o in v&&(i=s.getInt16(l+3),i+5,a=v[o],r=x(s,l+5,i),u.hasOwnProperty(a)?u[a]instanceof Array?u[a].push(r):u[a]=[u[a],r]:u[a]=r)),l++;return u}function y(e,t,n,a,i){var o,s,u,l=e.getUint16(n,!i),c={};for(u=0;u<l;u++)o=n+12*u+2,s=a[e.getUint16(o,!i)],!s&&r&&console.log("Unknown tag: "+e.getUint16(o,!i)),c[s]=P(e,o,t,n,i);return c}function P(e,t,n,r,a){var i,o,s,u,l,c,d=e.getUint16(t+2,!a),f=e.getUint32(t+4,!a),g=e.getUint32(t+8,!a)+n;switch(d){case 1:case 7:if(1==f)return e.getUint8(t+8,!a);for(i=f>4?g:t+8,o=[],u=0;u<f;u++)o[u]=e.getUint8(i+u);return o;case 2:return i=f>4?g:t+8,x(e,i,f-1);case 3:if(1==f)return e.getUint16(t+8,!a);for(i=f>2?g:t+8,o=[],u=0;u<f;u++)o[u]=e.getUint16(i+2*u,!a);return o;case 4:if(1==f)return e.getUint32(t+8,!a);for(o=[],u=0;u<f;u++)o[u]=e.getUint32(g+4*u,!a);return o;case 5:if(1==f)return l=e.getUint32(g,!a),c=e.getUint32(g+4,!a),s=new Number(l/c),s.numerator=l,s.denominator=c,s;for(o=[],u=0;u<f;u++)l=e.getUint32(g+8*u,!a),c=e.getUint32(g+4+8*u,!a),o[u]=new Number(l/c),o[u].numerator=l,o[u].denominator=c;return o;case 9:if(1==f)return e.getInt32(t+8,!a);for(o=[],u=0;u<f;u++)o[u]=e.getInt32(g+4*u,!a);return o;case 10:if(1==f)return e.getInt32(g,!a)/e.getInt32(g+4,!a);for(o=[],u=0;u<f;u++)o[u]=e.getInt32(g+8*u,!a)/e.getInt32(g+4+8*u,!a);return o}}function w(e,t,n){var r=e.getUint16(t,!n);return e.getUint32(t+2+12*r,!n)}function b(e,t,n,r){var a=w(e,t+n,r);if(!a)return{};if(a>e.byteLength)return{};var i=y(e,t,t+a,c,r);if(i["Compression"])switch(i["Compression"]){case 6:if(i.JpegIFOffset&&i.JpegIFByteCount){var o=t+i.JpegIFOffset,s=i.JpegIFByteCount;i["blob"]=new Blob([new Uint8Array(e.buffer,o,s)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",i["Compression"])}else 2==i["PhotometricInterpretation"]&&console.log("Thumbnail image format is RGB, which is not implemented.");return i}function x(e,t,r){var a="";for(n=t;n<t+r;n++)a+=String.fromCharCode(e.getUint8(n));return a}function E(e,t){if("Exif"!=x(e,t,4))return r&&console.log("Not valid EXIF data! "+x(e,t,4)),!1;var n,a,i,o,c,f=t+6;if(18761==e.getUint16(f))n=!1;else{if(19789!=e.getUint16(f))return r&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(f+2,!n))return r&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var g=e.getUint32(f+4,!n);if(g<8)return r&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(f+4,!n)),!1;if(a=y(e,f,f+g,u,n),a.ExifIFDPointer)for(i in o=y(e,f,f+a.ExifIFDPointer,s,n),o){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":o[i]=d[i][o[i]];break;case"ExifVersion":case"FlashpixVersion":o[i]=String.fromCharCode(o[i][0],o[i][1],o[i][2],o[i][3]);break;case"ComponentsConfiguration":o[i]=d.Components[o[i][0]]+d.Components[o[i][1]]+d.Components[o[i][2]]+d.Components[o[i][3]];break}a[i]=o[i]}if(a.GPSInfoIFDPointer)for(i in c=y(e,f,f+a.GPSInfoIFDPointer,l,n),c){switch(i){case"GPSVersionID":c[i]=c[i][0]+"."+c[i][1]+"."+c[i][2]+"."+c[i][3];break}a[i]=c[i]}return a["thumbnail"]=b(e,f,g,n),a}function F(e){if("DOMParser"in self){var t=new DataView(e);if(r&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return r&&console.log("Not a valid JPEG"),!1;var n=2,a=e.byteLength,i=new DOMParser;while(n<a-4){if("http"==x(t,n,4)){var o=n-1,s=t.getUint16(n-2)-1,u=x(t,o,s),l=u.indexOf("xmpmeta>")+8;u=u.substring(u.indexOf("<x:xmpmeta"),l);var c=u.indexOf("x:xmpmeta")+10;u=u.slice(0,c)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+u.slice(c);var d=i.parseFromString(u,"text/xml");return C(d)}n++}}}function I(e){var t={};if(1==e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t["@attributes"][r.nodeName]=r.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var a=0;a<e.childNodes.length;a++){var i=e.childNodes.item(a),o=i.nodeName;if(null==t[o])t[o]=I(i);else{if(null==t[o].push){var s=t[o];t[o]=[],t[o].push(s)}t[o].push(I(i))}}return t}function C(e){try{var t={};if(e.children.length>0)for(var n=0;n<e.children.length;n++){var r=e.children.item(n),a=r.attributes;for(var i in a){var o=a[i],s=o.nodeName,u=o.nodeValue;void 0!==s&&(t[s]=u)}var l=r.nodeName;if("undefined"==typeof t[l])t[l]=I(r);else{if("undefined"==typeof t[l].push){var c=t[l];t[l]=[],t[l].push(c)}t[l].push(I(r))}}else t=e.textContent;return t}catch(d){console.log(d.message)}}o.enableXmp=function(){o.isXmpEnabled=!0},o.disableXmp=function(){o.isXmpEnabled=!1},o.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(f(e)?t&&t.call(e):h(e,t),!0)},o.getTag=function(e,t){if(f(e))return e.exifdata[t]},o.getIptcTag=function(e,t){if(f(e))return e.iptcdata[t]},o.getAllTags=function(e){if(!f(e))return{};var t,n=e.exifdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},o.getAllIptcTags=function(e){if(!f(e))return{};var t,n=e.iptcdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},o.pretty=function(e){if(!f(e))return"";var t,n=e.exifdata,r="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?r+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":r+=t+" : ["+n[t].length+" values]\r\n":r+=t+" : "+n[t]+"\r\n");return r},o.readFromBinaryFile=function(e){return m(e)},a=[],i=function(){return o}.apply(t,a),void 0===i||(e.exports=i)}).call(this)},"dUH+":function(e,t,n){"use strict";var r=n("o0o1"),a=n("yXPU");Object.defineProperty(t,"__esModule",{value:!0}),t.getBrowserOrientation=void 0;var i=n("KgEb");function o(){return s.apply(this,arguments)}function s(){return s=a(r.mark((function e(){var t,n;return r.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==",e.next=3,i.readImage(t);case 3:return n=e.sent,e.abrupt("return",1===n.width&&2===n.height);case 5:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}t.getBrowserOrientation=o},vfit:function(e,t,n){"use strict";var r=n("o0o1"),a=n("3tO9"),i=n("yXPU");Object.defineProperty(t,"__esModule",{value:!0}),t.getCanvasOptions=t.getOrientation=t.getSize=t.getImages=void 0;var o=n("b0Xh"),s=n("LCAA"),u=n("KgEb"),l=n("11I5");function c(e){return d.apply(this,arguments)}function d(){return d=i(r.mark((function e(t){var n;return r.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.getDataFromReadFile(t);case 2:return n=e.sent,e.next=5,Promise.all(n.map((function(e){return u.readImage(e)})));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.defaultOptions.maxSize,r=n<e?n:e,a=n<t?n:t;return e>t?{width:r,height:t*(r/e)}:t>e?{width:e*(a/t),height:a}:{width:r,height:a}}function g(e){var t=1;return o.getData(e,(function(){t=o.getTag(e,"Orientation")})),t}function p(e,t,n){var r={translate:{x:0,y:0},scale:{x:1,y:1},rotate:{angle:0}};switch(n){case 2:return a(a({},r),{},{translate:a(a({},r.translate),{},{x:e}),scale:a(a({},r.scale),{},{x:-1})});case 3:return a(a({},r),{},{translate:{x:e,y:t},rotate:{angle:Math.PI}});case 4:return a(a({},r),{},{translate:a(a({},r.translate),{},{y:t}),scale:a(a({},r.scale),{},{y:-1})});case 5:return a(a({},r),{},{scale:a(a({},r.scale),{},{x:-1}),rotate:{angle:90*Math.PI/180}});case 6:return a(a({},r),{},{translate:a(a({},r.translate),{},{x:e}),rotate:{angle:90*Math.PI/180}});case 7:return a(a({},r),{},{translate:{x:e,y:t},rotate:{angle:90*Math.PI/180},scale:a(a({},r.scale),{},{y:-1})});case 8:return a(a({},r),{},{translate:a(a({},r.translate),{},{y:t}),rotate:{angle:-90*Math.PI/180}});default:return r}}t.getImages=c,t.getSize=f,t.getOrientation=g,t.getCanvasOptions=p},yXPU:function(e,t){function n(e,t,n,r,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void n(l)}s.done?t(u):Promise.resolve(u).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var o=e.apply(t,r);function s(e){n(o,a,i,s,u,"next",e)}function u(e){n(o,a,i,s,u,"throw",e)}s(void 0)}))}}e.exports=r}}]);