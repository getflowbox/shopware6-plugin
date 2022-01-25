import './config';
import './component';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'flow',
    label: 'Flow',
    component: 'sw-cms-el-flow',
    configComponent: 'sw-cms-el-config-flow',
    previewComponent: 'sw-cms-el-preview-flow',
    defaultConfig: {
        flowKey: {
            source: 'static',
            value: '',
            required: true
        },
        flowLocale: {
            source: 'static',
            value: '',
            required: true
        },
        flowTags: {
            source: 'static',
            value: ''
        },
        flowTagsOperator: {
            source: 'static',
            value: 'all'
        },
        flowTabmenuTags: {
            source: 'static',
            value: ''
        }
    }
});
