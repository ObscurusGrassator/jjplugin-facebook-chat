const b = require('server/src/_index.js');

/** @type {{ users: {[user: string]: {lastMessage: string}} }} */ 
const pluginStorage = {users: {}};

module.exports = class FacebookApi {

    /** @param {{ tab: import('server/types/processComunication').BrowserPuppeteer }} options */
    constructor(options) { this.options = options; }

    /** @param { typeof import('./index')['config'] } config */
    async login(config) {
        await this.options.tab.sendRequest(`async%20(utils%2C%20login%2C%20pass)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20HTMLButtonElement%20%7D%20*%2F%20%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20cookiebanner%20%3D%20document.querySelector('%5Bdata-cookiebanner%3D%22accept_only_essential_button%22%5D')%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(cookiebanner%20!%3D%3D%20null)%20cookiebanner.click()%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20HTMLInputElement%20%7D%20*%2F%20let%20loginEl%20%3D%20document.querySelector('%23email')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20HTMLInputElement%20%7D%20*%2F%20let%20passEl%20%3D%20document.querySelector('%23pass')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(loginEl%20!%3D%3D%20null)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loginEl.value%20%3D%20login%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20passEl.value%20%3D%20pass%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20(%2F**%20%40type%20%7B%20HTMLButtonElement%20%7D%20*%2F%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.querySelector('%23loginbutton')%20%7C%7C%20document.querySelector('%5Bname%3D%22login%22%5D')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)).click()%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20required%20after%20reload%20page%20-%20this%20timeout%20will%20aborted%20of%20reloading%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20new%20Promise(res%20%3D%3E%20%7B%20setTimeout(res%2C%205000)%3B%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D`, config.facebook.login, config.facebook.password);
    }

    async logout() {
        await this.options.tab.sendRequest(`async%20(utils)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20(await%20utils.waitForElement('svg%20%3E%20g%20%3E%20image')).closest('div').click()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20(%2F**%20%40type%20%7B%20HTMLDivElement%20%7D%20*%2F%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.waitForElement('%5Bdata-visualcompletion%3D%22ignore-dynamic%22%5D%5Bdata-nocookies%3D%22true%22%5D%20%3E%20div')%0A%20%20%20%20%20%20%20%20%20%20%20%20)).click()%3B%0A%20%20%20%20%20%20%20%20%7D`);
    }

    /**
     * @param { string | string[] } names
     * @param { string } message
     * @returns { Promise<{[k: string]: string | false}> }
     */
    async sendMessage(names, message) {
        /** @type { {[k: string]: string | false} } */ const realNames = {};

        for (let name of Array.isArray(names) ? names : [names]) {
            let realName = await this.options.tab.sendRequest(`async%20(utils%2C%20name%2C%20message)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20realName%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20friendTabs%20%3D%20await%20utils.waitForElementAll('%5Bdata-pagelet%3D%22MWThreadList%22%5D%20%5Brole%3D%22row%22%5D')%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20searching%20in%20last%20writing%20firends%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20f%20of%20friendTabs)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20HTMLDivElement%20%7D%20*%2F%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20friendTab%20%3D%20f.querySelector('%5Bdir%3D%22auto%22%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(friendTab%20%26%26%20new%20RegExp(name%2C%20'i').test(friendTab.innerText))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20friendTab.click()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20realName%20%3D%20friendTab.innerText%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(!realName)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.typingToElement('%5Brole%3D%22navigation%22%5D%20input%5Btype%3D%22search%22%5D'%2C%20name)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20searching%20in%20rearch%20input%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20findedFindeds%20%3D%20await%20utils.waitForElementAll(%60%5Brole%3D%22listbox%22%5D%20%3E%20li%3Afirst-child%20li%3Anot(%5Bid%3D%22%24%7Bname%7D%22%5D)%60)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20f%20of%20findedFindeds)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20HTMLDivElement%20%7D%20*%2F%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20findedFinded%20%3D%20f.querySelector('%5Bdir%3D%22auto%22%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(findedFinded%20%26%26%20new%20RegExp(name%2C%20'i').test(findedFinded.innerText))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20findedFinded.click()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20realName%20%3D%20findedFinded.innerText%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(message%20%26%26%20realName)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.waitForElement(%60%5Baria-label%3D%22%24%7BrealName%7D%22%5D%60)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20write%20message%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.typingToElement('%5Brole%3D%22textbox%22%5D%20p'%2C%20message)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%40ts-ignore%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(document.querySelector('%5Brole%3D%22textbox%22%5D%20p').innerText%2C%20'%3D%3D'%2C%20message)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20new%20Promise(res%20%3D%3E%20%7B%20setTimeout(res%2C%201000)%3B%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%20NodeListOf%3CHTMLButtonElement%3E%20%7D%20*%2F%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20buttons%20%3D%20document.querySelector('%5Brole%3D%22textbox%22%5D').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll('%5Brole%3D%22button%22%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttons%5Bbuttons.length-1%5D.click()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20realName%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D`, name, message);

            realNames[name] = realName || false;
        }

        console.debug('Facebook Plugin sendMessage():', realNames);

        await this.setDefaultScreen();

        return realNames;
    }

    /**
     * @param { boolean | string } [rememberlastMessage = true]
     * @returns { Promise<{[name: string]: string[]}> }
     */
    async getMessages(rememberlastMessage = true, closeBrowserTab = false) {
        let result = await this.options.tab.sendRequest(`async%20(utils%2C%20rememberlastMessage)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F**%20%40type%20%7B%7B%20%5Bname%3A%20string%5D%3A%20string%5B%5D%20%7D%7D%20*%2F%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20messages%20%3D%20%7B%7D%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20friendTabs%20%3D%20await%20utils.waitForElementAll('%5Bdata-pagelet%3D%22MWThreadList%22%5D%20%5Brole%3D%22button%22%5D%20%3E%20%5Bdata-visualcompletion%3D%22ignore%22%5D')%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20e%20of%20friendTabs)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(window.getComputedStyle(e).backgroundColor.substring(0%2C%204)%20!%3D%3D%20'rgb(')%20continue%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%40ts-ignore%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20e.closest('%5Brole%3D%22gridcell%22%5D').parentElement.querySelector('div%3Afirst-child%20%3E%20div%20%3E%20a').click()%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%40ts-ignore%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20name%20%3D%20e.closest('%5Brole%3D%22row%22%5D').querySelector('%5Bdir%3D%22auto%22%5D').innerText.replace(%2F%5C%5Cn%2F%2C%20'')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20messages%5Bname%5D%20%3D%20%5B%5D%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.waitForElement(%60%5Baria-label*%3D%22%24%7Bname%7D%22%5D%3Anot(%5Brole%3D%22img%22%5D)%60)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20await%20new%20Promise(res%20%3D%3E%20setTimeout(res%2C%20500))%3B%20%2F%2F%20wait%20for%20remove%20message%20of%20previous%20user%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20elems%20%3D%20await%20utils.waitForElementAll('%5Bdata-scope%3D%22messages_table%22%5D')%3B%20%2F%2F%20wait%20for%20rendering%20message%20of%20writing%20user%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20lastColor%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20all%20last%20messages%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20i%20%3D%20elems.length%20-%201%2C%20run%20%3D%20-2%3B%20i%20%3E%3D%200%20%26%26%20run%3B%20i--)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20e%20%3D%20elems%5Bi%5D.querySelector('%5Bdir%3D%22auto%22%5D%5Brole%3D%22none%22%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(e%20%26%26%20!lastColor)%20lastColor%20%3D%20window.getComputedStyle(e).color%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(e%20%26%26%20lastColor%20%3D%3D%20window.getComputedStyle(e).color)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%40ts-ignore%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20messages%5Bname%5D.unshift(e.innerText)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20run%2B%2B%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(rememberlastMessage%20%3D%3D%3D%20true%20%7C%7C%20(typeof%20rememberlastMessage%20%3D%3D%20'string'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26%26%20new%20RegExp(rememberlastMessage%2C%20'i').test(name)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.typingToElement('%5Brole%3D%22textbox%22%5D%20p'%2C%20'%20')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20new%20Promise(res%20%3D%3E%20setTimeout(res%2C%201000))%3B%20%2F%2F%20wait%20for%20chat%20tab%20loading%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20messages%3B%0A%20%20%20%20%20%20%20%20%7D`, rememberlastMessage);
        console.debug('Facebook Plugin getMessages():', result);

        await this.setDefaultScreen(closeBrowserTab);

        // filter unread messages of this plugin
        for (let name in result) {
            if (rememberlastMessage === true || (typeof rememberlastMessage == 'string'
                && new RegExp(rememberlastMessage, 'i').test(name)
            )) {
                for (let i in result[name]) {
                    if (result[name][i] === pluginStorage.users[name]?.lastMessage) {
                        result[name] = result[name].slice(+i + 1);
                        if (!result[name].length) delete result[name];
                        break;
                    }
                }

                if (result[name]?.length) {
                    if (!pluginStorage.users[name])
                        pluginStorage.users[name] = {lastMessage: result[name][result[name].length-1]};
                    else pluginStorage.users[name].lastMessage = result[name][result[name].length-1];
                }
            } else if (typeof rememberlastMessage == 'string') delete result[name];
        }

        console.debug('Facebook Plugin getMessages():', result);

        return result;
    }

    /** Open new empty message to record new incomming messages */
    async setDefaultScreen(closeBrowserTab = false) {
        await this.options.tab.sendRequest(`async%20utils%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20(%2F**%20%40type%20%7B%20HTMLDivElement%20%7D%20*%2F(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20utils.waitForElement('a%5Brole%3D%22link%22%5D%20%3E%20i%5Bdata-visualcompletion%3D%22css-img%22%5D')%0A%20%20%20%20%20%20%20%20%20%20%20%20)).click()%3B%0A%20%20%20%20%20%20%20%20%7D`);
        closeBrowserTab && await this.options.tab.destructor();
    }
};
