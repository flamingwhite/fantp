webpackHotUpdate(0,{

/***/ 250:
/*!****************************************!*\
  !*** ./js/employee/employeeReducer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _employeeActions = __webpack_require__(/*! ./employeeActions */ 159);
	
	var _employeeActions2 = _interopRequireDefault(_employeeActions);
	
	var _employeeActionCreators = __webpack_require__(/*! ./employeeActionCreators */ 158);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ADD_EMPLOYEE = _employeeActions2.default.ADD_EMPLOYEE;
	var EMPLOYEE_FORM_CHANGE = _employeeActions2.default.EMPLOYEE_FORM_CHANGE;
	
	
	var nextEmpId = 0;
	
	console.log('hey');
	var defaultState = {
	    addEmployeeForm: {
	        firstName: 'Yo',
	        age: 14
	    },
	
	    employees: []
	};
	
	var reducer = function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case ADD_EMPLOYEE:
	            return state;
	        case EMPLOYEE_FORM_CHANGE:
	            return _extends({}, state, {
	                addEmployeeForm: _extends({}, action.form)
	            });
	        default:
	            return state;
	    }
	};
	
	exports.default = reducer;

/***/ }

})
//# sourceMappingURL=0.8a34cfb63ad0549e94b0.hot-update.js.map