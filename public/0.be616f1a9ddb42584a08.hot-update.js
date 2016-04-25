webpackHotUpdate(0,{

/***/ 267:
/*!**********************!*\
  !*** ./js/index.jsx ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 243);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 467);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 58);
	
	var _redux = __webpack_require__(/*! redux */ 106);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 207);
	
	var _reduxStore = __webpack_require__(/*! ./reduxStore */ 268);
	
	var _reduxStore2 = _interopRequireDefault(_reduxStore);
	
	var _simpleLogger = __webpack_require__(/*! ./middlewares/simpleLogger */ 167);
	
	var _simpleLogger2 = _interopRequireDefault(_simpleLogger);
	
	var _rootReducer = __webpack_require__(/*! ./rootReducer */ 82);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	var _bookActionCreators = __webpack_require__(/*! ./book/bookActionCreators */ 107);
	
	var _BookApp = __webpack_require__(/*! ./book/BookApp */ 252);
	
	var _BookApp2 = _interopRequireDefault(_BookApp);
	
	var _todoApp = __webpack_require__(/*! ./todo/todoApp */ 270);
	
	var _todoApp2 = _interopRequireDefault(_todoApp);
	
	var _GithubApp = __webpack_require__(/*! ./github/GithubApp */ 261);
	
	var _GithubApp2 = _interopRequireDefault(_GithubApp);
	
	var _EmployeeApp = __webpack_require__(/*! ./employee/EmployeeApp */ 256);
	
	var _EmployeeApp2 = _interopRequireDefault(_EmployeeApp);
	
	__webpack_require__(/*! ./styleRoot */ 269);
	
	__webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ 576);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import todoApp from './reducers/allReducers';
	// import App from './components/App';
	
	
	var store = _reduxStore2.default;
	
	var App = function App(_ref) {
		var children = _ref.children;
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h1',
				null,
				'My App'
			),
			_react2.default.createElement(
				'button',
				{ className: 'btn btn-success' },
				'Hey bootstrap'
			),
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/todo-app', className: 'red' },
						'Todo App'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/book-app' },
						'Book App'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/github-app' },
						'Github App'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/employee-app' },
						'Employee App'
					)
				)
			),
			children
		);
	};
	
	// render(
	// 	<div>
	// 		<Provider store={store}>
	// 			<App/>
	// 		</Provider>
	// 	</div>,
	// 	document.getElementById('react')
	// 	);
	
	var Routes = _react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouter.Router,
			{ history: _reactRouter.hashHistory },
			_react2.default.createElement(
				_reactRouter.Route,
				{ path: '/', component: App },
				_react2.default.createElement(_reactRouter.IndexRoute, { component: _BookApp2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'todo-app', component: _todoApp2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'book-app', component: _BookApp2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'github-app', component: _GithubApp2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'employee-app', component: _EmployeeApp2.default })
			)
		)
	);
	
	(0, _reactDom.render)(Routes, document.getElementById('react'));

/***/ },

/***/ 269:
/*!*************************!*\
  !*** ./js/styleRoot.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./app.scss */ 574);
	
	if (true) {
		module.hot.accept();
	}
	
	console.log('css load');

/***/ }

})
//# sourceMappingURL=0.be616f1a9ddb42584a08.hot-update.js.map