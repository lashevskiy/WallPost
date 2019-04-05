import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';


const getUrl = (id) => {
    return `https://vk.com/chtitaemknigi?w=wall-140026984_${id}`
};

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
            access_token: null,
			total: null,
            text: null,
            isShow: false,
            postId: null,
            isLoading: false,

            handleClickBind: this.handleClickBind,
		};
	}


    handleClickBind(access_token, offset) {
        this.setState({ isShow: true });
        connect.send('VKWebAppCallAPIMethod', {
            'method': 'wall.get',
            'params': { 'owner_id': '-140026984', 'v': '5.92', 'offset': offset, 'count': 1, 'access_token': this.state.access_token }
        });
    }


    handleClick(access_token, offset) {
	    if(this.state.access_token) {
            this.setState({ isShow: true });
            this.setState({ isLoading: true });
            // connect.send('VKWebAppCallAPIMethod', {
            //     'method': 'wall.get',
            //     'params': { 'owner_id': '-140026984', 'v': '5.92', 'access_token': '3a21dd753a21dd753a21dd75c23a486c8933a213a21dd7566852592cae4512a28a9b167', 'offset': offset, 'count': 1}
            // });
            connect.send('VKWebAppCallAPIMethod', {
                'method': 'wall.get',
                'params': {
                    'owner_id':     '-140026984',
                    'v':            '5.92',
                    'offset':       offset,
                    'count':        1,
                    'access_token': this.state.access_token
                }
            });

            this.setState({ isLoading: true });
        } else {
            connect.send("VKWebAppGetAuthToken", {"app_id": 6926844, "scope": ""});
        }

        //setTimeout(this.state.handleClickBind(access_token, offset), 3000);
    };

    handleClickStart(access_token) {
        // connect.send('VKWebAppCallAPIMethod', {
        //     'method': 'wall.get',
        //     'params': { 'owner_id': '-140026984', 'v': '5.92', 'access_token': '3a21dd753a21dd753a21dd75c23a486c8933a213a21dd7566852592cae4512a28a9b167' }
        // });
        connect.send('VKWebAppCallAPIMethod', {
            'method': 'wall.get',
            'params': { 'owner_id': '-140026984', 'v': '5.92', 'access_token': this.state.access_token }
        });
    };

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
                case 'VKWebAppAccessTokenReceived': {
                	const access_token = e.detail.data.access_token;
                    console.log('VKWebAppAccessTokenReceived', access_token);
                    this.setState({ access_token: access_token });
                    this.handleClickStart(access_token);
                    break;
                }
                case 'VKWebAppAccessTokenFailed': {
                    console.log('VKWebAppAccessTokenFailed', e.detail.data);
                    break;
                }
                case 'VKWebAppCallAPIMethodResult': {
                    const res = e.detail.data;
                    console.log('VKWebAppCallAPIMethodResult', res);
                    this.setState({ total: res.response.count });
                    if(res && res.response && res.response.items && res.response.items.length > 0) {
                        this.setState({ text: res.response.items[0].text });
                        this.setState({ postId: res.response.items[0].id });
                        if(this.state.isShow) {
                            this.setState({isLoading: false});
                            //window.open(getUrl(res.response.items[0].id));
                        }

                    }
                    break;
                }
                case 'VKWebAppCallAPIMethodFailed': {
                    console.log('VKWebAppCallAPIMethodFailed', e.detail.data);
                    break;
                }
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
        connect.send("VKWebAppGetAuthToken", {"app_id": 6926844, "scope": ""});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

    getRandomArbitrary() {
    	let min = 0;
    	let max = this.state.total;
        return Math.floor(Math.random() * (max - min)) + min;
    }

	render() {
		console.log('STATE6', this.state);

		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} handleClick={() => {
					let rand = this.getRandomArbitrary();
					console.log('getRandomArbitrary', rand)
					this.handleClick(this.state.access_token, rand);
                }}
                      isLoading={this.state.isLoading}
                text={this.state.text}
                      postId={this.state.postId}
                isShow={this.state.isShow}
                />
				<Persik id="persik" go={this.go} />
			</View>
		);
	}
}

export default App;
