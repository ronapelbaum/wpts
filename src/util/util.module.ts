/**
 * Created by apelbaur on 7/31/2016.
 */

import {greetDirectiveFactory} from "./greet.directive";

angular.module('util', [])
    .directive('greet', greetDirectiveFactory);