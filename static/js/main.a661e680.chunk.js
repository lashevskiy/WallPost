(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),s=a.n(n),o=a(31),l=a.n(o),i=a(9),c=a.n(i),r=a(55),d=a(56),p=a(60),u=a(57),h=a(61),m=a(1),k=(a(110),function(e){return"https://vk.com/chtitaemknigi?w=wall-140026984_".concat(e)}),b=function(e){var t=e.id,a=(e.go,e.fetchedUser),n=e.handleClick,o=(e.text,e.isShow),l=e.postId,i=e.isLoading;return s.a.createElement(m.Panel,{id:t},s.a.createElement(m.PanelHeader,null,"\u0427\u0438\u0442\u0430\u0435\u043c \u0432\u043c\u0435\u0441\u0442\u0435"),a&&s.a.createElement(m.Group,{title:"\u041e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0412\u0430\u0441"},s.a.createElement(m.ListItem,{before:a.photo_200?s.a.createElement(m.Avatar,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),s.a.createElement(m.Group,null,s.a.createElement(m.Div,null,s.a.createElement(m.Button,{size:"xl",level:"2",onClick:n},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0432\u043e\u043f\u0440\u043e\u0441"),i&&s.a.createElement("div",null,"Loading...")),!i&&o&&s.a.createElement(m.Cell,{href:k(l),target:"_blank",expandable:!0,description:"\u041e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0412\u0430\u0448 \u0432\u043e\u043f\u0440\u043e\u0441 \u0433\u043e\u0442\u043e\u0432"},"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0412\u0430\u0448 \u0432\u043e\u043f\u0440\u043e\u0441")))},f=a(58),g=a.n(f),A=(a(111),a(59)),v=a.n(A),E=a(32),w=a.n(E),S=Object(m.platform)(),C=function(e){return s.a.createElement(m.Panel,{id:e.id},s.a.createElement(m.PanelHeader,{left:s.a.createElement(m.HeaderButton,{onClick:e.go,"data-to":"home"},S===m.IOS?s.a.createElement(v.a,null):s.a.createElement(w.a,null))},"Persik"),s.a.createElement("img",{className:"Persik",src:g.a,alt:"Persik The Cat"}))},I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null,access_token:null,total:null,text:null,isShow:!1,postId:null,isLoading:!1},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(e,t){this.setState({isLoading:!0}),setTimeout(function(){this.setState({isShow:!0}),c.a.send("VKWebAppCallAPIMethod",{method:"wall.get",params:{owner_id:"-140026984",v:"5.92",offset:t,count:1,access_token:this.state.access_token}})},3e3)}},{key:"handleClickStart",value:function(e){c.a.send("VKWebAppCallAPIMethod",{method:"wall.get",params:{owner_id:"-140026984",v:"5.92",access_token:this.state.access_token}})}},{key:"componentDidMount",value:function(){var e=this;c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppAccessTokenReceived":var a=t.detail.data.access_token;console.log("VKWebAppAccessTokenReceived",a),e.setState({access_token:a}),e.handleClickStart(a);break;case"VKWebAppAccessTokenFailed":console.log("VKWebAppAccessTokenFailed",t.detail.data);break;case"VKWebAppCallAPIMethodResult":var n=t.detail.data;console.log("VKWebAppCallAPIMethodResult",n),e.setState({total:n.response.count}),n&&n.response&&n.response.items&&n.response.items.length>0&&(e.setState({text:n.response.items[0].text}),e.setState({postId:n.response.items[0].id}),e.state.isShow&&e.setState({isLoading:!1}));break;case"VKWebAppCallAPIMethodFailed":console.log("VKWebAppCallAPIMethodFailed",t.detail.data);break;default:console.log(t.detail.type)}}),c.a.send("VKWebAppGetUserInfo",{}),c.a.send("VKWebAppGetAuthToken",{app_id:6926844,scope:""})}},{key:"getRandomArbitrary",value:function(){var e=this.state.total;return Math.floor(Math.random()*(e-0))+0}},{key:"render",value:function(){var e=this;return console.log("STATE6",this.state),s.a.createElement(m.View,{activePanel:this.state.activePanel},s.a.createElement(b,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,handleClick:function(){var t=e.getRandomArbitrary();console.log("getRandomArbitrary",t),e.handleClick(e.state.access_token,t)},isLoading:this.state.isLoading,text:this.state.text,postId:this.state.postId,isShow:this.state.isShow}),s.a.createElement(C,{id:"persik",go:this.go}))}}]),t}(s.a.Component);c.a.send("VKWebAppInit",{}),l.a.render(s.a.createElement(I,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},62:function(e,t,a){e.exports=a(112)}},[[62,1,2]]]);
//# sourceMappingURL=main.a661e680.chunk.js.map