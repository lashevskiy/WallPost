(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),l=a.n(n),s=a(31),o=a.n(s),c=a(9),i=a.n(c),r=a(55),d=a(56),p=a(60),u=a(57),h=a(61),m=a(1),k=(a(110),function(e){var t=e.id,a=e.go,n=e.fetchedUser,s=e.handleClick,o=e.text,c=e.isShow;return l.a.createElement(m.Panel,{id:t},l.a.createElement(m.PanelHeader,null,"Example"),n&&l.a.createElement(m.Group,{title:"User Data Fetched with VK Connect"},l.a.createElement(m.ListItem,{before:n.photo_200?l.a.createElement(m.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),l.a.createElement(m.Group,{title:"Navigation Example"},l.a.createElement(m.Div,null,l.a.createElement(m.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"),l.a.createElement(m.Button,{size:"xl",level:"2",onClick:s},"LoadData"),c&&l.a.createElement(m.Div,null,o))))}),b=a(58),f=a.n(b),A=(a(111),a(59)),v=a.n(A),g=a(32),E=a.n(g),w=Object(m.platform)(),C=function(e){return l.a.createElement(m.Panel,{id:e.id},l.a.createElement(m.PanelHeader,{left:l.a.createElement(m.HeaderButton,{onClick:e.go,"data-to":"home"},w===m.IOS?l.a.createElement(v.a,null):l.a.createElement(E.a,null))},"Persik"),l.a.createElement("img",{className:"Persik",src:f.a,alt:"Persik The Cat"}))},P=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null,access_token:null,total:null,text:null,isShow:!1},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(e,t){this.setState({isShow:!1}),i.a.send("VKWebAppCallAPIMethod",{method:"wall.get",params:{owner_id:"-140026984",v:"5.92",access_token:e,offset:t,count:1}}),this.setState({isShow:!0})}},{key:"handleClickStart",value:function(e){i.a.send("VKWebAppCallAPIMethod",{method:"wall.get",params:{owner_id:"-140026984",v:"5.92",access_token:e}})}},{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppAccessTokenReceived":var a=t.detail.data.access_token;console.log("VKWebAppAccessTokenReceived",a),e.setState({access_token:a}),e.handleClickStart(a);break;case"VKWebAppAccessTokenFailed":console.log("VKWebAppAccessTokenFailed",t.detail.data);break;case"VKWebAppCallAPIMethodResult":var n=t.detail.data;console.log("VKWebAppCallAPIMethodResult",n),e.setState({total:n.response.count}),n&&n.response&&n.response.items&&n.response.items.length>0&&e.setState({text:n.response.items[0].text});break;case"VKWebAppCallAPIMethodFailed":console.log("VKWebAppCallAPIMethodFailed",t.detail.data);break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{}),i.a.send("VKWebAppGetAuthToken",{app_id:6926844,scope:"friends,status,groups,wall"})}},{key:"getRandomArbitrary",value:function(){var e=this.state.total;return Math.floor(Math.random()*(e-0))+0}},{key:"render",value:function(){var e=this;return console.log("STATE2",this.state),l.a.createElement(m.View,{activePanel:this.state.activePanel},l.a.createElement(k,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,handleClick:function(){var t=e.getRandomArbitrary();console.log("getRandomArbitrary",t),e.handleClick(e.state.access_token,t)},text:this.state.text,isShow:this.state.isShow}),l.a.createElement(C,{id:"persik",go:this.go}))}}]),t}(l.a.Component);i.a.send("VKWebAppInit",{}),o.a.render(l.a.createElement(P,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},62:function(e,t,a){e.exports=a(112)}},[[62,1,2]]]);
//# sourceMappingURL=main.78b923f7.chunk.js.map