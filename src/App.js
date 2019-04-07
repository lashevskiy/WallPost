import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

const APP_ID = 6926844;
const COUNT = 50;
const LEN_MIN = 40;
const LEN_MAX = 450;


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
		};
	}

    handleClick(access_token, offset) {
	    if(this.state.access_token) {
            this.setState({ isShow: true, isLoading: true });

            connect.send('VKWebAppCallAPIMethod', {
                'method': 'wall.get',
                'params': {
                    'owner_id':     '-140026984',
                    'v':            '5.92',
                    'offset':       offset,
                    'count':        COUNT,
                    'access_token': this.state.access_token
                }
            });

            this.setState({ isLoading: true });
        } else {
            connect.send("VKWebAppGetAuthToken", {"app_id": APP_ID, "scope": ""});
        }
    };

    handleClickStart(access_token) {
        connect.send('VKWebAppCallAPIMethod', {
            'method': 'wall.get',
            'params': {
                'owner_id': '-140026984',
                'v': '5.92',
                'count':        COUNT,
                'access_token': this.state.access_token
            }
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

                    this.setState({ total: res.response.count });

                    if(res && res.response && res.response.items && res.response.items.length > 0) {

                        let countRes = res.response.items.length;

                        this.setState({
                            text: res.response.items[0].text,
                            postId: res.response.items[0].id
                        });

                        for(let i = 0; i < countRes; i++) {

                            let len = res.response.items[i].text.length;

                            if(len >= LEN_MIN && len <= LEN_MAX ) {
                                this.setState({
                                    text: res.response.items[i].text,
                                    postId: res.response.items[i].id
                                });
                                if(this.state.isShow) {
                                    this.setState({isLoading: false});
                                }
                                break;
                            }
                        }
                    }
                    break;
                }
                case 'VKWebAppCallAPIMethodFailed': {
                    //console.log('VKWebAppCallAPIMethodFailed', e.detail.data);
                    break;
                }
				default:
					//console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
        connect.send("VKWebAppGetAuthToken", {"app_id": APP_ID, "scope": ""});
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

		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go}
                      handleClick={() => {
                          let rand = this.getRandomArbitrary();
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
