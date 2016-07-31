/**
 * Created by apelbaur on 7/31/2016.
 */

export function greetDirectiveFactory() {
    console.log('greet directive factory');
    return {
        replace:true,
        template: `<h1>Hello World!</h1>`
    };
}

