const initialState = {
	isAuth: false,
	user: 
		[{
			"id":1,
			"name":"test1",
			"age" : "11",
			"gender":"male",
			"email" : "test1@gmail.com",
			"phoneNo" : "9415346313",
			"password": "ksbdksdbwkjiw27e23d131obiwubowqieubwqed"
			},
			{
			"id" : 2,
			"name":"test2",
			"age" : "12",
			"gender":"male",
			"email" : "test2@gmail.com",
			"phoneNo" : "9415346314",
			"password": "ksbdksdbww223kjiw27e23d131obiwubowqieubwqed"
			},
			{
			"id":3,
			"name":"test3",
			"age" : "13",
			"gender":"male",
			"email" : "test3@gmail.com",
			"phoneNo" : "9415346315",
			"password": "ksbdksdbwkjiwr769-9098767w27e23d131obiwubowqieubwqed"
			},
			{
			"id":4,
			"name":"test4",
			"age" : "14",
			"gender":"male",
			"email" : "test4@gmail.com",
			"phoneNo" : "9415346316",
			"password": "ksbdksdbwkjiw2`12123123123237e23d131obiwubowqieubwqed"
			},
			{
			"id":5,
			"name":"test5",
			"age" : "15",
			"gender":"male",
			"email" : "test5@gmail.com",
			"phoneNo" : "9415346317",
			"password": "ksbdksdbwkjiwwdwed4544t27e23d131obiwubowqieubwqed"
			},
			{
			"id":6,
			"name":"test6",
			"age" : "16",
			"gender":"male",
			"email" : "test6@gmail.com",
			"phoneNo" : "9415346318",
			"password": "ksbdksdbwkjiw27errrfelip;p;op['23d131obiwubowqieubwqed"
		}]
	}

const rootReducer =  (state=initialState, action)  => {
	let correctUser = state.user.filter(u => {
		u.username === action.username && u.password === action.password;
	});
	if(correctUser) {
		return { correctUser }
	} else {
		return { msg: "forbidden" }
	}
}

export default rootReducer;