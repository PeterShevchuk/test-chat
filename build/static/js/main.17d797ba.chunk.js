(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{12:function(e,t,a){e.exports={home:"Home_home__37MWj",left:"Home_left__2CWj8",leftTop:"Home_leftTop__Ivm6Q",profile:"Home_profile__1POPt",profileName:"Home_profileName__26uAY",search:"Home_search__3Oprm",right:"Home_right__3xfIm",title:"Home_title__37yFA",photo:"Home_photo__2apk4",status:"Home_status__JoZUo",chooseContact:"Home_chooseContact__1KVp-",exitButton:"Home_exitButton__K9KAp"}},14:function(e,t,a){e.exports={contacts:"Contacts_contacts__24fxJ",contact:"Contacts_contact__1PojX",newNotification:"Contacts_newNotification__25zia",pulsing:"Contacts_pulsing__2ukBo",lastMessage:"Contacts_lastMessage__3LRUg",photo:"Contacts_photo__QIpFM",status:"Contacts_status__30vfU",contact__photo:"Contacts_contact__photo__3x2OL",date:"Contacts_date__uB56b",title:"Contacts_title__3ZXK_",addNewContact:"Contacts_addNewContact__3ZKGs",active:"Contacts_active__1FXr_"}},47:function(e){e.exports=JSON.parse('[{"id":"IoVRAFlOKBTrdg5WNodi","name":"Bill gates","addDate":1603612345490,"photo":"https://cdn.forbes.ru/files/presets/900_566/profile/bill_gates.jpg__1583763919__51130__vid688423e.jpg","history":[{"author":false,"date":1603602345490,"message":"Why did you steal the idea and copy the Mac?"},{"author":true,"date":1603602688955,"message":"Well, Steve, I think you can look at this question from the other side. It\'s more like if we both had a wealthy neighbor named Xerox, and I would sneak into his house to steal the TV and find that you have already stolen it."}],"status":true,"newNotification":false},{"id":"V7YQsN9JYhHK5bYTEHlh","name":"Alisa Freeman","addDate":1603612345490,"photo":"https://pbs.twimg.com/profile_images/911001805353500673/kPXHNvuW_400x400.jpg","history":[{"author":false,"date":1603612345490,"message":"Hi, how are you?"},{"author":true,"date":1603612688954,"message":"Hi, i a\'m fine, and how are you?"}],"status":true,"newNotification":false},{"id":"Uf0gdyfaFOKHXbnUAYKN","name":"Jozefina","addDate":1603612340490,"photo":"https://vokrug-tv.ru/pic/person/1/7/d/a/17da0d895eb5ba538ffa20891ba90f6c.jpg","history":[{"author":true,"date":1603612688953,"message":"Hi"}],"status":true,"newNotification":false},{"id":"G5emxyMOwITjujzZxx8a","name":"Bob","addDate":1603612346490,"photo":"https://scontent.flwo3-1.fna.fbcdn.net/v/t1.0-9/119751943_10157549124473341_7249463074917259033_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=BZ9Wm2Z1uOYAX8YVW6O&_nc_ht=scontent.flwo3-1.fna&oh=65faf79aa223ac0c691e37abb86aef11&oe=5FBBDA7D","history":[],"status":false,"newNotification":false},{"id":"3334va4vacasfasavewrSEVAYA43","name":"Roman","addDate":1603612346490,"photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Roman_Reigns_Tribute_to_the_Troops_2016.jpg/274px-Roman_Reigns_Tribute_to_the_Troops_2016.jpg","history":[{"author":true,"date":1603612688952,"message":"Hello"}],"status":false,"newNotification":false}]')},52:function(e,t,a){e.exports=a(85)},57:function(e,t,a){},6:function(e,t,a){e.exports={message:"Message_message__7RqF9",meesageSend:"Message_meesageSend__3998r",meesageSendInput:"Message_meesageSendInput__cUJQd",messagesHistory:"Message_messagesHistory__1n_3e",photo:"Message_photo__5RXfj",status:"Message_status__psY7d",profileName:"Message_profileName__3e36X",messageSend:"Message_messageSend__2kXSY",messagesHistoryMess:"Message_messagesHistoryMess__1YM_v",messagesHistoryMessAuthor:"Message_messagesHistoryMessAuthor__PeHTK",messagesHistoryText:"Message_messagesHistoryText__v4rFY",messageDate:"Message_messageDate__2LZS0",noMessages:"Message_noMessages__3t4AZ",options:"Message_options__2paUm"}},7:function(e,t,a){e.exports={sing:"Sing_sing__1LEF8",authWrapper:"Sing_authWrapper__UC23k",descr:"Sing_descr__2qyY9",input:"Sing_input__2HrlU",field:"Sing_field__PDjMs",singing:"Sing_singing__1Cbku"}},80:function(e,t,a){},82:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(24),c=a.n(o),r=(a(57),a(15)),i=a(3),l=a(5),m=a(19),u=a.n(m),d=a(26),h=a(46),p=a.n(h),g="/chat",f="/registration",_="/login",v="/login",b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=[new Date(e).toLocaleDateString(),new Date(e).toLocaleTimeString("en-US")];return a[t]},E=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"get",url:"https://api.chucknorris.io/jokes/random"}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";t.length<e;)t+=a[Math.floor(Math.random()*a.length)];return t},N=a(17),j=a(23),O=a(16),y=a(2),C=a(34),S={user:{},token:null,contacts:a(47)},x=Object(C.a)({name:"session",initialState:S,reducers:{setToken:function(e,t){var a=t.payload;return Object(y.a)(Object(y.a)({},e),{},{token:a})},setUserInfo:function(e,t){var a=t.payload;return Object(y.a)(Object(y.a)({},e),{},{user:a})},loginOut:function(e){return Object(y.a)(Object(y.a)({},e),{},{token:null,user:{}})},sendMessage:function(e,t){var a=t.payload;return Object(y.a)(Object(y.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===a.id?Object(y.a)(Object(y.a)({},e),{},{history:[].concat(Object(j.a)(e.history),[a.newMessage]),newNotification:a.newMessage.author}):e}))})},seeHistory:function(e,t){var a=t.payload;return e.contacts.find((function(e){return e.id===a})).newNotification?Object(y.a)(Object(y.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===a?Object(y.a)(Object(y.a)({},e),{},{newNotification:!1}):e}))}):e},setNewContact:function(e,t){var a=t.payload;return Object(y.a)(Object(y.a)({},e),{},{contacts:[].concat(Object(j.a)(e.contacts),[a])})},deleteContact:function(e,t){var a=t.payload;return Object(y.a)(Object(y.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==a}))})},deleteContactHistory:function(e,t){var a=t.payload;return Object(y.a)(Object(y.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===a?Object(y.a)(Object(y.a)({},e),{},{history:[]}):e}))})}}}),M=Object(C.a)({name:"global",initialState:{windowSize:0},reducers:{setWindowSize:function(e,t){var a=t.payload;return Object(y.a)(Object(y.a)({},e),{},{windowSize:a})}}}),z=x.reducer,k=x.actions,H=(k.setError,k.setToken),T=k.setUserInfo,A=k.loginOut,D=k.sendMessage,B=k.seeHistory,I=k.setNewContact,U=k.deleteContact,W=k.deleteContactHistory,F=M.reducer,R=M.actions.setWindowSize,Y=(a(80),{Status:function(e){var t=e.size,a=void 0===t?"24":t,n=e.className,o=void 0===n?"Status":n,c=e.fill,i=void 0===c?"#000000":c,l=Object(r.a)(e,["size","className","fill"]);return s.a.createElement("svg",Object.assign({className:"svg "+o,fill:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",width:a,height:a},l),s.a.createElement("path",{d:"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z"}))},NoAvatar:function(e){var t=e.size,a=void 0===t?"24":t,n=e.className,o=void 0===n?"NoAvatar":n,c=e.fill,i=void 0===c?"#000000":c,l=Object(r.a)(e,["size","className","fill"]);return s.a.createElement("svg",Object.assign({className:"svg "+o,fill:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:a,height:a},l),s.a.createElement("path",{d:"M511.676,498.752l-12.8-51.2c-6.073-24.838-24.485-44.813-48.747-52.885l-93.867-31.275\r c-22.891-9.536-33.365-46.4-35.627-60.395c17.442-14.504,28.665-35.14,31.36-57.664c-0.385-3.847,0.523-7.713,2.581-10.987\r c3.326-0.833,6.049-3.215,7.317-6.4c6.142-14.872,9.997-30.588,11.435-46.613c0.003-0.871-0.104-1.738-0.32-2.581\r c-1.528-6.227-5.189-11.722-10.347-15.531v-56.555c0-34.368-10.496-48.469-21.547-56.64C339.004,33.472,321.276,0,255.996,0\r c-57.917,2.332-104.335,48.75-106.667,106.667v56.555c-5.158,3.809-8.819,9.304-10.347,15.531c-0.216,0.843-0.323,1.711-0.32,2.581\r c1.436,16.033,5.291,31.756,11.435,46.635c0.924,3.015,3.347,5.334,6.4,6.123c1.195,0.597,3.435,3.691,3.435,11.243\r c2.711,22.588,13.999,43.271,31.531,57.771c-2.24,13.973-12.651,50.816-34.901,60.117l-94.699,31.445\r c-24.243,8.071-42.643,28.026-48.725,52.843l-12.8,51.2c-1.449,5.71,2.005,11.514,7.715,12.963c0.853,0.217,1.73,0.327,2.61,0.328\r h490.667c5.891-0.002,10.665-4.779,10.664-10.67C511.993,500.461,511.886,499.595,511.676,498.752z"}))},Send:function(e){var t=e.size,a=void 0===t?"24":t,n=e.className,o=void 0===n?"Send":n,c=e.fill,i=void 0===c?"#000000":c,l=Object(r.a)(e,["size","className","fill"]);return s.a.createElement("svg",Object.assign({className:"svg "+o,fill:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 448",width:a,height:a},l),s.a.createElement("g",null,s.a.createElement("polygon",{points:"0.213,32 0,181.333 320,224 0,266.667 0.213,416 448,224 \t\t"})))},Remove:function(e){var t=e.size,a=void 0===t?"24":t,n=e.className,o=void 0===n?"Remove":n,c=e.fill,i=void 0===c?"#000000":c,l=Object(r.a)(e,["size","className","fill"]);return s.a.createElement("svg",Object.assign({className:"svg "+o,fill:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:a,height:a},l),s.a.createElement("path",{d:"m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"}),s.a.createElement("path",{d:"m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0",fill:"#f0f0f0"}))},Clear:function(e){var t=e.size,a=void 0===t?"24":t,n=e.className,o=void 0===n?"Clear":n,c=e.fill,i=void 0===c?"#000000":c,l=Object(r.a)(e,["size","className","fill"]);return s.a.createElement("svg",Object.assign({className:"svg "+o,fill:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:a,height:a},l),s.a.createElement("g",null,s.a.createElement("path",{d:"m180.602 242.734h171.097v84.913h-171.097z",transform:"matrix(.707 -.707 .707 .707 -123.707 271.727)"}),s.a.createElement("path",{d:"m99.025 160.701h171.097v85.824h-171.097z",transform:"matrix(.707 -.707 .707 .707 -89.916 190.15)"}),s.a.createElement("path",{d:"m377.877 275.933-120.984 120.984 75.695 75.695h164.412c8.284 0 15-6.716 15-15s-6.716-15-15-15h-164.413l105.981-105.987z"}),s.a.createElement("path",{d:"m72.526 254.976-51.984 51.976c-13.247 13.246-20.542 30.856-20.542 49.588 0 18.73 7.295 36.341 20.542 49.587l62.092 62.092c2.813 2.813 6.628 4.394 10.606 4.394h196.922z"}),s.a.createElement("path",{d:"m459.781 315.411 31.666-31.667c13.246-13.246 20.541-30.856 20.541-49.588 0-18.73-7.295-36.341-20.541-49.587l-124.675-124.674c-27.343-27.343-71.832-27.343-99.175 0l-31.665 31.667z"})))},Exit:function(e){var t=e.size,a=void 0===t?"24":t,n=e.className,o=void 0===n?"Exit":n,c=e.fill,i=void 0===c?"#000000":c,l=Object(r.a)(e,["size","className","fill"]);return s.a.createElement("svg",Object.assign({className:"svg "+o,fill:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:a,height:a},l),s.a.createElement("path",{d:"m361.5 392v40c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-352c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v352c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm136.355469-170.355469-44.785157-44.785156c-7.8125-7.8125-20.476562-7.8125-28.285156 0-7.8125 7.808594-7.8125 20.472656 0 28.28125l31.855469 31.859375h-240.140625c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h240.140625l-31.855469 31.859375c-7.8125 7.808594-7.8125 20.472656 0 28.28125 3.90625 3.90625 9.023438 5.859375 14.140625 5.859375 5.121094 0 10.238281-1.953125 14.144531-5.859375l44.785157-44.785156c19.496093-19.496094 19.496093-51.214844 0-70.710938zm0 0"}))}}),K=a(14),X=a.n(K),q=function(e){var t=e.contacts,a=e.filter,n=Object(l.b)(),o=Object(i.g)(),c=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w(),a.setSearch(""),e.next=4,n(I({id:t,name:a.search,addDate:Date.now(),photo:null,history:[],status:!1,newNotification:!1}));case 4:o.push("/chat/".concat(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement("div",{className:X.a.contacts},t.length?Object(j.a)(t).sort((function(e,t){return(t.history[t.history.length-1]?t.history[t.history.length-1].date:t.addDate)-(e.history[e.history.length-1]?e.history[e.history.length-1].date:e.addDate)})).map((function(e){return s.a.createElement(O.c,{key:e.id,to:"".concat(g+"/"+e.id),exact:!0,className:X.a.contact+(e.newNotification?" "+X.a.newNotification:""),activeClassName:X.a.active},s.a.createElement("div",{className:X.a.photo},e.photo?s.a.createElement("img",{className:X.a.contact__photo,src:e.photo,alt:e.name,width:"50",height:"50"}):s.a.createElement(Y.NoAvatar,{size:"50"}),s.a.createElement(Y.Status,{className:X.a.status,fill:e.status?"green":"red",size:"15"})),s.a.createElement("div",null,s.a.createElement("div",{className:X.a.title},s.a.createElement("h4",null,e.name)," ",s.a.createElement("span",{className:X.a.date},b(e.history.length>0?e.history[e.history.length-1].date:e.addDate))),s.a.createElement("p",{className:X.a.lastMessage},e.history.length>0?e.history[e.history.length-1].message:" No message")))})):a.search?s.a.createElement("button",{className:X.a.addNewContact,onClick:c},s.a.createElement("h3",null,"Contact not found"),' Add new contact? "',a.search,'"'):s.a.createElement("h3",null," No Contacts, type to search name for add new contact"))},L=a(6),P=a.n(L),J=function(e){return function(t){var a,n,s;E().then((function(e){return a=e.value})),setTimeout((function(){t(D({id:e,newMessage:{author:!0,date:Date.now(),message:a}}))}),(n=5e3,s=2e4,Math.random()*(s-n)+n))}},Z=function(e){var t=e.match,a=Object(n.useState)({}),o=Object(N.a)(a,2),c=o[0],r=o[1],m=Object(l.b)(),u=Object(i.g)(),d=Object(n.useState)(""),h=Object(N.a)(d,2),p=h[0],g=h[1],f=Object(l.c)((function(e){return e.session})).contacts;Object(n.useEffect)((function(){var e=t.url.split("/"),a=f.find((function(t){return t.id===e[2]}));a?(r(a),m(B(e[2]))):u.push("/chat/")}),[t.url,f,m,u]);return s.a.createElement(s.a.Fragment,null,Object.keys(c).length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:P.a.message},s.a.createElement("div",{className:P.a.photo},c.photo?s.a.createElement("img",{src:c.photo,alt:c.name,width:"100%"}):s.a.createElement(Y.NoAvatar,{size:"50"}),s.a.createElement(Y.Status,{className:P.a.status,fill:c.status?"green":"red",size:"15"})),s.a.createElement("h3",{className:P.a.profileName},c.name),s.a.createElement("div",{className:P.a.options},s.a.createElement(Y.Clear,{size:50,onClick:function(){return m(W(c.id))}}),s.a.createElement(Y.Remove,{size:50,onClick:function(){return m(U(c.id))}}))),s.a.createElement("div",{className:P.a.messagesHistory},c.history.length?s.a.createElement("ul",null,c.history.map((function(e){return s.a.createElement("li",{key:"mess"+e.date,className:P.a.messagesHistoryMess+" "+(e.author?P.a.messagesHistoryMessAuthor:"")},e.author&&s.a.createElement("div",{className:P.a.photo},c.photo?s.a.createElement("img",{src:c.photo,alt:c.name,width:"100%"}):s.a.createElement(Y.NoAvatar,{size:"50"})),s.a.createElement("div",{className:P.a.messagesHistoryBlock},s.a.createElement("p",{className:P.a.messagesHistoryText},e.message),s.a.createElement("div",{className:P.a.messageDate},b(e.date).split(".").join("/"),", ",b(e.date,1))))}))):s.a.createElement("h2",{className:P.a.noMessages},"No Messages")),s.a.createElement("div",{className:P.a.meesageSend},s.a.createElement("div",{className:P.a.meesageSendInput},s.a.createElement("input",{type:"text",placeholder:"Type your message",onChange:function(e){return g(e.target.value)},value:p}),s.a.createElement("button",{onClick:function(){""!==p&&" "!==p&&(m(D({id:c.id,newMessage:{author:!1,date:Date.now(),message:p}})),g(""),m(J(c.id)))}},s.a.createElement(Y.Send,{className:P.a.messageSend,size:"30"}))))))},V=a(12),Q=a.n(V),G=function(){return s.a.createElement("h2",{className:Q.a.chooseContact},"To view your correspondence history, select one of the contacts from the list")},$=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.session})).user,a=Object(l.c)((function(e){return e.session})).contacts,o=Object(n.useState)(""),c=Object(N.a)(o,2),r=c[0],m=c[1];return s.a.createElement("div",{className:Q.a.home},s.a.createElement("div",{className:Q.a.left},s.a.createElement("div",{className:Q.a.leftTop},s.a.createElement("div",{className:Q.a.profile},t.photo?s.a.createElement("div",{className:Q.a.photo},s.a.createElement("img",{src:t.photo,alt:t.name,width:"100%"}),s.a.createElement(Y.Status,{className:Q.a.status,fill:"green",size:"15"})):s.a.createElement(Y.NoAvatar,{size:"50"}),s.a.createElement("h3",{className:Q.a.profileName},t.name),s.a.createElement("div",{className:Q.a.exitButton,onClick:function(){return e(A())}},s.a.createElement(Y.Exit,{size:30}))),s.a.createElement("div",{className:Q.a.search},s.a.createElement("input",{type:"text",name:"search",placeholder:"Search (name or message) or start new chat",onChange:function(e){return m(e.target.value)},value:r}))),s.a.createElement("h2",{className:Q.a.title},"Chats"),s.a.createElement(q,{contacts:a.filter((function(e){return e.name.toUpperCase().includes(r.toUpperCase())||e.history.some((function(e){return e.message.toUpperCase().includes(r.toUpperCase())}))})),filter:{search:r,setSearch:m}})),s.a.createElement("div",{className:Q.a.right},s.a.createElement(i.d,null,s.a.createElement(i.b,{path:g+"/:id",component:Z}),s.a.createElement(i.b,{path:g,component:G}))))},ee=a(48),te=a(49),ae=a.n(te),ne=a(7),se=a.n(ne),oe=function(e){console.log(e)},ce=function(){var e=Object(l.b)();return s.a.createElement("div",{className:se.a.sing},s.a.createElement("div",{className:se.a.authWrapper},s.a.createElement(ee.GoogleLogin,{clientId:"24797169312-q57o5u7e58qmav7jk9lb4sj0a8iduqfa.apps.googleusercontent.com",buttonText:"Login with google",onSuccess:function(t){e(H(t.accessToken)),e(T({name:t.profileObj.name,status:!0,photo:t.profileObj.imageUrl}))},onFailure:oe,cookiePolicy:"single_host_origin"}),s.a.createElement(ae.a,{appId:"3466653746750592",fields:"name,email,picture",callback:function(t){t.error||(e(H(t.accessToken)),e(T({name:t.name,status:!0,photo:t.picture.data.url})))},icon:"fa-facebook"})))},re=a(28),ie=function(){var e=Object(n.useState)({password:"",email:"",name:""}),t=Object(N.a)(e,2),a=t[0],o=t[1],c=function(e){var t=e.target;o(Object(y.a)(Object(y.a)({},a),{},Object(re.a)({},t.name,t.value)))};return s.a.createElement("div",{className:se.a.sing},s.a.createElement("div",{className:se.a.authWrapper},s.a.createElement("form",{onSubmit:function(){}},s.a.createElement("div",{className:se.a.field},s.a.createElement("input",{className:se.a.input,type:"text",placeholder:"Name",name:"name",value:a.name,onChange:c,required:!0,autoFocus:!0})),s.a.createElement("div",{className:se.a.field},s.a.createElement("input",{className:se.a.input,type:"email",placeholder:"Email",name:"email",value:a.email,onChange:c,required:!0,autoFocus:!0})),s.a.createElement("div",{className:se.a.field},s.a.createElement("input",{className:se.a.input+" "+se.a.inputPassword,placeholder:"Password",type:"password",name:"password",value:a.password,onChange:c,minLength:"6",required:!0})),s.a.createElement("div",{className:se.a.authBtnWrapper},s.a.createElement("button",{className:se.a.singing,type:"submit"},"Register")),s.a.createElement("p",{className:se.a.descr},"If you do not have any account, please ",s.a.createElement(O.b,{to:_},"login")))))};a(82);var le=function(){var e=Object(l.c)((function(e){return e.session})).token,t=function(t){var a=t.component,n=Object(r.a)(t,["component"]);return s.a.createElement(i.b,Object.assign({},n,{render:function(t){return e?s.a.createElement(a,t):s.a.createElement(i.a,{to:{pathname:v,state:{from:t.location}}})}}))},a=function(t){var a=t.component,n=Object(r.a)(t,["component"]);return s.a.createElement(i.b,Object.assign({},n,{render:function(t){return e?s.a.createElement(i.a,{to:{pathname:g,state:{from:t.location}}}):s.a.createElement(a,t)}}))},n=Object(l.c)((function(e){return e.global})).windowSize,o=Object(l.b)();return window.onresize=function(e){var t=e.target;o(R(t.innerWidth))},s.a.createElement(i.d,null,s.a.createElement(t,{path:g,component:$}),n<756&&s.a.createElement(t,{path:g+"/:id",component:Z}),s.a.createElement(a,{path:f,component:ie}),s.a.createElement(a,{path:_,component:ce}),s.a.createElement(i.a,{to:v}))},me=a(50),ue=a(4),de=a(33),he=a(51),pe=a.n(he),ge=a(22),fe=Object(ue.c)({session:z,global:F}),_e=[ge.a],ve=ue.d,be={key:"app",storage:pe.a,whitelist:["session"]},Ee=Object(de.a)(be,fe),we=ue.a.apply(void 0,_e),Ne=Object(ue.e)(Ee,ve(we)),je=Object(de.b)(Ne);c.a.render(s.a.createElement(l.a,{store:Ne},s.a.createElement(me.a,{loading:null,persistor:je},s.a.createElement(O.a,null,s.a.createElement(le,null)))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.17d797ba.chunk.js.map