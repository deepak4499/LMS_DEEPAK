import Component from '@ember/component';

export default Component.extend({
    actions:{
        add(){
            this.toggleProperty("buy");
        },
        buythebook(){
            
        }
    }
});
