(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),l=a.n(n),s=a(31),c=a.n(s),o=a(10),i=a.n(o),r=a(55),d=a(56),u=a(60),p=a(57),h=a(61),m=a(1),k=(a(110),function(e){var t=e.id,a=(e.go,e.fetchedUser),n=e.handleClick,s=e.text,c=e.isShow;return l.a.createElement(m.Panel,{id:t},l.a.createElement(m.PanelHeader,null,"\u0427\u0438\u0442\u0430\u0435\u043c \u0432\u043c\u0435\u0441\u0442\u0435"),a&&l.a.createElement(m.Group,{title:"\u041e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0412\u0430\u0441"},l.a.createElement(m.ListItem,{before:a.photo_200?l.a.createElement(m.Avatar,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),l.a.createElement(m.Group,null,l.a.createElement(m.Div,null,l.a.createElement(m.Button,{size:"xl",level:"2",onClick:n},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441"),c&&l.a.createElement(m.Div,null,l.a.createElement(m.Div,{style:{color:"#8e8e93",lineHeight:"1.5"}},s))),l.a.createElement(m.Cell,{href:"https://vk.com/chtitaemknigi?w=wall-140026984_8852",target:"_blank",expandable:!0,description:"\u041d\u0430\u0448\u0430 \u0433\u0440\u0443\u043f\u043f\u0430 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"},"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e")))}),b=a(58),f=a.n(b),v=(a(111),a(59)),A=a.n(v),g=a(32),E=a.n(g),w=Object(m.platform)(),C=function(e){return l.a.createElement(m.Panel,{id:e.id},l.a.createElement(m.PanelHeader,{left:l.a.createElement(m.HeaderButton,{onClick:e.go,"data-to":"home"},w===m.IOS?l.a.createElement(A.a,null):l.a.createElement(E.a,null))},"Persik"),l.a.createElement("img",{className:"Persik",src:f.a,alt:"Persik The Cat"}))},P=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null,access_token:null,total:null,text:null,isShow:!1,url:null},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(e,t){this.setState({isShow:!1}),i.a.send("VKWebAppCallAPIMethod",{method:"wall.get",params:{owner_id:"-140026984",v:"5.92",access_token:"3a21dd753a21dd753a21dd75c23a486c8933a213a21dd7566852592cae4512a28a9b167",offset:t,count:1}}),this.setState({isShow:!0})}},{key:"handleClickStart",value:function(e){i.a.send("VKWebAppCallAPIMethod",{method:"wall.get",params:{owner_id:"-140026984",v:"5.92",access_token:"3a21dd753a21dd753a21dd75c23a486c8933a213a21dd7566852592cae4512a28a9b167"}})}},{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppAccessTokenReceived":var a=t.detail.data.access_token;console.log("VKWebAppAccessTokenReceived",a),e.setState({access_token:a}),e.handleClickStart(a);break;case"VKWebAppAccessTokenFailed":console.log("VKWebAppAccessTokenFailed",t.detail.data);break;case"VKWebAppCallAPIMethodResult":var n=t.detail.data;console.log("VKWebAppCallAPIMethodResult",n),e.setState({total:n.response.count}),n&&n.response&&n.response.items&&n.response.items.length>0&&e.setState({text:n.response.items[0].text});break;case"VKWebAppCallAPIMethodFailed":console.log("VKWebAppCallAPIMethodFailed",t.detail.data);break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"getRandomArbitrary",value:function(){var e=this.state.total;return Math.floor(Math.random()*(e-0))+0}},{key:"render",value:function(){var e=this;return console.log("STATE6",this.state),l.a.createElement(m.View,{activePanel:this.state.activePanel},l.a.createElement(k,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,handleClick:function(){var t=e.getRandomArbitrary();console.log("getRandomArbitrary",t),e.handleClick(e.state.access_token,t)},text:this.state.text,url:this.state.url,isShow:this.state.isShow}),l.a.createElement(C,{id:"persik",go:this.go}))}}]),t}(l.a.Component);i.a.send("VKWebAppInit",{}),c.a.render(l.a.createElement(P,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},62:function(e,t,a){e.exports=a(112)}},[[62,1,2]]]);
//# sourceMappingURL=main.6355fa64.chunk.js.map