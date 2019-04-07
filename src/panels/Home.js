import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, Cell } from '@vkontakte/vkui';
import Icon24Home from '@vkontakte/icons/dist/24/home';

const getUrl = (id) => {
	return `https://vk.com/chtitaemknigi?w=wall-140026984_${id}`
};

const Home = ({ id, go, fetchedUser, handleClick, text, isShow, postId, isLoading }) => {

	return (
		<Panel id={id}>
			<PanelHeader>Читаем вместе</PanelHeader>
			{fetchedUser &&
			<Group title="Ответы на вопросы для Вас">
				<ListItem
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</ListItem>
                <Cell href="https://vk.com/club140026984" target="_blank" expandable={true}
                      before={<Icon24Home />}
                      description="Наша группа ВКонтакте">Читаем вместе</Cell>
			</Group>}

			<Group>
				<Div>
					<Button size="xl" level="2" onClick={handleClick}>
						Получить ответ на новый вопрос
					</Button>
				</Div>
                {!isLoading && isShow &&
                <Cell href={getUrl(postId)} target="_blank" expandable={true}
                      description="Ответ на Ваш вопрос готов">Просмотреть ответ на Ваш вопрос</Cell>
                }
			</Group>
		</Panel>
	)
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
