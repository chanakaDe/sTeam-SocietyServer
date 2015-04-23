/**
 * Created by chanaka on 7/17/14.
 */

var mainHost = "http://dev-back1.techgrind.asia/scripts/rest.pike?request=";

/**
 * Secondary host url to access the sTeam Server
 * @type {{home: string, techgrind: string, register: string, login: string}}
 */
var host = {
    home: mainHost + '/home',
    techgrind: mainHost + '/techgrind',
    register: mainHost + 'register ',
    login: mainHost + '/login '
};