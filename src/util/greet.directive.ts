/**
 * Created by apelbaur on 7/31/2016.
 */

export function greetDirectiveFactory() {
    console.log('greet directive factory');
    return {
        replace:true,
        template: `<span class="greet">Hello World!</span>`
    };
}

