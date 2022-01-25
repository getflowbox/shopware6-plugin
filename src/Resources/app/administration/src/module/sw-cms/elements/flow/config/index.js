import { Component, Mixin } from 'src/core/shopware';
import template from './sw-cms-el-config-flow.html.twig';

Component.register('sw-cms-el-config-flow', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('flow');
        }
    }
});
