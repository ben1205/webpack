var config = require('./config.json');
import styles from './Greeter.css';//导入

module.exports = function(){
	var greet = document.createElement('div');
	greet.textContent = config.greetText;
	return greet;
};