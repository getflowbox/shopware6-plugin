import { Component, Mixin } from 'src/core/shopware';
import template from './sw-cms-el-flow.html.twig';
import './sw-cms-el-flow.scss';

Component.register('sw-cms-el-flow', {
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
