(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(62),o=a.n(i);a(72),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(145),l=a(144),c=a(143),u=a(10),m=a(11),h=a(13),p=a(12),g=a(14),d=a(63),f=a.n(d),v=(a(74),a(76),a(78),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"message"},s.a.createElement("span",{className:"message__author"},this.props.message.userName,":"),this.props.message.message,this.props.message.imageUrl?s.a.createElement("img",{src:this.props.message.imageUrl}):"")}}]),t}(n.Component)),b=a(7),E=a.n(b),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={userName:"Jacques Chie Raque",message:"",list:[],imageUrl:""},a.messageRef=E.a.database().ref().child("messages"),a.fileInput=s.a.createRef(),a.imgCanvas=s.a.createRef(),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.listenMessages()}},{key:"componentWillReceiveProps",value:function(e){e.user&&this.setState({userName:e.user.displayName})}},{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSend",value:function(){if(this.state.message){var e={userName:this.state.userName,message:this.state.message,imageUrl:this.state.imageUrl};this.messageRef.push(e),this.setState({message:"Nv message"})}}},{key:"handleImage",value:function(){var e=this;if(console.log("l\xe0",this.fileInput.current.files[0].name),console.log("l\xe0",this.fileInput),this.fileInput.current.files[0]){var t=this.fileInput.current.files[0],a=new Image;a.src=URL.createObjectURL(t),console.log("img.src == ",a.src),console.log("refcanvas == ",this.imgCanvas),a.onload=function(){console.log("img onooaded");var n=e.imgCanvas;e.imgCanvas.current.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,100,100),console.log("pouf",n),n.current.toBlob(function(a){E.a.storage().ref("images/").child(t.name).put(a).then(function(t){t.ref.getDownloadURL().then(function(t){e.setState({imageUrl:t})})})},"image/webp",.8)}}}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.handleSend()}},{key:"listenMessages",value:function(){var e=this;this.messageRef.limitToLast(10).on("value",function(t){e.setState({list:Object.values(t.val())})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"form"},s.a.createElement("div",{className:"form__message"},this.state.list.map(function(e,t){return s.a.createElement(v,{key:t,message:e})})),s.a.createElement("canvas",{ref:this.imgCanvas}),s.a.createElement("input",{type:"file",ref:this.fileInput,onChange:this.handleImage.bind(this)}),s.a.createElement("div",{className:"form__row"},s.a.createElement("input",{className:"form__input",type:"text",placeholder:"Type message",value:this.state.message,onChange:this.handleChange.bind(this),onKeyPress:this.handleKeyPress.bind(this)}),s.a.createElement("button",{className:"form__button",onClick:this.handleSend.bind(this)},"Envoyer")))}}]),t}(n.Component),_=a(142),O=(a(135),function(){return s.a.createElement("div",null,s.a.createElement("button",{className:"app__button"},s.a.createElement(_.a,{to:"/"},"Index du chat")),s.a.createElement("button",{className:"app__button"},s.a.createElement(_.a,{to:"/about"},"About inutile")))});E.a.initializeApp({apiKey:"AIzaSyCgLe7mjrJGrBp-OIGoz3X7hrbKFvV8QAw",authDomain:"chatroom-2b89f.firebaseapp.com",databaseURL:"https://chatroom-2b89f.firebaseio.com",projectId:"chatroom-2b89f",storageBucket:"chatroom-2b89f.appspot.com",messagingSenderId:"204806050606"});var N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={user:null},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.auth().currentUser&&this.setState({user:E.a.auth().currentUser}),E.a.auth().onAuthStateChanged(function(t){console.log(t),e.setState({user:t})})}},{key:"handleSignIn",value:function(){var e=new E.a.auth.GoogleAuthProvider;E.a.auth().signInWithPopup(e)}},{key:"handleLogOut",value:function(){E.a.auth().signOut()}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"app__header"},s.a.createElement("img",{src:f.a,className:"app__logo",alt:"logo"}),s.a.createElement("h2",null,"Chat trop cool"),s.a.createElement("p",null,"Super design \xe0 la cl\xe9 !"),s.a.createElement(O,null),this.state.user?s.a.createElement("button",{className:"app__button",onClick:this.handleLogOut.bind(this)},"D\xe9connexion"):s.a.createElement("button",{className:"app__button",onClick:this.handleSignIn.bind(this)},"Connexion")),this.state.user?s.a.createElement("div",{className:"app__list"},s.a.createElement(y,{user:this.state.user})):"Le petit bouton connexion permet de vous connecter afin d'acc\xe9der aux messages \"")}}]),t}(n.Component),j=a(64),k=a.n(j),C=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"app__header"},s.a.createElement("img",{src:k.a,className:"app__logo",alt:"logo"}),s.a.createElement("h2",null,"Page About"),s.a.createElement(O,null))),s.a.createElement("div",null,s.a.createElement("p",null,"About : la page about. Elle est g\xe9niale. ")))}}]),t}(n.Component),w=function(){return s.a.createElement(r.a,null,s.a.createElement(l.a,{exact:!0,path:"/",component:N}),s.a.createElement(l.a,{exact:!0,path:"/about",component:C}))};o.a.render(s.a.createElement(c.a,null,s.a.createElement(function(){return s.a.createElement("div",null,s.a.createElement(w,null))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,a){e.exports=a.p+"static/media/tete.f4daa7a6.png"},64:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},67:function(e,t,a){e.exports=a(140)},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){}},[[67,2,1]]]);
//# sourceMappingURL=main.df8f9fc5.chunk.js.map