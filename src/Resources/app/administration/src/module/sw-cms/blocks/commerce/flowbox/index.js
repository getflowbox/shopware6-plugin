import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'flowbox',
    label: 'sw-cms.blocks.commerce.flowbox.label',
    category: 'commerce',
    component: 'sw-cms-block-flowbox',
    previewComponent: 'sw-cms-preview-flowbox',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '0px',
        marginRight: '0px',
        sizingMode: 'boxed'
    },
    slots: {
        content: 'flow'
    }
});
