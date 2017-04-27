import AgreeButton from './src/button';

AgreeButton.install = function (Vue) {
    console.log("!!");
    Vue.component(AgreeButton.name, AgreeButton);
};

export default AgreeButton;