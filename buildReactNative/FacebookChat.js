var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _classPrivateFieldLooseBase2=_interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldLooseBase"));var _classPrivateFieldLooseKey2=_interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldLooseKey"));var _lastMessages;module.exports=(_lastMessages=(0,_classPrivateFieldLooseKey2.default)("lastMessages"),function(){function FacebookChat(options){(0,_classCallCheck2.default)(this,FacebookChat);Object.defineProperty(this,_lastMessages,{writable:true,value:{users:{}}});this.options=options;}return(0,_createClass2.default)(FacebookChat,[{key:"login",value:function(){var _login=(0,_asyncToGenerator2.default)(function*(){yield this.options.browserTab.sendRequest(`async%20utils%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20NodeListOf%3CHTMLButtonElement%3E%20%7D%20*%2F%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20cookiebanner%20%3D%20document.querySelectorAll('%5Baria-labelledby%3D%22manage_cookies_title%22%5D%20%5Baria-label%5D%5Brole%3D%22button%22%5D%5Btabindex%3D%220%22%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(cookiebanner%20!%3D%3D%20null%20%26%26%20cookiebanner.length)%20cookiebanner%5Bcookiebanner.length-1%5D.click()%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20HTMLButtonElement%20%7D%20*%2F%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20not_me_link%20%3D%20document.querySelector('%5BID%3Dnot_me_link%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(not_me_link%20!%3D%3D%20null)%20not_me_link.click()%3B%0A%20%20%20%20%20%20%20%20%7D`,'$*');yield this.options.browserTab.sendRequest(`async%20(utils%2C%20login%2C%20pass)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20HTMLInputElement%20%7D%20*%2F%20let%20loginEl%20%3D%20document.querySelector('%23email')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20HTMLInputElement%20%7D%20*%2F%20let%20passEl%20%3D%20document.querySelector('%23pass')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(loginEl%20!%3D%3D%20null)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loginEl.value%20%3D%20login%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20passEl.value%20%3D%20pass%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20(%2F**%20%40type%20%7B%20HTMLButtonElement%20%7D%20*%2F%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.querySelector('%23loginbutton')%20%7C%7C%20document.querySelector('%5Bname%3D%22login%22%5D')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)).click()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D`,'$*',this.options.config.facebook.login.value,this.options.config.facebook.password.value);try{yield this.options.browserTab.sendRequest(`async%20(utils%2C%20makrAsReaded%2C%20fromPersonName)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.waitForElementAll('%5Bdata-pagelet%3D%22MWThreadList%22%5D%20%5Brole%3D%22button%22%5D%20%3E%20%5Bdata-visualcompletion%3D%22ignore%22%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D`,'$*');}catch(err){}});function login(){return _login.apply(this,arguments);}return login;}()},{key:"logout",value:function(){var _logout=(0,_asyncToGenerator2.default)(function*(){yield this.options.browserTab.sendRequest(`async%20(utils)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20logout%20%3D%20document.querySelector('svg%20%3E%20g%20%3E%20image')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(logout)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20logout.closest('div').click()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20(%2F**%20%40type%20%7B%20HTMLDivElement%20%7D%20*%2F%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.waitForElement('%5Bdata-visualcompletion%3D%22ignore-dynamic%22%5D%5Bdata-nocookies%3D%22true%22%5D%20%3E%20div')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)).click()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D`,'$*');});function logout(){return _logout.apply(this,arguments);}return logout;}()},{key:"promptToSentMessageContent",value:(function(){var _promptToSentMessageContent=(0,_asyncToGenerator2.default)(function*(){return(yield this.options.speech(this.options.translate.messageContentQuestion,true)).text;});function promptToSentMessageContent(){return _promptToSentMessageContent.apply(this,arguments);}return promptToSentMessageContent;}())},{key:"promptToRecipientName",value:(function(){var _promptToRecipientName=(0,_asyncToGenerator2.default)(function*(){return(yield this.options.speech(this.options.translate.recipientNameQuestion,true)).text;});function promptToRecipientName(){return _promptToRecipientName.apply(this,arguments);}return promptToRecipientName;}())},{key:"sendMessage",value:(function(){var _sendMessage2=(0,_asyncToGenerator2.default)(function*(personName,message){yield this.options.speech(this.options.translate.preparingMessage);var realName=yield this._sendMessage(personName,'');if(!realName)throw this.options.translate.realNameNotFound({name:personName});message=message.replace(/ __? /g,' ');if(yield this.options.getSummaryAccept(this.options.translate.canSendMessage({realName:realName,message:message}))){this.options.speech(this.options.translate.sendingMessage);yield this._sendMessage(personName,message);return true;}else{return false;}});function sendMessage(_x,_x2){return _sendMessage2.apply(this,arguments);}return sendMessage;}())},{key:"_sendMessage",value:(function(){var _sendMessage3=(0,_asyncToGenerator2.default)(function*(personName,message){var realName;try{yield this.options.browserTab.pause.start();yield this.options.browserTab.viewTab();yield this.login();realName=yield this.options.browserTab.sendRequest(`async%20(utils%2C%20personName%2C%20message)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20realName%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20friendTabs%20%3D%20await%20utils.waitForElementAll('%5Bdata-pagelet%3D%22MWThreadList%22%5D%20%5Brole%3D%22row%22%5D')%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20searching%20in%20last%20writing%20firends%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20f%20of%20friendTabs)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(f.querySelectorAll('div%5Brole%3D%22img%22%5D%20%3E%20div').length%20%3E%201)%20continue%3B%20%2F%2F%20group%20-%20not%20one%20person%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20HTMLDivElement%20%7D%20*%2F%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20friendTab%20%3D%20f.querySelector('%5Bdir%3D%22auto%22%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(friendTab%20%26%26%20new%20RegExp(personName%2C%20'i').test(friendTab.innerText))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20friendTab.click()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20realName%20%3D%20friendTab.innerText%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(!realName)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.typingToElement(personName%2C%20'%5Brole%3D%22navigation%22%5D%20input%5Btype%3D%22search%22%5D')%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20searching%20in%20rearch%20input%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20findedFindeds%20%3D%20await%20utils.waitForElementAll(%60%5Brole%3D%22listbox%22%5D%20%3E%20li%3Afirst-child%20li%3Anot(%5Bid%3D%22%24%7BpersonName%7D%22%5D)%60)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20f%20of%20findedFindeds)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20HTMLDivElement%20%7D%20*%2F%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20findedFinded%20%3D%20f.querySelector('%5Bdir%3D%22auto%22%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(findedFinded%20%26%26%20new%20RegExp(personName%2C%20'i').test(findedFinded.innerText))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20findedFinded.click()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20realName%20%3D%20findedFinded.innerText%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(message%20%26%26%20realName)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.waitForElement(%60%5Baria-label%3D%22%24%7BrealName%7D%22%5D%60)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20write%20message%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.typingToElement(message%2C%20'%5Brole%3D%22textbox%22%5D%20p')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%40ts-ignore%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(document.querySelector('%5Brole%3D%22textbox%22%5D%20p').innerText%2C%20'%3D%3D'%2C%20message)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20new%20Promise(res%20%3D%3E%20%7B%20setTimeout(res%2C%201000)%3B%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20NodeListOf%3CHTMLButtonElement%3E%20%7D%20*%2F%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20buttons%20%3D%20document.querySelector('%5Brole%3D%22textbox%22%5D').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll('%5Brole%3D%22button%22%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttons%5Bbuttons.length-1%5D.click()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20realName%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D`,'$*',personName,message);console.debug('Facebook Plugin sendMessage():',realName||false);yield this.setDefaultScreen();}catch(err){throw err;}finally{this.options.browserTab.pause.stop();}return realName||false;});function _sendMessage(_x3,_x4){return _sendMessage3.apply(this,arguments);}return _sendMessage;}())},{key:"getMessages",value:(function(){var _getMessages=(0,_asyncToGenerator2.default)(function*(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$makrAsReaded=_ref.makrAsReaded,makrAsReaded=_ref$makrAsReaded===void 0?false:_ref$makrAsReaded,fromPersonName=_ref.fromPersonName;var closeBrowserTab=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var result;try{yield this.options.speech(this.options.translate.iCheck);yield this.options.browserTab.pause.start();yield this.options.browserTab.viewTab();yield this.login();result=yield this.options.browserTab.sendRequest(`async%20(utils%2C%20makrAsReaded%2C%20fromPersonName)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%7B%20%5Bname%3A%20string%5D%3A%20%7Bmessage%3A%20string%7D%5B%5D%20%7D%7D%20*%2F%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20messages%20%3D%20%7B%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20codeByName%20%3D%20%7B%7D%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20friendTabs%20%3D%20await%20utils.waitForElementAll('%5Bdata-pagelet%3D%22MWThreadList%22%5D%20%5Brole%3D%22button%22%5D%20%3E%20%5Bdata-visualcompletion%3D%22ignore%22%5D')%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20e%20of%20friendTabs)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20link%20%3D%20e.closest('%5Brole%3D%22gridcell%22%5D').parentElement.querySelector('div%3Afirst-child%20%3E%20div%20%3E%20a')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(window.getComputedStyle(e).backgroundColor.substring(0%2C%204)%20%3D%3D%20'rgb('%20%2F%2F%20only%20new%20messages%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26%26%20link.querySelectorAll('div%5Brole%3D%22img%22%5D%20%3E%20div').length%20%3D%3D%3D%201)%20%7B%20%2F%2F%20without%20groups%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%40ts-ignore%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20name%20%3D%20e.closest('%5Brole%3D%22row%22%5D').querySelector('%5Bdir%3D%22auto%22%5D').innerText.replace(%2F%5C%5Cn%2F%2C%20'')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20messages%5Bname%5D%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20codeByName%5Bname%5D%20%3D%20link.getAttribute('href').match(%2F%5C%2F%5B0-9%5D%2B%5C%2F%2F)%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20name%20in%20messages)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20link%20%3D%20%2F**%20%40type%20%7B%20HTMLLinkElement%20%7D%20*%2F%20await%20utils.waitForElement(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%5Bdata-pagelet%3D%22MWThreadList%22%5D%20a%5Baria-current%3D%22false%22%5D%5Bhref*%3D%22%24%7BcodeByName%5Bname%5D%7D%22%5D%60)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20link.setAttribute('href'%2C%20%60javascript%3A%20void(0)%2F*%20%24%7BcodeByName%5Bname%5D%7D%20*%2F%60)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20link.click()%3B%20%2F%2F%20this%20click()%20regenerate%20full%20fiend%20list%20and%20I%20must%20search%20HTMLElement%20again%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.waitForElement(%60%5Baria-label*%3D%22%24%7Bname%7D%22%5D%3Anot(%5Brole%3D%22img%22%5D)%60)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20elems%20%3D%20await%20utils.waitForElementAll('%5Bdata-scope%3D%22messages_table%22%5D')%3B%20%2F%2F%20wait%20for%20rendering%20message%20of%20writing%20user%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20lastColor%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20all%20last%20messages%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20i%20%3D%20elems.length%20-%201%2C%20run%20%3D%20-2%3B%20i%20%3E%3D%200%20%26%26%20run%3B%20i--)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20e%20%3D%20elems%5Bi%5D.querySelector('%5Bstyle%5E%3Dbackground-color%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(e%20%26%26%20!lastColor)%20lastColor%20%3D%20window.getComputedStyle(e).color%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(e%20%26%26%20lastColor%20%3D%3D%20window.getComputedStyle(e).color)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%40ts-ignore%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20messages%5Bname%5D.unshift(%7Bmessage%3A%20e.innerText%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20run%2B%2B%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(makrAsReaded%20%3D%3D%3D%20true%20%26%26%20(typeof%20fromPersonName%20!%3D%20'string'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7C%7C%20new%20RegExp(fromPersonName%2C%20'i').test(name)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.typingToElement('%20'%2C%20'%5Brole%3D%22textbox%22%5D%20p')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20new%20Promise(res%20%3D%3E%20setTimeout(res%2C%201000))%3B%20%2F%2F%20wait%20for%20chat%20tab%20loading%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20messages%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D`,'$*',makrAsReaded,fromPersonName);console.debug('Facebook Plugin getMessages():',result);yield this.setDefaultScreen(closeBrowserTab);for(var name in result){if(makrAsReaded===true&&(typeof fromPersonName!='string'||new RegExp(fromPersonName,'i').test(name))){var _result$name;for(var i in result[name]){var _classPrivateFieldLoo;if(result[name][i].message===((_classPrivateFieldLoo=(0,_classPrivateFieldLooseBase2.default)(this,_lastMessages)[_lastMessages].users[name])==null?void 0:_classPrivateFieldLoo.lastMessage)){result[name]=result[name].slice(+i+1);if(!result[name].length)delete result[name];break;}}if((_result$name=result[name])!=null&&_result$name.length){if(!(0,_classPrivateFieldLooseBase2.default)(this,_lastMessages)[_lastMessages].users[name])(0,_classPrivateFieldLooseBase2.default)(this,_lastMessages)[_lastMessages].users[name]={lastMessage:result[name][result[name].length-1].message};else(0,_classPrivateFieldLooseBase2.default)(this,_lastMessages)[_lastMessages].users[name].lastMessage=result[name][result[name].length-1].message;}}else if(typeof fromPersonName=='string')delete result[name];}}catch(err){throw err;}finally{this.options.browserTab.pause.stop();}console.debug('Facebook Plugin getMessages():',result);return result;});function getMessages(){return _getMessages.apply(this,arguments);}return getMessages;}())},{key:"setDefaultScreen",value:(function(){var _setDefaultScreen=(0,_asyncToGenerator2.default)(function*(){var closeBrowserTab=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;yield this.options.browserTab.sendRequest(`async%20utils%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20(%2F**%20%40type%20%7B%20HTMLDivElement%20%7D%20*%2F(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.waitForElement('a%5Bhref%3D%22%2Fmessages%2Fnew%2F%22%5D')%0A%20%20%20%20%20%20%20%20%20%20%20%20)).click()%3B%0A%20%20%20%20%20%20%20%20%7D`,'$*');closeBrowserTab&&(yield this.options.browserTab.destructor());});function setDefaultScreen(){return _setDefaultScreen.apply(this,arguments);}return setDefaultScreen;}())}]);}());