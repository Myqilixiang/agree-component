import Button from './button';

const components = [
    Button
];

const install = function (Vue, opts = {}) {
    /* istanbul ignore if */
    components.map(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

var version = '1.0.0';

export default{
    version,
    Button,
    install
};
