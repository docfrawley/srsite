(()=>{"use strict";var e={8618:(e,n,r)=>{r(6992),r(8674),r(9601),r(7727);var o=r(9242),t=r(3396),u={class:"content"};function i(e,n,r,o,i,l){var d=(0,t.up)("Navbar"),a=(0,t.up)("router-view");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(d),(0,t._)("div",u,[(0,t.Wm)(a)])],64)}var l=r(7139),d={class:"navbar"},a=(0,t.Uk)("Self-Relationality"),s={class:"links"},c={key:0,class:"nav_row"},p={key:0,class:"video-admin"},m=(0,t.Uk)("Video Admin"),v={key:1},f={key:1},h=(0,t.Uk)("Signup"),w=(0,t.Uk)("Login");function g(e,n,r,o,u,i){var g=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",d,[(0,t._)("nav",null,[(0,t._)("h1",null,[(0,t.Wm)(g,{to:{name:"home"}},{default:(0,t.w5)((function(){return[a]})),_:1})]),(0,t._)("div",s,[o.user?((0,t.wg)(),(0,t.iD)("div",c,[o.isAdmin?((0,t.wg)(),(0,t.iD)("div",p,[(0,t.Wm)(g,{class:"btn",to:{name:"VideoAdmin"}},{default:(0,t.w5)((function(){return[m]})),_:1})])):(0,t.kq)("",!0),o.user.displayName?((0,t.wg)(),(0,t.iD)("div",v,[(0,t._)("span",null," Hi there, "+(0,l.zw)(o.user.displayName),1)])):(0,t.kq)("",!0),(0,t._)("button",{onClick:n[0]||(n[0]=function(){return o.handleClick&&o.handleClick.apply(o,arguments)})},"Logout")])):((0,t.wg)(),(0,t.iD)("div",f,[(0,t.Wm)(g,{class:"btn",to:{name:"Signup"}},{default:(0,t.w5)((function(){return[h]})),_:1}),(0,t.Wm)(g,{class:"btn",to:{name:"Login"}},{default:(0,t.w5)((function(){return[w]})),_:1})]))])])])}var y=r(124),k=r(8534),b=r(4870),_=r(7613),D=r(4275),V=r(6035),C={apiKey:"AIzaSyA_M3UBwK2a4Y4LRyo_g0M-GqyIsp6ATWY",authDomain:"self-relationality.firebaseapp.com",projectId:"self-relationality",storageBucket:"self-relationality.appspot.com",messagingSenderId:"1011932498740",appId:"1:1011932498740:web:e9e653005e981a0750f361",measurementId:"G-1QH2NYKPMM"};(0,D.ZF)(C);var H=(0,V.ad)(),x=(0,_.v0)(),Z=((0,V.Bt)(),(0,b.iH)(null)),A=(0,b.iH)(!1),U=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(){return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Z.value=null,A.value=!0,e.prev=2,e.next=5,(0,_.w7)(x);case 5:A.value=!1,e.next=13;break;case 8:e.prev=8,e.t0=e["catch"](2),console.log(e.t0.message),Z.value=e.t0.message,A.value=!1;case 13:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),I=function(){return{error:Z,logout:U,isPending:A}};const q=I;var S=r(302),P=(0,b.iH)(x.currentUser);(0,_.Aj)(x,(function(e){console.log("User state change. Current user is:",e),P.value=e}));var M=function(){return{user:P}};const N=M;var E=r(5082),T=(r(9554),r(1539),r(4747),function(){var e=(0,k.Z)((0,y.Z)().mark((function e(n,r){var o,t,u;return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=(0,b.iH)(null),t=(0,b.iH)(null),u=(0,V.hJ)(H,n),e.next=5,(0,V.IO)(u,(0,V.ar)("id","==",r));case 5:return u=e.sent,e.next=8,(0,V.cf)(u,(function(e){var n=[];e.docs.forEach((function(e){n.push((0,E.Z)((0,E.Z)({},e.data()),{},{id:e.id}))})),o.value=!!n&&n[0].admin,t.value=null}),(function(e){console.log(e.message),o.value=null,t.value="could not fetch the data"}));case 8:return e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}());const F=T,O={setup:function(e,n){var r=N(),o=r.user,t=q(),u=t.logout,i=t.error,l=(0,S.tv)(),d=F("users",o.value.uid);console.log(d);var a=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(){return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:i.value||(console.log("user logged out"),l.push({name:"Login"}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{handleClick:a,user:o,isAdmin:d}}};var L=r(89);const z=(0,L.Z)(O,[["render",g],["__scopeId","data-v-4a1ee3b8"]]),Y=z,K={components:{Navbar:Y}},j=(0,L.Z)(K,[["render",i]]),W=j;var J={class:"home"},R=(0,t.Uk)(" home page ");function B(e,n,r,o,u,i){return(0,t.wg)(),(0,t.iD)("div",J,[R,(0,t._)("div",{onClick:n[0]||(n[0]=function(e){return o.sendview("procrastination")}),class:"course"}," Procrastination Course ")])}const G={name:"HomeView",setup:function(){var e=(0,S.tv)(),n=function(n){e.push({name:"CourseView",params:{course:n}})};return{sendview:n}}},Q=(0,L.Z)(G,[["render",B]]),X=Q;var $=(0,t._)("h3",null,"Login",-1),ee={key:0,class:"error"},ne={key:1},re={key:2,disabled:""};function oe(e,n,r,u,i,d){return(0,t.wg)(),(0,t.iD)("form",{onSubmit:n[2]||(n[2]=(0,o.iM)((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"]))},[$,(0,t.wy)((0,t._)("input",{type:"email",placeholder:"Email","onUpdate:modelValue":n[0]||(n[0]=function(e){return u.email=e})},null,512),[[o.nr,u.email]]),(0,t.wy)((0,t._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":n[1]||(n[1]=function(e){return u.password=e})},null,512),[[o.nr,u.password]]),u.error?((0,t.wg)(),(0,t.iD)("div",ee,(0,l.zw)(u.error),1)):(0,t.kq)("",!0),u.isPending?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("button",ne,"Log in")),u.isPending?((0,t.wg)(),(0,t.iD)("button",re,"Loading")):(0,t.kq)("",!0)],32)}r(1703),r(6647);var te=(0,b.iH)(null),ue=(0,b.iH)(!1),ie=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(n,r){var o;return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return te.value=null,ue.value=!0,e.prev=2,e.next=5,(0,_.e5)(x,n,r);case 5:if(o=e.sent,o){e.next=8;break}throw new Error("Could not login");case 8:te.value=null,ue.value=!1,e.next=17;break;case 12:e.prev=12,e.t0=e["catch"](2),console.log(e.t0.message),te.value=e.t0.message,ue.value=!1;case 17:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n,r){return e.apply(this,arguments)}}(),le=function(){return{error:te,login:ie,isPending:ue}};const de=le,ae={setup:function(){var e=de(),n=e.error,r=e.login,o=e.isPending,t=(0,b.iH)(""),u=(0,b.iH)(""),i=(0,S.tv)(),l=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(){return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r(t.value,u.value);case 2:e.sent,n.value||i.push({name:"home"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{email:t,password:u,handleSubmit:l,error:n,isPending:o}}},se=(0,L.Z)(ae,[["render",oe]]),ce=se;var pe=(0,t._)("h3",null,"Sign up",-1),me={key:0,class:"error"},ve={key:1},fe={key:2,disabled:""};function he(e,n,r,u,i,d){return(0,t.wg)(),(0,t.iD)("form",{onSubmit:n[3]||(n[3]=(0,o.iM)((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"]))},[pe,(0,t.wy)((0,t._)("input",{type:"text",placeholder:"Display name","onUpdate:modelValue":n[0]||(n[0]=function(e){return u.displayName=e})},null,512),[[o.nr,u.displayName]]),(0,t.wy)((0,t._)("input",{type:"email",placeholder:"Email","onUpdate:modelValue":n[1]||(n[1]=function(e){return u.email=e})},null,512),[[o.nr,u.email]]),(0,t.wy)((0,t._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":n[2]||(n[2]=function(e){return u.password=e})},null,512),[[o.nr,u.password]]),u.error?((0,t.wg)(),(0,t.iD)("div",me,(0,l.zw)(u.error),1)):(0,t.kq)("",!0),u.isPending?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("button",ve,"Sign up")),u.isPending?((0,t.wg)(),(0,t.iD)("button",fe,"Loading")):(0,t.kq)("",!0)],32)}var we=(0,b.iH)(null),ge=(0,b.iH)(!1),ye=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(n,r,o){var t,u;return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return we.value=null,ge.value=!0,e.prev=2,e.next=5,(0,_.Xb)(x,n,r);case 5:if(t=e.sent,t){e.next=10;break}throw new Error("Could not complete signup");case 10:return e.next=12,(0,_.ck)(x.currentUser,{displayName:o});case 12:if(u=e.sent,!u){e.next=17;break}return we.value=null,ge.value=!1,e.abrupt("return",t);case 17:e.next=24;break;case 19:e.prev=19,e.t0=e["catch"](2),console.log(e.t0.message),we.value=e.t0.message,ge.value=!1;case 24:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(n,r,o){return e.apply(this,arguments)}}(),ke=function(){return{error:we,signup:ye,isPending:ge}};const be=ke,_e={setup:function(){var e=be(),n=e.error,r=e.signup,o=e.isPending,t=(0,b.iH)(""),u=(0,b.iH)(""),i=(0,b.iH)(""),l=(0,S.tv)(),d=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(){return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r(t.value,u.value,i.value);case 2:if(e.sent,n.value){e.next=6;break}return e.next=6,l.push({name:"home"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{email:t,password:u,displayName:i,handleSubmit:d,error:n,isPending:o}}},De=(0,L.Z)(_e,[["render",he]]),Ve=De;var Ce={key:0},He={class:"module-list"},xe=["onClick"],Ze={class:"next-previous"},Ae={key:1};function Ue(e,n,r,o,u,i){var d=(0,t.up)("SingleModel"),a=(0,t.up)("ShowModule");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",{onClick:n[0]||(n[0]=function(){return o.returnToAll&&o.returnToAll.apply(o,arguments)}),class:"course"}," Course View: "+(0,l.zw)(o.whichVid.course),1),o.whichVid.module?((0,t.wg)(),(0,t.iD)("div",Ce,[(0,t._)("div",He,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.documents,(function(e){return(0,t.wg)(),(0,t.iD)("div",{key:e.id},[(0,t._)("span",{class:"ind-mod",onClick:function(n){return o.moveModule(e.modnumb)}},(0,l.zw)(e.title),9,xe)])})),128))]),((0,t.wg)(),(0,t.j4)(d,{specifics:o.whichVid,key:o.componentKey},null,8,["specifics"])),(0,t._)("div",Ze,[o.whichVid.module>1?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"np-module",onClick:n[1]||(n[1]=function(e){return o.moveModule(o.whichVid.module-1)})},"Previous Module ")):(0,t.kq)("",!0),o.whichVid.module<o.documents.length?((0,t.wg)(),(0,t.iD)("div",{key:1,class:"np-module",onClick:n[2]||(n[2]=function(e){return o.moveModule(o.whichVid.module+1)})}," Next Module")):(0,t.kq)("",!0)])])):((0,t.wg)(),(0,t.iD)("div",Ae,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.documents,(function(e){return(0,t.wg)(),(0,t.iD)("div",{key:e.id},[(0,t.Wm)(a,{document:e,onVidInfo:o.showvidInfo},null,8,["document","onVidInfo"])])})),128))]))],64)}r(2526),r(1817);var Ie={class:"module-view"},qe=(0,t.Uk)(),Se=(0,t._)("br",null,null,-1),Pe=(0,t._)("br",null,null,-1);function Me(e,n,r,o,u,i){var d=(0,t.up)("ShowVidDetails");return(0,t.wg)(),(0,t.iD)("div",Ie,[(0,t._)("p",null,"MODULE: "+(0,l.zw)(r.document.module)+" "+(0,l.zw)(r.document.title),1),(0,t._)("p",null,(0,l.zw)(r.document.description),1),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.videos,(function(e){return(0,t.wg)(),(0,t.iD)("div",{key:e.id},[(0,t.Wm)(d,{video:e,onLogInfo:o.logInfo},null,8,["video","onLogInfo"]),qe,Se,Pe])})),128))])}r(2707);var Ne=function(e,n,r){var o=(0,b.iH)(null),t=(0,V.hJ)(H,e);t="course"===n?(0,V.IO)(t,(0,V.ar)("course","==",r)):(0,V.IO)(t,(0,V.ar)("module","==",r));(0,V.cf)(t,(function(e){var r=[];e.docs.forEach((function(e){r.push((0,E.Z)((0,E.Z)({},e.data()),{},{id:e.id}))})),o.value=r,"course"===n?o.value.sort((function(e,n){return e.modnumb>n.modnumb?1:-1})):o.value.sort((function(e,n){return e.order>n.order?1:-1}))}));return{documents:o}};const Ee=Ne;var Te={key:0},Fe={class:"loading-bar"},Oe={key:0},Le=(0,t._)("p",null,"✓ COMPLETE!",-1),ze=[Le],Ye={key:1},Ke=(0,t._)("div",{class:"loading-bar"},[(0,t._)("div",{class:"percentage",style:{width:"0%"}})],-1),je=[Ke];function We(e,n,r,o,u,i){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",{class:"show-vid-details",onClick:n[0]||(n[0]=function(){return o.sendInfo&&o.sendInfo.apply(o,arguments)})},[(0,t._)("p",null,"#"+(0,l.zw)(o.video.order)+", "+(0,l.zw)(o.video.title)+":",1),(0,t._)("p",null,(0,l.zw)(o.vidLength),1)]),o.showProgress?((0,t.wg)(),(0,t.iD)("div",Te,[(0,t._)("div",Fe,[(0,t._)("div",{class:"percentage",style:(0,l.j5)({width:o.percentage+"%"})},null,4)]),o.isComplete?((0,t.wg)(),(0,t.iD)("div",Oe,ze)):(0,t.kq)("",!0)])):((0,t.wg)(),(0,t.iD)("div",Ye,je))],64)}r(1058);const Je={props:["video","order","percent"],setup:function(e,n){var r=(0,b.iH)(e.video),o=Math.floor(parseInt(r.value.length)/60),t=parseInt(r.value.length)-60*o,u=(0,b.iH)(o+":"+t),i=(0,b.iH)(100*e.percent),l=(0,b.iH)(!1),d=(0,b.iH)(!1);r.value.order==e.order&&(u.value="Now Playing",d.value=!0),i.value>=100&&(l.value=!0,console.log("is complete: ",l.value));var a=function(){n.emit("logInfo",{vidinfo:e.video})};return{video:r,sendInfo:a,vidLength:u,percentage:i,showProgress:d,isComplete:l}}},Re=(0,L.Z)(Je,[["render",We]]),Be=Re,Ge={props:["document"],components:{ShowVidDetails:Be},setup:function(e,n){var r=Ee(e.document.course,"module",e.document.modnumb),o=r.error,t=r.documents,u=function(e){n.emit("vidInfo",(0,E.Z)({},e.vidinfo))};return{error:o,videos:t,logInfo:u}}},Qe=(0,L.Z)(Ge,[["render",Me]]),Xe=Qe;var $e={class:"smcontainer"},en={key:0},nn={class:"video-responsive"},rn={class:"module-view"},on=(0,t._)("br",null,null,-1),tn=(0,t._)("br",null,null,-1);function un(e,n,r,o,u,i){var d=(0,t.up)("vue-vimeo-player"),a=(0,t.up)("ShowVidDetails");return(0,t.wg)(),(0,t.iD)("div",$e,[o.theVideo?((0,t.wg)(),(0,t.iD)("div",en,[(0,t._)("div",nn,[(0,t.Wm)(d,{class:"video-responsive-item","video-id":o.theVideo.iframe,options:{responsive:!0},"events-to-emit":["ended","progress"],onProgress:o.CheckProgress,onEnded:o.NowEnded,onPause:o.WhenPaused},null,8,["video-id","onProgress","onEnded","onPause"])]),(0,t._)("p",null,(0,l.zw)(o.theVideo.title),1),(0,t._)("p",null,(0,l.zw)(o.theVideo.description),1),(0,t._)("p",null,(0,l.zw)(o.theVideo.length),1)])):(0,t.kq)("",!0),(0,t._)("div",rn,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.videos,(function(e){return(0,t.wg)(),(0,t.iD)("div",{key:e.id},[((0,t.wg)(),(0,t.j4)(a,{video:e,order:o.theVideo.order,percent:o.percentVid,onLogInfo:o.newVideo,key:o.percentVid},null,8,["video","order","percent","onLogInfo"])),on,tn])})),128))])])}var ln=function(e,n,r){var o=(0,b.iH)(),t=(0,b.iH)(null),u=(0,V.hJ)(H,e);return u=(0,V.IO)(u,(0,V.ar)("module","==",n),(0,V.ar)("order","==",r)),(0,V.cf)(u,(function(e){var n=[];e.docs.forEach((function(e){n.push((0,E.Z)((0,E.Z)({},e.data()),{},{id:e.id}))})),o.value=n[0],t.value=null}),(function(e){console.log(e.message),o.value=null,t.value="could not fetch the data"})),o};const dn=ln;var an=r(5481);const sn={props:["specifics"],components:{ShowVidDetails:Be,vueVimeoPlayer:an.P},setup:function(e){var n=dn(e.specifics.course,e.specifics.module,e.specifics.order),r=Ee(e.specifics.course,"module",e.specifics.module),o=(r.error,r.documents),t=(0,b.iH)(0),u=(0,b.iH)(0),i=(0,b.iH)(0),l=function(e){n.value=e.vidinfo,t.value=n.value.order-1,i.value++},d=function(e,n,r){u.value=e.percent},a=function(e,r,u){t.value++,t.value==o.value.length&&(t.value=0),n.value=o.value[t.value],i.value++},s=function(){console.log("on pause: ")};return{theVideo:n,videos:o,componentKey:i,percentVid:u,newVideo:l,CheckProgress:d,NowEnded:a,WhenPaused:s}}},cn=(0,L.Z)(sn,[["render",un]]),pn=cn,mn={name:"Courseview",components:{ShowModule:Xe,SingleModel:pn},props:["course"],setup:function(e){var n=Ee("course-modules","course",e.course),r=(n.error,n.documents),o=(0,b.qj)({course:e.course,module:null,order:null}),t=(0,b.iH)(0),u=function(e){o.module=e.module,o.order=e.order,t.value++},i=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(n){return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:o.module=n,o.order=1,t.value++;case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){o.module=null,o.order=null,t.value=0};return{documents:r,showvidInfo:u,whichVid:o,returnToAll:l,moveModule:i,componentKey:t}}},vn=(0,L.Z)(mn,[["render",Ue],["__scopeId","data-v-686387ac"]]),fn=vn;var hn=(0,t.Uk)(" This is the admin panel area First pick which course to edit: "),wn={class:"course-container"},gn=["onClick"],yn={key:0},kn={key:1};function bn(e,n,r,o,u,i){var d=(0,t.up)("CourseForm"),a=(0,t.up)("AddCourse");return(0,t.wg)(),(0,t.iD)(t.HY,null,[hn,(0,t._)("div",wn,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.courses,(function(e){return(0,t.wg)(),(0,t.iD)("div",{key:e.id},[(0,t._)("div",{class:"course-listing",onClick:function(n){return o.goToCourse(e)}},(0,l.zw)(e.title),9,gn)])})),128)),(0,t._)("button",{class:"course-listing",onClick:n[0]||(n[0]=function(){return o.newCourseForm&&o.newCourseForm.apply(o,arguments)})},"ADD COURSE +")]),o.currentCourse?((0,t.wg)(),(0,t.iD)("div",yn,[((0,t.wg)(),(0,t.j4)(d,{courseInfo:o.currentCourse,key:o.componentKey},null,8,["courseInfo"]))])):(0,t.kq)("",!0),o.showAddForm?((0,t.wg)(),(0,t.iD)("div",kn,[(0,t.Wm)(a,{onCourseAdded:o.wasItAdded},null,8,["onCourseAdded"])])):(0,t.kq)("",!0)],64)}var _n=function(e){var n=(0,b.iH)(null),r=(0,V.hJ)(H,e),o=(0,V.cf)(r,(function(e){var r=[];e.docs.forEach((function(e){r.push((0,E.Z)((0,E.Z)({},e.data()),{},{id:e.id}))})),n.value=r}));return(0,t.m0)((function(e){e((function(){return o()}))})),{documents:n}};const Dn=_n;var Vn=(0,t.Uk)(" this is the course form: "),Cn={key:0},Hn=(0,t._)("h4",null,"Edit Course Form",-1),xn=(0,t._)("label",null,"Title",-1),Zn=(0,t._)("label",null,"Instructor",-1),An=(0,t._)("label",null,"Launch",-1),Un=(0,t._)("label",null,"Status",-1),In=(0,t._)("label",null,"Col_Name",-1),qn=(0,t._)("label",null,"Desscription",-1),Sn={key:0},Pn={key:1,disabled:""},Mn={key:0},Nn={key:1,class:"module-container"},En=["onClick"],Tn={key:2},Fn={key:3};function On(e,n,r,u,i,d){var a=(0,t.up)("ModuleForm"),s=(0,t.up)("AddModule");return(0,t.wg)(),(0,t.iD)(t.HY,null,[Vn,u.edCourse?((0,t.wg)(),(0,t.iD)("div",Cn,[(0,t._)("form",{onSubmit:n[6]||(n[6]=(0,o.iM)((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"]))},[Hn,xn,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"title","onUpdate:modelValue":n[0]||(n[0]=function(e){return u.edCourse.title=e})},null,512),[[o.nr,u.edCourse.title]]),Zn,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"instructor","onUpdate:modelValue":n[1]||(n[1]=function(e){return u.edCourse.instructor=e})},null,512),[[o.nr,u.edCourse.instructor]]),An,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"launch","onUpdate:modelValue":n[2]||(n[2]=function(e){return u.edCourse.launch=e})},null,512),[[o.nr,u.edCourse.launch]]),Un,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"status","onUpdate:modelValue":n[3]||(n[3]=function(e){return u.edCourse.status=e})},null,512),[[o.nr,u.edCourse.status]]),In,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"col_name","onUpdate:modelValue":n[4]||(n[4]=function(e){return u.edCourse.col_name=e})},null,512),[[o.nr,u.edCourse.col_name]]),qn,(0,t.wy)((0,t._)("textarea",{required:"",placeholder:"description","onUpdate:modelValue":n[5]||(n[5]=function(e){return u.edCourse.description=e})},null,512),[[o.nr,u.edCourse.description]]),u.isPending?((0,t.wg)(),(0,t.iD)("button",Pn,"Saving...")):((0,t.wg)(),(0,t.iD)("button",Sn,"UPDATE"))],32),u.updated?((0,t.wg)(),(0,t.iD)("div",Mn,"course updated")):(0,t.kq)("",!0)])):(0,t.kq)("",!0),u.documents?((0,t.wg)(),(0,t.iD)("div",Nn,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(u.documents,(function(e){return(0,t.wg)(),(0,t.iD)("div",{key:e.id},[(0,t._)("div",{class:"module-listing",onClick:function(n){return u.showModule(e)}},(0,l.zw)(e.title),9,En)])})),128)),(0,t._)("button",{onClick:n[7]||(n[7]=function(){return u.newModuleForm&&u.newModuleForm.apply(u,arguments)})}," ADD MODULE + ")])):(0,t.kq)("",!0),u.modToEdit?((0,t.wg)(),(0,t.iD)("div",Tn,[((0,t.wg)(),(0,t.j4)(a,{moduleInfo:u.modToEdit,modColName:u.edCourse.col_name,key:u.componentKey},null,8,["moduleInfo","modColName"]))])):(0,t.kq)("",!0),u.showAddForm?((0,t.wg)(),(0,t.iD)("div",Fn,[(0,t.Wm)(s,{onModuleAdded:u.wasItAdded,modColName:u.edCourse.col_name},null,8,["onModuleAdded","modColName"])])):(0,t.kq)("",!0)],64)}var Ln=function(e,n){var r=(0,b.iH)(null),o=(0,b.iH)(!1),t=(0,V.JU)(H,e,n),u=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(){return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.value=!0,r.value=null,e.prev=2,e.next=5,(0,V.oe)(t);case 5:o.value=!1,e.next=13;break;case 8:e.prev=8,e.t0=e["catch"](2),console.log(e.t0.message),o.value=!1,r.value="could not delete the document";case 13:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(n){return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.value=!0,r.value=null,e.prev=2,e.next=5,(0,V.r7)(t,n);case 5:o.value=!1,e.next=13;break;case 8:e.prev=8,e.t0=e["catch"](2),console.log(e.t0.message),o.value=!1,r.value="could not update the document";case 13:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}();return{error:r,isPending:o,deleteTheDoc:u,updateTheDoc:i}};const zn=Ln;var Yn=(0,t.Uk)(" this is the module form: "),Kn={key:0},jn=(0,t._)("h4",null,"Add/Edit Module",-1),Wn=(0,t._)("label",null,"Course",-1),Jn=(0,t._)("label",null,"Module#",-1),Rn=(0,t._)("label",null,"Title",-1),Bn=(0,t._)("label",null,"Description",-1),Gn={key:0},Qn={key:1,disabled:""},Xn={key:0},$n={key:1,class:"video-container"},er=["onClick"],nr={key:2},rr=(0,t.Uk)(" hello there "),or={key:3};function tr(e,n,r,u,i,d){var a=(0,t.up)("VideoForm"),s=(0,t.up)("AddVideo");return(0,t.wg)(),(0,t.iD)(t.HY,null,[Yn,u.edMod?((0,t.wg)(),(0,t.iD)("div",Kn,[(0,t._)("form",{onSubmit:n[4]||(n[4]=(0,o.iM)((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"]))},[jn,Wn,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"course","onUpdate:modelValue":n[0]||(n[0]=function(e){return u.edMod.course=e})},null,512),[[o.nr,u.edMod.course]]),Jn,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"modnumb","onUpdate:modelValue":n[1]||(n[1]=function(e){return u.edMod.modnumb=e})},null,512),[[o.nr,u.edMod.modnumb]]),Rn,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"title","onUpdate:modelValue":n[2]||(n[2]=function(e){return u.edMod.title=e})},null,512),[[o.nr,u.edMod.title]]),Bn,(0,t.wy)((0,t._)("textarea",{required:"",placeholder:"description","onUpdate:modelValue":n[3]||(n[3]=function(e){return u.edMod.description=e})},null,512),[[o.nr,u.edMod.description]]),u.isPending?((0,t.wg)(),(0,t.iD)("button",Qn,"Saving...")):((0,t.wg)(),(0,t.iD)("button",Gn,"UPDATE"))],32),u.updated?((0,t.wg)(),(0,t.iD)("div",Xn,"module updated")):(0,t.kq)("",!0)])):(0,t.kq)("",!0),u.documents?((0,t.wg)(),(0,t.iD)("div",$n,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(u.documents,(function(e){return(0,t.wg)(),(0,t.iD)("div",{key:e.id},[(0,t._)("div",{class:"video-listing",onClick:function(n){return u.showVid(e)}},(0,l.zw)(e.title),9,er)])})),128)),(0,t._)("button",{onClick:n[5]||(n[5]=function(){return u.showAddVideoForm&&u.showAddVideoForm.apply(u,arguments)})}," ADD Video + ")])):(0,t.kq)("",!0),u.currentVideo?((0,t.wg)(),(0,t.iD)("div",nr,[rr,((0,t.wg)(),(0,t.j4)(a,{videoInfo:u.currentVideo,courseCol:u.colName,key:u.componentKey},null,8,["videoInfo","courseCol"]))])):(0,t.kq)("",!0),u.showAddForm?((0,t.wg)(),(0,t.iD)("div",or,[(0,t.Wm)(s,{onVideoAdded:u.wasItAdded,courseCol:u.colName,moduleNumb:u.modNumber},null,8,["onVideoAdded","courseCol","moduleNumb"])])):(0,t.kq)("",!0)],64)}var ur=(0,t.Uk)(" this is the video form: "),ir={key:0},lr=(0,t._)("h4",null,"Add/Edit Video",-1),dr=(0,t._)("label",null,"title",-1),ar=(0,t._)("label",null,"length",-1),sr=(0,t._)("label",null,"module",-1),cr=(0,t._)("label",null,"order",-1),pr=(0,t._)("label",null,"description",-1),mr=(0,t._)("label",null,"iframe",-1),vr={key:0},fr={key:1,disabled:""},hr={key:0};function wr(e,n,r,u,i,l){return(0,t.wg)(),(0,t.iD)(t.HY,null,[ur,u.edVid?((0,t.wg)(),(0,t.iD)("div",ir,[(0,t._)("form",{onSubmit:n[6]||(n[6]=(0,o.iM)((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"]))},[lr,dr,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"title","onUpdate:modelValue":n[0]||(n[0]=function(e){return u.edVid.title=e})},null,512),[[o.nr,u.edVid.title]]),ar,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"length","onUpdate:modelValue":n[1]||(n[1]=function(e){return u.edVid.length=e})},null,512),[[o.nr,u.edVid.length]]),sr,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"modnumb","onUpdate:modelValue":n[2]||(n[2]=function(e){return u.edVid.module=e})},null,512),[[o.nr,u.edVid.module]]),cr,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"title","onUpdate:modelValue":n[3]||(n[3]=function(e){return u.edVid.order=e})},null,512),[[o.nr,u.edVid.order]]),pr,(0,t.wy)((0,t._)("textarea",{required:"",placeholder:"description","onUpdate:modelValue":n[4]||(n[4]=function(e){return u.edVid.description=e})},null,512),[[o.nr,u.edVid.description]]),mr,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"iframe id","onUpdate:modelValue":n[5]||(n[5]=function(e){return u.edVid.iframe=e})},null,512),[[o.nr,u.edVid.iframe]]),u.isPending?((0,t.wg)(),(0,t.iD)("button",fr,"Saving...")):((0,t.wg)(),(0,t.iD)("button",vr,"UPDATE"))],32),u.updated?((0,t.wg)(),(0,t.iD)("div",hr,"video updated")):(0,t.kq)("",!0)])):(0,t.kq)("",!0)],64)}const gr={props:["videoInfo","courseCol"],setup:function(e){var n=(0,b.iH)(e.videoInfo),r=zn(e.courseCol,e.videoInfo.id),o=r.isPending,t=(r.error,r.deleteTheDoc,r.updateTheDoc),u=(0,b.iH)(!1),i=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(){return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t(n.value);case 2:u.value=!0;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{isPending:o,updated:u,edVid:n,handleSubmit:i}}},yr=(0,L.Z)(gr,[["render",wr]]),kr=yr;var br=(0,t.Uk)(" this is the add video form: "),_r=(0,t._)("label",null,"Title",-1),Dr=(0,t._)("label",null,"Length",-1),Vr=(0,t._)("label",null,"iframe",-1),Cr=(0,t._)("label",null,"Description",-1),Hr={key:0},xr={key:1,disabled:""},Zr={key:0};function Ar(e,n,r,u,i,d){return(0,t.wg)(),(0,t.iD)(t.HY,null,[br,(0,t._)("form",{onSubmit:n[4]||(n[4]=(0,o.iM)((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"]))},[(0,t._)("h4",null,"Add Video Form for the Col_name: "+(0,l.zw)(u.course)+" and module # "+(0,l.zw)(u.module)+" with order # of "+(0,l.zw)(u.order+1),1),_r,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"title","onUpdate:modelValue":n[0]||(n[0]=function(e){return u.title=e})},null,512),[[o.nr,u.title]]),Dr,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"length","onUpdate:modelValue":n[1]||(n[1]=function(e){return u.length=e})},null,512),[[o.nr,u.length]]),Vr,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"iframe id","onUpdate:modelValue":n[2]||(n[2]=function(e){return u.iframe=e})},null,512),[[o.nr,u.iframe]]),Cr,(0,t.wy)((0,t._)("textarea",{required:"",placeholder:"Description","onUpdate:modelValue":n[3]||(n[3]=function(e){return u.description=e})},null,512),[[o.nr,u.description]]),u.isPending?((0,t.wg)(),(0,t.iD)("button",xr,"Saving...")):((0,t.wg)(),(0,t.iD)("button",Hr,"ADD VIDEO"))],32),u.wasAdded?((0,t.wg)(),(0,t.iD)("div",Zr,"course added")):(0,t.kq)("",!0)],64)}var Ur=function(e){var n=(0,b.iH)(null),r=(0,b.iH)(!1),o=(0,V.hJ)(H,e),t=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(t){var u;return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.value=null,r.value=!0,e.prev=2,e.next=5,(0,V.ET)(o,t);case 5:return u=e.sent,r.value=!1,e.abrupt("return",u);case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0.message),n.value="could not send the message",r.value=!1;case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(n){return e.apply(this,arguments)}}();return{error:n,addTheDocument:t,isPending:r}};const Ir=Ur;var qr=function(e,n,r){var o=(0,b.iH)(0),t=(0,V.hJ)(H,e);t="course"===n?(0,V.IO)(t,(0,V.ar)("course","==",r)):(0,V.IO)(t,(0,V.ar)("module","==",r));(0,V.cf)(t,(function(e){var n=[];e.docs.forEach((function(e){n.push((0,E.Z)((0,E.Z)({},e.data()),{},{id:e.id}))})),o.value=n.length,console.log("results length: ",o.value)}));return{order:o}};const Sr=qr,Pr={props:["courseCol","moduleNumb"],emits:["videoAdded"],setup:function(e,n){var r=Ir(e.courseCol),o=(r.error,r.addTheDocument),t=Sr(e.courseCol,"module",e.moduleNumb),u=t.order,i=(0,b.iH)(!1),l=(0,b.iH)(!1),d=(0,b.iH)(),a=(0,b.iH)(e.courseCol),s=(0,b.iH)(e.moduleNumb),c=(0,b.iH)(),p=(0,b.iH)(),m=(0,b.iH)(),v=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(){var r;return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o({course:a.value,title:d.value,module:s.value,order:u.value+1,iframe:p.value,description:c.value,length:m.value});case 2:r=e.sent,l.value=!1,r&&n.emit("videoAdded",{wasadded:!0});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{isPending:l,wasAdded:i,handleSubmit:v,title:d,course:a,module:s,description:c,order:u,iframe:p,length:m}}},Mr=(0,L.Z)(Pr,[["render",Ar]]),Nr=Mr,Er={props:["moduleInfo","modColName"],components:{VideoForm:kr,AddVideo:Nr},setup:function(e){var n=(0,b.iH)(e.moduleInfo),r=zn("course-modules",e.moduleInfo.id),o=r.isPending,t=(r.error,r.deleteTheDoc,r.updateTheDoc),u=Ee(e.modColName,"modules",e.moduleInfo.modnumb),i=u.documents,l=(0,b.iH)(!1),d=(0,b.iH)(0),a=(0,b.iH)(),s=(0,b.iH)(e.modColName),c=(0,b.iH)(!1),p=(0,b.iH)(e.moduleInfo.modnumb),m=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(){return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("got here: ",n),e.next=3,t(n.value);case 3:l.value=!0;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){a.value=e,d.value++,c.value=!1},f=function(e){console.log("I got here now: ",e),c.value=!1},h=function(){c.value=!0,a.value=null};return{modNumber:p,showAddVideoForm:h,isPending:o,updated:l,edMod:n,handleSubmit:m,showVid:v,componentKey:d,documents:i,colName:s,currentVideo:a,showAddForm:c,wasItAdded:f}}},Tr=(0,L.Z)(Er,[["render",tr]]),Fr=Tr;var Or=(0,t.Uk)(" this is the add module form: "),Lr=(0,t._)("label",null,"Title",-1),zr=(0,t._)("label",null,"Description",-1),Yr={key:0},Kr={key:1,disabled:""},jr={key:0};function Wr(e,n,r,u,i,d){return(0,t.wg)(),(0,t.iD)(t.HY,null,[Or,(0,t._)("form",{onSubmit:n[2]||(n[2]=(0,o.iM)((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"]))},[(0,t._)("h4",null,"Add Module Form of course with Col_Name of: "+(0,l.zw)(u.col_name)+" and this will be the "+(0,l.zw)(u.order+1)+" module",1),Lr,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"title","onUpdate:modelValue":n[0]||(n[0]=function(e){return u.title=e})},null,512),[[o.nr,u.title]]),zr,(0,t.wy)((0,t._)("textarea",{required:"",placeholder:"Description","onUpdate:modelValue":n[1]||(n[1]=function(e){return u.description=e})},null,512),[[o.nr,u.description]]),u.isPending?((0,t.wg)(),(0,t.iD)("button",Kr,"Saving...")):((0,t.wg)(),(0,t.iD)("button",Yr,"ADD MODULE"))],32),u.wasAdded?((0,t.wg)(),(0,t.iD)("div",jr,"course added")):(0,t.kq)("",!0)],64)}const Jr={props:["modColName"],emits:["moduleAdded"],setup:function(e,n){var r=Ir("course-modules"),o=(r.error,r.addTheDocument),t=(0,b.iH)(!1),u=(0,b.iH)(!1),i=(0,b.iH)(),l=(0,b.iH)(),d=Sr(e.modColName),a=d.order,s=(0,b.iH)(),c=(0,b.iH)(e.modColName),p=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(){var r;return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o({course:c.value,title:i.value,modnumb:a.value+1,description:s.value});case 2:r=e.sent,u.value=!1,r&&n.emit("moduleAdded",{wasadded:!0});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{isPending:u,wasAdded:t,handleSubmit:p,title:i,course:l,order:a,description:s,col_name:c}}},Rr=(0,L.Z)(Jr,[["render",Wr]]),Br=Rr,Gr={components:{ModuleForm:Fr,AddModule:Br},props:["courseInfo"],setup:function(e){var n=(0,b.iH)(e.courseInfo),r=zn("courses",e.courseInfo.id),o=r.isPending,t=(r.error,r.deleteTheDoc,r.updateTheDoc),u=(0,b.iH)(!1),i=Ee("course-modules","course",e.courseInfo.col_name),l=i.documents,d=(0,b.iH)(),a=(0,b.iH)(0),s=(0,b.iH)(!1),c=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(){return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t(n.value);case 2:u.value=!0;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(e){d.value=e,a.value++},m=function(){s.value=!0,d.value=null},v=function(e){s.value=!1};return{showAddForm:s,isPending:o,updated:u,edCourse:n,handleSubmit:c,showModule:p,documents:l,modToEdit:d,componentKey:a,newModuleForm:m,wasItAdded:v}}},Qr=(0,L.Z)(Gr,[["render",On]]),Xr=Qr;var $r=(0,t.Uk)(" this is the add course form: "),eo=(0,t._)("h4",null,"Add Course Form",-1),no=(0,t._)("label",null,"Title",-1),ro=(0,t._)("label",null,"Instructor",-1),oo=(0,t._)("label",null,"Launch",-1),to=(0,t._)("label",null,"Status",-1),uo=(0,t._)("label",null,"Col_Name",-1),io=(0,t._)("label",null,"Desscription",-1),lo={key:0},ao={key:1,disabled:""},so={key:0};function co(e,n,r,u,i,l){return(0,t.wg)(),(0,t.iD)(t.HY,null,[$r,(0,t._)("form",{onSubmit:n[6]||(n[6]=(0,o.iM)((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"]))},[eo,no,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"title","onUpdate:modelValue":n[0]||(n[0]=function(e){return u.title=e})},null,512),[[o.nr,u.title]]),ro,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"instructor","onUpdate:modelValue":n[1]||(n[1]=function(e){return u.instructor=e})},null,512),[[o.nr,u.instructor]]),oo,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"launch","onUpdate:modelValue":n[2]||(n[2]=function(e){return u.launch=e})},null,512),[[o.nr,u.launch]]),to,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"status","onUpdate:modelValue":n[3]||(n[3]=function(e){return u.status=e})},null,512),[[o.nr,u.status]]),uo,(0,t.wy)((0,t._)("input",{type:"text",required:"",placeholder:"col_name","onUpdate:modelValue":n[4]||(n[4]=function(e){return u.col_name=e})},null,512),[[o.nr,u.col_name]]),io,(0,t.wy)((0,t._)("textarea",{required:"",placeholder:"description","onUpdate:modelValue":n[5]||(n[5]=function(e){return u.description=e})},null,512),[[o.nr,u.description]]),u.isPending?((0,t.wg)(),(0,t.iD)("button",ao,"Saving...")):((0,t.wg)(),(0,t.iD)("button",lo,"ADD COURSE"))],32),u.wasAdded?((0,t.wg)(),(0,t.iD)("div",so,"course added")):(0,t.kq)("",!0)],64)}const po={emits:["courseAdded"],setup:function(e,n){var r=Ir("courses"),o=(r.error,r.addTheDocument),t=(0,b.iH)(!1),u=(0,b.iH)(!1),i=(0,b.iH)(),l=(0,b.iH)(),d=(0,b.iH)(),a=(0,b.iH)(),s=(0,b.iH)(),c=(0,b.iH)(),p=function(){var e=(0,k.Z)((0,y.Z)().mark((function e(){var r;return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o({title:i.value,instructor:l.value,status:d.value,launch:a.value,col_name:s.value,description:c.value});case 2:r=e.sent,u.value=!1,r&&n.emit("courseAdded",{wasadded:!0});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{isPending:u,wasAdded:t,handleSubmit:p,title:i,instructor:l,status:d,launch:a,col_name:s,description:c}}},mo=(0,L.Z)(po,[["render",co]]),vo=mo,fo={components:{CourseForm:Xr,AddCourse:vo},setup:function(){var e=(0,b.iH)(),n=Dn("courses"),r=n.documents,o=(0,b.iH)(0),t=(0,b.iH)(!1),u=function(n){e.value=null,n&&(e.value=n,o.value++)},i=function(){t.value=!0,e.value=null},l=function(e){console.log("i am here now"),t.value=!1};return{showAddForm:t,componentKey:o,goToCourse:u,courses:r,currentCourse:e,newCourseForm:i,wasItAdded:l}}},ho=(0,L.Z)(fo,[["render",bn],["__scopeId","data-v-4b62469f"]]),wo=ho;var go=function(e,n,r){var o=x.currentUser;o?r():r({name:"Login"})},yo=function(e,n,r){var o=x.currentUser;o?r():r({name:"HomeView"})},ko=[{path:"/",name:"home",component:X,beforeEnter:go},{path:"/login",name:"Login",component:ce},{path:"/signup",name:"Signup",component:Ve},{path:"/course/:course",name:"CourseView",component:fn,beforeEnter:go,props:!0},{path:"/videoadmin",name:"VideoAdmin",component:wo,beforeEnter:yo,props:!0}],bo=(0,S.p7)({history:(0,S.PO)("/"),routes:ko});const _o=bo;var Do;(0,_.Aj)(x,(function(){Do||(Do=(0,o.ri)(W).use(_o).mount("#app"))}))}},n={};function r(o){var t=n[o];if(void 0!==t)return t.exports;var u=n[o]={exports:{}};return e[o](u,u.exports,r),u.exports}r.m=e,(()=>{var e=[];r.O=(n,o,t,u)=>{if(!o){var i=1/0;for(s=0;s<e.length;s++){for(var[o,t,u]=e[s],l=!0,d=0;d<o.length;d++)(!1&u||i>=u)&&Object.keys(r.O).every((e=>r.O[e](o[d])))?o.splice(d--,1):(l=!1,u<i&&(i=u));if(l){e.splice(s--,1);var a=t();void 0!==a&&(n=a)}}return n}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[o,t,u]}})(),(()=>{r.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(n,{a:n}),n}})(),(()=>{r.d=(e,n)=>{for(var o in n)r.o(n,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={143:0};r.O.j=n=>0===e[n];var n=(n,o)=>{var t,u,[i,l,d]=o,a=0;if(i.some((n=>0!==e[n]))){for(t in l)r.o(l,t)&&(r.m[t]=l[t]);if(d)var s=d(r)}for(n&&n(o);a<i.length;a++)u=i[a],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(s)},o=self["webpackChunksrsite"]=self["webpackChunksrsite"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))})();var o=r.O(void 0,[998],(()=>r(8618)));o=r.O(o)})();
//# sourceMappingURL=app.4a111de4.js.map