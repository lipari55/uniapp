import LocalStorage from './localStorage.js'
class User {
	wx_token = null;
	name = null;
	avatar = null;
	
	static getUsersTestData() {
		let JsonUser = JSON.stringify(userTextData)
	}
	
	static login(){
		let user = LocalStorage.get('user');
		console.info(user)
		if(user){
			return user;
		}
		user = {name: 'wjj', wx_token: '', avatar: '../../static/logo.jpeg'};
		LocalStorage.set('user', user);
		return LocalStorage.get('user');
	}
	
	static logout(){
		LocalStorage.remove('user');
		return LocalStorage.get('user');
	}
	
}
export default User;

