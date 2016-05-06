import React from 'react';
import {todoActions} from './todoActions';
import TodoSearch from './cmps/TodoSearch';
import CreateTodoForm from './cmps/CreateTodoForm';
import TodoListContainer from './cmps/TodoListContainer';
import TodoFilterLink from './cmps/TodoFilterLink';
import NavContainerShell from '../partials/NavContainerShell';

const TodoApp = () => (
		<NavContainerShell>
			<div>
				<h4>Welcome to TOdo App</h4>
				<TodoSearch />
				<CreateTodoForm />
				<TodoListContainer />

				<TodoFilterLink  value="ALL">All</TodoFilterLink>
				<TodoFilterLink  value="COMPLETED">Completed</TodoFilterLink>
				<TodoFilterLink  value="ACTIVE">Active</TodoFilterLink>

			</div>
		</NavContainerShell>
	);

export default TodoApp;
